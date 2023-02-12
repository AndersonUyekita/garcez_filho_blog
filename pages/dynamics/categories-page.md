---
layout: default
title: Categorias
date: 2023-02-11
permalink: /categorias
hero_url: /assets/images/pages/categories-page.jpg
featured_section: true
call_action_section: true
---

<h1 style="font-family:Oswald; margin-top: 5vh; text-align: center;">{{ page.title | upcase }}</h1>

<hr style="max-width: 50px;border-width: 3px;border-color: rgba(6,42,78);text-align: center;margin: auto;padding-bottom: 10px; opacity:1; margin-bottom: 2vw;">

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 gx-0 gy-5">

  {% assign last_ambiental = site.categories['ambiental'][0] %}
  <div class="col">
    <div class="card mb-3 h-100" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="{{ last_ambiental.hero_url }}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ last_ambiental.title }}</h5>
            <p class="card-text">{{ last_ambiental.content | strip_html | truncatewords: 30 }}</p>
            <p class="card-text"><small class="text-muted">{{ last_ambiental.date | date: "%d %b %Y" }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {% assign last_civil = site.categories['civil'][0] %}
  <div class="col">
    <div class="card mb-3 h-100" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="{{ last_civil.hero_url }}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ last_civil.title }}</h5>
            <p class="card-text">{{ last_civil.content | strip_html | truncatewords: 30 }}</p>
            <p class="card-text"><small class="text-muted">{{ last_civil.date | date: "%d %b %Y" }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {% assign last_penal = site.categories['penal'][0] %}
  <div class="col">
    <div class="card mb-3 h-100" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="{{ last_penal.hero_url }}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ last_penal.title }}</h5>
            <p class="card-text">{{ last_penal.content | strip_html | truncatewords: 30 }}</p>
            <p class="card-text"><small class="text-muted">{{ last_penal.date | date: "%d %b %Y" }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {% assign last_trabalhista = site.categories['trabalhista'][0] %}
  <div class="col">
    <div class="card mb-3 h-100" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="{{ last_trabalhista.hero_url }}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ last_trabalhista.title }}</h5>
            <p class="card-text">{{ last_trabalhista.content | strip_html | truncatewords: 30 }}</p>
            <p class="card-text"><small class="text-muted">{{ last_trabalhista.date | date: "%d %b %Y" }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {% assign last_imobiliario = site.categories['imobiliario'][0] %}
  <div class="col">
    <div class="card mb-3 h-100" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="{{ last_imobiliario.hero_url }}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ last_imobiliario.title }}</h5>
            <p class="card-text">{{ last_imobiliario.content | strip_html | truncatewords: 30 }}</p>
            <p class="card-text"><small class="text-muted">{{ last_imobiliario.date | date: "%d %b %Y" }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {% assign last_armas = site.categories['armas'][0] %}
  <div class="col">
    <div class="card mb-3 h-100" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="{{ last_armas.hero_url }}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ last_armas.title }}</h5>
            <p class="card-text">{{ last_armas.content | strip_html | truncatewords: 30 }}</p>
            <p class="card-text"><small class="text-muted">{{ last_armas.date | date: "%d %b %Y" }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>







<!--
{% for category in site.categories reversed %}

<p>{{ category[0] }}</p>

{% endfor %}
-->