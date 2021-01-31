---
title: "WP-Drudge on Alan.com"
layout: post
excerpt: "Alan Colmes needed a central hub for his news curation and community surrounding his radio show and books. We've been iterating on this site for a few years and finally settled on a very customized version of the WP-Drudge theme I created. "
date: 2015-04-09 17:44:40
modified: 2016-10-20 16:43:59
permalink: wp-drudge-on-alan-com/index.html
tags: ["WordPress", "Community"]
featured_img: /_images/2015/04/Screen-Shot-2015-04-17-at-10.43.54-AM-150x150.png
wpid: 3692
---


> Josh’s work is excellent. He gets it done on time and on budget. And he often comes up with solutions so good, you’re glad you had a problem in the first place. It’s pleasure to work with him.
>
> *– Alan Colmes*

I met Alan Colmes, radio and TV personality, several years ago in that funny way you sometimes meet people online. He was redesigning his site and found my [WP-Drudge](http://wpdrudge.com) template. Alan is the thoughtful, Liberal counterpoint to the loud, Conservative voices in Medialand and so he saw his website as a counterpoint to The Drudge Report. We worked together to build a custom version of the site which served him well for years with regular iterations.

![alan-dot-com-archive](/_images/2015/04/alan-dot-com-archive.png)

In 2015, Alan and I got back in touch and he was, once again, looking for an updated look on his site. He had since switched to a “premium theme” (I use that term lightly as it was a paid theme but, behind the scenes, premium it was not) and it was not working how he needed it to. We did a review of how the site functioned and the workflow and discovered several serious issues:

- There were countless display issues throughout the site – misaligned content boxes, random link colors, typography issues
- The theme was not built for curation so all link formatting was manual and posts were taking much longer than needed to publish.
- The site was painfully slow, mostly due to an old, insecure version of TimThumb running on every image shown.

Alan wanted to move back to the WP-Drudge theme because of the curation features built in and the grid-like layout. He also wanted to add a number of customizations to make the site more visual by giving the photographs more real estate.

![alan-dot-com-home-grid](/_images/2015/04/alan-dot-com-home-grid.png)

After a few rounds of wireframes and mock-ups, we landed on the design being used today. The homepage is split 3 sections: a top “featured” block for breaking or exclusive content; a promotional row for email sign-up and recurring posts; and a grid of posts with headlines superimposed on photographs.

But the look of the site was only a part of the work we did together. Alan posts multiple times per day and wanted his homepage to be more than just a feed of the latest, he wanted to determine, specifically, what posts show up where. So I built a drag-and-drop interface for placing new posts in the one of the possible locations.

![alan-dot-com-post-order](/_images/2015/04/alan-dot-com-post-order.png)

![alan-dot-com-post-ui](/_images/2015/04/alan-dot-com-post-ui.png)

We also thought up a few simple ways to make the publishing process faster through a number of controls available when a post is created:

- Flag a post as breaking or exclusive
- Add the post to a specific place on the grid
- Display an embed, like a YouTube video or Tweet, automatically
- Add more links to updates about the story
- Add an iframe to the post on the single post page
- Add the post to specific feeds based on the category

![Alan Colmes alan.com mobile](/_images/2015/04/Screenshot-2016-03-30-11.00.36.png)

With over a half-million post records in the database and high traffic on breaking and popular stories, we needed to think about how all this would come together and not take the site down. Alan uses a very capable host but a big spike of concurrent users on the homepage could be a problem so I worked in transient query caching through, updated on save events. This means complex content feeds can be used without causing load issues.

Recently, we added responsive styling to all pages except the homepage to assist the large mobile audience using the site. We decided on a user agent filter redirecting mobile agents to a specific mobile landing page. We wanted to decrease the load by a lot and rejiggering the homepage to be responsive would have taken quite a bit of work. The mobile homepage loads smaller images and a special header to be quick and easy to scan.

Alan has been great to work with and the work on the site has improved load times, pages per session, and time on site.

> With each iteration of my site, the numbers increase, in no small part because of Josh’s work.
>
> *– Alan Colmes*
