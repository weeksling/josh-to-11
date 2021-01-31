---
title: "8ninths Site Rebuild"
layout: post
excerpt: "Just in time for an announcement by Microsoft about their HoloLens project, we launched a complete site rebuild for 8ninths, focusing on their VR and AR capabilities. "
date: 2016-03-30 03:25:28
modified: 2016-11-02 22:10:59
permalink: 8ninths-site-rebuild/index.html
tags: ["WordPress"]
featured_img: /_images/2016/04/8ninths-logo-150x150.png
wpid: 4402
---


> The project was challenging due to a condensed timeline and hard launch date. We had to release the website in coordination with the launch of our Holographic Workstation project with Microsoft HoloLens, and also to support inquires about our Mixed Reality and Virtual Reality services. The stakes were high and it came as a great relief to have such a seasoned professional help us with the development.
>
> *– William Lai, 8ninths President*

Designing and building your own stuff is tough, trust me. There is a lot of internal pressure to get it perfectly, exactly, thoroughly correct. Even if you’ve built and designed 1,000 sites before, your own will always be the hardest.

8ninths is an agency here in Seattle, WA that is expanding their offerings into products and services in the Virtual Reality (VR), Augmented Reality (AR), and Interactive Design space. The official “launch” of this expansion was an announcement by Microsoft about their [Holographic Workstation](http://8ninths.com/8ninths-develops-holographic-workstation-citi-traders-using-microsoft-hololens/), designed and developed for Citi. The launch of the site needed to happen in concert with this news release.

The design team at 8ninths is, in a word, fantastic. I worked closely with them to determine what was possible within the constraints of mobile, unknown browser versions, and realistic performance expectations. The site had to look great across all devices and viewport sizes and would be given a thorough cross-browser check before launch.

![8ninths-home-iphone](/_images/2016/03/8ninths-home-iphone.jpg)

The hard part here is somehow giving a hint at the kind of VR and AR experiences they build using a flat medium, like a web browser. To the end, we:

- Focused on wide, full-wide rows to expand across any screen size
- Built viewport-height content containers (with a Sass polyfill for misbehaving iOS 7 devices) with image and video backgrounds
- Where possible, broke out of content containers with images and videos to hint at their “out-of-the-box” approach

But the design was not the only important piece of the puzzle. Because 8ninths is also a web development agency, the construction needed to modern, easy-to-maintain, and put their best foot forward.

I started with a white-labelled version of my [Allons-y starter theme](/another-wordpress-starter-template/), worked in Bootstrap in SCSS (that’s the framework they are familiar with) using extends rather than classes in HTML, and used SVGs for all non-photo graphic elements. We’re using [a technique from Vimeo ](https://vimeo.com/forums/topic:278001)for the background videos along with some JS calculation to get it centered on all devices.

![8ninths-homepage](/_images/2016/04/8ninths-homepage.jpg)

The team and I stayed focused during the last week before the launch, adding a few last minute additions and getting every detail just right for a potentially once-in-a-company’s-lifetime press release. After a thorough round of mobile and desktop cross-browser QA, we launched the night before the announcement with zero issues.

It was a pleasure to put together such an impressive design for such an impressive team of people. A big congrats on the launch and the announcement!

> It was an absolute pleasure working with Josh on the development and launch of our company’s new website. We couldn’t have asked for a better outcome.
>
> *– William Lai, 8ninths *President**
