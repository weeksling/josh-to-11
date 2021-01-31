---
title: "Semi-eCommerce Site for a Local Composites Distributor"
layout: post
excerpt: "This site was a partial migration from a custom PHP and MySQL application that was in dire need of an update. Collaborating with a talented designer, I built a site housing almost 400 products and dominates search ranking for high-value, niche terms. "
date: 2015-08-19 19:19:16
modified: 2016-10-20 16:43:59
permalink: semi-ecommerce-site-for-a-local-composites-distributor/index.html
tags: ["WordPress"]
featured_img: /_images/2015/08/pacific-coast-composites-logo-150x150.png
wpid: 3847
---


> Working with Josh has been an absolute pleasure! He caught on very quick to our vision of what we wanted for a website. When we were initially quoted, we were given timeframes for certain segments of the website completion and he met every timeframe we were given. That in itself is priceless!
>
> *– Greg Fochtman, Sales Manager*

Pacific Coast Composites (PCC) “stocks and distributes advanced composite materials certified for quality requirements.” What sounds, at first, like simple repackaging is, in reality, a government regulated and heavily monitored process. Materials need to be held in specific temperature ranges while being shipped all over the world, buyers need to be certified and vetted, and everything needs to happen quickly while expensive airplanes and machinery sit idle, waiting to be repaired.

The PCC team, from the first meeting, were friendly, helpful, straight-forward, motivated, and organized. They had been through a number of disappointing experiences with creatives and developers and were long-overdue for a site redesign. They had an idea of what they wanted – professional, easy to navigate, easy to update, and on-par with their Fortune-500 clients – and needed major help getting there.

What I really liked about this project, besides everyone I met, was that information architecture and clarity of information was paramount. The final, polished design was secondary to how the site was structured and how it functioned. This means that wireframes, my close second favorite part of the process, would be essential and account for the majority of the design work needed.

![PCC_old_site](/_images/2016/03/PCC_old_site.png)

As we talked about the site in it’s original state, I discovered a number of troubling things:

- The site required their admin to directly update the MySQL database with new values, making updates slow, painful, and prone to issues. I showed them a typical WordPress admin screen and they were very excited to have the power to change virtually everything that was displaying to customers.
- The URLs were built with multiple parameters and ID numbers – like index.php?prod\_id=765&amp;cat=23 – making their links unfriendly to search engines and site visitors.
- The site was showing different versions of the site based on the user agent so search engines would see a page packed with keywords while the site visitor did not. This was constructed before these kind of techniques were being punished so this method flew under the radar for many years.

Our work was cut out for us and the timeline was tight but we were all excited to make big, sweeping, positive changes to a major source of new clients and revenue.

Once a spec was worked out, I started on the wireframes while a member of the PCC team started the herculean task of reviewing each and every one of almost 400 products in their database. What we needed to create was a CSV to import everything using a modified version of a great WordPress plugin called, appropriately, CSV Importer. We made sure all numbers were saved separate from their units so metric system conversion could be done on-page. We also needed to import and attach data sheet PDFs and a product image during the import.

![PCC_import_sheet](/_images/2016/03/PCC_import_sheet-1024x665.png)

We wanted the wireframes to describe about 80% of the look of the site so that a final layout would be used as a general guideline for all pages rather than a pixel-perfect representation. It would also help build the responsive view, which would be done entirely in-browser. Working closely with the PCC team, we came up with key places that improvement could be made:

- Moving people to specific products and product listings quickly from all sections of the site
- Making the call to action, a “Request Pricing” button (explained below), clear and available for all product views, single display and listing
- Promote the ability to save contact information, previous orders, and commonly-requested products
- Upsell valuable services like kitting and slitting (additional preparation that would save their customers time)

We also discovered some “nice to have” options that would help both customers and the PCC sales team:

- A more accurate site search that keyed off of custom data fields managed on the back end; we also added functionality to track on-site searches that produced no results so the product team could determine what products they needed to add
- Sorting product listings by popularity or date added, depending on the view being generated
- Recommended products listed on the single display, manually curated by the site admins.
- Better notification of orders, new accounts, and profile information changes using custom, branded HTML emails
- Serve the site over HTTPs to protect both visitor and product data
- Admin screen analytics for carts created, carts submitted, and conversion rate over rolling periods of time

One interesting component of this site was this idea of “semi-eCommerce” that I mentioned in the title. Product specifications and freshness must be confirmed before an order can be placed. and certain materials can’t just be sold to anyone online. As such, we needed a “shopping cart” that would function like any other but without the ability to pay. Customers would add products to a cart with specific quantities, then that list would be sent to the sales team to follow up immediately. This simplified things a bit by excluding the need to setup a payment gateway but meant that everything else needed to be built from scratch.

The wireframes I created ended up being much more complete than they usually are, partly because I knew the idea of “low fidelity design” would be new for PCC. I often encounter resistance to what is seen as an “ugly” version of a new site. That said, because of the timeline, it was critical for me to be able to work on the import process, admin UI, and pricing request functionality while the comps were being created. The final document was 14 pages describing all the visitor-facing page templates that were being created. A few examples are shown below, [the whole document can be seen here](https://www.dropbox.com/s/oyt1jnbnljcpb3p/PCC-AllWires-FINAL-05272015.pdf?dl=0).

- - - - - -

**Home:** wireframe

[![PCC_wire_homepage](/_images/2016/03/PCC_wire_homepage-230x300.png)](/_images/2016/03/PCC_wire_homepage.png)

**Home:** complete

[![pcc-home-final](/_images/2015/08/pcc-home-final-326x1024.png)](/_images/2015/08/pcc-home-final.png)

- - - - - -

**Product category:** wireframe

[![PCC_wire_product_listing](/_images/2016/03/PCC_wire_product_listing-267x300.png)](/_images/2016/03/PCC_wire_product_listing.png)

**Product category:** complete

[![PCC-category](/_images/2015/08/PCC-category-547x1024.png)](/_images/2015/08/PCC-category.png)

- - - - - -

**Single product:** wireframe

![PCC_wire_product](/_images/2016/03/PCC_wire_product.png)

**Single product:** complete

[![pcc-single-product](/_images/2015/08/pcc-single-product-1024x984.png)](/_images/2015/08/pcc-single-product.png)

- - - - - -

**Request pricing:** wireframe

![PCC_wire_request](/_images/2016/03/PCC_wire_request.png)

**Request pricing:** complete

[![pcc-request-pricing](/_images/2015/08/pcc-request-pricing-709x1024.png)](/_images/2015/08/pcc-request-pricing.png)

- - - - - -

With the functionality documented and agreed upon, I turned my attention to the site build. Besides all the additional functionality we were adding, I needed to retain:

- **Site speed:** The original site was file-system-based PHP application sitting on top of a custom MySQL database. Queries were simple and the site was quite fast (except when the previous hosting provider choked). The site currently uses 2 simple plugins: one to build an XML sitemap and one to handle manual redirects. The rest is incorporated in the custom theme.
- **Search engine ranking:** The site received most of its traffic from organic search, sending visitors with specific, intensional queries. Some of these ended up on generic product listing pages instead of the specific product, though, and that needed to be corrected. I built a hard-coded redirect schema based on the previous database records and built all meta data – page titles, descriptions, social tags, etc – from key fields in the admin.
- **Ease-of-management:** The PCC team wanted control over all aspects of the site text and product management. This meant putting a number of fields in the back-end without creating a confusing experience for the team.

This build was one of the largest I had taken on by myself and was a very enjoyable process overall. The PCC team was receptive to suggestions, excited about what was coming, and provided great feedback. It was great to hear directly from them exactly what their customers needed, wanted, and expected from this site. It was clear that they made this learning a priority.

From start to finish, the site took around 3.5 months to launch. The response from customers was very positive and the team took to updating and managing content quickly. This is a great example of what happens when a talented, motivated, customer-focused business takes their web presence seriously.

> His knowledge of website analytics has placed our website within the first page in almost every product we carry, which in turn has improved our website traffic dramatically. In the first quarter of 2016, around 60% of all new accounts created in our system, derived from our new and improved website!
>
> *– Greg Fochtman, Sales Manager*
