---
layout: default
title: Todas as publicações do site
date: 2023-02-01 12:00
permalink: /blog
hero_url: /assets/images/pages/blog.jpg
featured_section: false
call_action_section: false
skip_render: true
---

{% include post_info.html %}

<hr style="max-width: 50px;border-width: 3px;border-color: rgba(6,42,78);text-align: center;margin: auto;padding-bottom: 10px; opacity:1; margin-bottom: 2vw;">


<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

<hr>

<h2>Publicações + Datas</h2>

{% for post in site.posts %}
<div class="post-preview">
  <img class="post-preview__left" src="{{ post.image }}" alt="{{ page.image_alt }}">
  <div class="post-preview__right">
    <a class="preview-title" href="{{ post.url }}">{{ post.title }}</a>
    <span>{{ post.date | date: "%b %d, %Y" }}</span>
    <div class="tag-group">
      {% for tag in post.tags %}
        <div class="tag"><span class="tag-text">{{ tag }}</span></div>
      {% endfor %}
    </div>
  </div>
</div>
{% endfor %}