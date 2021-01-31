---
title: "Latest Deals Site Built on Rank It WP"
layout: post
excerpt: "A WordPress child theme gone mad! Built-in click statistics, moderation controls, grabbing text and images from submitted links, and expiring content. "
date: 2016-04-01 14:34:48
modified: 2016-11-02 22:10:59
permalink: latest-deals-site-built-rank-wp/index.html
tags: ["WordPress"]
featured_img: /_images/2015/01/rank-it-wp-logo-SQ-150x150.png
wpid: 4516
---


> Josh is the developer you’ve been looking for. Easy to work with, professional and punctual. Always communicative, he built a deal sharing platform for us which helped people save money. I would recommend him again and again.
>
> *– Tom Church, founder*

Selling premium WordPress products has been a huge learning experience and a great deal of fun. One of the great side-effects was finding clients who loved the basic theme concept that I was selling but wanted even more functionality. I’ve worked with a number of clients over the years that I’ve met through my product business.

One such client came to me with a big list of features to add on to the Rank It WP theme that I sell. Him and his business partner wanted to launch a deal submission and ranking site and my theme was almost there but not quite. I’m always excited to see what other people see for my products and the add-ons usually lead to general improvements.

First, and most important, was the ability for site users to pull down information from the deal page they were submitting. We wanted them to be able to submit quickly and include an image. I hooked the amazing [Embed](https://github.com/oscarotero/Embed) library up to the submit form, pulling in the page title and description as well as all images within a particular dimension range (editable in the admin). The image selected would save to the deals site as the featured image so we weren’t robbing bandwidth.

![euw0qcm8mx](/_images/2016/04/EUW0qcM8Mx.gif)

We added an expiration date field to the submission form to keep deals current on the site. For pages where deals were listed, expired deals were excluded using pre\_get\_posts. We also included previous and current price fields so deals could show the difference after the deal.

Another user-facing change we made was the ability to see profile data for deal submitters without viewing their profile. ![b7shr6wujk](/_images/2016/04/b7SHr6WuJk.gif)

The price fields mentioned above were displayed on each deal but they were also used to calculate a rough “total saved” statistic that was displayed on the site. Clicks on the deal link were counted (pointed to the site, counted the click, redirected to the external link), multiplied with the price difference, then added to the running total. All of this happened offline using wp-cron (running with a crontab rather than page load).

To help with moderation and keep the site clear of spam and the bad users that submit it, we added a simple flagging system. Flagged deals reach a threshold, editable in the admin, that cause them to be removed from the site and a moderator notified. They can be re-published and would not be affected by flagging going forward.

Overall, I had a great time building out this child theme and was able to work some of the logic back into the main theme.
