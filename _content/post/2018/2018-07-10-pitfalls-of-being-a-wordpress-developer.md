---
title: "Pitfalls of Being a WordPress Developer"
layout: post
excerpt: "Something happens to you as a developer when you start on and stick with a single platform for a long period of time. As you get better and better at that platform, you get further and further away from the rest of the ecosystem."
date: 2018-07-10 19:28:18
modified: 2019-06-11 18:24:41
permalink: pitfalls-of-being-a-wordpress-developer/index.html
tags: ["WordPress", "Personal Development", "Best Of", "Development", "Gist"]
featured_img: /_images/2018/07/IMG_1437-150x150.jpg
wpid: 4799
twitter_url: https://twitter.com/joshcanhelp/status/1016785776808427520

---


I’ve been developing on the web for almost a decade. Most of that time has been spent building on WordPress. Every platform has it’s fallbacks, WordPress not excepted, but I’ve found it to be a capable, reliable partner when building content and community sites of all sizes. Properly built, configured and maintained, it can handle massive amounts of traffic and stay secure in the process. I regret nothing with my choice of CMS.

But something happens to you as a developer when you start on and stick with a single platform for a long period of time. As you get better and better at that platform, you get further and further away from the rest of the ecosystem. In my case, getting better at WordPress has meant:

- conforming more to WordPress coding standards
- using the WordPress API better and more often
- ensuring my code can always run where WordPress can

… and so on. While I was busy becoming a better WordPress developer, I was also busy:

- ignoring or forgetting about non-WordPress standards like [PHP-FIG](https://www.php-fig.org/)
- architecting only around the WordPress themes/plugins/mu-plugins model
- missing out on the benefits of tools like Composer and new PHP versions

This is not a problem with WordPress and the community around it, this could be any platform at all – Drupal, Rails, jQuery, Django, or any abstraction on top of a basic language or technology. It’s also not something bad that WordPress is “doing to me,” it’s a function of committing to a technology and doing my best to work within a specific environment. The WordPress Way is the way it is for a reason: coding standards, interoperability between add-ons, and broad environment support makes for a stronger overall experience for users and developers alike.

Not everyone is going to fall into this trap but I definitely have and it’s been both discouraging and frustrating to find that my 10 year career in web development has left me with engineering skills of someone with maybe half that experience. To be fair to myself, a lot of the working time during those 10 years has been non-development – design, UX, SEO, technical writing, training – so this is also a Problem of the Generalist. But repeatedly failing engineering interviews and gathering long lists of comments on code reviews are tough pills to swallow.

I’m currently an open source engineer at Auth0 maintaining our [PHP repos](https://github.com/auth0?utf8=%E2%9C%93&q=&type=&language=php), including a relatively large [WordPress plugin](https://github.com/auth0/wp-auth0/). My technical writing experience makes me valuable as a documentation contributor (highly valued at Auth0) and my relatively broad experience helps fill gaps where needed (like PR reviews, troubleshooting, and support requests). I’ve learned more in the past 5 months than I have in the last 4 years combined with no end in sight and I wouldn’t want it any other way.

I wanted to collect some of the ways that I’ve lagged behind as a developer because of my WordPress focus with a goal of helping others who might be on my same path. If you love engineering, as I do, and want to continue on that path, these are a few things that might hold you back.

Composer
--------

Composer is a wonderful, beautiful thing. It’s reliable, usually does what you expect, and makes both package management and autoloading dead simple. I find it incredibly useful now, but only after using it regularly in the last half-year or so.

I talk more generally about package management below and why that’s not often “a thing” in WordPress development. I think the reasons there are the main reasons why Composer is not incorporated into most WordPress projects.

But package management is only a piece of what Composer can do. It can also:

- [Autoload classes via namespace](https://getcomposer.org/doc/01-basic-usage.md#autoloading). This might be overlooked if you stick to the WordPress minimum PHP version of 5.2.4 as [namepaces](https://secure.php.net/manual/en/language.namespaces.rationale.php) were added in 5.3. If you started using WordPress before 2009, like I did, then that might remain a foreign concept.
- [Build out project-specific scripts for testing and code sniffing](https://getcomposer.org/doc/articles/scripts.md). But, if you’re not testing and sniffing anyways, this feature is irrelevant.

Both of these, along with the main package-management capabilities, have become essential to my development flow recently. And the main impetus was, to be honest, a good showing for an interview project. I knew about all of these things and that, in a general sense, they were a part of “modern development” but just never found a reason to implement them.

Package Management
------------------

Composer is the package manager that you should be using but probably aren’t. But why not?

It might be because the idea of “packages” in the WordPress world is analogous with “plugins.” Adding additional functionality means searching the repo in a UI, installing, and activating. Extending that is using the (hopefully) existing hooks within that plugin to do what you want.

But there is a world of small libraries out there that help you be more productive and can, if you become familiar with the code, help you learn quite a bit about how to do things. Why write an environment parser or a logger or a router if there is a competent package out there that can do it for you?

But, then, why do you even need any of that in a WordPress plugin? WordPress has an environment using constants in `wp-config.php` (guh) and an options table to log to (double-guh) and a router (infinity guh). And an HTTP library. And the `$wpdb` class.

When you start pulling in external libraries to do things that WordPress already does, you add mostly-unnecessary weight and more to manage. But if you don’t, you’re stuck with what’s there which can be dated, hard-to-use, and lacking functionality. It’s a catch 22.

New PHP features
----------------

WordPress was built, and continues to be maintained, to support the largest possible audience of hosts. As such, it [supports PHP versions down to 5.2.4](https://wordpress.org/about/requirements/). There is a pretty fierce and long-running debate about whether this minimum version should be increased but, so far, the consensus from the core team has been “no.”

Whether or not this is the right move is irrelevant for the sake of this argument and, if you want to break from that minimum version, you’re perfectly welcome to [declare a higher version in your plugin](https://make.wordpress.org/plugins/2017/08/29/minimum-php-version-requirement/) (WordPress supports up to the latest PHP version, 7.2). But if you want to support the most sites and field the least support requests, you’re stuck with an unsupported and aging version of PHP.

In the meantime, PHP moves forward. If you keep with version 5.2.4, you’re missing out on:

- Namespaces in 5.3
- Late static binding in 5.3
- Shorthand arrays in 5.4
- Traits in 5.4
- Function array dereferencing in 5.4
- `finally` keyword for try-catch in 5.5
- Better password hashing in 5.5
- `empty()` supporting arbitrary expressions in 5.5
- Class name resolution via `::class` in 5.5
- Array and string literal dereferencing in 5.5
- Constant expressions in 5.6
- `use function` and `use const` in 5.6
- Massive performance improvements in 7.0
- Return type declarations in 7.0
- Constant arrays using `define()` in 7.0
- Group `use` declarations in 7.0

One problem with missing out on these features is developer happiness. The features above can make your code more clear, more performant, and take up less vertical line space overall. That alone should be a be motivator.

But the biggest problem is just falling out-of-pace with PHP in general. Newer PHP libraries will be confusing, modern PHP development teams will be inaccessible, and you’ll miss out on functionality that might help you learn another technology.

Also, PHP 7+ is really, really fast. Try it out locally, you’ll see an improvement (particularly running WordPress).

OO Practices
------------

I recall watching a presentation several years back from a well-respected developer in the WordPress community called “Object-Oriented Design in WordPress” (or thereabouts). I was just “getting into” OO (meaning: reading about it and trying to understand it) and was excited to get some real guidance on how it comes together in the WP architecture.

By the end, I knew how to write multiple singleton objects to essentially do what a `namespace` does. Guess what I did for the next several years?

Whether or not Singletons are [are a bad design pattern](https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons) or not is beyond the scope here but I will say that classes are a poor way of working with the WordPress hooks system. [Here’s how to unhook a class method from an action or filter](https://wordpress.stackexchange.com/a/36110), you write it differently to being with. How about in a plugin that didn’t do that? [Here’s the answer](https://github.com/herewithme/wp-filters-extras/blob/master/wp-filters-extras.php), not pretty.

All this to say … you will be hard-pressed to find great examples of OO implementation in WordPress core or in the ecosystem at large. This is a problem because, regardless of what you think about OO as a practice, it’s still a widely-used design pattern that you should be familiar with. PHP has a pretty competent [class and object system](http://php.net/manual/en/language.oop5.php) so there’s no specific obstacle beyond lack of understanding.

Command Line
------------

The command line is one of the most powerful things you can learn as a web developer. I’ve been learning more and more about using and scripting bash commands this year and it’s helped me do a lot more with a lot less. Besides Composer, `npm`, and Docker, I use it to [install WP test fixtures](https://gist.github.com/joshcanhelp/50f66002643ece68f01bf5f94e1abe56), [update WP SVN tags](https://gist.github.com/joshcanhelp/2120f1b7abf5e170fb7d1a001ed73dd8), keep backups of photos and music, maintain helpful aliases and environment variables, and more.

The problem with learning the command line, though, is that it takes a long time to get comfortable with it. It’s also a difficult one to approach if you’re not already familiar with the environment. Paths, variables, confusing file permissions, weird command names, scary potential screw-ups … they’re all there and feel like they’re hiding around the corner to screw up your day.

If you’re not using Composer or `npm` and you aren’t familiar with some of the great command line tools in other frameworks like Laravel and Rails, you might not have any exposure here at all. The gateway drug of the command like for WP developers is WP-CLI but I’ve met more developers that don’t use it than do (which is a shame, I couldn’t function without it).

Because the command line can do everything, it can be hard to know where to start when learning it. And if the environment around you isn’t pushing you in that direction then you’re unlikely to ever get enough of a foothold to keep exploring.

Missing MySQL knowledge
-----------------------

MySQL was on my “list of powerful and expansive technologies to just learn completely in my off time” for a long time. I knew enough to put together basic SELECT and UPDATE statements and could cobble together simple commands to solve basic problems but most of the time spent “writing statements” was just Googling, screwing up, and restoring back-ups.

The big change in MySQL experience happened throughout last year. I was charged with managing a fairly large database of content that had seen many different plugins, styles, and themes over the years. There was a lot of inconsistency in how things were created and even more in how they were displayed. I found myself writing semi-complicated queries (relative to my experience up until that point) regularly to find, replace, and adjust content for new template files.

One of the biggest code smells for a WordPress plugin is how much MySQL is used ([WordPress VIP all but explicitly rejects it](https://vip.wordpress.com/documentation/code-review-what-we-look-for/#direct-database-queries)). Because `WP_Query` and it’s sister classes for comments and other records are so capable, there is rarely a need to write or read with custom queries. More often than not, if you see MySQL being used it’s because someone either wasn’t familiar with the API or they just couldn’t be bothered.

Another big setback relates to WordPress’s database structure and conventions surrounding it. The structure used is pretty and it’s rare that you’re left wondering to put somewhere. You’ve got:

- A `posts` table with records for each piece of content and a `postmeta` table for all the extra data.
- A bank of tables for taxonomy for content records.
- A `users` table with records for each user and a `usermeta` table for all the extra data.
- A `comments` table with records for each comment and a `commentmeta` table for all the extra data.
- An `options` table for literally everything else.

Creating a new table in WordPress is trivial but is generally frowned upon unless you have a great reason to do so ([WordPress VIP directly says “no” to this](https://vip.wordpress.com/documentation/code-review-what-we-look-for/#database-alteration)). If you cling tightly to WP standards, which is a good thing in general when you’re using the platform, opportunities to understand database structures and how they come together are rare if any.

And that’s a shame because understanding SQL and relational databases in general is a broad, useful skill to have. It can greatly assist with performance tuning, is a key component to low-level data science, and is just a good way to be able to think. The SQL query language and similar is used in so many places and in so many technology stacks that knowledge of it is probably second in value only to the command line.

Not only that, lack of MySQL knowledge will hurt you working with WordPress as well. If a seemingly simple content listing page is reaching 100 or more queries, do you know how to reduce that and where to start? If you install a required plugin and suddenly some of your external pages are slower, can you diagnose what might be going wrong? What if the WP API doesn’t do what you need, are you familiar with the `posts_*` family of filters?

Lack of knowledge here is an easy condition to find yourself in and a tough one to get out of without self-directed experience or learning.

Mitigation
----------

So, you’ve been writing standards-compliant, minimum version WordPress code for many years. Now what?

Starting now, you could devote all of those extra hours you have in the evening and on the weekends to learning all the stuff above. But it’s possible that you’ve already tried to do that for the last half of your development career. It’s also difficult to stay motivated on non-essential (and non-paid) computer tasks. It’s usually best to go take a walk, really.

The only way I’ve found to make real, lasting change in my life is:

- First, **acknowledge that change is hard and learning can be painful.** You’re going to feel a little dumb for a while as you get your bearings in all this new stuff. This is normal and expected. Give yourself a little slack ahead of time and remember that the discomfort of feeling stupid will quickly be replaced by the feeling of accomplish once you’re using your new tools.
- Then, **focus on the benefit of the change.** In this case, you’ll be writing better code that will position you for opportunities in the future. It will also help you modernize your code writing in such a way that will help you adopt new technology (which, if you’re mostly writing 5.2 PHP for WordPress, will be a breath of fresh air). Finally, and the most motivational for the right type of person, these tools and techniques will make you more productive, no question.
- Finally, **create situations where this new behavior is easy to practice.** You’re probably not going to upend your entire career based on a blog post but there are ways to work these changes into your day-to-day tasks. Scope your project a little higher to account for some learning time and sell it as making sure you’re delivering the best thing you can.

Here’s what has made a difference for me:

### Set a plugin minimum PHP version &gt;= 5.6

If you’re creating a new plugin for the WP.org repo, set your minimum PHP version to 5.6 or higher. If you’re writing open source software then you’re already doing the world a favor so don’t hurt yourself by limiting what you can do.

If you’re curious about the impact on your user base, WordPress maintains some [helpful statistics](https://wordpress.org/about/stats/) on versions used. Over two-thirds of WordPress sites are on version 5.6 or higher. If that’s cutting out too many folks for what you’re trying to do, then go with 5.4 and you’ll cover almost 90% of sites.

### Use Composer in every project

This one is an easy one and, after a project or two, you’ll see the benefit and never go back. Take less than a half-day of time and set it up like so:

1. [Install Composer globally](https://getcomposer.org/doc/00-intro.md#globally)
2. Make a folder for your project in some /wp-content/ folder
3. In that folder, type `composer init` and walk through the steps (don’t define any dependencies yet)
4. Walk through the [basic usage](https://getcomposer.org/doc/01-basic-usage.md) section and install a regular requirement (like [CMB2](https://packagist.org/packages/webdevstudios/cmb2)) and a dev one (like [wpcs](https://packagist.org/packages/wp-coding-standards/wpcs))
5. Create a regular plugin file (PHP &gt;= 5.6) that loads your required lib(s) and uses [namespace autoloading](https://getcomposer.org/doc/01-basic-usage.md#autoloading) to load a custom class
6. BONUS: Write a Composer script that runs `wpcs` against your project (excluding the /vendor/ folder)

That will be your startup procedure for every new PHP project, either open source or client.

### Install and use Query Monitor

Second only to WP-CLI, Query Monitor is probably one of the greatest WP dev tools out there. You might have used it to figure out if a plugin is going crazy with queries or to solve an issue but take it a step further.

Always have this installed and running in your development environment and pay attention to the actual queries that are being run. If a page template has a custom `WP_Query`, find that in the queries panel and read through what you’re doing. Connecting the API you know, WordPress, with the output you don’t, MySQL queries, is a powerful learning tool.

### Think hard about automation

The word “automation” is a bit loaded but, in this context, I mean offloading repeatable tasks to a saved process. In the case of, say, some kind of process run on your database (replacing URLs, deleting unused meta, etc), you could do it one of four ways:

1. Manually, which is boring and mistake-prone
2. With a plugin, which is easy but you gain nothing
3. With PHP in a page template you run once or WP-CLI.
4. With a DB query, saved somewhere for later

It’s very easy to just go with the first one and be done with it. Then miss a couple and do it again. Alternatively, the second one is more repeatable but dangerous if it’s a plugin you’re not familiar with and you’re not left with any new knowledge.

The 3rd option is better than the other two because you do end up with something you can re-use and you thought through the problem. But you’re in the same environment as always and writing the same type of code you usually would be.

Commit to the 4th option, in as many situations as you can. It’s likely to take a little longer the first time around but the second time, you’ve got something in your toolkit. Save it in Sequel Pro, if you use that, or a text file or a Gist. You could even find a plugin that does what you want, figure out how it’s done, and save that script for later.

### Learn another language or framework

I’ve read this advice over and over: pick up a new technology every year. Having seen more new technology in the last half-year than the previous half-decade combined, I can definitely vouch for the importance of this. Every new thing you try will make you think differently about development and expose you to new concepts. You can bring the stuff you like back to your comfortable stack or you might just starting buidling things in something else.

But just *doing* this is hard. Can you devote a half day a week to trying something new? If so, great, I promise it’s worth your time. But if not, you’ll have to be a little more creative.

If you’re building a small site and WordPress is not a requirement, try a different CMS, maybe one built on Laravel so you get to see a different way of building things. If what you’re building is not a content site and you don’t need to rely on a lot of functionality from plugins, try building it from scratch. I’ve found you can build literally anything on WordPress … which is not always a good thing. Use [Auth0 for authentication](https://auth0.com/docs/quickstart/webapp/php/01-login) and hunt around in Composer for packages that can handle some of the other heavy lifting. Look into Laravel or Symfony. Even if it’s just an experiment, it’s worth the effort.

If you’ve got an idea for a thing and the time/energy to build it, put it on something totally different. It will take longer and brace yourself for frustration but you have total control over the output and you’re able to cut corners to just get it running.

If you are exploring new technologies, here are a few recommendations:

- I mentioned it a few times above but give Laravel a shot. It’s easy to use, has a competent CLI (hint hint), and will expose you to MVC in a simple way. I’ve been through the getting started tutorial at least twice and each time I’ll get a site up very fast and think “wow, that was it?” There is a lot to learn but ramp-up time is short.
- If you do a lot of front-end development and feel comfortable with JS, give Node a try. The syntax will be familiar and the joy of writing the same code for both front and back-end is real.
- If you want to do something totally different, try Ruby on Rails. There is tons of great documentation and tutorials out there and the focus on developer productivity and happiness is refreshing, to say the least. Over and over I find myself typing something and thinking “I wonder if this works?” and it just does.

That’s all I’ve got.
--------------------
