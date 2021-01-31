---
title: "Become A WordPress Developer Overnight After 4 Months of Work"
layout: post
excerpt: "This is a summary of an email I sent to someone who wants to get into creating custom WordPress themes and plugins. I've been doing this for over 7 years now and would like to think I have something interesting and helpful to say about this. "
date: 2015-03-23 00:27:39
modified: 2016-11-22 17:56:13
permalink: become-a-wordpress-developer-overnight-after-4-months-of-work/index.html
tags: ["Development", "Personal Development", "WordPress"]
featured_img: /_images/2015/03/new-123-150x150.jpg
wpid: 2428
---


This is a summary of an email I sent to someone who wants to get into creating custom WordPress themes and plugins. I’ve been doing this for over 7 years now and would like to think I have *something* interesting and helpful to say about this. I definitely welcome your comments and feedback on this list, particularly if you’re a self-taught developer working in the industry.

- - - - - -

So, very long story as short as I can make it, there are 4 things you absolutely need to have to create sites in WordPress:

1. Knowledge and understanding of HTML (not tons to learn here but critical)
2. CSS (tons to learn here but you can get by without knowing everything; this will likely be the most frustrating to obtain)
3. Basic understanding of PHP and how it works
4. Basic understanding of WordPress APIs and how to find the answers you need

You’ll notice that JS is excluded here. I do that because you can, for the most part, do everything you need without JS at first and it’s important that you know how. JS is definitely the lingua franca for the internet but it can be very confusing, especially without a good understanding of how to program and the DOM in general.

Here’s the best advice I can offer you for learning everything above:

- Expect frustration, for a long time. You’ll get caught up over and over, you’ll bang your head against the wall because of simple things, and you’ll feel like an idiot. YMMV but it took me a good 3-4 years before I wasn’t tripped up on the basics regularly.
- Approach every problem with the understanding that  
  **you** did something wrong, not that there is a bug. If you assume that the error is in your code, you’ll be right at least 95% of the time.
- On that note, get very good at debugging. You will create a lot of bugs, less so as you get more experienced but you’ll never stop making them completely. Stay humble, stay patient, stay vigilant, and keep learning. The worst thing you can do is let the problems you create try to tell you something about yourself (i.e. you made a dumb error so you are dumb). You will do some really dumb stuff and you’ll do it on a daily basis. As long as you’re accountable for your errors and learn something each time, you’ll do fine.
- Read the documentation, always. I should have learned to do this long before I did. Just take the time and read it, especially if you’re having an issue with something. In a similar vein, read the code you’re working against, if you can. I’ve learned a lot from the WordPress Codex and tutorial posts but everything you need is right there in wp-includes and wp-admin. If you’re using a WordPress function or filter or hook, dig into the function you’re using, you’ll learn a lot.
- Do your best to understand the “right” way to do everything. If it worked but you don’t know why, it’s both likely to bite you in the ass and it’s not going to be repeatable later. “Right” is, of course, relative and you open the door to a lot of opinions on this topic. “Right” just means you’re doing things in a coherent, secure, performance-minded, and future-proof way.
- Never use w3schools.com as a reference. It’s out of date, incomplete, and terrible. Mozilla’s MDN has the functions documented but is far more complete. Eventually they’ll be at the top of the Google rankings but, until then, make an effort to find it.

Onward!

### HTML **&amp; CSS**

I’m combining these two together because they’ll serve you well forever regardless of what platform or language you land on. I would start here before you ever touch PHP/WP code so that you’re not hamstrung by the fundamentals down the road.

Here are a few good resources I’ve found online to start with for HTML and basic CSS:

- [CodeAcademy’s basic walk-through](https://www.codecademy.com/learn/paths/learn-how-to-build-websites) – this is definitely step 1. Go through all the exercises and, if you already know it, still review.
- [Shay Howe’s learn to code HTML &amp; CSS](http://learn.shayhowe.com/html-css/) – this guy writes excellent tutorials
- [MDN’s HMTL resource](https://developer.mozilla.org/en-US/learn/html) – MDN is excellent for JS so I have to assume they’re the same for HTML. Lots and lots of information here, the more you get through the better. **Edit:** MDN has a “[Learning the Web](https://developer.mozilla.org/en-US/Learn)” starter page that looks great.

Get through those 3 and you’ll be in excellent shape for HTML, probably better than 80% of the developers out there.

I would recommend moving onto learning about the DOM because it’s very much related to HTML. This starts to lean into JS, which is fine, but it will help you solidify what you learned about HTML.

- [What is the DOM?](http://css-tricks.com/dom/) – great initial primer
- [MDN’s intro to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) – quite technical but not long

So, now you know HTML through-and-through and you’ve been exposed to CSS. Time to get a little more in-depth with it.

CSS is a weird, weird language. It does a lot of things that don’t make a lot of sense and is interpreted differently by different browsers. You will have many hours of frustration with it but that’s OK. Try to re-frame out of hating CSS because (1) it’s important to know and (2) not many people can do it really well. It’s a critical skill to have.

Here are a few good resources:

- [CodeSchool’s CSS class](https://www.codeschool.com/courses/css-cross-country) – I know, goofy intro music but a well-done tutorial. I don’t know how far it will let you go for free but, if you’re inclined to pay, these guys do a great job
- [another Shay Howe resource](http://learn.shayhowe.com/advanced-html-css/) – this is the next level after the one linked above. Finish this off and you’ll be ahead of me

Things I would highly suggest when writing HTML and CSS:

- Always use classes for styling and ids for JavaScript. Since we’re skipping JS for now, this means you’ll pretty much never use an id attribute. This is fine.
- I would suggest using dashes for your classes rather than underscores or camelCase.
- Learn you some Sass at some point. Bare-bones CSS is annoying to write and maintain. Sass is the best pre-processor out there (IMHO) and it will, once you get used to it, save you an enormous amount of time. I use probably 20% of Sass and I don’t leave home without it.
- If in doubt, validate. [HTML validator here](http://validator.w3.org/),  
  [CSS validator here](http://jigsaw.w3.org/css-validator/)
- Write in a text editor for a while so you have to do all the work. Without the basics, you’ll be lost if you don’t have your editor available or have to code on a server. After a while, look into an IDE. I highly recommend PhpStorm, makes me much more productive.

### **PHP**

PHP is not a hard language but it’s also a little wonky sometimes. This works in your favor, for the most part, because it’s intuitive up until you’re running into hard problems.

The first thing to understand about PHP is that it’s interpreted by a server. When you load a WordPress site for the first time, the server opens up the index.php file and runs through the code to figure out what to do. In order to write and execute PHP, you need to have a local server up and running. Best/easiest option for Mac is  
[MAMP](http://www.mamp.info/en/).

Once you get that up and running, you should be able to add/edit in index.php file in the document root (MAMP will show you where that is) to add the following:

<span style="font-family: monospace, monospace;">&lt;?php</span>  
<span style="font-family: monospace, monospace;">echo ‘Hi Josh’;</span>

Load that in your browser (likely at localhost:8888) and celebrate. I’m not sure how much further to get into the basics but if you get stuck getting a local environment running, that should be the first thing we cover.

Here are a few basic resources for learning PHP:

- [CodeAcademy](https://www.codecademy.com/learn/learn-php)
- [Excellent basic reference](http://learnxinyminutes.com/docs/php/) – the entire thing is *in PHP!*

Tips and tricks:

- “Learning PHP” is actually just learning how to program in a specific language. Since you’re starting at the beginning, understand that you’re learning how to program  
  **and** learning PHP at the same time. Most of what you learn will be applicable to all other languages, like data structures, loops, functions, and objects. Different languages handle them differently but the key is to understand the concept behind what you’re learning, not just how to do it.
- Make sure error reporting is on (Google it) every time you develop. If you’re doing it in WordPress, make sure you have <span style="font-family: monospace, monospace;">define(‘WP\_DEBUG’, TRUE);</span> in your wp-config.php
- I would highly suggest picking up a big, heavy book and working through it completely. There’s no better way to learn this than hands-on. Well reviewed ones  
  [here](http://www.amazon.com/gp/product/1590597311/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1590597311&linkCode=as2&tag=jocahe-20&linkId=6JA6A6QW6AQD7X3O) and  
  [here](http://www.amazon.com/gp/product/0672329166/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0672329166&linkCode=as2&tag=jocahe-20&linkId=5AKLTGAJ55SA2IZ2)
- Don’t be fooled by thinking you can just hop into WP and get it. I learned PHP via WP and, looking back, that was not the best way to do it.

### **WordPress code**

So you’ve slogged through all of that and you now should be able to build your own website in PHP that does something dynamic (vague, I know). Now we dive into WordPress.

WordPress is basically just a bunch of stuff that’s been done for you. There are hundreds (thousands?) of functions you can use to make your life easier, it’s just a matter of finding which ones. The key in WordPress development is to  
**do things the “right” way**. You shouldn’t have to do much hacking to make it work.

Here’s the track that I would take:

- [The WP Codex Theme Development page](http://codex.wordpress.org/Theme_Development) – lots and lots of information, read it all the way through, create your own theme during, and try out  
  *everything* they’re talking about
- [Theme Developer handbook](https://developer.wordpress.org/themes/getting-started/) – I helped contribute to this, fairly complete and vetted by the people who make WordPress
- [Plugin developer handbook ](https://developer.wordpress.org/plugins/intro/)– what you learn about plugins will apply to themes and vice versa
- [Coding standards](http://codex.wordpress.org/WordPress_Coding_Standards) – get these in your brain the sooner the better

There is a **ton** of information in those pages but it’s all part of the skill set.

Here are a few rules of the road:

- Never edit core files ever, this goes for WordPress core and plugins. There’s not one time I’ve ever needed to do this (though many times, in the past, where I thought it was the solution)
- It’s more likely that there is a built-in WordPress function, hook, or filter that does what you need. Google is your friend. I learn about new actions and filters daily, just by assuming that there is one I can use and finding it. Oftentimes this is by reviewing the PHP for the function I’m using.
- It’s very rare that you need to write MySQL code. If you’re reading a tutorial or StackOverflow answer that includes SQL queries, there’s probably something built-in you can do. This isn’t a rule but a good guideline.
- Speaking of which, be very wary of what you read out there. StackOverflow is usually good and you can read criticism in the comments. I’ve found code snippets to be, at most, about 50% accurate in terms of doing things the right way.

There are so, so many others but these are the ones that come immediately to mind.
