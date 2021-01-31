---

title: "Protect your WordPress REST API with OAuth2 using Auth0"
excerpt: In this post, we're going to add the ability to use Auth0-generated access tokens for WP REST API endpoints that require an account and certain capabilities.
permalink: protect-wordpress-rest-api-with-oauth2-auth0/index.html
layout: post
tags: [ "WordPress", "Auth0", "OAuth2", "Best Of" ]
date: 2020-12-31 13:00:00
featured_img: /_images/2020/12/wp-rest-api-authentication-thumb.png
twitter_url: https://twitter.com/joshcanhelp/status/1349032635880771587

---

I was the maintainer of the [Auth0 WordPress plugin](https://github.com/auth0/wp-auth0) for several years and, in that time, the idea of using Auth0 to protect the [WP REST API](https://developer.wordpress.org/rest-api/) came up several times. I finally got around to putting together a complete guide and, I'll be honest here, there is a lot more involved than I expected! Hopefully this is helpful to few folks out there looking to build a similar system.

If you're not familiar with the REST API of WordPress, it's a collection of endpoints built into WordPress that can be used to do just about everything you can do with WordPress - read posts, make posts, manage users, etc. If you go to `/wp-json/` on any standard WordPress site, you should get a big block of JSON back with meta information and showing all the endpoints available. 

One of those endpoints, `/wp-json/wp/v2/posts`, will show the latest published posts on the blog as JSON ([ref](https://developer.wordpress.org/rest-api/reference/posts/)).

```js
[
   {
      "id":1,
      "date":"2017-11-16T14:47:09",
      "slug":"hello-world",
      "status":"publish",
      "type":"post",
      "link":"https:\/\/example.org\/hello-world\/",
      "title":{
         "rendered":"Hello world!"
      }
      // ... truncated
   }
]
```

This endpoint can be read without any authentication just like a typical list of blog posts does not require authentication. If you want to take an action that requires an account and maybe certain privileges - deleting a post, editing a user, etc. - then you would need to authenticate (details below). 

In this post, we're going to leave the default authentication method functional and add the ability to also use Auth0-generated access tokens for endpoints that require an account and certain capabilities.

## WP REST API Authentication

The built-in authentication method for this API uses cookies. When you log into WordPress, a cookie called `wordpress_logged_in_RANDOM` is set. If you call the REST API from the front-end of the site, that cookie is included in the call and now you're able to take the same actions you would be able to using `wp-admin`.

[![WP REST API authentication diagram](/_images/2020/12/wp-rest-api-authentication.png)](https://www.websequencediagrams.com/?lz=dGl0bGUgV1AgUkVTVCBBUEkgQXV0aGVudGljYXRpb24KCkFsaWNlLT5XUCBMb2dpbjogVmlzaXRzIGxvZ2luIGZvcm0KABQILT4AKAU6IERpc3BsYXkAGA0ANxFFbnRlciB1c2VybmFtZSArIHBhc3N3b3JkCm5vdGUgb3ZlciAAbggKICAgAHoGIHN1Y2Nlc3NmdWwKZW5kIG5vdGUAdwoAeQlzZXRjb29raWU6IHdvcmRwcmVzc19sb2dnZWRfaW4AgSASMzAxIHRvIGhvbWUgcGFnZQCBbAtIb21lOiBMb2FkcwAVCwASBwCBaglKUyBmaWxlIHdpdGgAgkMKY2FsbACCOggAghUHVGFrZSBvbi1wYWdlIGFjAIJgBQCCWgoAgn8IAEwFY2FsbHMgL3dwLWpzb24vd3AvdjIvZW5kcG9pbnQAgxIHACcPAIFZHACCSg0Ag2gIAIJVBUMAgiYFIHZlcmlmaWVkAIJMDQCEEQgAgRAPRXhlY3V0AIE5CQAcDQCDfwcyMDAAgyYICg&s=default)

You can see this in action on any standard WordPress site by doing the following:

1. Try a create post call against the posts endpoint directly:

```bash
❯ curl --request POST \
--url 'https://auth0sdk.wpengine.com/wp-json/wp/v2/posts'

{"code":"rest_cannot_create",
"message":"Sorry, you are not allowed to create posts as this user.",
"data":{"status":401}}
```

2. Now, log into the admin as someone who can create posts
3. View your cookies in the developer panel and copy the cookie starting with `wordpress_logged_in_`
4. Generate a nonce using `wp_rest` as the action. I used the [WP Console plugin](https://wordpress.org/plugins/wp-console/) to run `echo wp_create_nonce("wp-rest");` and put that value in the call below. 
4. Add the cookie value and the nonce to the call below:

```bash
❯ curl --request POST \
--cookie 'wordpress_logged_in_XXX=[[COOKIE_VALUE]]' \
--header 'X-WP-Nonce: [[NONCE_VALUE]]' \
--url 'https://auth0sdk.wpengine.com/wp-json/wp/v2/posts'

{"code":"empty_content",
"message":"Content, title, and excerpt are empty.",
"data":{"status":400}}
```

This works fine if the calls are being made from the same site. The cookie and the API have the same domain so your browser sends the cookie just like it would for a regular HTML page request. But if you want to call the API from a mobile app or a different application, cookies are not going to work because they cannot be sent across domains. 

**OAuth2 to the rescue!**

![WordPress, OAuth2, and Auth0](/_images/2020/12/wp-rest-api-authentication-thumb.png)

## API Authorization with Auth0

We want to use Auth0 to protect our WP REST API in a way that will allow other applications to take actions that require privileges, like creating a post in our curl examples above. So a user will log into and application that is *not* the WordPress instance and be able to take actions on that WordPress site.

From the [Auth0 docs](https://auth0.com/docs/authorization):

> &ldquo;Authorization refers to the process of verifying what a user has access to. In authorization, a user or application is granted access to an API after the API determines the extent of the permissions that it should assign. Usually, authorization occurs after identity is successfully validated through authentication so that the API has some idea of what sort of access it should grant.&rdquo;

**So what does this mean for WordPress?** 

A user in WordPress is given a [role](https://wordpress.org/support/article/roles-and-capabilities/) which allows them to do certain things. If I'm an editor, for example, I can create my own posts and publish other people's posts but I can't remove a plugin. If I'm an administrator, then I can do all 3. 

Authorization is describing this same scenario but from a different perspective. If I'm logged into WordPress as a WordPress user taking actions on a WordPress application, then it all works like the above. But if I'm logged into, say, a mobile app as a user that has access to a WordPress site taking actions on that site, then things get a little more complicated. In that case, the mobile app has to request access to the WordPress site on behalf of that WordPress user. If that access is granted, then the mobile app can take the same actions on the WordPress site as the WordPress user can.

![Head explodey](/_images/2020/12/head-explode-emoji.png)

If your head is exploding a bit, **that's OK**. This stuff has a steep learning curve and lots of jargon (ask me how I know). That whole previous paragraph is a summary of the problem that OAuth2 was created to solve: applications calling APIs on behalf of users.

In order to get this whole OAuth2 thing working, we'll do the following:

1. Register the WordPress API in Auth0 and model what we want to allow users via this API (once)
2. Add a token validation method option to the authorization used in the WordPress site providing the API (once)
3. Configure the external application to reference the WP API during login with Auth0 to generate an access token (each login)
4. Call the WP API with that access token (each WP action taken)

Once this is complete, the authorization will look something like this (simplified):

[![WP REST API authorization with OAuth2 diagram](/_images/2020/12/wp-rest-api-authorization-with-oauth2.png)](https://www.websequencediagrams.com/?lz=dGl0bGUgV1AgUkVTVCBBUEkgYWNjZXNzIHVzaW5nIE9BdXRoMgoKQWxpY2UtPk1vYmlsZSBhcHA6IENsaWNrcyB0byBsb2dpbgoAEgotPkF1dGgwOiBSZWRpcmVjdAAcCSByZWZlcmVuY2luZyBXUCBBUEkKbm90ZSBvdmVyIAAvB1N1AH0FZnVsAFMHAEkFAG8OQQCBHwZ0b2tlbiB0byBjYWxsAD8SAIEjDFN0b3JlAIFVCAAzBQCBQBVyZWF0ZXMgcG9zdACBRQ0AgScGABkIABsFIGZvciAAghQFLCBpbmNsdWQAUQ8AgVAKADYIVmFsaWRhdAB5DwCCAwYtAIJRDgCBfwcKCg&s=default)

{% info %}
If you're more interested in how this whole OAuth2 thing works, I would highly recommend <a href="https://auth0.com/docs/videos/learn-identity-series/calling-an-api">one of our Learning Identity videos</a>.
{% endinfo %}

Let's take the first step in getting this working: adding the WP API to Auth0.

## Register the WP API with Auth0

I'm going to reference the Auth0 documentation here so I don't duplicate helpful words written by trained professionals. [Start here](https://auth0.com/docs/get-started/set-up-apis) and create an API using the following information:

- **Name**: Choose something descriptive
- **Identifer**: Use your WP API base URL like `https://auth0sdk.wpengine.com/wp-json/`
- **Signing Algorithm**: Set this to "HS256"

Once you create the API, click on the **Settings** tab, scroll down, and turn on **Allow Offline Access** so we can refresh our access tokens. 

Now click on the **Permissions** tab to add the WordPress actions we want to allow external applications to take. We don't need to add every single WordPress capability here, just the ones that will be requested by other applications. You can map these 1:1 with [existing WordPress capabilities](https://wordpress.org/support/article/roles-and-capabilities/#capability-vs-role-table) if you're using core WP REST endpoints or create additional ones if you're exposing your own API functionality. 

In this example, we're going to allow creating posts under the current user's account and editing them, so we'll add:

- `publish_posts` with a description of "Publish posts for the current user"
- `edit_posts` with a description of "Edit posts for the current user"

![WP REST API setup in Auth0](/_images/2020/12/wp-rest-api-auth0-setup.png)

Later, when we log into our external application, we'll ask for one or both of these permissions as scopes to take action on behalf of a user (second step in the WP OAuth2 sequence above).

{% info %}
If you want to learn more about how scopes and permissions interact, check out <a href="https://auth0.com/blog/on-the-nature-of-oauth2-scopes/">Vittorio Bertocci's post on OAuth2 scopes on the Auth0 blog</a>. Don't be afraid to read it more than once, there is a lot to unpack, especially if you're learning this stuff for the first time!
{% endinfo %}

The rest of the API settings can be left as their defaults for now.

## Access token authorization in WP

Now we need to enable the API to receive these access tokens, validate them, and make decisions for protected routes. 

To do all of this, we're going to use the core WordPress filter `determine_current_user` to look for a token in the request headers of a WP REST API call and decide whether or not the call should be allowed based on the call being made and in the information contained in the signed access token.

The access token generated by Auth0 and sent by the external app will contain two values that will help us figure out whether this call should be accepted or not:

- The Auth0 user ID in the `sub` claim
- The permissions consented to in the `scope` claim

You can see these values in the token you generated above by dropping it into [jwt.io](https://jwt.io/) and looking at the **Payload** section on the right.

Now our job during authorization becomes a bit more clear:

1. Use the `sub` claim value to find an associated WordPress user
1. Make sure the permissions required for the API call appear in the `scope` claim
1. Make sure the user is capable of the permissions necessary in the API call

The first task is fairly straighforward and the last one is handled by core WordPress authentication. It's the second one that needs some attention. 

The WP REST API expects a specific user record to be present in order to make permission decisions. But it also needs a user in focus for calls like post creation in order to set a post author. By default, you can only *authenticate* against this API (prove who you are), not *authorize* (prove what you're allowed to do). 

In other words, the API expects a WordPress user in order to determine whether it will, say, allow a "create a post" call but, in this case, we only want a user that can do the actions that are in the `scope` claim in our access token. The WordPress user in question is delegating specfic actions they can take to the external application making the API call. Without checking the scopes, the external application could manage plugins, delete posts, and take actions that the WordPress user did not authorize. 

So, we do need a WordPress user in scope as we need to associate the post to someone, but we need to adjust the capabilities down to what the access token indicates. We'll do that by hooking into `determine_current_user` when we have an access token on a WP REST API route.

To avoid a big block of unmaintained code here, I put the required logic for all of this in a [repo on GitHub](https://github.com/joshcanhelp/wp-rest-api-auth0/). The README walks through installation using Composer as well as manually. You can spin it all up on Docker using [this Gist](https://gist.github.com/joshcanhelp/0e35b657ca03142e3d79595c28bb3ed7).

Our last step will be integrating Auth0 with WordPress and dealing with users that have not been created there yet.

## Manage WP users with Auth0

In order for this system to work, we'll need the users in WordPress tied to users in Auth0. Thankfully we have a solution for that, the [Login by Auth0 plugin](https://wordpress.org/plugins/auth0/). Follow the [installation instructions](https://auth0.com/docs/cms/wordpress-plugin/install-login-by-auth0) (scroll down to the **Manual setup** section to connect the site to an existing database connection like the one we used above) and test the login process to make sure authentication is working. 

Once this is working, logins are handled with Auth0 and, on the first successful login/registration, the Auth0 user ID will be stored in the users metadata.

One thing we need to deal with, however, is what happens when a user logs into the external app and they don't have an account in the WordPress instance that serves the API. Without a WordPress account tied to the same Auth0 user, an access token will be valid but the WP API request will be rejected. 

So we want to let applications that are requesting access tokens know if the user needs to register on the WordPress site first before the API call can be made. We're going to use an Auth0 [Rule](https://auth0.com/docs/rules) combined with endpoints provided by the Auth0 WordPress plugin to send back a true/false flag in the user identity. 

{% warning %}
One important thing to note here ... WordPress uses emails as a unique identifier and Auth0, by default, does not. If you are only using a single connection to log users in and that connection always provides an email address, then this will work fine. If, however, you allow users to log in with multiple connections that could provide the same email address, then you'll need to link those identities with their email address. <a href="https://auth0.com/docs/users/user-account-linking">More information on this here</a>.
{% endwarning %}

First, we'll turn on the endpoints we need in WordPress.

1. Go to **Auth0 > Settings > Advanced** tab in the WordPress admin.
2. Turn on **User Migration Endpoints** and click **Save Changes**.
3. You should see a migration token now showing. Leave this tab open so we can use it in the Rule. 

Next, we'll create the Rule that will reach out and look for an account.

1. Go to [Rules in the Auth0 dashboard](https://manage.auth0.com/#/rules)
2. Click **Create Rule** on the top right
3. Click **Empty Rule**
4. Give the Rule a clear name like "Check for WordPress account by email"
5. Paste in the code below and click **Save Changes**. The code is written in a way that it's skipped without the proper configuration values (set below) so the check will not occur yet. Still, it's always a good idea to test new stuff in a staging environment.

<script src="https://gist.github.com/joshcanhelp/72910ae498c911051caf090cbf140f7f.js"></script>

I added logging (use the [Real-time Webtaks Logs extension](https://auth0.com/docs/extensions/real-time-webtask-logs) to see them during login) to help determine what's happening if there is a problem. Some or all of these can be removed once you confirm that the Rule is working.

Walking through the code above:

* If the user does not have an email, the Rule is skipped
* If the login is for the WordPress application, the Rule is skipped
* If the Rule does not have the correct configuration, it is skipped
* If the application is not requesting an access token for the WordPress API, the Rule is skipped
* If everything looks good, we call the "get user" endpoint of the WordPress site to see if we have a user with the current user's email
* If we got an error of some kind, including that the user does not exist, then we send a custom identity claim `https://custom-claim/has_wp_account` set to `false` so the receiving application knows that we might not be able to call the WP API as the current user
* If everything worked out according to plan and we get a user back, we set `https://custom-claim/has_wp_account` to `true` and then the requesting application knows it can call the WP API with the access token it received

The last bit here is to add the required configuration values. Click the [Back to Rules](https://manage.auth0.com/#/rules) link at the top of the screen and scroll down to the **Settings** section to add the following values:

* `WP_API_CLIENT_ID` - The Client ID for the WordPress application. This is the same value that's saved the Auth0 plugin settings.
* `WP_API_IDENTIFIER` - The API identifier we got when we created the WP REST API earlier.
* `WP_API_GET_USER_URL` - This is your WordPress site URL plus `/index.php?a0_action=migration-ws-get-user`. You should be able to visit this URL in a browser and see an "Unauthorized" error.
* `WP_API_TOKEN` - This is the token from the Auth0 plugin, generated earlier in this section.

## Build your Application

We now (finally) have everything we need to call the WP REST API from another application and publish posts there! If you walk through the second sequence diagram above, you can see all the different pieces coming together. 

If you already have an application and a WordPress site running, you have everything you need at this point. The summary of what we need to do in the application calling the WordPress API is:

1. Build a login URL including the API identifier as an `audience` parameter and the permissions we are requesting in a `scope` parameter
1. Redirect to Auth0 to perform the login and API consent (more on that later)
1. Receive an authorization code back and exchange that for an access token
1. Use that access token to call the WP REST API

You can find help with these tasks on the following documentation pages:

* [How to get an access token](https://auth0.com/docs/tokens/access-tokens/get-access-tokens) - general information on requesting access tokens and links to more information.
* [Auth0 Quickstarts](https://auth0.com/docs/quickstarts/) - many of these include a section on how to request access tokens during login. If not, check out the documentation for the SDK being used.

If you want to see this running as a discreet system, however, I have a simple Node app that can play the part of the external app calling the WordPress API.

{% info %}
One thing to note about this system: the Auth0 Rule needs the migration endpoint on the WordPress site to be accessible on the public internet. If you want to test this out locally, you'll need to either disable the Rule or make your local WordPress instance available using <a href="https://ngrok.com">ngrok</a> or something similar.
{% endinfo %}

Start by logging into the WordPress install using Auth0 to create a user account associated to an Auth0 user ID.

Next, clone [this repo](https://github.com/joshcanhelp/node-util-app) and follow the installation instructions to get it working. Add the following values to the `.env` you created:

* `CLIENT_SECRET` - The Client Secret for this Node app
* `API_AUDIENCE` - API identitifer for the WP API, created above
* `API_SCOPES` - API permissions to request; for this example, set this to `publish_posts edit_posts offline_access`
* `WP_BASE_URL` - Base URL to the WP install serving the API

If you have everything set up properly, you should be able to go to the `/post-to-wp` route on the Node application and see a simple form. 

![Create post form for the WP API](/_images/2020/12/wp-rest-api-authentication-create-post-form.png)

Fill out the fields and click **Post**. If everything goes as expected, you should see a confirmation page with a link to the created post on the WordPress site. Click that and you should see your post. 

![Created post via the WP API](/_images/2020/12/wp-rest-api-authentication-created-post.png)

If anything goes wrong, check the console output for the Node app and you should have a clue. If you're getting a 404 error, you might not have pretty permalinks turned on. If you're getting a 401, you might not have the MU plugin package installed properly.

---

If you made it to the end of this post, you deserve a cookie or something! Thanks for sticking with it and, if you have any questions, feel free to drop them in one of the repos below or give me a shout on [Twitter](https://twitter.com/joshcanhelp)!

{% h2br %}References{% endh2br %}

- [WP REST API repo](https://github.com/joshcanhelp/wp-rest-api-auth0/)
- [WP REST API Composer package](https://packagist.org/packages/joshcanhelp/wp-rest-api-auth0)
- [Auth0 WordPress plugin](https://github.com/auth0/wp-auth0)
- [Official WP REST API docs](https://developer.wordpress.org/rest-api/)
- [Run WordPress locally using Docker](https://gist.github.com/joshcanhelp/0e35b657ca03142e3d79595c28bb3ed7)
- [Auth0 documentation on authorization](https://auth0.com/docs/authorization)
- [Auth0 documentation on getting access tokens](https://auth0.com/docs/tokens/access-tokens/get-access-tokens)
