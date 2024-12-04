---
title: Blog
layout: base.njk
---

<h1>{{ title }}</h1>

<ul>
  {% for post in collections.posts %}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
  {% endfor %}
</ul>
