---
layout: page
title: About
---

Making games, playing games, getting sh*t done.<br />
Game Developer @ [Nordeus](http://www.nordeus.com/)<br />
Contact: minic.sava <b>at</b> gmail.com

<img src="/img/profile.jpg" />

<div class="column small-12 large-12">
Check out my social media:
    <ul class="social-nav social-icons">
      {% if site.facebook_username %}
      <li>
        <a href="https://www.facebook.com/{{ site.github_username }}" target="_blank">
          <span data-icon="ei-sc-facebook" data-size="s"></span>
        </a>
      </li>
      {% endif %}

      {% if site.github_username %}
      <li>
        <a href="https://www.github.com/{{ site.github_username }}" target="_blank">
          <span data-icon="ei-sc-github" data-size="s"></span>
        </a>
      </li>
      {% endif %}

      {% if site.twitter_username %}
      <li>
        <a href="https://www.twitter.com/{{ site.twitter_username }}" target="_blank">
          <span data-icon="ei-sc-twitter" data-size="s"></span>
        </a>
      </li>
      {% endif %}

      {% if site.linkedin_name %}
      <li>
        <a href="https://www.linkedin.com/in/{{ site.linkedin_name }}" target="_blank">
          <span data-icon="ei-sc-linkedin" data-size="s"></span>
        </a>
      </li>
      {% endif %}

      {% if site.email %}
      <li>
        <a href="mailto:{{ site.email }}" target="_blank">
          <span data-icon="ei-envelope" data-size="s"></span>
        </a>
      </li>
      {% endif %}

      <li style="display:none">
        <a class="toggle-search-button" href="#">
          <span data-icon="ei-search" data-size="s"></span>
        </a>
      </li>
    </ul>
</div>