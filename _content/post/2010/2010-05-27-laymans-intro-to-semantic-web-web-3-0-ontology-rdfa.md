---
title: "A Layman's Intro to the Semantic Web: Web 3.0, ontology, and RDFa"
layout: post
excerpt: ""
date: 2010-05-27 20:03:30
modified: 2016-04-03 02:32:59
permalink: laymans-intro-to-semantic-web-web-3-0-ontology-rdfa/index.html
tags: ["Semantic Web", "SEO"]
featured_img:
wpid: 1596
---


A recent San Diego Refresh meeting found me in a room full of fellow geeks learning about microdata and the semantic web. What I thought was going to be a new look at SEO turned out to be a very in-depth look at where the web might be heading.

![](/_images/2010/05/new-129.jpg "new-129")  
The session was led by Barbara Starr ([@BarbaraStarr](http://twitter.com/BarbaraStarr)) and the information here is distilled from notes I took during the session. As such, attribution is appropriate. Thanks again, Barbara, for a great session!

WIIFM (What’s In It For Me)?
----------------------------

A great teacher once told me that you need to tell people what they’re going to get out of a learning session before you start. For this heady topic, I think this is more true than ever. Here’s what you should get out of this post:

1. A solid concept of what the semantic web is and what the key terms are
2. A realization that this stuff is going to change the web for the better
3. A path forward to learn more and begin taking the first steps towards using this powerful technology

What is the Semantic Web?
-------------------------

The semantic web is a web where the meaning behind the content is included in a machine-readable form. Having information being machine-readable is important because these machines (think: search engine algorithms) help us find what we need. If it seems strange that we would need to translate information from human-readable format (a quick description, say) to machine-readable so that humans can better use that info, it’s perfectly understandable. Just remember: your file system, you know, the one you constructed, has a search feature and you’ve probably used it before.

So we’re taking **this human-readable content and attaching machine-readable data so that humans can better find it**. Once you’ve wrapped your head around this, take the next step: machine-readable formats must be finite in number. This means that you can’t just make everything up as you go along, there has to be a system. This system is basically a set of relationships that can exist between two “things” (for lack of a better word). You have two things and one relationship between them and this is called a triple (“Josh likes food” or “Josh created this post” or “Josh knows Anna”).

In order to understand how this works on the web, start to think about how relationships are made in your own mind. When we first meet someone, it’s in our nature to try and suss out as much information as possible from them. If you wanted to store this information so a computer could look it up later, you might assign each thing you learn to a simple structure. Let’s say you meet a guy named Dave…

> Dave knows your friend Bob who he works with at Google. Dave drives a Karmen Ghia and you find out he belongs to the local VW club. Dave offers you some of his AleSmith Grand Cru beer and, because you love the stuff, you accept. You talk for a while longer and find out he’s married to Nicole, a woman you worked with several years ago at a tech company called NJN.

**How many relationships can you count?**

- Dave | knows | Bob
- You | know | Bob
- You | know | Dave
- Dave | works for | Google
- Bob | works for | Google
- Dave | likes | VW
- Dave | belongs to | VW SoCal
- Dave | likes | AleSmith
- You | like | AleSmith
- Dave | knows | Nicole
- Dave | is married to | Nicole
- You | know | Nicole
- Nicole | worked for | NJN
- You | worked for | NJN

Once these types of connections are made, context and information can be given to the relationships themselves and then a web of meaning starts to form. Because a machine has a finite number of relationships (“knows,” “works for,” “likes”), it can create connections between things it doesn’t know. This doesn’t mean that the machine has some kind of conscious, it just means that it understands when you ask a question like “who does Dave know?”

Think about this like Facebook for EVERYTHING (it shouldn’t be a surprise that Facebook is adopting this semantic way of processing). There are many things you can do on Facebook but it’s limited by what the software will let you do. You can friend people, like pages, like posts, say things, add apps, and more. Each action, however, is defined by the system. You can’t “not like” things, for example. There are a limited number of things you can do because you’re interacting with a machine.

This is a fairly basic description of the semantic web but I hope it helps you wrap your head around where this is going. If you need a bit more (along with potential downsides to this system), watch this excellent short film by Kate Ray:  

<iframe src="https://player.vimeo.com/video/11529540" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

[Web 3.0](http://vimeo.com/11529540) from [Kate Ray](http://vimeo.com/kateray) on [Vimeo](http://vimeo.com).

Terms to know
-------------

I’m writing these definitions from my notes and my own understanding instead of regurgitating Wikipedia. This could turn out good or bad. I’ll include a link to more info at the end of each so if you don’t understand (or want to check my facts) you have a place to go.

#### **Ontology**

This is a language term used to describe the system of relationships constructed for the semantic web. It’s basically a dictionary of categories, a resource that determines what relationships can exist and what meaning they have. You could also say that an ontology is a schema, a model for constructing these frameworks of information.

What should be clear about ontologies is that they are the spine of the semantic web and without them, the concept is empty. There must be a way to designate and define these relationships or they couldn’t exist. Also important to note: an ontology is not hierarchical, there is no concept of parent and child relationships. More info: [Wikipedia on Ontology](http://en.wikipedia.org/wiki/Ontology_%28information_science%29)

#### **RDF/RDFa**

This is a particular format of semenatic data that can appear in a web page. It stands for “Resource Description Framework attributes.” You’ve got a framework for describing resources (essentially the ontology) and RDFa are the attributes that describe the thing you want to add meaning to. Important to mention is the fact that RDFa is just one way of including semantic data but it happens to be what Google uses so it’s important. More info: [W3C RDFa Primer](http://www.w3.org/TR/xhtml-rdfa-primer/)

#### **Triples**

these are the simple 3-part relationship descriptions. “Josh likes Anna” would be a triple; you have a subject (Josh), a predicate (likes), and an object (Anna)… simple as that! Semantic data storage can be referred to as “triple-stores.”

#### **OWL**

This is the language used by applications that process semantic data. More info: [W3C OWL overview](http://www.w3.org/TR/owl-features/)

#### **SPARQL**

An adorable acronym pronounced “sparkle” that is the query language for RDF. It’s the way you would programmatically search stored semantic data. Yes, like MySQL. More info: [Wikipedia on SPARQL](http://en.wikipedia.org/wiki/SPARQL)

What I think
------------

I’m writing about this stuff as though it was set in stone and an impending global standard but, in fact, it isn’t quite that. The semantic web is a proposal, essentially, and just one method that might be used to help humans navigate the incomprehensible amount of information around us (watch that video above for the dissenting viewpoint).

To keep things brief (finally), I’ll say this: In a perfect world, this system would drastically improve how the web functions. In the real world, I’m not sure how we’re going to get there.

Also, a summary of a comment I left on a post that led me to the video above:

> On the web, these semantic relationships would have to be almost effortless to create or else the only relationships that would be expressed would be ones surrounding the organizations that have the resources and the motivation to create these links, i.e. businesses that benefit from, say, the SEO improvement or organizations that did it just because it’s the right thing to do. The rest, blithely making connections, creating content, and generally adding to the web (just like right now) would not be bothered.

More resources
--------------

- [ Intro to RDFa by A List Apart](http://www.alistapart.com/articles/introduction-to-rdfa/)
- [ Google explains how to markup content with RDFa](http://www.google.com/support/webmasters/bin/answer.py?hl=en&answer=146898)
- [How Enterprise 2.0 Will Enable the Semantic Web by Phil Simon](http://smartdatacollective.com/Home/27178)
- [Lotico Semantic Web Community](http://lotico.com)

Tools and Apps
--------------

- [WordPress RDFa plugin](http://wordpress.org/extend/plugins/wp-rdfa/)
- [Franz – Semantic web technologies and development tools](http://www.franz.com/)
- [RDF XML Schema](https://en.wikipedia.org/wiki/RDF_Schema)
