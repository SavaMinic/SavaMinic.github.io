---
title:  "Starvation"
subtitle: "Ludum Dare 32 - An Unconventional Weapon"
author: "Sava"
avatar: "img/authors/sava.jpg"
image: "img/starvation/header.jpg"
header_style: dark
date:   2015-04-20 12:12:12
---

### PLAY THE GAME : [Windows](https://www.dropbox.com/s/cjv06lenq877h6k/starvation.exe?dl=0) [Source](https://github.com/SavaMinic/starvation)

Game of modified "Rock, Paper, Scissors". <br />
Each round you choose one of the options "Crops", "Bugs" or "Rain". <br />
Goal is to get to 7 crops, before the opponent. 

<img class="def_image" src="/img/starvation/shot1.jpg" />

There are different results, depending on chosen options
<div>
Player A | Player B | Result | Result A	| Result B <br />
Crops	| Crops	| Friends	| +1 crop	| +1 crop <br />
Crops | Bugs | Attack | -2 crops | / <br />
Crops | Rain | Growing | +2 crops | +1 crop <br />
Bugs	| Rain | Extermination | -1 bug	| / <br />
Bugs | Bugs | Overpopulation | -1 bug	| -1 bug <br />
Rain | Rain | Flood	| -2 crops	| -2 crops 
</div>

Each 5th round, you regenerate one bug, up to maximum of 3.