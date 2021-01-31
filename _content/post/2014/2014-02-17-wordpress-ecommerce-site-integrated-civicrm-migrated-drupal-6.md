---
title: "Redesign, Drupal migration, and WooCommerce to CiviCRM Integration"
layout: post
excerpt: "A massive undertaking: migrate a popular eCommerce site from unsupported versions of Drupal and CiviCRM to WordPress. Challenge accepted!"
date: 2014-02-17 23:16:45
modified: 2016-10-27 20:14:39
permalink: wordpress-ecommerce-site-integrated-civicrm-migrated-drupal-6/index.html
tags: ["WordPress"]
featured_img: /_images/2014/02/Screenshot-2014-11-18-15.16.43-150x150.png
wpid: 3618
citation: ""
---


> Working with Josh is a total joy. He makes my life so much easier. He’s able to juggle a variety of time sensitive projects, even when our staff struggle to stay on top of it all! He’s automated a lot of the way in which our CRM and website speak to each other, which has consequently saved us hundreds of staff hours that otherwise would have been dedicated to manual data entry.
>
> *– Kellen Braddock, Business &amp; Operations at Hugo House*

Hugo House, is a non-profit writer’s group located in the Capitol Hill neighborhood of Seattle. Well-known among local writers, Hugo House is a valuable resource staffed with caring, talented staff.

*“Hugo House is a place for writers, with a concentrated focus on helping anyone who wants to write. We offer readings, classes, book launches, workshops, teen programs, consultations with professional writers, and much more.” [About Hugo House](https://hugohouse.org/about/)*

Armed with a budget and a strong desire to upgrade their web presence, Hugo House came to Monster Design in 2012 to create a new look and improve their online platform. The original site was built in Drupal 6 and integrated with an old version of CiviCRM. The site sold classes and managed student records but was plagued with performance issues (pages, at times, took close to a minute to load), had a number of “ghosts in the system” (emails wouldn’t go out, content would be lost), was very difficult to navigate, and did not reflect the kind of creativity and talent that they fostered.

![hugo-house-original](/_images/2014/02/hugo-house-original.png)

Working with the on-staff technical contact for the site, we recorded the functionality that was being used, what was not, and what needed to be added. The main concerns for Hugo House were:

- Improve the student user experience by adding a cart functionality for purchase and smoothing out navigation and performance issues
- Cut down on the number of manual actions that staff needed to take for core business operations
- Improve the content management experience
- Keep their detailed financial reporting in CiviCRM
- Update their look and feel completely and make the site mobile-friendly

In the end, instead of upgrading Drupal (which was on the table), we chose to migrate all relevant content and current users to WordPress and build out a CiviCRM API wrapper for WooCommerce to use. **Easier said than done.**

> My favorite part about working with Josh is how easy and stress-free it is. Because website and database problems tend to be so high stress, I cannot emphasize Josh’s patience and urgency enough. He cares about making our organization successful. Through troubleshooting, he has saved our organization countless hours of staff work time, and has always been willing to define and identify issues, systems repairs, and what we can do to improve as a staff when it comes to our website and database.
>
> *– Richard Chiem, Finance &amp; Evaluation*

For the migration, I wrote up a migration scheme – what content in Drupal becomes what content in WordPress and how it will be redirected – and built the script using WP-CLI. This was the largest migration I had done to date but WP-CLI made the whole thing very straightforward. Posts, pages, and events were mapped to similar content types in WordPress and user and their profile data were passed over as-is.

![wp-cli-drupal-migration](/_images/2014/02/wp-cli-drupal-migration-1.png)

The CiviCRM wrapper, however, was a whole different story. What started as a relatively simple concept ballooned into a massive component of the project. Hugo House uses CiviCRM to track everything and report financial data to the IRS so accuracy was paramount for anything involving money. We specced out what needed to sync to CiviCRM and where in WordPress it would tied to:

- New users through core wp-login.php form and checkout process =&gt; New contact in CiviCRM matched to the WordPress user
- Profile update in WooCommerce or during checkout =&gt; Find and update contact in CiviCRM
- Class product creation or update =&gt; Create or update a class with the same data in CiviCRM, link to WordPress product
- Class purchase =&gt; Price and registration recorded in CiviCRM against the correct user
- Donation =&gt; Contribution recorded to the correct contact
- Membership purchase or upgrade =&gt; Start and end dates along with membership level recorded to the correct contact
- Newsletter sign-up =&gt; Add correct contact to the email newsletter group managed in CiviCRM

Each one of the actions above, and more that aren’t listed, were carefully mapped to WordPress hooks, then tested over and over using as many different transaction edge cases as we could think up. Post-launch, I’ve done a number of improvements on this wrapper including:

- Better contact finding and syncing
- Integrating coupon and discount processing as separate transactions
- Better membership creation and renewals

**A quick note about CiviCRM as I’m reminiscing** … If you had asked me right after this launch whether I would use CiviCRM ever again I would say “NO! RUN AWAY!” It was difficult to get installed locally, the upgrade process from 2.x to 3.x took close to 4 hours each time and had to be done 6 or 7 times to get it right, and the API seemed hopelessly complex. Now that I’ve been working with it for almost 3 years, I’ve actually grown kind of fond of it. The core contributor team is very skilled, responds to bugs quickly, and created solid unit test coverage. It’s very rare that we find an actual bug in the software, it’s usually user error (sometimes caused by thin documentation). So, if you expect to use a lot of its capabilities and have a competent developer and managed hosting, I would consider it. Just avoid sending lots of emails out through the mailing system as the stat tracking will add hundreds of megabytes to your database.

![Screenshot 2014-11-18 15.16.43](/_images/2014/02/Screenshot-2014-11-18-15.16.43-1024x993.png)

In addition to the 2 heavy, technical tasks, we also:

- Built a great-looking, totally responsive theme including many different custom layouts for different pages
- Customized the checkout page to allow customers to opt in or out of email and post mail marketing, give feedback to the staff when donating, and purchase classes for others
- Created a system for products that allowed classes to be listed but not purchased, purchased only by members, or purchased by everyone

The site launched with minimal issues and Hugo House saw an immediate 20-25% increase in purchases compared to the year previous with no major change in marketing efforts. The staff was excited about all the new features WordPress brought to the table for content management and students were enjoying the new, streamlined, and fast front-end experience.

Since the launch, I’ve added a number of additional features to make the site an even better resource for staff, students, and teachers, including:

##### “Inventory” syncing

The classes being sold on the site have a limited number of seats for each one. Originally, WordPress would stay in sync with CiviCRM by updating the number of registered students at checkout. Hugo House staff, however, also processed class registrations manually through CiviCRM and would have to keep the class inventory up-to-date manually. I added a registered student count sync that happened on cart addition, checkout, class update, and automatically at night to make sure this number was the same in both places.

##### Class records for teachers

![hugo-house-teacher-account](/_images/2014/02/hugo-house-teacher-account.png)

One major pain point for coordinators at Hugo House was keeping teachers updated on their classes registration process and providing student lists. This was all done ad-hoc and created a big workload for staff who wanted to do everything possible to support the teachers. We created a special section of the user profile for teachers that would show upcoming and archived classes, along with the students who had registered so they could stay in contact.

##### Automated processing

Classes become available to members and the public at large at certain times based on their start date. At launch, this availability had to be manually adjusted at specific times by staff. I added a wp-cron process to check the start date of active classes each morning and adjust the class availability. This process also turns off class registration once the class has started.

##### CSV class importing

Every quarter, almost a hundred new classes are added to the site for purchase. This was handled manually at first, which was a massive, tedious job. After a few quarters of this, we started to use the repo plugin CSV Importer, which handles basic class content as well as the many custom fields. This worked relatively well but would break if there were any strange characters, like “pretty” quotes and em dashes. I extended the plugin, [and released it](https://github.com/joshcanhelp/wp-csv-importer/), to allow users to select character encoding and added a hook to allow post-import processing.

##### Gift certificates

![hugo-house-gift-cert](/_images/2014/02/hugo-house-gift-cert.png)

WooCommerce includes a coupon functionality which is great for one-time discounts but Hugo House wanted to offer online gift certificates to be purchased the same way as classes and memberships. We use the WooCommerce Smart Coupons plugin to handle the purchasing side of things and extended the CiviCRM wrapper to record the purchase and redemption of gift certificates separately in the financial reports. Gift certificates are emailed to the purchaser to give to the lucky recipient so purchases are added to a processing queue and an admin is notified regularly if this queue needs to be processed.

> \[Josh is\] fast and quick to inform. If we have a website problem, I know I can completely trust Josh to help me find a solution, and he always does.
>
> *– Richard Chiem, Finance &amp; Evaluation*

> Josh is always willing and happy to explain system repairs and work with us to vision improvements. I wholeheartedly recommend Josh to any prospective clients.
>
> *– Kellen Braddock, Business &amp; Operations at Hugo House*
