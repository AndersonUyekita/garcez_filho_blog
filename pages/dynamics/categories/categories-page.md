---
layout: default
title: Categorias
date: 2023-02-11
permalink: /categorias
hero_url: /assets/images/pages/categories-gallery.jpg
featured_section: true
call_action_section: true
---

<style>

  /* Criando um classe */
  .card-hover {
  }

  /* Adicionando um efeito para a classe criada */
  .card-hover:hover {
  box-shadow: 0 .5rem 1rem rgba(var(--bs-body-color-rgb),.15)!important;
}
</style>

<h1 style="font-family:Oswald; margin-top: 5vh; text-align: center;">{{ page.title | upcase }}</h1>

<hr style="max-width: 50px;border-width: 3px;border-color: rgba(6,42,78);text-align: center;margin: auto;padding-bottom: 10px; opacity:1; margin-bottom: 2vw;">

<div class="card-body p-2">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 mx-1 gx-5 gy-5 h-100">

{% comment %} LOOP: Varredura de todas as categorias do site {% endcomment %}
{% for cat in site.categories %}

  {% comment %} Cria um variável intermediária nome_categoria {% endcomment %}
  {% assign nome_categoria = cat[0] %}

  {% comment %} Variável que possui os dados do último POST da categoria analisada no LOOP {% endcomment %}
  {% assign last = site.categories[nome_categoria][0] %}

  <div class="col">
    <div class="card card-hover mb-3 h-100" style="margin:auto; border-radius: 0px; border-width: 0px;">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <a href="{{ page.url}}/{{ nome_categoria }}">
            <div class="container-fluid h-100 w-100" style="background-image: url('{{ last.hero_url }}'); background-size: cover; background-position: center; min-height: 25vh; object-fit: cover;" title="Clique e leia mais publicações sobre Direito Ambiental">
            </div>
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body h-100">
            <div class="row h-100">
              <div class="col" style="display: flex; flex-direction: column; height: 100%;">
                <h4 style="text-align: center; font-family: 'Oswald'">{{ nome_categoria | upcase | replace: "-", " "}}</h4>
                <hr style="max-width: 25px;border-width: 2px;border-color: rgba(6,42,78);text-align: center;margin: auto;padding: 1vh; opacity:1">
                <div class="row" style="flex: 0 0 auto;">
                  <h5 class="card-title">{{ last.title }}</h5>
                </div>
                <div class="row" style="flex: 1 1 auto;">
                  <p class="card-text">{{ last.content | strip_html | truncatewords: 30 }}</p>
                </div>
                <div class="row" style="flex: 0 0 auto;">
                  <!-- LEIA MAIS -->
                  <div class="container-fluid m-0 p-0 g-0" style="text-align: right;">
                    <a class="btn btn-default"  href="{{ page.url}}/{{ nome_categoria }}"><i class="bi bi-book"></i> Leia as últimas publicações</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

{% endfor %}

</div>
</div>

