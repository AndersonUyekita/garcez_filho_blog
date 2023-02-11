---
layout: default
title: Todas as publicações do site
hero_url: /assets/blog-hero.jpg
---

<h2>Somente os nomes das publicações</h2>

<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

<hr>

<h2>Publicações< + Datas</h2>

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