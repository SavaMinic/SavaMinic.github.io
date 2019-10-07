---
layout: page
title: free2play experiment
important: true
hidden: true
date:   2018-05-03 09:12:12
---

<script src="{{ site.baseurl }}/js/blazy.min.js"></script>
<script>
    ;(function() {
        // Initialize
        var bLazy = new Blazy();
    })();
</script>

<style>
hr { background-color: #333;}
.important { font-weight: bold; }
img.b-lazy , img.center { margin: auto; display: block; }
.strike { text-decoration:line-through; }
</style>

Today is April 28th, and this will be the place where I will blog my experience of releasing free2play mobile game in <span class="strike">1 week</span> <span class="strike">7 working days</span> <b>10 working days spread over a month</b>.
<br />

I want to go through whole process of it, from development to release and tweaking, and since I'm not an artist I will be using <a class="important" href="#authors">free graphic assets</a>., authors atributed at the end of this page<br />

<br />

<hr />
UPDATES tldr;
-> <a class="important" href="#idea">IDEA</a>
-> <a class="important" href="#prototype">PROTOTYPE</a>
-> <a class="important" href="#playable">PLAYABLE</a>
-> <a class="important" href="#levels">LEVELS MAP</a>
-> <a class="important" href="#endless">ENDLESS</a>
-> <a class="important" href="#levelup">LEVEL UP</a>
-> <a class="important" href="#week1">FIRST WEEK</a>
-> <a class="important" href="#update" style="font-size:24px">UPDATE</a>
-> <a class="important" href="#leaderboards">LEADERBOARDS</a>
-> <br /><br />  <a class="important" style="font-size:48px;" href="#release">RELEASED</a>
<hr />
<h2 id="idea">GAME IDEA - 28.4.2018.</h2>

It's going to be very casual game with endless highscore level, without timers but with rewards progression (more you play, better score multiplier you get).
<br />

<img class="center" src="{{ site.baseurl }}/img/f2p/color-lines.png" width="200px" />
Inspired by "5 in a line" kind of games, for example <a href='http://vsg.quasihome.com/lines/index.html' target='\_blank'>Color lines</a>,<br />
except it's going to have kind of progression where by: <br /> <b>... getting high scores -> you will get reward points -> you use to level up color elements -> they give you more points during playing -> you getting more high scores ...</b>

I plan to make only basic leaderboards, and releasing on Android and iOS. Maybe I will check the app size for Facebook Instant games, but that's a stretch :p<br />
Game should be easily re-skinnable, because I plan to test multiple art themes (animals, flowers, robots, candies ...) with same gameplay.

<hr />
<h2 id="prototype">FIRST PROTOTYPE - 28.4.2018.</h2>

<img class="b-lazy"
     src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
     data-src="{{ site.baseurl }}/img/f2p/day1.gif"
     width="200px"
     alt="first prototype"
/>
Started coding already, having map with element generation, pathfinding and animated movement.<br />
Continuing to work on new element generation, matching 5-in-row check and calculating points.


<hr />
<h2 id="playable">FIRST PLAYABLE - 29.4.2018.</h2>

<a class="important" href="{{ site.baseurl }}/farm_lines/build_1/" target="_blank_">
<img class="b-lazy"
     src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
     data-src="{{ site.baseurl }}/img/f2p/day2.gif"
     width="200px"
     alt="first playable"
/>
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
<h2 id="levels">PLAYABLE WITH LEVELS - 30.4.2018.</h2>

<a class="important" href="{{ site.baseurl }}/farm_lines/build_2/" target="_blank_">
<img class="b-lazy"
     src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
     data-src="{{ site.baseurl }}/img/f2p/day3.gif"
     width="200px"
     alt="playable with levels"
/>
PLAY SECOND PLAYABLE HERE</a><br />

Added endless mode with high score, and implement dump level generation with multiple modes (trying to give variety to game):<br />
- Target score<br />
- Target score with turns limit<br />
- Target score with time limit<br />
, and difficulty goes up as you progress (it's no balanced at all), and it requires level up elements to get to those scores.<br />

Next thing is to add "Element collection" mode (both normal, turns, timed), and possibly some blocked tiles on map (for variety).<br />

Tomorrow is May 1st, so Happy International Workers' Day, rest and chill out with your frinds :D


<hr />
<h2 id="endless">ENDLESS MODE - 1.5.2018.</h2>

<a class="important" href="{{ site.baseurl }}/farm_lines/build_3/" target="_blank_">
<img class="center" src="{{ site.baseurl }}/img/f2p/day4.png" width="200px" />
PLAY THIRD PLAYABLE HERE</a><br />

It was a slow day because of celebrating International Workers' Day, but managed to get in the music and end game sfx.<br />

Started to work on progression meta with endless mode, added basic UI layout, but didn't have time to put in the game logic for it.<br />
Tomorrow will focus more on meta itself, how the loop goes around core experience, but still keeping it simple.

<hr />
<h2 id="levelup">LEVEL UP - 2.5.2018.</h2>

<a class="important" href="{{ site.baseurl }}/farm_lines/build_4/" target="_blank_">
<img class="b-lazy"
     src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
     data-src="{{ site.baseurl }}/img/f2p/day5.gif"
     width="200px"
     alt="leveling up animals"
/>
PLAY FORTH PLAYABLE HERE</a><br />

Another half day of work only, managed to put in the level up of animals, getting milestone rewards in endless mode, and UI for leaderboards.<br />
I was setting up the meta/progression loop, the plan is to get coins from milestones in endless, and some animals will have some coins on them.<br />In order to level up animals, you need to spend coins, and also progress through the map story, which will consists of multiple regions (spring, summer, fall, winter) with additional mechanics (frozen animals, flower obstacles and such).

<hr />
<h2 id="week1">FIRST WEEK - 6.5.2018.</h2>

<a class="important" href="{{ site.baseurl }}/farm_lines/build_5/" target="_blank_">
<img class="b-lazy"
     src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
     data-src="{{ site.baseurl }}/img/f2p/week1.gif"
     width="200px"
     alt="leveling up animals"
/>
PLAY FIFTH PLAYABLE HERE</a><br />

Working after work proved to be very slow, almost imposibruuu, so game had to wait for the weekend.<br />In order to keep the scope down, I removed the story part of the game, and focused just on endless (with a hint of decoration shop).<br />

Base game is done, I need couple more days to wrap up the things:<br />
- basic sfx ingame and buttons<br />
- integrate login with facebook, and fb friends<br />
- simple backend for saving scores<br />
- ads integration for getting coins

<hr />
<h2 id="update">UPDATE - 15.5.2018.</h2>

Sorry for not writing here, i was busy with my day job, and some personal issues, I managed to grab couple of hours of implementation only in the last 10 days.<br />
Tried Firebase as backend-as-service solution for login and leaderboards, which failed because firebase database doesn't have any filtering options, at least not in the way I wanted.<br />
Will try PlayFab for the weekend, and hopefully manage to finish the integration, so I can start preparing for launch (dev accounts, store pages, mini website).

<hr />
<h2 id="leaderboards">LEADERBOARDS - 22.5.2018.</h2>

<a class="important" href="{{ site.baseurl }}/farm_lines/build_6/" target="_blank_">
<img class="center" src="{{ site.baseurl }}/img/f2p/day6.png" width="200px" />
PLAY SIXTH PLAYABLE HERE</a><br />

Finally, managed to get some uninterrupted time after work to continue making this, finished integrating <a href="https://playfab.com/" target="_blank_">PlayFab API</a>, which is backend-as-service solution, and I'm using it for login, leaderboards, analytics and saving player progress.<br />

Last things which I would like to do this week are:<br />
- integrating with facebook and having fb friends in leaderboards<br />
- basic sfx ingame and buttons<br />
- preparing for launch (dev accounts, store pages, mini website)<br />

I'm dropping ads integration for initial version, let's just release it like this, and afterwards I will see what's next on the list :)


<hr />
<h2 id="release">FINALLY RELEASED - 2.6.2018.</h2>

<a class="important" href="{{ site.baseurl }}/farm_lines/" target="_blank_">
<img class="center" src="{{ site.baseurl }}/farm_lines/promo/feature.png" width="400px" />
PLAY IT ON ANDROID AND IOS</a><br />

I managed to find time today to wrap up some bugs and add some more music, and start preparing for release.<br />
Android went smoothly, just created Google Play page images and screenshots, built the apk, uploaded it and that was it, FARM LINES WERE LIVE! :) <br />
For iOS, I registered for Developer account, payed with the card, and it's still in progress (status says - up to 2 days). <br />
After that, I will release the game on App Store also.<br />
<br />
Facebook integration, friends leaderboards, and possibly ads will go into some other version.<br />
Decorations and shop are strech for now :p

<b>UPDATE: game is now released on both <a target="_blank_" href="https://play.google.com/store/apps/details?id=ninja.sava.farmlines" title="Farm Lines on Android">Android</a> and <a target="_blank_" href="https://itunes.apple.com/us/app/farm-lines-match-4-animals/id1394763863?ls=1&mt=8" title="Farm Lines on iPhone">iOS</a> stores. Have fun :)</b><br />
App Store review was finished in less than 24h, which was wtf because I expected at least couple of days (up to a week).<br />
Nothing spectacular happened there, expect that there is still no App Store for Serbia, so I had to register an Croatian account, which works (at least for games without IAPs). Next stop: make a game with IAPs :)

<hr />
<h2 style="font-weight:bold; line-height: 35px;">
CONCLUSION:<br />Since this whole thing didn't go as planned, as amount of additional distractions and badly planned personal life, at the end I released a game in a month (and not in a week).<br />
I learned a lot during this interesting experiment, and I know next time it will go much better and efficient.<br />
All the best :D
</h2>

<hr />

<h2 id="authors">Free images provided by:</h2>
<a href='https://www.freepik.com/free-vector/flat-animal-heads-set_715458.htm'>Icons by Freepik</a>

<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Coin">Coin</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank_">CC 3.0 BY</a></div>

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank_">CC 3.0 BY</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank_">CC 3.0 BY</a></div>

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank_">CC 3.0 BY</a></div>

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank_">CC 3.0 BY</a></div>

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank_">CC 3.0 BY</a></div>

<br />
<hr />

<small>
  Check the source code <a href="https://github.com/SavaMinic/f2p_experiment" target="_blank_">HERE</a>
</small>
