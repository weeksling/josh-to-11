---
title: "Brewery Site Framework for Craft Beer Branding Gods"
layout: post
excerpt: "In one of those &quot;meant to be&quot; moments, I met the founder and president of the mind-bogglingly talented craft beer agency here in Seattle, Blindtiger. Oceania (Oce for short) invited me down to the office to talk shop and it just clicked."
date: 2016-08-09 18:46:22
modified: 2016-11-22 17:54:59
permalink: craft-beer-wordpress-theme-framework/index.html
tags: ["WordPress", "About JoshCanHelp"]
featured_img: /_images/2016/08/Screenshot-2016-11-16-13.14.04-150x150.png
wpid: 4502
---


You never who who you’ll meet in preschool.

> As a design agency, we value partners like Josh who strive beyond execution and endeavor to improve the final product for our clients.
>
> *– Ryan Applegate, Senior Designer at Blindtiger*

In one of those “meant to be” moments, I met the founder and president of the mind-bogglingly talented craft beer agency here in Seattle, [Blindtiger](http://blindtigerdesign.com/). Oceania (Oce for short) invited me down to the office to talk shop and it just clicked.

The design team, lead by Ryan Applegate, were well-versed in WordPress but didn’t want to be hemmed in by lame theme frameworks or constantly fighting minor style changes. They didn’t want to start from scratch for each brewery they branded, creating an over-priced, completely custom site each time.

![I created literally nothing in or about the photo above. ](/_images/2016/10/Screenshot-2016-10-31-08.48.54-1024x502.png)I created literally nothing in or about the photo above.**Enter the custom WordPress site framework.**

Using wireframes for the first site we would build together, we created a spec that would cover the needs of most breweries they work with. This included:

- A listing of packaged and draft beers
- Location pages for single or multiple taprooms
- Integration with Digital Pour tap management software and beer locator
- Integration with Untappd
- Flexible page templates to build out custom pages
- Event listing
- Team member listing

We talked through how to build this in a way that would be easy to reuse in terms of functionality but allow the site to follow brand guidelines. In other words, we didn’t want to build a “website template,” we wanted a base platform of functionality we could skin completely differently for each client.

Ryan’s wireframe game is definitely on-point which made for really productive conversations about the layout should flow, how the wp-admin UI should be built, and how we could build each of these components once but reuse them on all the sites that followed.

![screenshot-2016-10-31-08-44-56](/_images/2016/10/Screenshot-2016-10-31-08.44.56.png)

About WordPress … Ryan was quite familiar with site management using WordPress but, because of a few recent, unfortunate experiences with what I call “WP-Admin UI Creep,” was hesitant to just default to WordPress. After getting a tour of one of his worst offenders (somewhere around 40 active plugins and 3 times as many top-level admin menu items as a plain install), I could see why.

The thorough wireframes were enough to start building out a sample user interface for brewery owners, managers, and marketers. I figured we could achieve everything we needed, outside of the true custom work in the parent theme, with a handful of plugins, including the always-capable Advanced Custom Fields (I’m still kicking myself for maintaining a custom meta field class for years instead of using this). With Ryan’s guidance in Trello, I built out the UI first to show that WordPress could do everything they needed with a clear and intuitive editing experience.

Custom page layouts can be made using the flexible content field, giving them lots of leeway to be creative but limited by brand guidelines for colors.

[![screenshot-2016-10-31-10-21-39](/_images/2016/10/Screenshot-2016-10-31-10.21.39-1024x585.png)](/_images/2016/10/Screenshot-2016-10-31-10.21.39.png)

Custom post types and taxonomies were used to create beer listings, food listings, and draft beer types that made adding new offerings very simple.

[![screenshot-2016-10-31-10-23-51](/_images/2016/10/Screenshot-2016-10-31-10.23.51.png)](/_images/2016/10/Screenshot-2016-10-31-10.23.51.png)

After seeing just a handful of the additional fields in action, Ryan agreed that WordPress would be the best choice for what we were trying to do here.

Working with a design studio as talented and approachable as Blindtiger is, of course, always a pleasure but what made this project stand out as one of my favorites in a long time was thinking through 2 key components:

### 1 – Ease of use and flexibility while preserving brand guidelines

How do we make content management for breweries as simple as possible while also giving them the freedom to express themselves? How do we do that in a way that keeps the brand guidelines intact?

There is no universal, easy answer here but our solution was to create a system of distinct templates for specific purposes combined with a flexible layout template for everything else.

The specific templates were:

- **Single beer display** – animated flavor profile, SVG size icons, hide/show data based on admin input

![](/_images/2016/08/3tTrfwDxQs.gif)

- **Packaged beer listing** – animated hover states for desktop and easy-to-scan layout for mobile, grouping by type with on-page navigation

![](/_images/2016/10/Screenshot-2016-10-31-11.16.50.png)

- **Events listing** – filter by type, perennial event listing for weekly unchanging ones
- **Taproom location** – Digital Pour tap management integration, Untappd listing integration, custom Google Maps styling
- **Beer finder** - Digital Pour location API integration, on-page AJAX interaction, link-to-search capability

![](/_images/2016/08/wqSD2TwYKV.gif)

These pre-built templates give the kind of functionality breweries need while giving Blindtiger explicit control over the user interface to avoid breakage.

Augmenting these are flexible pages that allow content listing however the site admins see fit:

- **Team page** – built with image and user listing blocks
- **Menu pages** – built with full-width image and food listing blocks

The brewery gets the flexibility they want and Blindtiger can still feel great about how their hard work on branding is displayed. **Win win!**

### 2 – Ability to re-use our work without looking like a template

One thing we all agreed on was that each site had to look unique; we weren’t selling a website template, we were selling brewery-specific functionality wrapped in a gorgeous brand that Blindtiger was creating. We wanted to save time with additional iterations but not at the cost of a cookie-cutter looking group of sites.

Ryan and I worked together in figuring out how this would work starting with the second site using the framework. We intentionally used very similar wireframe components so the functionality could be pulled from the parent theme. The final designs, however, were a world apart with a completely different look and feel.

For the child theme, I made some very deliberate choices to keep us as DRY as possible but retain flexibility:

- The child theme is built to pull all templates from the parent with minor overrides for, say, a different header navigation layout. This is, of course, what a child theme is for but it’s critical to pay attention to what parts are likely to be overridden, then make sure they can be accessed easily with hooks, filters, get\_template\_part(), and the correct path and URI getter functions.
- All JavaScript is modular and housed/loaded from the parent theme. Different combinations of features can be created, minified, and served up depending on what features a particular site has.s
- All CSS is written in BEM-style SCSS and stored entirely in the child theme. I created a starter child theme that has extends, variables, and mixins that can get reused when the project starts but there’s no fear of stomping on styles loaded elsewhere. Also, the single, minified CSS sheet keeps pages loading quick.
- SVGs are stored in the parent theme, for the most part, and can be over-ridden in the child theme where needed.

We had a great time working together to build this system and with one site launched, one site close, and one site in the works as of this writing, we’re honing our process and cutting launch time down drastically.

> Josh continually exceeds our expectations by delivering new ideas, solving problems and participating in the creative process. His work ethic and promptness help us stay on-time and on-budget.
>
> *– Ryan Applegate*

**Huge thanks to Blindtiger for a great couple of projects and many more to come!**
