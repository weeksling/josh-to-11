---

title: "Testable Documentation Spike #1: \"It's Just Code\""
permalink: testable-documentation-spike-1/index.html
layout: post
tags: [ "Documentation", "Development", "Testing", "Technical Research"]
date: 2020-11-27 10:05:00
featured_img: /_images/2020/11/code_sample-300x300.png
excerpt: My first spike on finding a system to take linted, tested code and outputting usable markup. This spike uses Docco to turn transpile commented JS files to HTML.
twitter_url: https://twitter.com/joshcanhelp/status/1332435025321623552

---

{% info %}This is the first spike for the <a href="/testable-documentation-intro/">Testable Documentation project</a>.{% endinfo %}

I call this first spike the "code only" concept. I'm trying to combine code and documentation in a way that we can test and lint the code that we're using as an example. One way to do that is to just keep everything as code with the documentation as comments.

There are a number of code-only examples out there to draw inspiration from:

- The Auth0 Express OIDC SDK has [runnable examples for a number of use cases](https://github.com/auth0/express-openid-connect/tree/master/examples)
- We also have a number of run-able sample applications, [like this Ruby on Rails one](https://github.com/auth0-samples/auth0-rubyonrails-sample/tree/master/01-Login), that serve as compliments to [a Quickstart tutorial](https://auth0.com/docs/quickstart/webapp/rails)
- My [WordPress Unit Testing post](/wordpress-unit-testing-techniques/) uses a [functional, linted GitHub repo](https://github.com/joshcanhelp/wp-test-plugin)

All of the samples above have something in common: they are code written as educational tools. They are not meant to be deployed but they are fully-functional and, in some cases, under test. The only thing they are missing are the comments that turn them into more of a document than a programming artifact. 

If we added comments to these samples, keeping the code functional, we could do some kind of treatment to improve the readability. What comes immediately to mind is the annotated [jQuery](https://robflaherty.github.io/jquery-annotated-source/docs/01-core.html) and [Backbone](https://backbonejs.org/docs/backbone.html) source code. You can read through the code on the right and, as soon as you need a bit more information, the description is on the left. 

![Docco + Backbone](/_images/2020/10/docco-backbone.png)

The tool to make this happen is [Docco](http://ashkenas.com/docco/). The Docco docs themselves are generated from the [Docco source code](https://github.com/jashkenas/docco/blob/master/docco.js). The last 4 links are a little long in the tooth but, dated styling aside, I think they are still an effective learning tool.

The point here is to write code with comments that serve as the whole example, extra points if they can be compiled into something that looks nice. 

## Sample Code

First, we need some code examples to test, lint, and document. We don't need anything complex, just enough to make sure we know we're representing the real world. 

For this sample, we'll pull in a library, make up some data, and use that library to do something. I'll use this as the code for all the spikes to keep things consistent. [Code is here](https://github.com/joshcanhelp/testable-documentation/blob/master/0-starting-point/sample-1-use-module.js).

I wrote the above out in an editor and ran `prettier`. Then I wrote [a simple test](https://github.com/joshcanhelp/testable-documentation/blob/master/0-starting-point/__tests__/sample-1-use-module.test.js) that would simply require the code above, making sure it ran properly. If you look close at the code above, you'll see that it caught something right away:

```text
"expiresIn" should be a number of seconds or string representing a timespan    
   7 | };    
   8 | 
>  9 | jwt.sign(payload, "TOKEN_SECRET", {      
>    |     ^   
  10 |   expiresIn: this.tokenExpiresIn,   
  11 | });   
  12 |
```

I copy-pasted that block from a running module and accidentally left in the class reference. Turns out, I could benefit from a system that helps prevent dumb mistakes. Who knew?

## Write the Docs

We have the tested, linted code sample, now it's time to write the documentation. In this case, we're writing it as in-line code comments that are Markdown-capable. I did not dig enough into Docco to find the exact Markdown flavor or specifics on how the comments are parsed beyond the library that's used (Marked). We'll just give it a shot and see what happens.

I made a copy of the sample code above and started commenting away. I give almost every line a comment to see how the documentation flow worked ([see the code here](https://github.com/joshcanhelp/testable-documentation/blob/master/1-code-only/sample-1-use-module.js)).

Writing the documentation was not a *terrible* experience but the multi-line comments were not as natural as the single-line ones. I could definitely see this process interrupting the writing flow quite a bit if there needed to be a lot of explanation. I tried with the `//` at the beginning of each line but VS Code was not auto-adding that on new lines (probably a setting somewhere). I switched to doc-block style and that seemed to help a bit.

## Building the HTML

I've got a well-documented block of code, now it's time to see what processing looks like. 

I installed Docco as directed and ran it on the code written in the section above:

```bash
❯ npm i -g docco
+ docco@0.8.0
updated 3 packages in 2.449s

❯ docco *.js
docco: sample-1-use-module.js -> docs/sample-1-use-module.html
```

That was easy! Without passing any options, we generated something that looked like the Backbone docs from above. [You can see that here](/_html/testable-documentation-defaults/sample-1-use-module.html).

While this looked good for a first pass, I was writing the comments visualizing the code and documentation all being the in same column so I added `--layout linear` and tried again. 

![Docco in linear layout](/_images/2020/11/testable-documantation-linear-layout.png)

That's a bit more like it but I'm not sure about the design details. This method of generation also came with 590 KB of fonts, images, and CSS. The final HTML generated from this process will be included or concentenated somehow with an existing site so the less included the better.

Docco allows for a `--template` flag that will accept a `.jst` template file, a format I'm not familiar with. Not really interested to dig too deep into a templating language that time has forgotten, I looked for and found [the `.jst` file used in the "linear" style](https://github.com/jashkenas/docco/blob/master/resources/linear/docco.jst) and stripped that down to [the bare minimum](https://github.com/joshcanhelp/testable-documentation/blob/master/1-code-only/docco.jst). The command complained that I did not indicate a CSS sheet so I added a dummy value.

```bash
❯ docco --template docco.jst --css none *.js
docco: sample-1-use-module.js -> docs/sample-1-use-module.html
```

That was finally outputting something that could be included somewhere. [You can see the output here](/_html/testable-documentation-custom/sample-1-use-module.html). I was a bit worried that the build process for this would involve stripping or parsing HTML but, thankfully, it does not look like that will be necessary.

## Trying it out

With our tested and linted JS getting parsed into somewhat clean HTML, I wanted to see what it would look like imported. I'm using Nunjucks templates processed with Eleventy for my blog so an `include` directive was all I needed. 

Everything between the pointer fingers is the procesed HTML.

👇👇👇

{% include html/sample-1-use-module.html %}

👆👆👆

Two problems I ran into:

- I had a surrounding `<div>` originally but that was causing the HTML to get a bit mangled. I investigated a bit but settled on simply removing it. I want the included HTML to blend into the surrounding content so the additional markup was not necessary.
- I am using basic [Eleventy syntax highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/) (PrismJS under the hood), which uses different classes and formatting than the processed HTML. If we go this route, we'll probably look into adding a modular code highlighting processer to Docco or forking and replacing ourselves. I tweaked my blog CSS a bit to get the code blocks in acceptable shape.

Overall, not a terrible workflow. Eventually, I had a combination script to run Docco, prettier the output, then copy into the include directory for my blog all at once. Eleventy picked it up and processed the pages, and, viola, the new documentated code was displayed. **Magic**.


## Analysis

This spike was definitely a success. I got something working in under a day's worth of work and seeing testable code go to styled output was great, regardless of whether it's the right solution or not.

Original criteria:

- **How much work would it take to convert existing code samples?** We can ignore the work to convert the samples to testable files as that will be the same regardless of the processing. I would say the work here is medium as we need to add a step to the existing build pipeline to handle this. 
- **How much work would it take to handle the output?** - Minimal if the HTML can be included in existing documentation rendering. With the stripped-down template, styles would cascade from the main document.
- **How nicely does it play with existing documentation platforms?** - It plays nicely with Markdown processed by Nunjucks. I think it would work fine in the Markdown files we're using but I'm not at all sure about inclusion in a cloud CMS, that would need more research.
- **How easy is it to write code samples?** - Not great but not terrible. As long as the comments between the code blocks is minimal, then it's acceptable.
- **What languages does it support?** - [Lots](https://github.com/jashkenas/docco/blob/master/resources/languages.json) and you can add additional language processing as well.

Here are a few additional thoughts on this system:

### 👍 Portable

I like that these examples could be produced into their own pages and served from GitHub pages or Netlify or another static file host. You could have one build process that creates include-able HTML and another that creates servable pages.

### 👎 Extra build step

We're generating HTML first, which is then included in the documentation. This extra build step adds complexity, both in terms of extra processing and things to go wrong but also a fairly opaque way of indicating your output. The HTML used above is stripped down to nearly nothing in the template file that was used but there is still plenty of HTML in variables that is not configurable.

### 👎 Forced cadence and order

The order of the comments and code is a limitation. You might find yourself structuring the code in order to make the documentation more clear, which does not feel like the right way to do things.

Or maybe it is if you buy into [Literate Programming](http://www.literateprogramming.com):

> I believe that the time is ripe for significantly better documentation of programs, and that we can best achieve this by considering programs to be works of literature.

This type of documentation-first thinking feels better-suited to the source code itself rather than example code like what we're writing here.

### 👎 Old technology

The library I'm using here does the trick but it is quite old. Would we need to adopt it at some point? Would PRs be responded to? It's not abandoned entirely but it's worth considering.

---

So, that wraps up this spike! Stay tuned for the next one, which will explore including code directly into templates.