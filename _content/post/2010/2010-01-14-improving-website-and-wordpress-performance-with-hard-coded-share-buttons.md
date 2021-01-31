---
title: "Improving Website and WordPress Performance with Hard-Coded Share Buttons"
layout: post
excerpt: "Quickly add hard-coded share links badges to your WordPress or static site. "
date: 2010-01-14 18:00:21
modified: 2016-03-30 19:10:37
permalink: improving-website-and-wordpress-performance-with-hard-coded-share-buttons/index.html
tags: ["Social Media", "WordPress", "Development", "Site Optimization"]
featured_img: /_images/2009/09/wordpress-logo-notext-rgb-300x300.png
wpid: 1322
---


![splitter-cable](/_images/2010/01/splitter-cable.jpg "splitter-cable")  
Increasing the page load speed of your website has been proven to increase conversion rates (reduce the number of people who get fed up and leave), increase site usage (time on site and pages per visit), and reduce the chance you’ll be taken down by a sudden spike in traffic. WordPress in particular is fairly resource heavy right out of the box so speeding up everything else is a critical piece of running a site on this platform.

But I’m not going to talk about increasing WordPress speed, I want to show you how to improve you page load speed by cutting down on the number of external scripts you’re loading on a particular page. We’re going to do this by hard-coding share buttons into your theme.

Share Buttons Work… In A Way
----------------------------

Share buttons on your post help your content reach a greater audience by creating easy channels to social networks. By placing a “share on Twitter” button or “post on Facebook” icon, you make it easy for readers to bring the page to their network and increase your traffic.

The problem with most of the share badges out there is that they load a Javascript file from an external source which can take several seconds on a bad day. Depending on where you placed the badge, your content could be held back while the script takes its time and your readers bail.

Javascript calls are an easy way for Facebook and StumbleUpon to put their links on your page but most networks also have a way to share through a URL. Just hand over the link to your page and, in some cases, a title and you’re presented with a simple form to complete and submit. Your content gets to the share site just as it would with the Javascript, sometimes even faster.

Adding Hard-Coded Share Buttons
-------------------------------

All we need to do is display a nice icon and a link to the social network that includes a link back to your page. For my site, I made a few icons using badges I’ve found around the web which you’re welcome to download and use (please don’t link to mine, right-click, save-as, and upload for yourself).

The code for each site is very simple:

**Twitter:**  
&lt;a href=”http://twitter.com/home/?status=*\[\[SHORT TITLE + SHORT LINK\]\]*” title=”Post to Twitter”&gt;  
&lt;img src=”*\[\[PATH TO IMAGE\]\]*/twitter-icon.png” alt=””/&gt;  
&lt;/a&gt;

**Plurk:**  
&lt;a href=”http://plurk.com/?status=*\[\[TITLE\]\] \[\[URL\]\]*” title=”Post to Plurk”&gt;  
&lt;img src=”*\[\[PATH TO IMAGE\]\]*/plurk-icon.png” alt=””/&gt;  
&lt;/a&gt;

**Delicious:**  
&lt;a href=”http://delicious.com/post?url=*\[\[URL\]\]*&amp;amp;title=*\[\[TITLE\]\]*” title=”Post to Delicious”&gt;  
&lt;img src=”*\[\[PATH TO IMAGE\]\]*/delicious-icon.png” alt=””/&gt;  
&lt;/a&gt;

**Digg:**  
&lt;a href=”http://digg.com/submit?url=*\[\[URL\]\]*&amp;amp;title=*\[\[TITLE\]\]*” title=”Post to Digg”&gt;  
&lt;img src=”*\[\[PATH TO IMAGE\]\]*/digg-icon.png” alt=””/&gt;  
&lt;/a&gt;

**Facebook:**  
&lt;a href=”http://www.facebook.com/share.php?u=*\[\[URL\]\]*&amp;amp;t=*\[\[TITLE\]\]*” title=”Post to Facebook”&gt;  
&lt;img src=”*\[\[PATH TO IMAGE\]\]*/facebook-icon.png” alt=””/&gt;  
&lt;/a&gt;

**MySpace (I think this is right but I don’t have a login to test it):**  
&lt;a href=”http://www.myspace.com/Modules/PostTo/Pages/?l=3&amp;amp;u=*\[\[URL\]\]*&amp;amp;t=*\[\[TITLE\]\]*” title=”Post to MySpace”&gt;  
&lt;img src=”*\[\[PATH TO IMAGE\]\]*/myspace-icon.png” alt=””/&gt;  
&lt;/a&gt;

**Ping.fm:**  
&lt;a href=”http://ping.fm/ref/?method=microblog&amp;amp;title=*\[\[TITLE\]\]*&amp;amp;link=*\[\[URL\]\]*” title=”Post to Ping.fm”&gt;  
&lt;img src=”*\[\[PATH TO IMAGE\]\]*/pingfm-icon.png” alt=””/&gt;  
&lt;/a&gt;

**StumbleUpon:**  
&lt;a href=”http://stumbleupon.com/submit?url=*\[\[URL\]\]*&amp;amp;title=*\[\[TITLE\]\]*” title=”Post to StumbleUpon”&gt;  
&lt;img src=”*\[\[PATH TO IMAGE\]\]*/stumbleupon-icon.png” alt=””/&gt;  
&lt;/a&gt;

**LinkedIn:**

&lt;a href=”http://www.linkedin.com/shareArticle?mini=true&amp;amp;url=*\[\[URL\]\]*&amp;amp;title=*\[\[TITLE\]\]*&amp;amp;source=*\[\[DOMAIN\]\]*” title=”Share on LinkedIn”&gt;  
&lt;img src=”*\[\[PATH TO IMAGE\]\]*/linkedin-icon.png” alt=”” /&gt;  
&lt;/a&gt;

Place these anywhere you’d like on a static page or in the WordPress theme file that controls single posts (typically single.php). You’re about halfway there but the next few steps differ depending on what platform your site uses.

Specific Steps for Static Sites
-------------------------------

For each page that needs share links, you’ll need to paste the HTML above and replace replace everything with double square brackets with the information from the page.

1. Replace *\[\[TITLE\]\]* with a short description of the page
2. Replace *\[\[URL\]\]* with the direct link to the page
3. Replace *\[\[PATH TO IMAGE\]\]* with the direct path to the folder where your share icons are being stored. Also, make sure the image names here are the same ones you’re using.
4. If you’re using Twitter, replace *\[\[SHORT TITLE + SHORT LINK\]\]* with no more than 140 characters including a short description and a shortened URL (go to bit.ly to get a short URL). The savvy Twitter users bill include their Twitter handle and leave enough room for RTs.

Now load the page and test that the images appear and that each of the share links takes you to the right place.

Specific Steps for WordPress
----------------------------

![WordPress Logo](/_images/2009/08/wordpress_logo.jpg)

What we’re going to do is use built-in WordPress functions to hand over the current URL and title to the links you created above. We need to replace everything with double square brackets above with functions that will automatically add the required info. Make sure to follow the next section if you’re using Twitter.

1. Replace *\[\[TITLE\]\]* with &lt;?php the\_title(); ?&gt;
2. Replace *\[\[URL\]\]* with &lt;?php the\_permalink(); ?&gt;
3. Replace *\[\[PATH TO IMAGE\]\]* with the direct path to the folder where your share icons are being stored. Also, make sure the image names here are the same ones you’re using.

### If you’re using Twitter with WordPress

Sending the URL is simple for sites like Facebook and LinkedIn where the brevity of your message is not an issue but for Twitter we need to save characters where we can. Though a Bit.ly or Tr.im API call could handle shortening the URL for you, I prefer to create one before I post and add it as a custom field. This lets me track click-throughs for Twitter in one place (for me, on the bit.ly site). You’ll need to manually create a shortlink each time but, boo hoo, it takes 30 extra seconds.

First, we need to add a little snippet to grab the short URL and create a short title. After the loop starts…

&lt;?php if (have\_posts()) : while (have\_posts()) : the\_post(); ?&gt;

…paste this…

&lt;?php  
$key = “shortlink”;  
$shortlink = get\_post\_meta($post-&gt;ID, $key, true);  
$shorttitle = urlencode(substr(the\_title(), 0, 79));  
?&gt;

You now have two varibles, $shortlink and $shorttitle, that can be used when creating the HTML for the Twitter share badges. $shortlink is taken from the post (I’ll show you how to add it later) and $shorttitle is a shortened and URL-encoded version of the post title. These come together with your Twitter handle (below) to create a concise, complete Tweet. Now, just replace \[\[SHORT TITLE + SHORT LINK\]\] with…

RT%20@joshcanhelp%20&lt;?php echo $shorttitle . ‘%20…%20’ . $shortlink; ?&gt;

… and change “joshcanhelp” to your Twitter handle and you’re ready to go. What we’re doing is creating a tweet with the shortened title and URL that mentions your handle so you get Twitter credit.

When you create a post, you’ll need to create that shortened URL before publishing.

1. Click the **Save Draft** button on the top right, then the “View Post” link in the yellow bar that appears at the top.
2. Copy the URL out of the address bar and go to bit.ly (or similar).
3. Paste in the URL in the field and click **Shorten** (or similar). You’ll be given a short URL.
4. Copy this short URL and come back to your post edit window. Scroll down to the bottom of your post to a section called “custom fields.”
5. Click **Enter New** and type in “shortlink” into the field that appears. Now, paste the shortened link into the field on the right.

![custom-field-wordpress](/_images/2010/01/custom-field-wordpress.png "custom-field-wordpress")

Click add and you’re ready to rock &amp; roll. Now load the single post and test that the images appear and that each of the share links takes you to the right place.

**Edit:** This was published and enjoyed on Smart Data Collective to the tune of over 600 views and 14 retweets. Some of you might be aware that I’m contracted by the company that manages that site but I have no sway over published content at all, FYI.

[![top_read_SDC](/_images/2010/01/top_read_SDC.png "top_read_SDC")](http://smartdatacollective.com/Home/24320)
