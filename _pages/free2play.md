---
layout: page
title: free2play experiment
important: true
---

<style>
hr { background-color: #333;}
.important { font-weight: bold; }
</style>

Today is April 28th, and this will be the place where I will blog my experience of releasing free2play mobile game in 1 week.
<br />

I want to go through whole process of it, from development to release and tweaking, and since I'm not an artist I will be using free graphic assets.<br />
<a href='https://www.freepik.com/free-vector/flat-animal-heads-set_715458.htm'>Icons by Freepik</a>
<br />

<hr />
UPDATES tldr;
-> <a class="important" href="#idea">IDEA</a>
-> <a class="important" href="#prototype">PROTOTYPE</a>
-> <a class="important" href="#playable">PLAYABLE</a>
<hr />
<h2 id="idea">GAME IDEA - 28.4.2018.</h2>

It's going to be very casual game with endless highscore level, without timers but with rewards progression (more you play, better score multiplier you get).
<br />

<img style="margin: auto; display: block;" src="{{ site.baseurl }}/img/f2p/color-lines.png" width="200px" />
Inspired by "5 in a line" kind of games, for example <a href='http://vsg.quasihome.com/lines/index.html' target='\_blank'>Color lines</a>,<br />
except it's going to have kind of progression where by: <br /> <b>... getting high scores -> you will get reward points -> you use to level up color elements -> they give you more points during playing -> you getting more high scores ...</b>

I plan to make only basic leaderboards, and releasing on Android and iOS. Maybe I will check the app size for Facebook Instant games, but that's a stretch :p<br />
Game should be easily re-skinnable, because I plan to test multiple art themes (animals, flowers, robots, candies ...) with same gameplay.

<hr />
<h2 id="prototype">FIRST PROTOTYPE - 28.4.2018.</h2>

<img style="margin: auto; display: block;" src="{{ site.baseurl }}/img/f2p/day1.gif" width="200px" />
Started coding already, having map with element generation, pathfinding and animated movement.<br />
Continuing to work on new element generation, matching 5-in-row check and calculating points.


<hr />
<h2 id="playable">FIRST PLAYABLE - 29.4.2018.</h2>

<a class="important" href="{{ site.baseurl }}/farm_lines/build_1/" target="_blank_">
<img style="margin: auto; display: block;" src="{{ site.baseurl }}/img/f2p/day2.gif" width="200px" />
PLAY FIRST PLAYABLE HERE</a><br />
You can play endless game now, until you are bored or until there is no empty spaces.<br />I was focusing on juiciness of the game also, so there are lot of animations and easing stuff going on during movement, explosion and spawning of animals.<br />
There is main menu, just as placeholder, to feel the flow of the game.<br />

Now I need to add proper goal in the game, possible multiple modes:<br />
- Endless with score target,<br />
- Timed challenge,<br />
- Turn challenge for collection,<br />
- Map (collection of different modes and maybe different levels)<br />
<br />
After that, there should be some rewards after you beat the level, which should be used for upgrading.

<hr />
<i>TO BE CONTINUED...</i>
<hr />

<small>
  Check the source code <a href="https://github.com/SavaMinic/f2p_experiment" target="_blank_">HERE</a>
</small>
