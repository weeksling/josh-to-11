---
title: "Improve WordPress Performance by 36 Percent"
layout: post
excerpt: "I was approached recently by the owner of a popular blog using WordPress. He wanted to know if there was anything he could do to speed up his site. As usual, Josh Can (and did) Help."
date: 2009-09-01 19:00:03
modified: 2016-10-20 16:44:17
permalink: improve-wordpress-performance-by-36-percent/index.html
tags: ["WordPress",  "Site Optimization"]
featured_img: /_images/2009/08/clarkson_face-150x150.jpg
wpid: 993
---


I was approached recently by the owner of a popular blog using WordPress software. This blog gets a lot of traffic on a regular basis but also has articles that reach the front page of Digg.com on a regular basis. For those of you not familiar with social media, this translates to very large traffic peaks. He wanted to know if there was anything he could do. As usual, Josh Can (and did) Help.

![](/_images/2009/09/wordpress-logo-notext-rgb-300x300.png "wordpress-logo-notext-rgb")

Step 1: Assess the situation
----------------------------

WordPress is notorious for being a [big server resource hog](https://blog.codinghorror.com/behold-wordpress-destroyer-of-cpus/) but there is little else out there that provides the kind of flexibility and extensibility on such an easy-to-use platform. I’m sure there are debates to be had but I’m a huge fan of WordPress and that’s not likely to change anytime soon.

In this case, the WordPress core along with several essential but potentially resource-heavy plugins were causing the server to become unresponsive and, at times, crash for several minutes. This happened during short periods of intense traffic caused by the aforementioned temporary Digg.com front page position (called “the Digg effect”).  

I ran a simple [website optimization test](http://websiteoptimization.com/services/analyze/) and found several things that needed to be corrected:

- The site was creating close to 90 HTTP requests. This means that the web page asked for 90 different things across the internet before it would be complete. This is really high.
- The images on the page tested were too large
- The page size, in total, was over a megabyte. For very graphics-heavy sites, this might be normal but there was room to improve here.

Step 2: Plan of attack
----------------------

The first thing was to address images on the site. Several images needed to be decreased in size (read: lower quality) and the images called by the stylesheet, CSS images, needed to be combined into one file called a sprite.

Since page load speed is made worse by an increasing number of server requests (the HTTP requests I mention above), I wanted to cut that amount in half or more. I would do this by concentrating on items that were loaded from the hosting server. If you load 100 objects from other servers, the page may take a while to load but the host for the page you’re viewing won’t crash. Since the primary goal was to avoid crashes, this would be an important improvement.

What happened?
--------------

Though the ideas behind the improvements were simple, there was a lot of trial and error involved. Code written by different people sometimes doesn’t play well together so there was a lot of care taken to make sure that the right syntax appeared in the combined files. The plugins themselves were actually written very well and there was rarely any problem removing the references to certain files. A few observations:

- For one reason or another, combining javascript files is a very finicky procedure. I found that any JS that came after the JQuery block did not work. I also found that minifying the code broke it completely so that didn’t work.
- There’s really some hard decisions to be made when you’re combining all of these files. You’re trading a lot of control for load speed in certain cases. The plugins that were modified can’t be upgraded automatically of the changes will be lost. In the case where there was a dynamically altered style sheet or javascript file, I left it alone. This left one minor JS error on the page because of the order that the scripts are called but nothing on the page is malfunctioning.
- Working with a heavily cached site is very difficult because it is hard to figure out if the changes you made went through. Next time around, I’m going to turn the caching off.

In the end…
-----------

With the changes made, we saw an improvement of around 36% (from 320 sec 56K load time to 206). The requests are sitting at 48 total (down from 90) and the site is running noticeably faster.

![clarkson_face](/_images/2009/08/clarkson_face.jpg "clarkson_face")

I made a few recommendations for managing the site going forward.

- The biggest thing you can do, as important as the code I changed, is to make sure your images are as small as possible. If you’re in Photoshop, save your JPGs at a 4 or 5 setting. Also, save non-photo images (logos, cartoons, etc) as GIFs. Give this site a try if you’re not proficient with a graphics program:
- On the topic of images… if you have the time, you might want to host some of your images offline (Picasa, Flickr, etc). This might increase load times a little bit but it will keep the load off of your server. Check those sites for bandwidth restrictions, though. It wouldn’t be good to have them take down an image that’s getting you a lot of traffic.
- You’re fine to install new plugins on the site but keep it to a minimum. Many plugins won’t affect your load time at all but some will start adding things to your header which is exactly what I worked to remove. I can, of course, do the same modification to any new plugins as well, though.

Next Steps
----------

We’re getting as close as we can get to making the page as lightweight as possible. There are a few dynamic style sheets and JS files that could be combined if the settings never need to be changed but this might be overkill. I’d like to work out the JS minification issue if possible because we can squish 20KB out of that file.

The next big thing to tackle is the MySQL database. I found a few articles that talked about some settings that can be modified to activate caching and a few other things. I’ll try them on my server before his, though!
