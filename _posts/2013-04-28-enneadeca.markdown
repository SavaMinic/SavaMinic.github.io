---
title:  "Enneadeca"
subtitle: "Ludum Dare 26 - Minimalism"
author: "Sava"
avatar: "img/authors/sava.jpg"
image: "img/enneadeca/header.jpg"
date:   2013-04-28 12:12:12
---

### PLAY THE GAME : [HERE](https://dl.dropboxusercontent.com/u/53655251/LudumDare26/index.html)

<img class="def_image" src="/img/enneadeca/shot1.jpg" />

My first entry to the Ludum Dare contest.
I am very happy to see this game finished :)

Light up the world by passing all its points without hitting death ( red circles ).
By passing already lit point, you put it out.
Movement is 6-way directions:
<div>
Q  W  E<br />
 \ | /<br />
 / | \<br />
A  S  D
</div>
Power is SPACE, in which that point can not be put out.

Score is determined on number of light points, remaining powers and time spent.
Formula is:

<div>
(LIGNT_POINTS - 1) * 100<br />
IF( LIGNT_POINTS > 3) ADD (REMAINING_POWERS * 250)<br />
IF( VICTORY AND TIME_SPENT < 60s ) ADD ( (60s - TIME_SPENT) * 30 )<br />
</div>

I used HTML5 canvas as game environment, and since wanted to keep it minimalistic,
wrote simple engine for game (no sprites, particles, and stuff).

  * [jQuery](http://jquery.com/)
  * [tween.js](https://github.com/sole/tween.js/)
  * Music loop is [downloaded for free](http://www.looperman.com/loops?gid=21)
  * No graphics :)