---

title: "Notes from Rock Your Code Reviews with Dr. Michaela Greiler"
layout: post
date: 2020-01-15 19:00:00
permalink: rock-your-code-reviews-webinar/index.html
tags: ["Development", "Team Dynamics"]
featured_img: /_images/2020/01/code-block.png
excerpt: I attended a great webinar led by Dr. Michaela Greiler on code reviews. I had my own opinions going in, of course, but I learned a lot and had a number of questions that I had (and didn't know I had) answered.
twitter_url: https://twitter.com/joshcanhelp/status/1217920293609467904

---

I attended a great webinar led by [Dr. Michaela Greiler](http://www.michaelagreiler.com/) on code reviews. I had my own opinions going in, of course, but I learned a lot and had a number of questions that I had (and didn't know I had) answered.

{% h2br %}Notes{% endh2br %}

### Why do code reviews?

- Finding defects? Knowledge sharing?
- Microsoft says: code improvements and finding defects
- Unreviewed code is 2x more likely to introduce defects
- 80% of code reviews lead to code improvements
- Only 15% of issues _related_ to defects
- What are code reviews about? (decreasing percentage of issues)
  - Readability - 25%
  - Organization of code
  - Solution approach
  - Validation
  - Visual representation
  - Defects - 5%

![](/_images/2020/01/what-are-code-reviews-about.png)

### What are the pain points?

- Timing - interruptions, waiting, context switch
- Social - bullying, conflicts/attacks
- Low feedback quality
- Value vs speed (quadrant)
- Want: thorough reviews delivered in a timely manner

## Successful reviews

- Increase process speed + reduce reviewer burden
- Reduce reviewer burden
  - Microsoft:
    - Self-review - read through the changes before submission
    - Small reviews - small, incremental changes
    - Coherence - cluster related changes
    - Context - describe the purpose/motivation
    - Success - set-up for success through training and education for the reviewer (what should I look at
  - Size:
    - Fundamental and impactful
    - 200-400 LOC maximum
    - Number of files affected inversely proportional to feedback quality
  - Microsoft:
    - Tests - write and run tests before submitting
    - Automation - automate everything possible
    - Tools - review tools, CI/CD
    - Skip/Indicate - skip unnecessary reviews, author indicates potential impact
    - Reviewer selection - select the right reviewer and not too many
  - Google:
    - Every change is reviewed; max 4 hour review cycle 😮 (MS: 24h)
    - 90% of all code changes comprise less than 10 files/24 LOC
    - Clear approval criteria (ownership of code and readability); 75% of reviews are approved by 1 dev

### Summary

  - Small, coherent changes
  - Continuous feedback cycle on code reviews
  - Automation and tools
  - Clear guidelines and policies
  - Education and training

### Questions

**Is it important for the PR itself to be small or does several small, incremental commits as a part of a single larger PR still burden-reducing?**

- Stacked commits
- Design review activity to use separate branches (?)

**Should test code be reviewed differently than functional code? Does that account for the suggested LOC maximum?**

- Different focus but tests need dedication
- Flaky/non-deterministic tests are problematic, time-consuming
- Review test code with the same rigor as functional code but different mindset

{% h2br %}Take-Aways{% endh2br %}

This webinar could not have come at a better time. My team at Auth0 was taking a critical look at our review process and I learned a number of things that would be helpful for us to craft a better review process.

First, we gathered pain points from the team about our current process. We asked:

- What makes you nervous when submitting code?
- What makes you nervous when submitting a review?
- What are you unsure about?
- What's something that you or a teammate does that everyone should do?

A few examples of what we got back:

- Not sure how often to check the queue or how soon we can ping who we are waiting on.
- What's the process to re-request a review? Does using the GitHub UI work for everyone?
- Not sure how to deal with legacy issues that are not in-scope for this change
- How do I indicate a "nice to have" change that does not block a merge?
- What's the absolute maximum size of a PR?
- How many reviews do we need? How do we handle mutli-person reviews?
- Who resolves the comments, author or placer?

As of this writing, we were still in the process of figuring out the details but the webinar was a big help in giving us perspective and approaches from other companies.
