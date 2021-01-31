---

title: WordPress Unit Testing Techniques
permalink: wordpress-unit-testing-techniques/index.html
layout: post
tags: [ "WordPress", "Development", "Testing", "Best Of", "Auth0"]
date: 2020-08-30 10:05:00
featured_img: /_images/2020/08/stacking-rocks-thumb.jpg
excerpt: I've learned a lot about how to avoid common issues and making life writing tests in WordPress a little easier. This post is a collection of ways I've found to accurately and thoroughly test a plugin.
twitter_url: https://twitter.com/joshcanhelp/status/1300132799702167552

---


I'll admit it: I like writing tests. Besides helping to create a more stable product, it gives me an important perspective on the code I write. It forces me to think twice about class and method names, function signatures, and return shapes.

<img src="/_images/2020/08/stacking-rocks.jpg" class="aligncenter" alt="Stacking rocks">

That said, testing in WordPress can be challenging. You have a big framework you need to load in order for the test suite to work. With that big framework around, it's easy to fall into the trap of testing parts of the core WP API. Also, you're tied to a database so you have to be diligent about resetting things in between test, or else the state left by your last test could affect the next one.

I brought the [Auth0 WordPress plugin](https://github.com/auth0/wp-auth0) from 0% tested to almost 80% and, in that time, learned a lot about how to avoid common issues and making life writing tests a little easier. This post is a collection of ways I've found to accurately and thoroughly test a plugin.

All the code below is [published here](https://github.com/joshcanhelp/wp-test-plugin) so you can examine and run it locally. The code comment at the top of each code block points to where in this project you can find the code. I also encoded the techniques here in a [set of helper Traits](https://github.com/joshcanhelp/wp-unit-test-helpers) you can include in your project with [Composer](https://packagist.org/packages/joshcanhelp/wp-unit-test-helpers).

## Table of contents

- [HTTP request inspection](#http-request-inspection)
- [HTTP response handling](#http-response-handling)
- [Redirect inspection](#redirect-inspection)
- [Killed processes with wp_die()](#killed-processes-wp-die)
- [AJAX Requests](#ajax-requests)
- [Hooked Functions](#hooked-functions)
- [Enqueued Styles and Scripts](#enqueued-styles-scripts)
- [References](#references)

## Who this series is for

This post series is for developers who are generally familiar with unit testing and may already have a testing suite installed in their plugin or theme. If not, your best bet is to start with the [WP-CLI unit test installer](https://make.wordpress.org/cli/handbook/plugin-unit-tests/#running-tests-locally). You should be at the point where you can run `phpunit` in the plugin folder and get a positive response back.

<a id="http-request-inspection"></a>
## HTTP request inspection

Checking an HTTP request to an external service typically consists of two parts:

1. How the HTTP request to the service is formed
2. How the HTTP response from the service is handled

The service itself should not be tested as a part of unit testing your code. You might want to add integration/functional tests at some point but unit tests should be fast, stable, and reduce external dependencies.

Let's start with a function that calls out to an external API to pull down additional user data when they login.

```php
// wp-test-plugin.php
function prefixed_get_user_profile_data_on_login( $user_login, $user ) {
	$email_param = rawurlencode( $user->data->user_email );
	$api_token   = get_option( 'user_profile_api_access_token' );
	$response    = wp_remote_get(
		'https://api.joshcanhelp.com/user?email=' . $email_param,
		[ 'headers' => [ 'Authorization' => 'Bearer ' . $api_token ] ]
	);

	$response_code = (int) wp_remote_retrieve_response_code( $response );

	if ( ! is_wp_error( $response ) && 200 === $response_code && $response['body'] ) {
		$profile_data = json_decode( $response['body'], true );
		// Sanitize what we got back ...
		update_user_meta( $user->ID, 'custom_profile_data', $profile_data );

		return true;
	}

	// Log the error somehow ...
	return false;
}

add_action( 'do_login', 'prefixed_get_user_profile_data_on_login' );
```

We're simplifying things a little here to concentrate on the testing portion. One thing to note is that we're returning a boolean here to indicate if the profile data was retrieved successfully. When `do_action()` runs this function, the return value is not used but this helps with unit testing.

Looking back at our testing checklist above, we first want to check the HTTP request, including:

- The base URL that were using
- Where the email parameter comes from
- How the email parameter is prepared
- The existence of a bearer token in headers
- Where the token comes from

We want to do all this *before* WordPress makes any HTTP requests so, when testing, we need to stop the request before it goes out. We can do that by using the `pre_http_request` filter and halting the process by throwing an exception, which our test will catch and inspect.

First, we'll write the function that we'll use to throw the exception with the data we want to see:

```php
// tests/bootstrap.php
function pre_http_request_halt_request( $preempt, $args, $url ) {
	throw new \Exception(
		json_encode(
			[
				'url'     => $url,
				'method'  => $args['method'],
				'headers' => $args['headers'],
				'body'    => json_decode( $args['body'], true ),
				'preempt' => $preempt,
			]
		)
	);
}
```

We're taking all of the data we want to inspect and packing that into JSON to return to the testing process via an exception. This data will come via our plugin's call to `wp_remote_get()` and will be triggered when we add this function to the `pre_http_request` filter and call `prefixed_get_user_profile_data_on_login()`.

Our test will look something like this:

```php
// tests/testHttpHalt.php
class TestHttpHalt extends \PHPUnit\Framework\TestCase {

	public function testThatItRequestsTheCorrectUrl() {
		add_filter( 'pre_http_request', 'pre_http_request_halt_request', 1, 3 );
		update_option( 'user_profile_api_access_token', '__test_api_token__' );

		$test_user = (object) [ 'data' => (object) [ 'user_email' => '__test_email__' ] ];
		try {
			prefixed_get_user_profile_data_on_login( uniqid(), $test_user );
			$e_data = [];
		} catch ( Exception $e ) {
			$e_data = json_decode( $e->getMessage(), true );
		}

		$this->assertNotEmpty( $e_data );
		$this->assertEquals( 'https://api.joshcanhelp.com/user?email=__test_email__', $e_data['url'] );
		$this->assertEquals( 'GET', $e_data['method'] );
		$this->assertArrayHasKey( 'Authorization', $e_data['headers'] );
		$this->assertEquals( 'Bearer __test_api_token__', $e_data['headers']['Authorization'] );
	}

	public function tearDown() {
		delete_option( 'user_profile_api_access_token' );
		remove_filter( 'pre_http_request', 'pre_http_request_halt_request', 1 );
	}
}
```

[See this using the helper library ›](https://github.com/joshcanhelp/wp-test-plugin/blob/master/tests/testHttpHaltWpTestCase.php)

{% info %}You'll find that throwing a generic core `Exception` here can be a little problematic if the code you're testing fails for a different reason and you get an error from the JSON decoding. The helper library I link to above throws <a href="https://github.com/joshcanhelp/wp-unit-test-helpers/tree/master/src/Exceptions">specific exceptions</a> so you can catch what you throw in your helpers and everything else will bubble up.{% endinfo %}

Walking through what we're doing here:

1. We add the `pre_http_request_halt_request` function from above to the `pre_http_request` filter in WP core to halt all HTTP requests that are made
2. We add a test token value to the options so we can check that this value is a part of the request
3. We call `prefixed_get_user_profile_data_on_login()` in a `try` block because we are expecting an exception with the data we want to inspect
4. We set `$e_data` to an empty array so we can check that an HTTP request was even made
5. In the `catch` block, we pull the JSON string out of the exception message and decode it for inspection
6. We check that the exception data is not empty (as in, a request was made)
7. We check that our hard-coded URL plus the test user data is the URL that was requested
8. We check that this was a `GET` request
9. We check that we have an `Authorization` header
10. We check that the header has the value that we expect
11. We remove the halting function and test token value that our test added in a `tearDown()` method that's run after each test

Now, we have a unit test that runs quickly, does not rely on an external service, and ensures that our profile data HTTP request does not change in the future.

<a id="http-response-handling"></a>
## HTTP response handling

Response handling uses the same filter as before but instead of stopping the request, it provides the exact response we want. This serves as a mock of what the service might return and allows use to check that the plugin is doing the right thing with returned data and handling errors when they occur.

For the same function `prefixed_get_user_profile_data_on_login()` above, we'll now be checking:

- What happens when a `WP_Error` occurs (network problem)
- What happens when another kind of request problem occurs (like a 404 not found)
- What happens when no user profile data is returned
- How a successful request is handled

All of these checks will be separate tests with different mocked responses returned from functions hooked to `pre_http_request`. If you look at the core WP code that follows that filter, anything returned from that filter that is not `false` is just returned directly out of `wp_remote_get()`. That will trigger the response handling we want to check in the plugin code.

So let's write the mock response for the last one on the list, a successful call:

```php
// tests/bootstrap.php
function pre_http_request_mock_success() {
	return [
		'response' => [ 'code' => 200 ],
		'body'     => '{"location": "Seattle, WA, USA"}',
	];
}
```

This function should go in the `tests/bootstrap.php` file created by WP-CLI.

Next, the test suite:

```php
// tests/testHttpMock.php
class TestHttpMock extends \PHPUnit\Framework\TestCase {

	public function setup() {
		delete_user_meta( 1, 'custom_profile_data' );
	}

	public function tearDown() {
		delete_user_meta( 1, 'custom_profile_data' );
	}

	public function testThatItSetsTheUserMetaOnSuccess() {
		add_filter( 'pre_http_request', 'pre_http_request_mock_success', 1 );

		$test_user = (object) [
			'ID'   => 1,
			'data' => (object) [ 'user_email' => '__test_email__' ],
		];
		$result    = prefixed_get_user_profile_data_on_login( uniqid(), $test_user );

		$this->assertTrue( $result );
		$this->assertEquals(
			[ 'location' => 'Seattle, WA, USA' ],
			get_user_meta( 1, 'custom_profile_data', true )
		);

		remove_filter( 'pre_http_request', 'pre_http_request_mock_success', 1 );
	}
}
```

The test suite above:

1. Uses `setUp()` and `tearDown()` to make sure the user data that we might affect is empty; this will run before the test above as well as the others below
2. Adds the successful call mocking function to the `pre_http_request` filter
3. We call the profile update function; if the HTTP request was not mocked, this test would fail
4. We check to make sure the function returned `true`
5. We check the user meta for the data we sent back in our mocking function

Now we know that mocking is working and the happy path of our function works as well!

Let's write the rest of our mocking functions:


```php
// tests/bootstrap.php

function pre_http_request_mock_wp_error() {
	return new WP_Error( '__test_wp_error_message__' );
}

function pre_http_request_mock_not_found() {
	return [
		'response' => [ 'code' => 404 ],
		'body'     => '__test_not_found_body__',
	];
}

function pre_http_request_mock_empty_response() {
	return [
		'response' => [ 'code' => 200 ],
		'body'     => '',
	];
}
```

... and the rest of the test suite, just for completeness:

```php
// tests/testHttpMock.php
class TestHttpMock extends \PHPUnit\Framework\TestCase {

	// Existing test methods, see above ...

	public function testThatItHandlesFailureConditions() {
		$test_user = (object) [
			'ID'   => 1,
			'data' => (object) [ 'user_email' => '__test_email__' ],
		];

		foreach ( [ 'wp_error', 'not_found', 'empty_response' ] as $condition ) {
			add_filter( 'pre_http_request', 'pre_http_request_mock_' . $condition, 1 );
			$result = prefixed_get_user_profile_data_on_login( uniqid(), $test_user );
			$this->assertFalse( $result );
			$this->assertEmpty( get_user_meta( 1, 'custom_profile_data', true ) );
			remove_filter( 'pre_http_request', 'pre_http_request_mock_' . $condition, 1 );
		}
	}
}
```

[See this using the helper library ›](https://github.com/joshcanhelp/wp-test-plugin/blob/master/tests/testHttpMockWpTestCase.php)

You might notice that the failure cases are pretty much identical. With the tests above, it's impossible for the test to tell exactly what caused `false` to be returned. We know that the success case works, though, and that we're mocking the right thing. You might find in a real application of these techniques that you have some kind of logging service you can mock and see the actual failure condition.

With all of this in place, we're in good shape for this function:

```bash
❯ composer test
> "vendor/bin/phpunit"
Installing...

.....                                                               5 / 5 (100%)

Time: 1.06 seconds, Memory: 26.00 MB

OK (3 tests, 13 assertions)
```

Just to recap HTTP requests, using the `pre_http_request` filter, we halt requests to examine the URL, headers, method, and body. We mock requests using the same filter to test the various possible responses.

<a id="redirect-inspection"></a>
## Redirect inspection

Catching and checking redirects in WordPress works like the HTTP halting mentioned above. We'll throw an exception containing the data we need, catch that in the test, and take a look.

The function we'll test here is a redirection based on the existence of a valid URL parameter:

```php
// wp-test-plugin.php
function prefixed_redirect_to_campaign_landing_page() {
	$campaign_id = get_query_var( 'cid' );

	if ( empty( $campaign_id ) ) {
		return false;
	}

	$active_campaigns = get_option( 'active_campaign_ids' );

	if ( ! is_array( $active_campaigns ) || ! in_array( $campaign_id, $active_campaigns, true ) ) {
		return false;
	}

	wp_safe_redirect( home_url( $campaign_id ) );
	exit;
}

add_action( 'template_redirect', 'prefixed_redirect_to_campaign_landing_page' );
```

Our testing jobs to be done here are:

- What happens with an empty `cid`?
- What happens with an invalid active campaign list?
- What happens with an invalid `cid`?
- Where are we redirected if the `cid` is valid?
- What HTTP status is used?

For the sake of brevity, we'll just write a test for the successful case. This means we need to to stop the redirect before it happens. Let's write the test first and see what happens if we don't halt it.

```php
// tests/testRedirectHalt.php
class TestRedirectHalt extends \PHPUnit\Framework\TestCase {

	public function testThatAnActiveCidWillRedirectCorrectly() {
		set_query_var( 'cid', '__test_valid_cid__' );
		update_option( 'active_campaign_ids', array( '__test_valid_cid__' ) );
		prefixed_redirect_to_campaign_landing_page();
	}
}
```

When we run this test as-is, it runs the function to completion, then tries to redirect and we get the following error:

```bash
❯ composer test tests/testRedirectHalt.php
> "vendor/bin/phpunit"
Installing...

E                                                                   1 / 1 (100%)

There was 1 error:

1) TestRedirectHalt::testThatAnActiveCidWillRedirectCorrectly
Cannot modify header information - headers already sent by (output started at /tmp/wordpress-tests-lib/includes/bootstrap.php:100)
```

So we need to halt redirecting with an exception, then try to catch that exception in the test. First, we'll add the function that we'll use to hook into `wp_redirect` to our test bootstrap file:

```php
// tests/bootstrap.php
function wp_redirect_halt_redirect( $location, $status ) {
	throw new \Exception(
		json_encode(
			[
				'location' => $location,
				'status'   => $status,
			]
		)
	);
}
```

If we just hook this function before the existing test, we'll see what's happening in the test output:

```bash
❯ composer test tests/testRedirectHalt.php
> "vendor/bin/phpunit"
Installing...

E                                                                   1 / 1 (100%)

There was 1 error:

1) TestRedirectHalt::testThatAnActiveCidWillRedirectCorrectly
Exception: {"location":"http:\/\/example.org\/__test_valid_cid__","status":302}
```

That's exactly what we want but, just like with the HTTP halting, we're going to catch that and examine the JSON-decoded message. Here is our final test suite using PHPUnit helper methods:

```php
// tests/testRedirectHalt.php
class TestRedirectHalt extends \PHPUnit\Framework\TestCase {

	public function setUp() {
		add_filter( 'wp_redirect', 'wp_redirect_halt_redirect', 1, 2 );
	}

	public function tearDown() {
		remove_filter( 'wp_redirect', 'wp_redirect_halt_redirect', 1 );
	}

	public function testThatAnActiveCidWillRedirectCorrectly() {
		set_query_var( 'cid', '__test_valid_cid__' );
		update_option( 'active_campaign_ids', [ '__test_valid_cid__' ] );

		try {
			prefixed_redirect_to_campaign_landing_page();
			$e_data = [];
		} catch ( Exception $e ) {
			$e_data = json_decode( $e->getMessage(), true );
		}

		$this->assertNotEmpty( $e_data );
		$this->assertEquals( 'http://example.org/__test_valid_cid__', $e_data['location'] );
		$this->assertEquals( 302, $e_data['status'] );
	}
}
```

[See this using the helper library ›](https://github.com/joshcanhelp/wp-test-plugin/blob/master/tests/testRedirectHaltWpTestCase.php)

<a id="killed-processes-wp-die"></a>
## Killed processes with wp_die()

This was a fun one to figure out. How can we test a hooked function that kills the current process using `wp_die()`? If the tested code calls `exit` or `die` then this will kill the test process as well. Like with our other challenges above, we have a hook we can use.

The process of using this hook looks a little odd at first. The function hooked to the handler filter needs to return a function name as a string or a class/method combo as an array. Then, when `wp_die()` is called somewhere, the function that was returned is called and the `die()` call can be short-circuited.

For our function to test, let's say we implemented a sort of "security by obscurity" check on the `wp-login.php` that looks for code in the URL parameters and checks that against an admin-set value. If the URL does not have a code or the code is invalid, then the process stops.

```php
// wp-test-plugin.php
function prefixed_login_init_code_check() {
	$login_code = get_option( 'login_code' );
	if ( isset( $_GET['lc'] ) && $login_code === $_GET['lc'] ) {
		return true;
	}
	wp_die( __( 'Not authorized', 'prefixed' ), __( 'Not authorized', 'prefixed' ), 403 );
}

add_action( 'login_init', 'prefixed_login_init_code_check', 1, 0 );
```

For the above, we want to check:

- That no URL parameter will kill the process with the right message
- That an incorrect value will kill the process with the right message
- That a correct value will not kill the process

Let's write an intentionally-failing test and see what happens without the handler in place.

```php
// tests/testWpDieHandling.php
class TestWpDieHandling extends \PHPUnit\Framework\TestCase {
	public function {
		$this->assertEmpty( prefixed_login_init_code_check() );
	}
}
```

Running the test, we get:

```bash
❯ composer test tests/testWpDieHandling.php
> "vendor/bin/phpunit" 'tests/testWpDieHandling.php'
Installing...

.                                                                   1 / 1 (100%)
wp_die called
Message : Not authorized
Title : Not authorized
Args:
	 response : 403

OK (1 test, 1 assertion)
```

The test ran properly and we know we got to where we expected in the code (a non-successful return of some kind) but we have a bunch of automatically-output text in our results and we can't actually test that `wp_die()` called called, just that nothing was returned.

So, let's catch that the `wp_die()` call that happened and make sure the response is truly what we intended. First, let's add our helpers to the test bootstrap file:

```php
// tests/bootstrap.php

function wp_die_handler_filter() {
	return 'wp_die_halt_handler';
}

function wp_die_halt_handler( $message, $title, $args ) {
	throw new \Exception(
		wp_json_encode(
			[
				'message' => $message,
				'title'   => $title,
				'args'    => $args,
			]
		)
	);
}
```

That first function tells `wp_die()` to call the *second* function instead of the core one. Now, before each test, we'll add this filter and then test that an exception was thrown with the correct data.

Here is the complete test suite using the helpers:

```php
// tests/testWpDieHandling.php
class TestWpDieHandling extends \PHPUnit\Framework\TestCase {

	public function tearDown() {
		remove_filter( 'wp_die_handler', 'wp_die_handler_filter' );
		delete_option( 'login_code' );
		unset( $_GET['lc'] );
	}

	public function testThatNoCodeWillKillProcess() {
		add_filter( 'wp_die_handler', 'wp_die_handler_filter' );
		try {
			prefixed_login_init_code_check();
			$caught_json = '';
		} catch ( \Exception $e ) {
			$caught_json = json_decode( $e->getMessage(), true );
		}

		$this->assertNotEmpty( $caught_json, 'No exception caught' );
		$this->assertEquals( 'Not authorized', $caught_json['message'] );
		$this->assertEquals( 'Not authorized', $caught_json['title'] );
		$this->assertEquals( 403, $caught_json['args']['response'] );
	}

	public function testThatInvalidCodeWillKillProcess() {
		add_filter( 'wp_die_handler', 'wp_die_handler_filter' );
		update_option( 'login_code', 'valid_' . uniqid() );
		$_GET['lc'] = 'invalid_' . uniqid();

		try {
			prefixed_login_init_code_check();
			$caught_json = '';
		} catch ( \Exception $e ) {
			$caught_json = json_decode( $e->getMessage(), true );
		}

		$this->assertNotEmpty( $caught_json, 'No exception caught' );
		$this->assertEquals( 'Not authorized', $caught_json['message'] );
		$this->assertEquals( 'Not authorized', $caught_json['title'] );
		$this->assertEquals( 403, $caught_json['args']['response'] );
	}

	public function testThatValidCodeWillSucceed() {
		$valid_code = uniqid();
		update_option( 'login_code', $valid_code );
		$_GET['lc'] = $valid_code;

		$this->assertTrue( prefixed_login_init_code_check() );
	}
}
```

[See this using the helper library ›](https://github.com/joshcanhelp/wp-test-plugin/blob/master/tests/testWpDieHandlingWpTestCase.php)

<a id="ajax-requests"></a>
## AJAX Requests

AJAX in WordPress is accomplished by building what amounts to your own API endpoint and then calling it from JavaScript. Debugging AJAX in this environment is notoriously fiddly so it's nice to have tests in place to know that your endpoint is doing the right thing.

Our endpoint declared in WordPress needs to make sure that the request is well-formed, that it came from the right place, and that the user making the call has the correct permissions. Only then should it make any changes or return any data. I learned during the process of testing our AJAX functions that you should use the core `wp_send_json_error()` and `wp_send_json_success()` functions to output a response. This makes sure your response has a consistent shape and can use the hooks we'll use below.

So, as usual, let's write a sample AJAX endpoint. The one below will handle an admin action to delete a specific user meta value. You can imagine the control for this would live on the Edit profile screen.

```php
// wp-test-plugin.php
function prefixed_ajax_admin_delete_custom_profile_data() {
	check_ajax_referer( 'delete_custom_profile_data' );

	if ( ! current_user_can( 'edit_users' ) ) {
		wp_send_json_error( [ 'error' => __( 'Not authorized', 'prefixed' ) ] );
	}

	if ( empty( $_POST['user_id'] ) ) {
		wp_send_json_error( [ 'error' => __( 'No user ID', 'prefixed' ) ] );
	}

	delete_user_meta( $_POST['user_id'], 'custom_profile_data' );
	wp_send_json_success();
}

add_action( 'wp_ajax_delete_custom_profile_data', 'prefixed_ajax_admin_delete_custom_profile_data' );
```

For this function, we want to test that:

- The endpoint requires a nonce, enforced by `check_ajax_referer` (this might be a bit more involved in WP internals than some folks want to be but making sure that there is a nonce check is important enough to warrant it)
- The endpoint enforces the logged-in users capability/role
- The request is formatted properly
- The meta data is deleted successfully if everything checks out
- The responses are all what we expect

We've got two techniques to use here:

1. Halting the AJAX process using an exception to verify the nonce check
2. Starting a buffer, echoing the JSON response, and checking what we've got

We're going to halt for the nonce check because it uses `wp_die()` internally. We want to look for specific values passed in to tell us the failure was because of an invalid nonce and not something else.

We'll add the following to the test bootstrap file:

```php
// tests/bootstrap.php

function wp_ajax_halt_handler_filter() {
	return 'wp_ajax_halt_handler';
}

function wp_ajax_halt_handler( $message, $title, $args ) {
	$is_bad_nonce = -1 === $message && ! empty( $args['response'] ) && 403 === $args['response'];
	throw new Exception( $is_bad_nonce ? 'bad_nonce' : 'die_ajax' );
}
```

Then, just for tests that deal with the nonce, we'll turn on the AJAX flag and the AJAX halting handler:

```php
// tests/testAjaxHandling.php
class TestAjaxHandling extends \WpUnitTestHelpers\WpTestCase {

	public function setUp() {
		add_filter( 'wp_doing_ajax', '__return_true' );
	}

	public function tearDown() {
		remove_filter( 'wp_doing_ajax', '__return_true' );
		remove_filter( 'wp_die_ajax_handler', 'wp_ajax_halt_handler_filter' );
		unset( $_POST['user_id'] );
		unset( $_REQUEST['_ajax_nonce'] );
	}

	public function testThatInvalidNonceWillFail() {
		add_filter( 'wp_die_ajax_handler', 'wp_ajax_halt_handler_filter' );

		try {
			prefixed_ajax_admin_delete_custom_profile_data();
			$caught_exception = 'No exception caught';
		} catch ( \Exception $e ) {
			$caught_exception = $e->getMessage();
		}

		$this->assertEquals( 'bad_nonce', $caught_exception );
	}
}
```

For the rest of the testing, we need to inspect the JSON that we would be returning to our UI. With the way that this all comes together in WP core, we can't just return the message an look at it, we have to stop the process from dying and print the message.

Back in our test bootstrap file, we'll add a couple of one-liners:

```php
// tests/bootstrap.php

function wp_ajax_print_handler_filter() {
	return 'wp_ajax_print_handler';
}

function wp_ajax_print_handler( $message ) {
	echo $message;
}
```

We'll need to use the output buffer to catch the text from `wp_ajax_print_handler()`. I'll show the success case implemented below as putting them all here would be pretty lengthy.

```php
// tests/testAjaxHandling.php
class TestAjaxHandling extends \WpUnitTestHelpers\WpTestCase {

	// ...

	public function tearDown() {
		// ...
		remove_filter( 'wp_die_ajax_handler', 'wp_ajax_print_handler_filter' );
	}

	// ...

	public function testThatAjaxRequestSuccessfullyDeletesMeta() {
		add_filter( 'wp_die_ajax_handler', 'wp_ajax_print_handler_filter' );
		update_user_meta( 1, 'custom_profile_data', uniqid() );
		wp_set_current_user( 1 );
		$_POST['user_id']        = 1;
		$_REQUEST['_ajax_nonce'] = wp_create_nonce( 'delete_custom_profile_data' );

		ob_start();
		prefixed_ajax_admin_delete_custom_profile_data();
		$this->assertEquals( '{"success":true}', ob_get_clean() );
		$this->assertEmpty( get_user_meta( 1, 'custom_profile_data' ), true );
	}
}
```

[See this using the helper library ›](https://github.com/joshcanhelp/wp-test-plugin/blob/master/tests/testAjaxHandlingWpTestCase.php)

**A note on how this is implemented:** If you set the nonce incorrectly (wrong action, wrong `$_REQUEST` key, etc), `ob_get_clean()` will return `'-1{"success":true}'` because the handler just echos the message and does not kill the process. You could look for a `-1` message and throw an exception or you could combine the two AJAX helpers into one.

<a id="hooked-functions"></a>
## Hooked Functions

Functions that are hooked to specific actions and filters in your plugin need to keep the same signature, name, and priority or else you might introduce breaks to plugin functionality or anyone extending your plugin. The tests here are more about ensuring stability more than functionality.

While I would recommend having these in place, it does rely on a lot on a specific structure of the WordPress globals. If something changes in there somewhere, all your tests of this nature might fail suddenly. Because of that (and the fact that this post is quite long already), I'll point to a few code samples you can use instead of spelling it all out here.

To see how the global `$wp_filter` is pulled apart to look for specific hooks, [see this method](https://github.com/joshcanhelp/wp-unit-test-helpers/blob/master/src/Helpers/HookHelpersTrait.php#L24). If you're using that library in your tests, [see this test file](https://github.com/joshcanhelp/wp-test-plugin/blob/master/tests/testHookedFunctionsWpTestCase.php) for how the methods are called. Otherwise, you can recreate that method in your bootstrap file and call within your tests.

<a id="enqueued-styles-scripts"></a>
## Enqueued Styles and Scripts

Style and script enqueing is another place where testing can and probably should happen but it requires working with WP internal data structures. Like testing hooks, this is mainly for stability. If you're enqueuing a script or a stylesheet then you're probably also at least checking the page to see the styles/scripts applied.

I think the trade-off is worth it here as well for a few reasons:

- If you have a number of styles and scripts and want them to load in the fewest places possible, you want that logic under test
- A lot of logic can also gather in `wp_localize_script()` calls and testing manually for specific text and values is tedious and error-prone

To see how to test whether scripts/styles are loaded and what localization was added, [see this method](https://github.com/joshcanhelp/wp-unit-test-helpers/blob/master/src/Helpers/WpScriptsHelperTrait.php#L17). If you're using that library in your tests, [see this test file](https://github.com/joshcanhelp/wp-test-plugin/blob/master/tests/testEnqueuedStyleWpTestCase.php) for how the methods are called. Otherwise, you can recreate that method in your bootstrap file and call within your tests.

## I hope that helped!

This post ended up at 23 pages printed, generated 2 GitHub repos, and took about 6 months to write! Hopefully you found it helpful or, at the very least, enlightening on your path to writing tests for WordPress.

{% h2br %}References{% endh2br %}

- [WP Unit Test Helpers on GitHub](https://github.com/joshcanhelp/wp-unit-test-helpers) and [on Composer](https://packagist.org/packages/joshcanhelp/wp-unit-test-helpers)
- [Test plugin with all the code above](https://github.com/joshcanhelp/wp-test-plugin)
- [Setting up unit tests in your plugin with WP-CLI](https://make.wordpress.org/cli/handbook/plugin-unit-tests/#running-tests-locally)

{% h2br %}Notes{% endh2br %}

I debated on whether or not I wanted to write this post. My time with WordPress, personally and professionally, is coming to an end. Does it make sense to publish a new post on WordPress coding techniques if I'm not working in that framework anymore?

In the end, as you can see, I decided to publish it as a bit of a final "hurrah" with WordPress. The techniques described here helped us at Auth0 to produce a much more stable WordPress product and I think the ecosystem in general could use that. I also think it's a great bridge for both WordPress developers that want to expand beyond the framework to branch out, as well as more experienced developers to apply their understanding of unit testing to WordPress sites and applications they might find themselves building.

I've also, shockingly, never published my own Composer package before this! As mentioned above and linked below, I created a Composer package and a sample plugin with tests that run using both the code in this blog post as well as code from the Composer package. I wanted the learning here to go beyond just a long blog post and I think effective use of running applications can help in that respect.

I feel like I have a lot more to say about building things in and with WordPress but I'm going to let that all fade into past and concentrate more on the things I'm working with/on and learning now. Expect to see more on developer experience (DX), digital identity, engineering communication, and server-side JavaScript going forward.

And keep an eye out for footer updates like this one on older posts :)
