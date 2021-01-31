---
title: "Create a simple website with the Google Docs CMS"
layout: post
excerpt: "In attempt to solve one problem, I figured out a way to easily publish and manage data on the web by using a simple Google Documents spreadsheet."
date: 2009-11-12 20:44:25
modified: 2016-04-01 04:21:40
permalink: create-a-simple-website-with-the-google-docs-cms/index.html
tags: ["Product", "Content Management"]
featured_img:
wpid: 1207
---


In attempt to solve one problem, I figured out a way to easily publish and manage data on the web by using a simple Google Documents spreadsheet. What I was trying to do was come up with the simplest way possible to manage my Josh Can Help network page. What I realized is that, with a little extra work, you could manage a whole website.

The Google Docs CMS
-------------------

**Update 5/19/2011:** There was a bug in this script that only allowed for 9 menu options. Apologies for the trouble and this has been corrected. Just download the new package below and replace your index.php with the new one (make sure to update your feed URL).

[Download the Google Docs CMS](https://www.dropbox.com/s/cbdq2ykejiogc78/gdocs-cms.zip?dl=0)

For those not in the know, a CMS is a Content Management System, a web application that lets you add and edit live web content. WordPress, the system I use over-and-over (for good reason), is a CMS and a great one at that. But, in some cases, it is a bit over the top. What if you just needed to publish information without a lot of regard to the intricacies of presentation? That’s where this system comes in.

The Google Docs CMS lets you publish and manage information on the web using just a Google Docs spreadsheet published as RSS (easy to do, I’ll show you how). The script takes each row and turns it into its own page then creates a list of pages on the left.

How do I use it?
----------------

All you need to do is download the package, follow my directions to create a spreadsheet, put a line of information into the script, and upload it to your web server. The script takes the Google Doc feed, parses the information for each page, and displays it a certain way.

What can I do with it?
----------------------

In an effort to make these sites as easy to manage as possible, I restricted the number of built-in content to 4 types:

- Regular paragraphs (which can accept HTML)
- Headings (h2 tags only)
- Images (can pull automatically from your server or an external source)
- Links (creates its own line and doesn’t support link text \[yet\])

Just indicate the content type in one column and the content itself in the next. It’s all in the documentation.

Can I customize it?
-------------------

I created an external stylesheet that can be used to change how the page displays (you’ll need to know your way around CSS). I also built in a few configuration options in the beginning of the file to change a few functions. I am very much a beginner with PHP so the code should be simple enough to understand for those in the know.

Questions? Problems? Issues?
----------------------------

Please go ahead and leave comments below if you are having trouble or want to know how to change something. Also, if you’re a PHP developer and have some feedback for how this was implemented (good or bad), I would really appreciate it.

As an aside…
------------

This is my first attempt at a self-contained (and remotely useful) programming project of any kind. Like I mentioned, I’m a PHP beginner but use it a lot between WordPress customizations and static sites. I really enjoy using the language and the documentation on php.net is really, really impressive (the user comments are amazing). I try to use it as much as possible and I think the only reason I’m not much better with it is that I don’t give myself (read: have) a lot of time to practice.

Anyways, this was a very eye-opening exercise and one that I enjoyed very much. Truth be told, I wrote this during a long weekend I spent back in Seattle, so, essentially, on vacation. There was a little bit of frustration but a lot of “oh wow, cool!” – enough to keep me plugging away at it. String functions in PHP are fantastic and it’s amazing how easily XML documents can be parsed with just a tiny bit of code.

I’m looking forward to putting out little piece here and there, including a WordPress plugin in the future (I think that’s just to say I can). As I mentioned above, your feedback is very important to me, particularly if you’re skilled enough to find problems in the code and can tell me how to do it better.

**Thanks!**
