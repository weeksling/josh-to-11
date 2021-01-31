---
title: "Quora: Are CMSs are more awkward than helpful a lot of the time?"
layout: post
excerpt: "It took me a long time (4 years) to get to the point where almost every project I get is built in WordPress and I'll tell you the 3 keys to getting it right, for yourself and with clients."
date: 2012-02-24 04:50:59
modified: 2016-11-02 22:11:00
permalink: quora-are-cmss-are-more-awkward-than-helpful-a-lot-of-the-time/index.html
tags: ["WordPress", "Content Management"]
featured_img:
wpid: 3984
---


[My answer to a question on Quora](https://www.quora.com/Am-I-alone-in-feeling-that-CMSs-are-more-awkward-than-helpful-a-lot-of-the-time/answer/Josh-Cunningham):

It took me a long time (4 years) to get to the point where almost every project I get is built in WordPress and I'll tell you the 3 keys to getting it right, for yourself and with clients. I believe this applies to any and all CMSes, custom, open source, or otherwise.

**1) Complete familiarity with the extension, theme, and core system**

There are so many built-in functions and features in a modern CMS that you'll never figure them all out. Still, Google will be your best friend when developing in a CMS. Read about 3 ways to do it, try it yourself, crack open the core files to get a better understanding, and keep iterating.

In WordPress, things like a built-in RSS parser (using SimplePie), an awesome AJAX framework, and a useable, though complicated, hook system make it really easy to put something together much, much more quickly than from scratch.

If you aren't at the point where you're regularly opening and reading core files then you're probably still at the point of frustration with it. There are quirks, just like there would be in something home-grown, but the more familiar you get with the core system as it's built, the better themes and plugins you produce.

**2) Design for a CMS**

This is very critical, maybe more so than the rest.

A client armed with custom content types and a WYSIWYG (and, god forbid, "just enough HTML to be dangerous" [have heard that line over and over and it's quite true most of the time]) can do a lot of damage to the really nice front-end you built. If you're planning on putting a bunch of custom HTML in the post/page editor, you've already gone wrong.

The fact is, you'll need distinct boxes for the text and somewhat limited control over the design when it comes to content. Either that, or you need to build in the admin pieces that make it easy for someone to add these things.

WordPress has made great strides in this area, as long as you're familiar with the functions. Using a custom content type combined with built-in custom fields, a custom taxonomy, featured images, and a file gallery that can accept all kind of things, you can built very customized editing screens minus all the other crap that confuses people. If you're just using posts, pages, and custom fields, you're missing out.

Still, it helps to have a really solid idea of what's possible and what isn't when you're spec-ing out a project or working with a designer. You'll usually hear me say "well, we could build it that way but if you move these two things around, it will be much easier to edit." That usually trumps most arguments.

**3) Plan for documentation**

There's no way around it: you'll probably have to provide documentation of some kind. I always add this to the budget to make sure the client has good instructions on how to complete certain tasks.

I've found that I need to re-document some of the features that have already been discussed. In fact, I'm building out a whole generic documentation section on my site that will help clients with some of the common features I use.

I also build WP templates for sale and had to write a whole documentation section for the custom pieces: wpdrudge.com/docs. With that, people who have never used WordPress before are putting up sites. Without it, I'm answering questions all day every day.

**To conclude...**

An occasional WordPress developer is likely to become frustrated with the system but with lots of practice, an eye for what's possible in the design, and a bit of technical writing skills, you can make great sites very "quickly."
