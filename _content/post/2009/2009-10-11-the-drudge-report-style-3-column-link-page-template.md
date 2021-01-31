---
title: "Drudge Report template - 3 column link display page in HTML"
layout: post
excerpt: "I started from scratch and made this very simple, lightweight, one-file, one-page site template that mimics the layout of Drudge report with a few extra features."
date: 2009-10-11 22:10:33
modified: 2019-01-08 00:18:32
permalink: the-drudge-report-style-3-column-link-page-template/index.html
tags: ["Product"]
featured_img:
wpid: 1161
---


To start … the HTML on Drudge report is very poor. It was a table-style layout for no discernible reason, there were capitalized tags and attributes throughout, and it looked like it may have been avoiding CSS altogether. It’s really none of my business how other people put their sites together but it was clear I wouldn’t be drawing any inspiration from the technical construction. So I started from scratch and made this very simple, lightweight, one-file, one-page site template that mimics the layout of Drudge report with a few extra features.

[Download the free Drudge-Style Template](https://www.dropbox.com/s/rqmjcenf2w19ym8/JCH_Drudge_HTML_Template_101109.zip?dl=0)

### How to Use The Free Template

In typical Josh Can Help style, let’s walk through how to get this little guy to do what you want.

I use \[\[double square brackets\]\] around the text that needs to be changed in the file so it’s easy to find all the meta (unseen on the page) information. To add new links and change the information, you’ll want to have a bit of experience with HTML but, at the risk of a flood of new web developers taking all my clients, I’ll let you in on a little secret: HTML isn’t that hard.

So, let’s customize this page:

- Unzip the package somewhere on your desktop and open the “index.html” file with a plain text editor. If you’re in Windows, you’ll need to right-click the file and pick Notepad.
- Start scanning for double brackets and fill in the information as needed. Make sure the **&lt;title&gt;** text has words that tell search engines what you’ve got going on the page. Fill out those meta tags too, just because.
- Unless you’re familiar with CSS, just leave everything between the **&lt;style&gt;** and **&lt;/style&gt;** tags alone. If you are familiar with CSS, go crazy!
- The **&lt;h1&gt;** tag, by default, is invisible but still fill it out with a short (few words) description of the page. This combined with the **&lt;title&gt;** tag helps search engines figure out the main purpose of your page. If you aren’t going to use a banner image, then delete **id=”page-name”** and your header is now big, bold text.
- Now, your header image. This image is centered on the page and can be any size you want. Just put the filename of the image you’re going to use after **src=”** and make sure the image is placed in the same directory on your host as this file. Type in a description of the image as well while you’re at it.
- For the story of the day, do the same thing with the image and add your text where indicated in the template. The image will resize to 200 pixels wide automatically. FYI on the image, just delete the whole img tag if you don’t want to use one. You can also change “Story of the day” to something else and use that space for something different.
- Now, you’re ready to plug in your links. Each link is in its own **&lt;li&gt;** tag to keep them on their own line and to give a little space in between. Just replace the text after **href=”** with the direct URL (including `http://`) and replace the next set of brackets with the text you want to appear on the page. You’ll notice that the first link in the left column has a paragraph right after it but before the closing tag. Make sure to follow this syntax to keep the spacing kosher.
- Want to add another link? Just copy and paste one of those **&lt;li&gt;**…**&lt;/li&gt;** rows wherever you want it to be. Deleting a link is the opposite.
- Add a new separating header with **&lt;h3&gt;.**..**&lt;/h3&gt;** tags wherever you’d like (but, of course, within one of the columns).
- Want to add a separator line? Figure out where it should go and stick an **&lt;hr&gt;** right there.
- img tags can also be used in columns, just make sure they are in between the **&lt;li&gt;** and **&lt;/li&gt;** tags. Style wise, it’s probably better to put img tags in between the **&lt;li&gt;** and the **&lt;a&gt;** tags.
- Scroll down to the bottom for the footer links. Don’t want any? Just delete them all except mine :).

And that’s it! To make it live, just copy index.html to a public folder on your web host and check it out. If you already have a website going, be careful where you put this so you don’t overwrite the main site file.
