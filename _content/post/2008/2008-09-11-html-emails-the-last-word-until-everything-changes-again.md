---
title: "HTML emails: the last word (until everything changes again)"
layout: post
excerpt: "Here is everything I know about creating HTML emails. This is the most boring and most useful post I’ve ever created by far."
date: 2008-09-11 18:00:49
modified: 2016-10-20 16:44:21
permalink: html-emails-the-last-word-until-everything-changes-again/index.html
tags: ["Marketing", "Email", "Throwback", "Yahoo"]
featured_img:
wpid: 233
---


Here is everything I know about creating HTML emails. This is the most boring and most useful post I’ve ever created by far. This is the aggregate of a lot of research and my own coding and testing. The title is bold, I know, but the information is solid.

I’m new to all of this… how can this article help me?
-----------------------------------------------------

That depends. If you’re not going to be doing any coding then this post will help you understand what kind of work has to go into HTML emails to make them consistent and, hopefully, effective. If you’re designing the emails but not creating them then you’ll have an idea of what you’re working with and what you’re allowed to do.

Why HTML emails?
----------------

HTML emails are preferred so they are more likely to be read. This is a bit subjective but the consensus on-line is that, as long as they are designed properly and sent responsibly, HTML emails are a great marketing tool.

HTML emails are, however, still hated by some so this is a case of “less is more.”

Emails from you are easily identified and can look similar to your home page. This allows for consistent branding across all mediums, if done correctly. More about this in the “style” section.

HTML emails connect users to the home page, literally through through links and visually through the layout and colors.

HTML emails are “cutting edge,” pardon the expression. They are impressive and colorful and are a major part of marketing campaigns in all industries. Sending out a properly-coded and carefully designed HTML email says that you’re current

HTML Emails Are Different than brochures
----------------------------------------

- Inconsistent across email clients instead of exactly the same
- Much less expensive to produce and create
- More difficult to get it “just right” (design limitations)
- Completely different medium and delivery
- Less mobile than email for most people
- Different timing (in the moment rather than later)

HTML Emails Are Different than Web Sites
----------------------------------------

- More email clients to consider than browsers
- Much less CSS support (mostly just text formatting)
- Also more difficult to get it “just right” (design limitations)
- Tables are recommended above CSS layout for emails
- Explicit code is the name of the game
- Less time and audience attention to get your message across

HTML Emails Are Different than text emails
------------------------------------------

- “Pops” better out of an email box
- More to consider than just the content (in addition to the content)
- Plain text doesn’t break down (plain text is as consistent as it gets)
- Accessibility concerns with HTML emails that don’t exist with plain text

The basics of HTML email design
-------------------------------

- Different email clients do different things and it’s hard to predict and test for everything.
- Concentrate on the lowest common denominator and make sure the content layout makes sense.
- Assume that images will be blocked and layout will break.
- Make sure the emails degrade gracefully. This means that alt tags need to be used, images should be used sparingly and table layouts should be as simple as possible.
- More time and effort should go into the motivation and the message rather than the visual design.
- Design is not a substitute for a relevant message.

Understanding email campaigns
-----------------------------

Permission is king. If you didn’t get someone’s permission before you sent the email then it is probably considered spam. There are a lot of companies out there just yelling their name and products and, at best, they’re getting lost in the chaos. At worst, they’re generating negative attention for themselves. When it comes to marketing, bad attention isn’t just attention, it’s a brand killer.

Quality above quantity of recipients. If you have a list of 5,000 people that may not have heard of you before and might have interests that match your product, you have little more than a bullhorn and a crowd. If you have a list of 150 people that know what you’re offering and want to hear more, you have a captivated audience. It’s easy to assume that all people need to hear is what you’re offering and they’ll come running. The fact is, if there’s any sort of negative connotation to your brand (for example, showing up unannounced in their email box), they’re not going to want what you’re selling. Strive for targeted lists of interested people instead of just bigger ones.

At the very least, your emails need to be relevant to your recipients. If someone signs up for a specific newsletter or a specific notification list, that does not mean they want everything that your institution can send out. Send less emails with better, more relevant content and you’ll see better conversion rates. In the same vein, if you can personalize emails, do it. Most HTML sending services allow you to input the names of your recipients (along with other variables) so take advantage.

Mass HTML email senders have been likened to a “loaded gun.” First, there’s nothing stopping you from spamming thousands of people, on purpose or accidentally. All it takes is one bad batch and your domain might get blacklisted from your recipients’ email clients. This is definitely a bad thing; getting blacklisted from Hotmail or Gmail means you’ve lost the ability to send to millions of people. The responsibility to send out relevant, targeted emails to the right people is yours.

A good thing to keep in mind, along with the other points so far, is that these bulk emails (or any emails) cannot be recalled once they are sent. It’s easy to shoot off an email to a co-worker or a friend and correct yourself later but it’s not possible with big email campaigns.

In the same vein, it’s important to test your emails in several different email clients. We test with Outlook 2007, Yahoo, Gmail, Hotmail, and the Windows Mobile 6 included email client. There’s no substitute for checking different email clients and your recipient list should give you a good idea of where to look. If you have home accounts with Cox or AOL, try these as well if you can. The best you can hope for is that all of the styles, images, and table layouts come through OK. The worst you should have is a broken design but text content that shows up legibly.

Last but not least, make sure you are up to date on the CAN-SPAM regulations. In a nutshell, here they are [from the FTC website](https://www.ftc.gov/tips-advice/business-center/guidance/can-spam-act-compliance-guide-business):

- It bans false or misleading header information. Your email’s “From,” “To,” and routing information – including the originating domain name and email address – must be accurate and identify the person who initiated the email.
- It prohibits deceptive subject lines. The subject line cannot mislead the recipient about the contents or subject matter of the message.
- It requires that your email give recipients an opt-out method. You must provide a return email address or another Internet-based response mechanism that allows a recipient to ask you not to send future email messages to that email address, and you must honor the requests.
- It requires that commercial email be identified as an advertisement and include the sender’s valid physical postal address. Your message must contain clear and conspicuous notice that the message is an advertisement or solicitation and that the recipient can opt out of receiving more commercial email from you. It also must include your valid physical postal address.

Basic HTML elements used
------------------------

#### p  
span  
img  
a  
table  
tr  
td

Basic tags used
---------------

#### style=  
width=  
align=  
colspan=  
href=  
cellpadding=  
cellspacing=

Basic CSS properties used
-------------------------

#### background-color:  
border:  
color:  
font-size:  
font-style:  
font-variant:  
font-weight:  
letter-spacing:  
line-height:  
list-style-type:  
padding:  
text-align:  
text-decoration:  
text-indent:  
vertical-align:  
white-space:  
width:  
\*font-family: this doesn’t work in gmail but there’s nothing wrong with adding it for the other clients.

HTML Email Layout
-----------------

Tables determine the layout. If you are not trained in table design, good for you, you’re on your way to being a great web designer. You do, however, need to have a solid understanding of them to build HTML emails.

No head, html or style tags are used as these are often stripped out by the email client before viewing. HTML editors might add this and, while it won’t cause any problems, it should be removed. Keep in mind, the big client that strips these is Gmail. If you’re not concerned about styles in Gmail, it is ok to use this element but make sure it appears WITHIN THE BODY TAGS, not before.

Be sure to close all HTML elements! Use an HTML checker like the one in PSPad to find errors easily.&lt;br /&gt; – Wrapper table should be used with a 98% width if a centered layout or background color is desired. Content section is a nested table inside the wrapper table. For full-width designs or left-justified designs without a background color, the wrapper is not needed.

For 2 or more columns, the “colspan” and “width” tags must be used together. Remember the spreadsheet model and add as many columns as you need with the first row of cells. Again, make sure to add a wrapper table if you want a background color or you want the design to be centered in the window.

Design for the preview pane of email applications. That means you’ve got about 500, 600 pixels tops for your email designs. Most email windows do not take up the entire screen (do yours?) and some people intentionally make them smaller. Make sure your main content section is slim, under 600 pixels, and that your logo, tag line, or another “grabby” piece of content is near the top-left corner. Some email applications, like AOL, allow for about 150 to 200 pixels to make sure your content will appear.

Styling your email
------------------

Simple CSS is widely supported and can be used in all HTML elements with a style tag. This is called “inline” styling and is the best way to apply CSS to an HTML file being sent. This is what I mean by “explicit;” all styling cues are added to each element individually. To style two different paragraphs the same, the same style tag and CSS properties need to be added to both. Keep in mind, sometimes the body styles don’t carry over; stick to colors and minor “throw-away” styles in case this element is tossed out.

Some sources recommend CSS shorthand to cut down on file size while others say that it should be written explicitly. Declarations like “margin: 0” are usually safe but it might be a good idea to spell out font declarations completely. This helps the design process down the line.

Use images carefully and correctly in your design. Pictures, icons, and headers are great but can easily become cluttered and bloat the size of the email. Turn down image quality and use images that enhance your design or draw attention where you need it. Also, never send an all-image email. Some email clients block images as a default so your message might be lost and/or might be marked as spam.

Make sure you always include the width and height in the image tag for every single image. This ensures the empty placeholder images don’t get stretched and completely throw your design. Also, store the email images on a web server, preferably in a folder separate from website images, for example, in /images/email not /images. And don’t delete them.

General notes
-------------

- link element not supported, style elements barely supported so use in-line styles to be safe.&lt;br /&gt; Since &lt;style&gt; elements are unstable, selectors are as well.
- 530px is a safe width for certain clients and certain preview panes (AOL in particular). Not including AOL, 600px is maximum.

Gmail notes
-----------

- Keeps only the HTML between the body and /body tags. Discards the rest.
- Removes any style element and its content, even if it’s within the body element.
- The font size is bigger in table elements, so you’ll probably have to force it with font-style
- Gmail removes CSS rules with the property height.
- Gmail removes CSS comments found inline.
- Gmail doesn’t allow the url() value and will completely remove a CSS rule that uses it.
- Gmail is one of the only email clients that does not use the font-family: property
- Images are blocked by default but alt= tags are displayed

Hotmail/Live notes
------------------

- Keeps only the HTML between the body and /body tags. Discards the rest.
- The style element and its content is preserved if it’s inside the body element.
- Hotmail will completely remove any CSS rule that uses a url() as its value.
- Hotmail removes CSS comments found inline.
- Hotmail does not block images by default but Live does

Yahoo notes
-----------

- Keeps almost intact the complete original HTML sent and puts it directly in a div. So if you had any of these in the HTML, they will be found in the middle of the Yahoo! Mail HTML: DTD declaration, comments, html, head, title, style and body elements, etc. But, the DTD declaration won’t be taken in consideration by the browser since it’s in the middle of the page, same thing for the title element;
- Will rename the body, meta and link tags xbody, xmeta and xlink, so they will be “disabled”. This means that no external stylesheet can be linked to the document through the link element.
- Be careful with style elements; when replying or forwarding this message, Yahoo! Mail will convert your style definition as plain text and your declarations will appear in the message.
- Does not block images by default

Outlook notes
-------------

- Outlook support varies greatly across versions; older versions have better CSS and HTML support  
  head, html, meta, style elements are removed.
- img alt= tags are removed so images that are not shown will not be replaced with text.
- 2003 and 2007 blocks images by default

AOL9 notes
----------

- “preview pane” is extremely tiny. Make sure to design your emails to peek out enough from the preview pane.
- HTML code needs an extra line break or two after the final /HTML tag, or you’ll see weird “equals signs” in your email
- Blocks images by default, alt= tags are not displayed

HTML coding sources
-------------------

[MailChimp HTML email guide](http://www.mailchimp.com/resources/guides/email-marketing-field-guide/)

[How To Code HTML Email Newsletters](http://www.sitepoint.com/print/code-html-email-newsletters/)

Word 2007 HTML and CSS Rendering Capabilities in Outlook 2007

[Optimising CSS usage for email](http://www.campaignmonitor.com/blog/archives/2005/08/optimizing_css_1.html)

A guide to CSS support in Email

Email marketing sources
-----------------------

[Email Marketing Strategies – Email Marketing “Must Dos”](http://www.emaillabs.com/email_marketing_articles/email_marketing_strategies_2006.html)

[How To Build a Basic Email Marketing Capability](http://www.reachcustomersonline.com/how-to-build-a-basic-email-marketing-capability/)
