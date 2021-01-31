---
title: "Rank It WP: A Community Curation Theme for WordPress"
layout: post
excerpt: "My latest shipment comes in the form of a premium theme called Rank It WP. The idea, explained in-depth after the jump, is a Product Hunt-type site in WordPress."
date: 2015-01-08 17:43:23
modified: 2020-01-19 22:15:01
permalink: product-hunt-wordpress-theme/index.html
tags: ["WordPress", "Community"]
featured_img: /_images/2015/01/rank-it-wp-logo-SQ-150x150.png
wpid: 3637
---


> Please note: I originally created this theme but sold the product to another company. I do not provide, support, or manage this theme.

You know what I like to do? **Make new plugins and themes**. My local environment is littered with half-started projects that may or may not see the light of day. Much of this comes from scratching an itch I have so the code is not wasted, it just doesn’t get distributed in any real way.

> Absolutely love the Rank it WP theme. It helped me get from idea to launch lightning fast. The theme is extremely well built, looks great, and offers good flexibility. Highly recommended!
>
> *– KidsAppHunt*

But my favorite thing to build is one that people can, and hopefully will, use. Whether it’s free or paid, I like my work out there to be tested, critiqued, and improved. Because of that, I like to launch new things and I try to do that several times a year. This could be a [new plugin](http://theproperweb.com/product/google-news-wordpress/), [a release on a product I’m selling](http://wpdrudge.com/latest-release-version-2-6), a bug fix/new feature on an [open source plugin](https://wordpress.org/plugins/proper-contact-form/) I maintain, or [a solid blog post](http://wpdrudge.com/wordpress-rss-aggregator-theme). Whatever it is, I love to ship and that keeps me motivated to create new things.

The latest shipment comes in the form of a premium theme called Rank It WP. I built this during a slow period in November and December of last year and put it up for sale right before Christmas. The idea, explained in-depth below, was a Product Hunt-type site in WordPress.

> I work in action sports and had an idea to create a community to discuss new products for boardsports. I found the Rank It WP theme and created Boardriders Collection. Completely blown away by the backend functionality of the theme, the algorithm to rank new submissions, and the overall look and feel of the theme.
>
> *– Eddie DaRoza*

This project was a **TON** of fun to build and came together a lot faster than I expected. My recent work on a Backbone-powered, AJAX-heavy WordPress ecommerce plugin (launch post coming soon) pushed me to try new things and come up with something that was not only useful but concentrated on aesthetics and modern development techniques.

I’m proud of how it turned out and looking forward to pushing this *a lot* further. If you will lend me your ear for a few minutes, let me tell you about how this came to be and how it all comes together.

**Edit:** [hunted and loved on Product Hunt!](https://www.producthunt.com/tech/rank-it-wp)

The Concept
-----------

Curation is a huge part of what happens on the web these days and I’ve been involved with it for many years, both with the WP-Drudge community, clients, and my own projects. I see curation as equal in importance and value as original content; in fact, the two work together very well to make a great web property.

I was looking around for inspiration to create a new theme and was contacted by someone who wanted to create a theme in the same vein as Product Hunt, a dynamic online community centered around discovering the best products. Josh Z, creator of Song and Film, wanted something similar to curate and rank music for films and television.

I had been tossing around the idea of a theme that would have similar functionality to Hacker News but always found myself put off by the look of the site. Product Hunt served a similar functionality – user-submitted content, ranking, discussion – but in a much nicer package. Plus, I had a ready-to-go beta tester who was willing to help offset the development costs. **Perfect!**

After a few calls and tossing spec sheets back and forth, we figured out the best set of features to launch with. We decided on:

- Front-end content submission
- Front-end login and registration
- On-page commenting
- Highly-functional user profiles with branded editing
- Algorithmic or publish date sorting
- Fully-responsive and mobile friendly
- A badge showing users who submitted content they also created
- Automatic media embeds for supported sites

The theme came together in about a month of work and with Josh’s testing help. We ended up with more features than I planned on (a good thing, in this case) and a solid first release.

How It Works
------------

Here’s how the flow of the site works. You can follow along with the non-admin functionality on the [demo site](http://demo.rankitwp.com/):

![Screenshot 2015-01-05 14.18.27](/_images/2015/01/Screenshot-2015-01-05-14.18.27.png)

On the homepage, the latest content is listed from newest to oldest, as you would expect. The other option is to use a “hot” algorithm that counts votes and comments and calculates a ranking based on the date it was submitted (similar to Reddit). [Full explanation is here](http://rankitwp.com/docs/content-ordering/).

![Screenshot 2015-01-05 14.26.51](/_images/2015/01/Screenshot-2015-01-05-14.26.51.png)

If I visit one of the links, I can see who voted on the content, related items, and a media embed for certain sites. There are also hard-coded sharing links (no click stats but better performance) as well as a discussion/commenting section.

![Screenshot 2015-01-05 14.20.44](/_images/2015/01/Screenshot-2015-01-05-14.20.44.png)

If I click **Login**, **Submit**, or a vote link when I’m not logged in, I get a login or register pop-up. This is the same login/register process as can be found at wp-login.php, complete with hooks, filters, and everything else. I added a bit more registration and login security to thwart spam and malicious users.

![Screenshot 2015-01-05 14.23.15](/_images/2015/01/Screenshot-2015-01-05-14.23.15.png)

Once I’m logged in, I can view my profile which shows links I’ve submitted, created, and voted on. I can also edit my profile, which is a styled and branded version of the basic wp-admin profile screen. You’re on the same profile screen as usual but for lower-level users, the UX is just like using the rest of the site.

![Screenshot 2015-01-05 14.29.29](/_images/2015/01/Screenshot-2015-01-05-14.29.29.png)

While I’m logged in, I can also submit links directly to the site. Categories are managed in the admin and can be shown to site users or not. Once the link has been submitted, it goes into a moderation queue where a site admin can edit, publish, or delete it.

![Screenshot 2015-01-05 14.33.23](/_images/2015/01/Screenshot-2015-01-05-14.33.23.png)

Here is the submission listing on my testing site (hence the Latin and gibberish). The **Publish** link is one-click and makes the content live immediately. This makes moderation quick and simple so the site stays updated and users stay happy.

> Rank It WP theme was the perfect solution to our problem: How to build a Product Hunt clone quickly and easily. Not only does it fit our requirements perfectly, Josh (the developer) has been extremely helpful on the few times we’ve had to contact him. And since it is running on WordPress (rather than node.js or some other stack), we don’t need to have a DevOps team to run our site.
>
> *– BierWerx*
