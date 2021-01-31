---

title: "Technical Research: Testable Documentation"
permalink: testable-documentation-intro/index.html
layout: post
tags: [ "Documentation", "Development", "Testing", "Auth0", "Technical Research"]
date: 2020-10-28 18:05:00
featured_img: /_images/2020/11/IMG_4092-300x300.jpg
excerpt: I've been thinking about documentation quite a bit lately, especially the code-centric type, and how to avoid punishing myself for spending time writing it. Here's the start of my research project to that end.
twitter_url: https://twitter.com/joshcanhelp/status/1332435025321623552

---

One of the best forms of documentation for software is ... software! If you want to do a thing in your application, the best way to get that working is a block of code that already works.

If I want to, for example, make a GET call with JS to a `/user` route with an `ID` URL parameter, I could not do any better than one of the [first examples in the `axios` documentation](https://github.com/axios/axios#example):

```js
axios.get('/user', { params: { ID: 12345 } })
  .then(response => console.log(response))
  .catch(error => console.log(error));
```

💥 *Solid gold.*

But let's say that the `get()` method is removed in a future major version. The person who removed the method probably *should* change the README but what if they don't think about it? Or maybe they do change the README but forget the ones [here](https://github.com/axios/axios/blob/master/examples/get/index.html#L13) and [here](https://github.com/axios/axios/blob/master/examples/all/index.html#L26-L27)? Or maybe they search the whole repo for `"axios.get"` in the same PR and fix all the examples and feel great and then, 3 months later, someone submits an issue saying that they followed an example in the latest version that throws an error:

```js
axios
  .get('/user', { params: { ID: 12345 } })
  .then(response => console.log(response))
  .catch(error => console.log(error));
```

🤦‍♂️ *Shoot, missed one.*

The fact is: **documentation rots**. The more documentation you have, the more rot you deal with. Your reward for keeping a library up-to-date, bug free, and easy-to-use over time is constant updates to the documentation. Without them, what was the point of writing all that wonderful stuff in the first place?

I've been thinking about documentation quite a bit lately, especially the code-centric type, and how to avoid punishing myself for spending time writing it. When written properly and maintained, code samples based on use cases are far more likely, in my experience, to help get someone started or unstuck.

## Code as Communication

I'm *fascinated* by the idea of code as a communication tool. I've been working in developer experience at Auth0 for almost 3 years now and the way I write code has changed drastically during that time. When your code is used both as an example and as-is, you start to pay attention to different things.

![Sunset](/_images/2020/11/IMG_4092.jpg)

And it's not just the code itself. A changeset is a powerful way to tell a story or present an idea. The diff below shows an API protected using one authorization library being switched to a newer one.

![](/_images/2020/10/api-auth-code-sample.png)

**Big difference.**

Illustrative code *must* be clear and to the point and that's where your effort as a human is best spent:

- Is this sample complete enough to illustrate the point but short enough that someone doesn't get lost?
- Is it clear that this sample is for education and not for a hardened production environment?
- Am I showing, clearly, what's happening or am I trying to be clever?
- Am I solving a specific problem or trying to do too much?
- Is the diff focused enough that the purpose of the change is clear?

These are the true jobs to be done while communicating with code but they are not the only things that make or break the message.

## The Problem with Code Samples

Even a clear and concise block of code that perfectly communicates a discreet solution can be broken in one way or another:

❌ Invalid syntax

❌ Inconsistent formatting

❌ Inaccessible language, typos, and misspellings

❌ Incorrect logic

❌ Out-of-date API usage (see the axios example above)

Some of the problems above can render well-crafted technical documentation useless when it ends up in an application. And these problems are hard to solve by just "being more careful" (we all know what happens when we berate ourselves for that). Reviewing code for syntax, spelling errors, and formatting is the job of a robot, not a person.

My very manual way of dealing with this is to maintain code samples outside of the content I'm writing. For my [unit testing post](/wordpress-unit-testing-techniques/), for example, I have [a whole separate repo](https://github.com/joshcanhelp/wp-test-plugin/) that can be auto-formatted with PHPCS and tested with PHPUnit. It solves most of the problems above but I have to remember to copy the code over to the right samples when anything changes. **Tedious**.

So how can we write code samples that don't make us hate ourselves in the future?

## Testing Code Samples

I brought this up at Auth0 and got a great response from a number of people across several teams. I started with our people first because I knew that, done right, this could have a big impact. [Keavy McMinn](https://keavy.com/work/where-to-start/), one of my favorite writers on all things technical leadership, explains that [this is where to start](https://keavy.com/work/where-to-start/) when solving large technical problems:

> &ldquo;My experiences have taught me that if you want to produce the right thing, that has rich and lasting impact, this starting point of finding people, talking to and learning from them is fundamental. For me it’s the precursor before the technical research and experiments can truly begin.&rdquo;

I have this rotting docs problem in my own work but an `n=1` here was not enough. Talking to other teams painted a much more complete picture of the problems to solve:

- Non-functional code samples cause a lot of incoming support requests and negative feedback from customers; the cost in lost or frustrated customers who say nothing is unknown but certainly non-zero
- Code samples mixed in with documentation result in long review response times from engineering teams because the changesets can be very large; a separation of concerns could make inter-team collaboration easier
- We generate **a lot** of documentation (it's a big part of our culture here) and we might be hesitant to write helpful code samples for the maintenance reasons listed above

Better, more complete docs? Better inter-team collaboration? Less support requests? **I think we're onto something**.

## Evaluation

Before starting, I wanted to be clear about what I'm doing here and what the evaluation criteria will be for selecting an approach (or doing more research). [Again from Keavy](https://keavy.com/work/technical-preparation/):

> &ldquo;Spikes are a temporary means to an end: simply stringing some parts together enough to learn something about how it **could** work. Partly I do spikes for my own knowledge, to validate or invalidate each approach, and also for confidence in how to approach a problem. I have learned that they can also be highly valuable tools in persuading others of the viability of a project.&rdquo;

I wanted to explore what existed out there and, if neccessary, look into the work required to build a tool from scratch. My main evaluation criteria, besides how well it solves the problems explained above, are:

- How much work would it take to convert existing code samples?
- How much work would it take to handle the output (delivery, aesthetics)?
- How nicely does it play with existing documentation platforms (mainly GitHub and Contentful)?
- How easy is it to write code samples?
- What languages does it support? Our main use case is JavaScript but we have [samples that cover many languages](https://auth0.com/docs/quickstarts) that have this same problem. The more languages/platforms we can cover, the better. 

So, let's set the groundwork for this.

## The Foundation

There are two common code sample use cases in my JavaScript world.

One is using a module to do a specific task. These samples need to import the latest version of the module as a dependency and run it a specific way. Note that it's not the module being tested here, it's the sample.

```js
const { doStuff } = require("some-module");
const thing = { property: "value" };
doStuff( thing );
```

The other use case is atomic functions with a set signature meant to run during a specific authentication event. These functions sort of exist in space until they are run with contextual data as parameters, like [Auth0 Actions](https://auth0.com/blog/introducing-auth0-actions/) or [Netlify functions](https://www.netlify.com/products/functions/).

```js
module.exports = function run(event, context) {
	if (event.property1 === "bad value") {
		throw new Error( "(╯°□°）╯︵ ┻━┻" );
	}
	event.property2 = "new value";
	return event;
}
```

The code samples we write should work with both of these examples. We don't need anything fancy for either one of these, just something that can be tested, linted, and displayed in the context of a documentation page. 

## Spike Away!

To recap:

- I have a problem
- Other people have this same problem
- I think I know what a successful solution looks like
- I understand the problem space

I am ready to do a spike! [The first one is here](/testable-documentation-spike-1/).
