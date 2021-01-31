---
title: "Beginner Exercises to Learn PHP Programming"
layout: post
excerpt: "I’ve been on a quest to try my hand at a real programming language. I get the feeling that I’m really going to like what I learn."
date: 2008-11-20 20:00:21
modified: 2016-10-20 16:44:20
permalink: beginner-excercises-to-learn-php-programming/index.html
tags: ["Programming"]
featured_img:
wpid: 386
---


I’ve been on a quest to try my hand at a real programming language. I get the feeling that I’m really going to like what I learn. Said another way, I really hope that I like what I learn. My brain kind of works like a computer and if I can just figure out how a computer operates on the nano level, I’ll be one step closer to understanding myself.

_That was a joke._

After a thoroughly non-exhaustive consideration of available languages, I chose PHP to learn a few things. Since I’ve been doing work in WordPress (written in PHP) and have had a few people express the need for database functionality in their webpages (PHP and MySQL can handle almost anything you can throw at it) AND I’m working on a site based on Pligg (also written in PHP), it seemed like the right direction to go. It also seems fairly simple to pick up (comparatively) and the support/community/documentation is quite robust (one of the few words I use despite the fact that I hate it).

Despite the many pages dedicated to PHP tutorials, how-tos, and tips/tricks, I have not been very successful finding exercises I can practice with. I’ve been a student for longer than I care to admit, I need homework to function properly!! So I searched high and low and put together this list of beginner PHP exercises. I’m also including a link to my results so people can see the results (no guarantee of accuracy).

### [**From the Digital Point forums**](http://forums.digitalpoint.com/showthread.php?t=642480)

1. Define a variable called ‘name’ containing the text ‘Mario’ and then write “I am Mario.” using the variable to write the ‘Mario’ part. You may only use two commands max!
2. Use the code from the previous example but add a check using an ‘if’ condition to check whether the name is ‘mario’. Place the text from the previous example in the ‘if’ condition.
3. Try changing the $name variable to ‘awaken’. You’ll notice that the previous script writes nothing (If it doesn’t, go back and redo #2, it’s not complete!)
4. Use a while-loop that starts at 0 and keeps running while the number is lower then 5. Write the variable to the screen after each run.
5. Modify the previous example to use a ‘for’ loop instead of a ‘while’ loop

### [**From Huzilla.org’s PHP book**](http://www.hudzilla.org/phpbook/)

A quick note about this site. The “book” is very useful but on every page you’ll see a big headline that tells you that that particular version in not the most current. The current version took a minute to load and was in wiki format. I didn’t immediately see any of the quizzes or exercises so I’m linking to the old version.

I’m only listing the first few sections of quizzes (the beginner information). Each section listed in the table of contents \[http://www.hudzilla.org/phpbook/index.php\] has its own exercise bank. URL links have been removed because their server is terribly slow at times and times out occasionally. Keep trying, it’s there (unless you get a 404).

- Quiz 1 (Introduction to PHP) \[http://www.hudzilla.org/phpbook/read.php/2\_10\_0\]
- Quiz 2 (Variables and Operators) \[http://www.hudzilla.org/phpbook/read.php/3\_14\_0\]
- Quiz 3 (Functions) \[http://www.hudzilla.org/phpbook/read.php/4\_25\_0\]
- Quiz 4 (Arrays) \[http://www.hudzilla.org/phpbook/read.php/5\_13\_0\]
- Quiz 5 (Objects) \[http://www.hudzilla.org/phpbook/read.php/6\_21\_0\]
- Quiz 6 (Forms) \[http://www.hudzilla.org/phpbook/read.php/7\_10\_0\]
- Quiz 7 (Files) \[http://www.hudzilla.org/phpbook/read.php/8\_18\_0\]
- Quiz 8 (Databases) \[http://www.hudzilla.org/phpbook/read.php/9\_21\_0\]
- Answers to all quizzes \[http://www.hudzilla.org/phpbook/read.php/24\_4\_0\]

### **From Iowa State University**

“Download the <a>yeast.txt</a> file from the website. Write a script that displays the names of all the protein-fragments contained in the file \[the block of capital letters only\].

“Adapt \[the script above\] to construct an array while you read through the file that contains all the titles of fragments. Now encapsulate that functionality in a PHP function GetFragmentTitles($fn) whereby $fn is name of the file and the return result is an array containing all the titles. The pseudocode for this function is as follows:

`function GetFragmentTitles($fn) {// open file $fn// create a new array $titles// for each $line in file $fn// if $line represents a title// add the title to array// close the filereturn $titles;}`

“Construct a form where the end-user can enter (part of) the name of a fragment. A second script subsequently searches the titles to see if (part of) the name occurs in the file. Report on how many fragments are found.

“Simulate a BLAST-search interface: a user can enter part of a sequence and your script should report if and where the subsequence is found. Use really small fragments to see if they show up multiple times. What do you report if no fragments are found?

- Extra: What if the user enters an empty string?
- Extra: Can you think of a good use of the strtolower() function in this scenario?
- Extra: Can you highlight the found sequence?”

**[W3 Schools PHP Quiz ](http://www.w3schools.com/quiztest/quiztest.asp?qtest=PHP)**
