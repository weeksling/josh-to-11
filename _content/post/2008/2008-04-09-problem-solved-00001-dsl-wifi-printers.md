---
title: "Problem Solved #00001 - DSL, Wifi, printers"
layout: post
excerpt: "This customer called me to help him move his router, make sure wi-fi worked throughout the house, set up a printer with Vista (which was causing him problems), and possibly help him acquire a new desktop."
date: 2008-04-09 09:20:51
modified: 2016-04-01 03:48:57
permalink: problem-solved-00001-dsl-wifi-printers/index.html
tags: ["WiFi", "Hardware", "Throwback"]
featured_img: /_images/2008/04/2wire-1000hw.jpg
wpid: 10
---

This is your introduction to the major feature of this blog, the “Problems Solved.” I’ve told you that I’m Josh and declared that I can help but where are the goods? Right here, buddy.Every major project I finish (customer or my own) and every large even that I had a hand in will get a “Problem Solved” post, complete with it’s own number (I’m limited edition, FYI). Each call has it’s own nuances and various issues so, as you can see, the heading also gets a few words to describe the problem. The sub-headings in the posts will detail each problem (succinctly) and what the solution was, if any.

The personal value behind these posts should be clear: I’m interested in a chronicle of experience and a professional journal of sorts (I think those are synonymous). The value to the outside world is two-fold: you can see what kind of problems other people are having and you might just find a quick-fix to one of your problems. When I research problems on-line, I’m never frustrated by an OVERABUNDANCE of solutions.

On with the show…

### The set-up

This customer lives in a gorgeous part of Del Mar, CA in a pair of condos with his family and veritable zoo of domestic pets. He called me to help him move his router, make sure wi-fi worked throughout the house, set up a printer with Vista (which was causing him problems), and possibly help him acquire a new desktop.

### Sub-problem: home DSL network

The home DSL network was the main reason I was called in the first place. I’m very comfortable working with small wireless networks, wired or otherwise, so I figured there would be no problems. Silly me.

The piece of equipment he was using was a 2Wire 1800HG combination DSL modem and wireless router. I’ve had DSL before and never had any outstanding problems moving equipment and setting up networks so I neglected to print out any documentation. That was my first mistake (I’ll be posting on what I learned on my first customer call soon).

I unplugged the router, moved it upstairs, plugged it back in, and waited a moment. I was hoping for this:

![2Wire 1800HG wireless router](/_images/2008/04/2wire-1000hw.jpg)

I got this:

![2Wire 1800HG wireless router](/_images/2008/04/2wire-1000hw2.jpg)

I tried a few power resets and the reset button on the back with no discernible results. I started to panic (I was already a little nervous). I tried moving the router back to its original location with the same results. Because this customer was living in two different condos, I wondered if maybe the phone system was not setup correctly to allow the DSL router to be moved. Then, because I didn’t see a DSL filter on the phone line leading to the fax machine, I got the crazy idea that the whole house was wired for DSL filtering (so filters would not have to be attached to each phone).

![](/_images/2008/04/DSL_filter.jpg)

Yes, I was getting a little desperate.

### Moving a DSL router solution

What I did next was exactly what I was supposed to do but, since I did not have the documentation, I did not do it correctly and went through another hour of mucking about trying to figure things out (I certainly did not charge for this hour).

For any router you have connected to your system, you are able to access that piece of equipment in a similar way that you would a website. Just like a website, your router has an address – an IP address (I suggest Wikipedia for an [in-depth explanation of an IP address](https://en.wikipedia.org/wiki/IP_address)). You can type this address directly into your web browser and access your router’s software. What’s the problem? Finding the correct address. Here are the most common ones:

**2Wire address I needed but could not find:**  
gateway.2wire.com (this isn’t an IP address as much as it is just a way to access the router)

**Edit:** the address above did not work today. The one that does work is 192.168.1.254 (router model number above).

**Good general addresses to try for any router (separated by commas):**  
192.168.1.1  
192.168.1.101  
192.168.0.1  
192.168.2.1  
192.168.8.1  
192.168.100.1

**Motorola routers:**  
192.168.10.1  
192.168.15.1

**D-Link routers:**  
192.168.0.30  
192.168.0.50

**Linksys routers:**  
192.168.1.225  
192.168.1.226  
192.168.1.245  
192.168.1.246

Oftentimes, your router will ask you for a login and password. This is one of those logins that you set up, write down, lose, and then panic a year later when you need it. Try a few of your common logins, try a blank login field with a password of “admin,” or, if all else fails, go to http://virus.org/default-password/ and look for your equipment based on the manufacturer (listed as “vendor” on that page).

Once you’re in, there are many things you can do but only one thing that I needed:

![2Wire router set-up option](/_images/2008/04/2wire_setup.jpg)

This, in short, tells the router/modem to run it’s set-up program. This particular piece of equipment needs this to be run when it moves. Go figure.

The program will likely ask you to set up a number of different logins, passwords and settings. On of these setting is a keycode that, according to the program, you would have been given. The customer I was with did not have this written down and the url given by the program was not working at the time ([2wire.com/keycode](http://2wire.com/keycode "Linkification: http://2wire.com/keycode") \[try also [http://www.2wire.com/?p=268](http://www.2wire.com/?p=268 "Linkification: http://www.2wire.com/?p=268")). I lucked out with a Google search on my phone so, for those of you in the same position, here are a few to try (from the 2Wire URL above):

**AT&amp;T service:** 522P-22P4-6262-22AT-F2NV  
**Verizon service:** 523E-23E4-6262-22AS-B2DD  
**Verizon service (another option):** 524Y-24Y4-2262-22AS-B2GV  
**Other DSL service:** 5225-26P4-6262-22AS-B2E7  
**Other cable service:** 5225-26Q4-2262-22AS-B28F

After running through the program, in putting all of the right information, and **writing everything down**, we had the router moved, wifi up and running, and a connected desktop PC.

### Wifi for the latops solution

Nothing to report here. Thankfully, the wifi reached all the way down into his living room in the second living space. The son was able to play World of Warcraft on the couch which was definitely the litmus test. I was, however, ready with a recommendation in case this was not the case.

I researched a bit about wifi repeaters and found some interesting information. According to most of the comments out there, they do what they should and work fairly well in a public situation. What they don’t do, however, is allow for security, which, in my opinion, is a big problem. Since that was out of the question, I researched a few wireless access points. These basically take the network signal through a network cord and make it wireless (sounds so simple). We would run a cable from the 2Wire upstairs (located next to the desktop) out of the office and down the hall into a second room that was closer to where wifi needed to be used. Here are the ones I was recommending for him:

[D-Link DWL-G700AP High Speed Wireless Access Point](http://www.newegg.com/Product/Product.aspx?Item=N82E16833127146)  
[Linksys WAP54G Wireless-G 54Mbps Access Point](http://www.newegg.com/Product/Product.aspx?Item=N82E16833124012)

One slight hang-up happened as the laptop was being passed around. There was a switch on the front that turned the wireless off of the computer. That was hit accidentally and chaos ensued. The chaos did not last for long.

### Sub-problem: Vista printer set-up

Though I was a little wary about this part because I don’t have a lot of experience in Vista, everything came together for the most part.

I was working with an HP Photosmart 2575 All-in-One printer that was network capable (you can plug it right into your home network and print to it from any computer \[theoretically\]). To test it, I downloaded the XP drivers onto my laptop, connected to the network (with a cord), and tried it out. It went through without a hitch and printed like a charm.

Since the customer did not have any ethernet cables on-hand, I offered to leave mine behind. He said he would pick some up the next day so not to worry about it. To set him up to do it on his own, I downloaded the correct HP Vista drivers onto a USB drive and transferred it to his desktop and laptop.

I started the driver install on the desktop and left it at a screen where the computer needed to find the printer. I told him once the cables were plugged in from the desktop to the router and the router to the printer to finish the install and try to print. I left it at that.

### Final outcome

After a few days, I sent him the invoice and asked how everything was going. Apparently, the desktop connects to the internet just fine and prints to the printer just fine but now the laptop, after installing the drivers, will not connect.

\*sigh\*

…to be continued…
