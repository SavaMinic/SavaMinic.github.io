---
layout: post
title:  "TURBO WAVE"
subtitle: "SGA Unity ECS Game Jam"
author: savam
image: "/img/turbowave/header.jpg"
date:   2018-12-09 13:12:12
---

### PLAY : [Mac](https://drive.google.com/open?id=1WkRfZ_4_L9cMywfN-2t4nUpf3Dblz72I) [Windows](https://drive.google.com/open?id=1-wk153OeoNXIe6H6nKee3koh7UTyNAka) [Android](https://drive.google.com/open?id=17GppKnmgNF0KX2lmvTsLSUbYUHqPzBrh) [iPhone](https://savaminic.typeform.com/to/wphzx9) [Source](https://github.com/SavaMinic/ImpactHubRandomTeam)

[Serbian Games Association](http://sga.rs/) (SGA) joined forces with Unity, in order to promote their new tech stack [ECS](https://unity3d.com/unity/features/job-system-ECS) - Entity/Component/System, by organizing the 24h game jam.
There was no specific theme, just the goal was **Using ECS to make games on a different scale**.

<img class="def_image" src="/img/turbowave/shot2.jpg" />

Some colleagues and me got together and applied for the game jam, while not one of us ever worked with ECS before (we heard about it but never tried it), so we had low expectations for the game. <br />
By doing that, I broke one of my rules I have around game jams/hackathons which is **"Never use tech that you are not familiar with".** <br />
Nevertheless, we managed to make something both playable and on mass scale, so at the end, we came home with 2nd place on game jam. <br />

<img class="def_image" src="/img/turbowave/shot4.jpg" />

Check out what we made in 24h, drinking water and eating kiflice :) <br />

<iframe width="640" height="360" src="https://www.youtube.com/embed/N0edM-58KaU?rel=0" frameborder="0" allowfullscreen></iframe>

Since Unity ECS isn't supporting Mecanim animations out-of-the-box, we had to do our simple animations by hand. We tried animating from shaders, but we had better results animating by translation/rotation/scale from code (job systems). <br />

 We wanted to show progression of scale, starting from only one stadium level, and increasing levels and number of entities while you are playing around. <br />
 We added also demo scene, where you could just be amazed with 100k entities making Mexican waves on stadium, animating their arms and having bloom and focus effects (it works on mobile in constant 30fps also).

<hr />
Using ECS was straightforward, we started a week before game jam, exploring their <a href="https://github.com/Unity-Technologies/EntityComponentSystemSamples/blob/master/Documentation/reference/index.md">work-in-progress docs</a> and running samples in Unity, wrapping our heads around data oriented programming. <br />

We decided to keep the scope down, and wait for theme announcement when game jam start in order to plan up the game. But at the end, there was no specific theme at the game jam, so we went with bunch of ideas, wanting to show both small scale and big scale. <br />

<div>
<img style="display: inline-block" src="/img/turbowave/step0.png" width="150px" />
<img style="display: inline-block" src="/img/turbowave/step1.gif" width="150px" />
<img style="display: inline-block" src="/img/turbowave/step2.gif" width="150px" />
<img style="display: inline-block" src="/img/turbowave/step3.gif" width="150px" />
</div><br />

Football was one of the things that came to our mind, so we mocked up fast idea of fans making mexican waves on stadium, and as you progress, stadium and your influence increases, or something like that. Proper gameplay we left for later, until we have the system working with animating characters and generating waves. <br />

<img class="def_image" src="/img/turbowave/shot3.jpg" />

Made by: **[Nikola Damjanov](https://www.linkedin.com/in/nikoladamjanov/)**, **[Aleksandar Paunović](https://www.linkedin.com/in/salepaun/)**, **[Miloš Kruškonja](https://www.linkedin.com/in/milos-kruskonja/)** and **me**

It was very fun and interesting experience, expecially trying out Unity ECS, which could prove great tool for specific problems, or just showing off some tech demoes.
<br />
<br />
If you want to try it for <b>Android</b>, you can [download APK from this link.](https://drive.google.com/open?id=17GppKnmgNF0KX2lmvTsLSUbYUHqPzBrh)<br />
If you want to try it for <b>iOS (iPhone/iPad)</b>, you can sign up for [TestFlight build here](https://savaminic.typeform.com/to/wphzx9) and test it on device.
<br />

Here you can see how it runs on iPhone8:
<iframe width="640" height="360" src="https://www.youtube.com/embed/lZqDsWwn3cc?rel=0" frameborder="0" allowfullscreen></iframe>
