---
title: "My WordPress Developer's Wishlist"
layout: post
excerpt: "I build a lot of WordPress and I use WordPress all day, every day. Here’s what I’d love to see in future WordPress releases."
date: 2012-04-03 20:56:25
modified: 2016-10-20 16:44:00
permalink: my-wordpress-developers-wishlist/index.html
tags: ["WordPress"]
featured_img: /_images/2009/09/wordpress-logo-notext-rgb-300x300.png
wpid: 2731
---


Let’s just get this out of the way: I’m a total WordPress fanboy. Most projects that come through my door can be – and are – built on the platform and I’m always finding great new ways to extend and improve the basic functionality. Most of my clients love the backend and I’ve yet to find a WYSIWYG system that works as well as WordPress’s. I feel silly even making a list like this but these ideas have popped into my head over the last year and I wanted to get them down in one place.

![](/_images/2012/04/Screen-shot-2012-04-03-at-1.55.09-PM-e1333486558248.png "Screen shot 2012-04-03 at 1.55.09 PM")

**One caveat here:** I’m trying to leave out anything that’s easily relieved with a plugin or some easy template code. The decision to incorporate something into WordPress core or leave it to the plugin authors is likely a constant struggle and far be it for me to try and play back-seat driver for the development phases.

**Why should I even have the right to talk about this?** I use WordPress a lot… like, a lot a lot. I’m in no less than 3 different admin back-ends on a given day, not counting local installs. I have become immensely intimate with the front end, back end, file system, database, and Codex. I build a lot of WordPress and I use WordPress all day, every day. As such, I think I have a fairly unique perspective on the system and what it does. I also run into the same shortfalls over and over so that’s what is listed below.

I’d **love** to hear from other WP developers show have either solved the “problems” I’m listing here or have some of their own to share. I know there’s a lot more for me to learn and I trust you folks to help me.

So, here’s what I’d love to see in future WordPress releases:

Better image handling
---------------------

I’ve been working with both WordPress and Drupal in a few image-heavy sites and I find both of them to have their ups and downs (the former typically having more ups than the latter). The new file uploading in WordPress is fantastic and the gallery management has proved to be very helpful. I also like the ability to create new image sizes eery easily, that’s been helpful.

But the one thing I’d love to have is something similar to Drupal’s Imagecache plugin. This allows you to set new image sizes, qualities, and crops without creating new images on the server. The new image is created when it’s loaded and saved in a cache folder. There is an image cache but it doesn’t provide the ability to create new sizes.

Developer’s Version
-------------------

This is not a fully-formed idea but it would be great if I could build out versions of WordPress without certain core features. This is, again, a bit of a comparison to Drupal, but I’d love it if certain core functions were modular.

Some projects don’t need Links or Posts or RSS publishing. Some projects don’t need any kind of search functionality or any of the core widgets. Sometimes, I’d just like a really stripped-down version of what’s there but I’d love to keep the ability to upgrade the parts of core that are being used.

In the end, this would probably require a re-engineering of the entire codebase which is unlikely but it’s some that I would get a lot of use out of and would contribute to, given the option.

Maybe, instead of a specific version for developers, the whole software itself could be geared better towards the vendor/client relationship that so often occurs with WordPress. A mass amount of configuration options, all in one place, over-ride-able in a theme file (like WYSIWYG settings, components to load, etc.). There are so many things that can be changed, it would be great to see everything in one place, easy for developers to tinker with.

Award-winning WYSIWYG
---------------------

One of the weakest links in any system that allows you to enter content is the WYGIWYG HTML editor. Let me be clear: the complexity that goes into the editor used by WordPress, TinyMCE, is enormous and what they have currently is, in my opinion, the best I’ve ever used. Still, I think improvements could be made.

First, I think you should be able to easily control what buttons are there and be able to add new buttons easily. There are some plugins that do this but I think the creation aspect of the site could be greatly improved if people felt empowered to change their editor to suit their needs. A big block of checkboxes with the ability to drag-and-drop their order, that would take care of it.

Second, the editor does a lot of HTML changing when you switch back and forth between HTML and Visual. This makes it tough to enter anything besides the basics (including embedded videos, which is a big set-back) and requires a lot of tinkering to see exactly what it changes and what it doesn’t. Add to the mess of options proposed above the ability to modify the filters easily. What I’m imagining comes close to the Input Filters option in Drupal but, let’s be honest, that system is a pain in the ass. I’m proposing something much more simple.

Better user handling
--------------------

This is one thing that is becoming more and more of an issue for me. I shouldn’t say issue… I’m just having to find work-arounds more often than not.

This is also another place where a comparison to Drupal is too easy and, to be honest, not totally fair. Drupal’s strength is in its user and permission handling. There’s really very little you can’t do with the right roles and permissions. I’ll be the first to say that this level of configuration ability leads to **very** annoying issues and oversights but, in the end, I really couldn’t think of a much better way to do it.

WordPress’s user system works great for what it is and I’ve been able to theme and hook my way towards some pretty creative adaptations. That said, I can think of a lot of places where it falls short.

First, AOL? Jabber? Really?

But, along those lines, why can’t I add user meta fields like custom fields on content pieces? I can create the form and save them, of course, and that’s great but it should be as easy as just tacking on a field.

Going back to the Drupal comparison, I’d really like to have much better control over the user permissions, that would make all the difference in the world for user-contributed sites.

Better exporting/importing
--------------------------

I do a lot of migrating from one server to another, one host to another, one version to another. Moving WordPress comes down to a decision: export/import using Tools in WordPress or just copy the database over. Copying the database is the quickest way, of course, and the easiest way to make sure you get absolutely everything. Copy all the files, copy the whole DB, all done.

The problem I find is with installs that have been around for a while or managed by someone who added lots of different plugins. These plugins can create a LOT of weight in the database for no good reason. I’ve seen stat counters that **add one database row for every visit**, leading to installs with literally hundreds of gigabytes of extra weight. I’ve also seen content plugins that add 20+ rows to the meta table for each incoming post.

There are coding conventions to help with this but, in the end, if you activate and use a plugin for a while and do this several times over a year or more, there’s junk in that database. A recent migration cut 100 MB out of the database with no user or admin-facing data lost. That’s insane.

So I try to use the XML exporter on a regular basis. This generally works fine but it’s missing:

- Links
- Widgets
- Admin settings

Also, media attachments can be tricky. If you copy the while uploads folder over, the site works fine, no broken links, but the galleries on the posts themselves are lost unless you download and attach through the import process which doesn’t work if you’re moving from a local install to a live one.

This is one of those features that is half-way there, which makes it a great candidate to fix!
