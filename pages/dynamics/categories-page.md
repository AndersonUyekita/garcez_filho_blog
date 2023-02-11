---
layout: default
title: Categorias
permalink: /categorias
hero_url: /assets/images/pages/categories-page.jpg
---

<h1 style="font-family:Oswald; margin-top: 5vh; text-align: center;">{{ page.title }}</h1>

<hr style="max-width: 50px;border-width: 3px;border-color: rgba(6,42,78);text-align: center;margin: auto;padding-bottom: 10px; opacity:1; margin-bottom: 2vw;">


{% assign last_ambiental = site.categories['ambiental'][0] %}

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="{{ last_ambiental.hero_url }}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ last_ambiental.title }}</h5>
        <p class="card-text">{{ last_ambiental.content | strip_html | truncatewords: 30 }}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>








{% assign TESTE = site.categories['ambiental'][0] | map: "categories" %}


<p>TESTE</p>
