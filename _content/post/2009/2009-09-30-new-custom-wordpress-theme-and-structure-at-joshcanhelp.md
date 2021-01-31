---
title: "New custom WordPress theme and structure at JoshCanHelp"
layout: post
excerpt: "I finally made the time to finish my site’s re-design and re-build. Part of me thought this would be a minor remodel with a new WordPress theme but, in the end, I re-did all of my page content and changed my whole organization."
date: 2009-09-30 20:00:56
modified: 2016-10-20 16:44:17
permalink: new-custom-wordpress-theme-and-structure-at-joshcanhelp/index.html
tags: ["Design", "WordPress", "About JoshCanHelp"]
featured_img: /_images/2009/09/the-related-150x150.png
wpid: 1108
---


I finally made the time to finish my site’s re-design and re-build. Part of me thought this would be a minor remodel with a new WordPress theme but, in the end, I re-did all of my page content and changed my whole organization.

I had two major goals with this site:

1. Showcase my design and WordPress talents better
2. Make it easier for people to find information [about me](/about/) and what I do

![the-related](/_images/2009/09/about-page-2009.png)

With this in mind, I sat down a few months ago and began writing out the plan for the site. I wanted an area to highlight work I’ve done for specific clients and a better representation of what I do. I wanted a simple, clean layout and to ditch the ever-present blog sidebar.

![contact-form](/_images/2009/09/help-page-2009.png)

After settling on a structure, I went to work in Photoshop putting together a design. For whatever reason, I always find it tough to design websites for myself. It’s tough to balance what you want to say with how you want it to look. It was my chance to do whatever I wanted but I was still constrained by business sense and usability. I think the combination of being able to say anything and do anything makes the process harder. Design is about constraint, art is about freedom.  

![](/_images/2009/09/joshcanhelp-network-2009.png)

After I had settled on a look, it was time to get in and work with the code. Here are a few of the highlights:

- Certain pages have a template that allows them to be appended with a list of posts from a particular category. For example, the page about Josh Can Help is appended with announcements and information about Josh Can Help in general. This is controlled by entering in a category when I write the page.

![the-related](/_images/2009/09/related-posts-2009.png)

- On each individual post page (on the left there at the top) there are share links for Twitter, LinkedIn, and Facebook, my three main social networks. When I create a post, I also create a bit.ly link which I put into a custom field. Then, the WordPress template takes that short link and adds it to share links for each of the services. The twitter share adds my handle and shortened text from the title of the page. Go ahead, try it out… no plugins! It’s also dynamic so old posts without this information won’t show the links. I debated whether or not I wanted to dynamically generate links from bit.ly but I figured this way I could track all shares from each article using that link in my account. I could also just as easily add in a different short link without much hassle.

![the-meta](/_images/2009/09/post-page-2009.png)

- Using information from [this article](https://www.trevor-davis.com/blog/wordpress-jquery-contact-form-without-a-plugin/), I made a contact form that validates inputs and can send the submitter a copy. It basically receives the information from the form then calls the same page to process that info.

![contact-form](/_images/2009/09/contact-page-2009.png)

Those are the main features with more to come. On the to-do list:

- Add navigation to the footer to make the site a little easier to navigate
- Figure out a way to ditch the post meta information on the search results page when pages match the results
- Straighten out styles for IE6 (sigh)
- Add more links to my network page
- Plug in the Lightbox code for the website images on my portfolio page
- Add bit.ly links to all my old posts
- Add a few more images to the content pages
- Add h1 tags for the main landing pages to improve SEO

![contact-form](/_images/2009/09/footer-2009.png)

Comments are appreciated!
