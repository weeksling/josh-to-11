---
title: "Community and eCommerce Site for Massive Minecraft Community"
layout: post
excerpt: "8-month engagement to provide engineering, strategy, code review, pair programming, performance reviews, and security guidance."
date: 2016-06-11 22:55:47
modified: 2016-11-17 18:41:55
permalink: minecraft-community-and-ecommerce/index.html
tags: ["WordPress", "Community"]
featured_img: /_images/2016/06/80-1-150x150.png
wpid: 4617
---


> Josh’s WordPress experience, mentorship and acumen laid a solid foundation for this project and motivated a supportive and empowering work environment for the entire development and design team. It brought me great confidence knowing I could rely on Josh to help navigate such a complex project.
>
> *– Lindsay Shelmire, 8ninths*

This project started in November 2015 with a great meeting in a quirky building on Elliott Avenue here in Seattle, the old home of [8ninths](http://8ninths.com/). I was introduced to their team by a friend I met at Codefellows, [Kyle Warbis](https://github.com/UWarbs). He asked “hey, you know WordPress pretty well, right?” I said yes, and it lead to one of the longest, most fun projects I’ve ever been a part of with one of my favorite teams to date.

![8ninths-old-building](/_images/2016/11/8ninths-old-building.jpg)

The site that we needed to build was a social network for hundreds of thousands of users with ecommerce capability tied to a very popular Minecraft server. Some of the major features we needed to build:

- **Moderation** – online communities are notorious for harassment, trolling, and just general bad behavior so we needed special logging and blocking capabilities.

![screenshot-2016-11-02-16-53-01](/_images/2016/11/Screenshot-2016-11-02-16.53.01.png)

- **In-game validation and character skins** – user accounts on the site needed to be verified on the game server via a generated code and their player skin needed to show on the user profile and in the forums. In-game validation was custom MySQL against the production game database and the skins were pulled using [MCAPI](http://mcapi.ca/).

![screenshot-2016-11-02-16-57-00](/_images/2016/11/Screenshot-2016-11-02-16.57.00.png)

- **Custom shopping experience** – certain items are only allowed if you don’t have other items so players enter their name when they start shopping and they only see the items they are allowed to buy.

![screenshot-2016-11-02-17-02-13](/_images/2016/11/Screenshot-2016-11-02-17.02.13.png)

- **Performance** – thousands of users online, logged in and pulling complex queries makes a sysadmin nervous. We setup object caching with memcached and tested with siege.
- **Security** – gaming communities are notorious for being targeted so all code was reviewed before deploying, plugins were minimized, and a thorough upgrade and testing procedure was written to keep things as tight as possible.
- **Completely integrated user profile** – the base social networking features were handled with BuddyPress but we needed to tie in submitted tickets, game characters, and purchased ranks.
- **Custom forum experience** – the existing forums for this community were very active and worked a very specific way. Users can post with their character avatar and, if they have multiple, choose which one to use. There were also a number of custom controls, reply reactions like Buzzfeed, and topic grouping.
- **Help desk software integration** – site bugs, game bugs, feedback, applications … the small team had to handle a lot of incoming requests and basic email was just not working. We added custom forms on the site to submit tickets to Zendesk, handled back and forth in the user profile, and tied in notifications.
- **Responsive** – on top of everything, the site needed to be responsive!

We used an agile approach here, creating and assigning tasks in Jira for completion, then to me for code review and feedback, then to the QA team for testing, and finally to the staging server for the client to try it out.

The engineering tasks were fun to work on but what made this great for me was the team I was working with. I had a lead developer role on this project so I had the time to slow down and give feedback to 2 developers working on the project.

![whiteboarding_baby](/_images/2016/06/whiteboarding_baby.jpg)

Kyle and I did pair programming to solve the in-game verification MySQL queries and a number of WordPress environment and theming problems. The communication, both in-person and virtually through Slack and Jira, was excellent.

As of this writing, the delivered site was still being tested and iterated on.
