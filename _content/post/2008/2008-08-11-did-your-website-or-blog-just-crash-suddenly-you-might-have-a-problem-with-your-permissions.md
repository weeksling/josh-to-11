---
title: "Did your website or blog just crash suddenly? You might have a problem with your permissions..."
layout: post
excerpt: "Just recently, all the pages hosted on my account began to fall apart. I was getting 403 errors, missing graphics and styles, and pieces of code appearing randomly. It looked about as bad as it could get."
date: 2008-08-11 16:00:39
modified: 2016-04-03 02:33:18
permalink: did-your-website-or-blog-just-crash-suddenly-you-might-have-a-problem-with-your-permissions/index.html
tags: ["Hosting"]
featured_img:
wpid: 173
---


So I’m still mad at my web hosting company. Really mad. Just recently, all the pages hosted on my account began to fall apart. I was getting 403 errors, missing graphics and styles, and pieces of code appearing randomly. It looked about as bad as it could get and I was at a total loss about what to do with it.

Without going too far into detail, my hosting company was of absolutely no help to me whatsoever despite, in the end, this being a problem on their end (as far as I can tell). Long story short, my [.htaccess file](http://httpd.apache.org/docs/1.3/howto/htaccess.html) got messed up somehow and all the permissions on my folders and files were changed. Are you lost yet? I was too before some major Google research.

## What are hosted file permissions/attributes?

Each of your files and folders have a code attached to them to tell the server who gets to see them, write to them, and execute them. There are basically nine “yes or no” checkboxes that can be checked for each pile or folder on your webhost. Here is the permissions screen from [Filezilla](http://filezilla-project.org/):

![](/_images/2008/08/file_permissions.jpg "File permissions window in Filezilla FTP program showing 775")  
If you know what you’re doing, this can be a nice thing to know about. You can set individual permissions based on where the request is coming from and what the request is asking for. In the window above, you can see that the owner can do everything, the group the owner belongs to can to anything but people accessing the file from the outside (through the web page) can only see the file (Read rights) and work it do it’s job (Execute rights); they can’t write to this file/folder.

For your webpage to be functioning properly (I learned), the public permissions for ALL files that are touched by the page have to be at least on read. For a blog, like the WordPress instance you’re reading this on, the public permissions need to execute as well (to run the PHP script that this is written in). I learned a lot of this on the helpful (but not VERY helpful) [WordPress forums](http://wordpress.org/support/).

One night, this mystical .htaccess file in my root public directory (the main one) became ill, I guess, and vomited incorrect permissions arbitrarily over my site. The consequences of this were random files unable to be seen from the outside and, hence, broken websites. Files that described how the site looked (CSS files) and images became inaccessible, as did all of the files that make a blog do all the fun things it does. In the end, I went through each site manually and changed the permissions to the numerical value of “755,” the magical number (allows everything except write permissions for Group and Public).

## How can you tell if this happens to you?

Here’s what I was seeing…

### Your site starts giving “403” errors

The 403 error indicates that the file you’re trying to view is there but you’re not allowed to see it (it even says something about permissions in the error). If you haven’t done anything to your site and you start to see these errors randomly when you try to access your pages and/or sub-pages, you might be dealing with the same thing I was.

### Some things work, some things don’t

You can see your text and HTML formatting (order of text, heading formatting) but no images or colors or style. This means that the site is being accessed but other files are not. This kind of thing combined with a 403 error is a strong sign that your .htaccess went south and you have some work to do.

### Along with other weirdness, you’re getting “Internal Server Errors”

If you’re just getting an “Internal Server Error,” it might be indicative of a different problem but, combined with no styles and/or 403 errors all over, you’re seeing exactly what I was seeing and it’s time to take action

## Crap, I’m seeing all these signs… what next?

First and foremost, contact your host and get a trouble ticket started. If you have a responsive host, they can change the .htaccess back to what it was and hopefully correct the problem. If they are not responding or don’t know what to do (which is ridiculous, let me just say that) then you’ll need to get in there yourself. Can you FTP into your files on the host? If you don’t manage your own site, contact your webmaster and tell them you might be having permissions issues with your site. If you do, then get to work…

1. Using your FTP client, go to your root directory (the main one, probably named something like “html” or “public\_html”).
2. If your hompage is having style/color/image issues, look at the file attributes (in Filezilla, just right-click and select that option) of the .CSS file.
3. What you want to have is read rights for everyone, execute rights for everyone, and write access for the owner only (this is “755” level). If your stylesheet is not all allowing for the public to read it, you found the problem.
4. As long as everything in the main folder (and all files in all sub-folders) should be seen by the world, then just right click the main directory, type in 755 (or select the right options), pick the option to propagate the changes (or make them “recursive” through everything), and click ok. If there are certain files that need to stay unobtainable, you’re going to have to manually do everything. Just remember you can select all/several fiels at once and change their permissions together or use the recursive option to change the site one directory at a time.
5. If none of this is working, email me at josh (at) joshcanhelp.com and hire me as your webmaster!

Good luck out there!
