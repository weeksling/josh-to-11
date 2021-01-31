---
title: "A Few Thoughts on WordPress Performance"
layout: post
excerpt: "&quot;WordPress is a server hog&quot; ... &quot;WordPress keeps crashing&quot; ... &quot;You can't run a fast WordPress site&quot; ... I've heard these kinds of statements over and over for years."
date: 2015-01-12 15:00:54
modified: 2016-10-20 16:43:59
permalink: wordpress-performance/index.html
tags: ["Hardware", "Personal Development"]
featured_img: /_images/2015/01/hard-drive-install-150x150.jpg
wpid: 2368
---


> “WordPress is a server hog”
> 
> “WordPress keeps crashing”
> 
> “You can’t run a fast WordPress site”

I’ve heard these kinds of statements over and over for years. If you know a little bit about web development but not enough about your options here, then the conclusion, in a way, makes sense. You’re loading templates and plugins and all the core code, all of which hooks into a database, all of which can be a bottleneck for performance. **It just makes sense.**

But, in practice, there are very simple things you can do to make a WordPress site run almost as fast as a static files site and you don’t need $1,000/month in hardware. The key is attacking all the low-hanging fruit through plugins, lack of plugins, and good configuration.

I’ve been asked a few times how to speed up a WordPress site and, despite the numerous Google results for the topic, I wanted to give my $0.02. Here are a few thoughts on the topic in no specific order, though amazing that they all start with the same letter, no?

![hard-drive-install](/_images/2015/01/hard-drive-install.jpg)

Configuration
-------------

Good performance comes from a good basic setup. I’m not going to cover Apache/nginx and MySQL configuration here because most people don’t have access to those and things can get worse if the changes aren’t made properly.

Long story short: some hosts allow you to mess with these settings, some don’t. You’ll see a lot of different techniques for doing this but they all come down to affecting PHP settings for a particular site in some way. the WP settings you listed are [covered in-depth here](http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP). A few things to try:

- In wp-config.php (before wp-settings.php is required): <span style="font-family: 'courier new', monospace;">define(‘WP\_MEMORY\_LIMIT’, ‘256M’);  
  </span>
- In wp-config.php: <span style="font-family: 'courier new', monospace;">ini\_set(‘memory\_limit’, ‘256M’);</span>
- In a php.ini file in the site’s doc root: <span style="font-family: 'courier new', monospace;">memory\_limit = 256M</span>
- In .htaccess in the site’s doc root: <span style="font-family: 'courier new', monospace;">php\_value memory\_limit 256M</span>
- [A great run-down of these techniques on Drupal.org](https://www.drupal.org/node/207036)

You can do all of that together but it’s all going to do the same thing so just try each one out in sequence (it’s in order of my preference above) and see if it works.

How can you tell if any of these works? First, the site should obviously run faster, that’s a good indication. But to make sure, you have to check what PHP is using when it’s running:

- If you use the first option, this needs to be checked during a WP session. At the very bottom of wp-config.php (on a staging/non-prod site on the same host) after wp-settings.php is required, add <span style="font-family: 'courier new', monospace;">phpinfo(); die(); </span>and refresh the site.
- If you want to try out the second option (which tests the first as well), just upload a PHP file on the server you want to test containing the following and load it in a browser:  
  <span style="font-family: 'courier new', monospace;">&lt;?php ini\_set(‘memory\_limit’, ‘256M’); phpinfo(); die(); ?&gt;</span>
- If you want to try out the last 2 options, make the changes as instructed above and upload a PHP file on the server you want to test containing the following and load it in a browser:  
  <span style="font-family: 'courier new', monospace;">&lt;?php phpinfo(); die(); ?&gt;</span>

When you load that phpinfo file, you’ll see [something like this](https://www.dropbox.com/s/rr48g0a7gyqt23b/Screenshot%202014-10-15%2012.58.49.png?dl=0). Search the page for “memory\_limit” and you should see [a line like this](https://www.dropbox.com/s/ajze75e2nj6fgl8/Screenshot%202014-10-15%2012.59.11.png?dl=0). Left value is the “local” modified value, the one on the right is the master value for your server environment. You’ll also see a number of other values there that can be helpful in troubleshooting, including loaded libraries and other things.

Code
----

This is a bit fuzzy compared to the others. The long and the short of it is “use good code,” which *is* qualifiable but difficult to achieve, especially if you’re a site owner and not a WordPress developer.

For site owners:

- Skip as many plugins as you can unless you’re familiar with how they work or you have past experience. I’ve seen terrible things in plugins throughout my career, it’s amazing what people will put out in the public arena. To be fair, it’s amazing what I’ve put out in the past so I can have a little sympathy here.
- In that vein, look for plugins with good reviews and ones that have had an update within the last 6 months or so. Read the negative reviews and keep an eye out for problems they mention.
- Watch your HTTP requests, RE: too many JS and CSS files. This can cause a site to load very poorly. The more plugins you’re using, the more likely you have a ton of these. Anything that alters the public-facing side of your site could have its own JS or CSS file included. There are tools like [Pingdom](http://tools.pingdom.com/) that can tell you how many of these you’re loading. It comes down to trimming as many plugin out as you can.

For developers:

- Cache as much as you can in the code you write using transients. Big, complex, joined queries should be stashed for at least a few minutes (more if you can) so the site doesn’t crash during a traffic spike. Also, any non-AJAX over-the-internet calls need to be cached as well.
- Watch your HTTP requests as well. If you need to load JS and/or CSS on the front-end of the site, load as few files as possible. Use Grunt and family to concatenate, combine, and minify your distributed asset files to reduce these requests. Alternatively, if you’re only loading a small amount of either, consider outputting directly on the page. This is a no-no for static sites but in a CMS, your final HTML page, in my opinion, does not need to be squeaky-clean.
- If you need the functionality of a plugin and it’s only a small component of that plugin, consider incorporating that code into the theme. If you use 5% of what a plugin does, simply recreate that in the theme and show attribution in the code. This is situational, though, as sometimes it makes sense to keep the ability to update the code without maintaining it yourself.

A quick note on troubleshooting performance issues stemming from plugins: your best bet, if you can, is to deactivate all plugins and then activate them one-by-one until you find the issue. If there isn’t just a single plugin causing the problem, then you have too much going on. If you absolutely need BuddyPress and WooCommerce and GravityForms and 20 more plugins while running an off-the-shelf theme, you’ll need either a custom theme that can wire this all up properly or you need a faster server. **There is a limit to what your web host can do.**

Caching
-------

Caching is the easiest solution for performance problems and should be a part of every WordPress site out there. Caching works to reduce the load on your database by serving data or HTML that was created on a previous visit. As such, caching only really works for things that have happened before.

For sites without logged-in users (besides admins and editors), the simplest thing to do is to install a page caching plugin like [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/). You can simply install and turn this on and your site will be much faster and much more resilient to traffic-triggered crashes (assuming the plugin works on your server). Try clicking around the site in a browser where you’re not logged into the site and make sure everything is loading as it should. A few advanced settings for WP Super Cache I like to use:

- **Advanced** tab 
  - Turn on “Cache hits…”
  - Choose “Use mod\_rewrite…” but test in another browser to make sure it works
  - Turn on “Compress pages…” but test in another browser to make sure it works
  - Turn on “Don’t cache pages for known users”
- **Preload** tab 
  - “Refresh preloaded cache files every” set to 1500 minutes
  - Turn on “Preload mode…”
  - **Update Settings** then **Preload Cache Now**; make sure to follow the instructions about updating your htaccess file that appears

The next level is to install an object caching plugin like the [APC Object Caching plugin](https://wordpress.org/plugins/apc/) if APC is available. This provides query caching, which can help out DB-query-heavy sites quite a bit. Ask your host if APC is available and **follow the instructions on the plugin carefully** for installation.

So that’s my say on the topic. If you have any additions, questions, or corrections, let me know in the comments below, happy to help as best as I can!
