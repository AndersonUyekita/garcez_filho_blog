---
layout: default
title: Todas as publicações
date: 2023-02-01 12:00
permalink: /posts/todas
hero_url: /assets/images/pages/blog.jpg
featured_section: false
call_action_section: false
---

<style>
    /* Botão customizado na Cor AZUL*/
    .btn-default {
      background-color: #062A4E; /* Cor do Logotipo */
      color: white; /* cor da fonte */
      border: none; /* sem borda */
      transition: all 0.2s ease-in-out; /* efeito de transição */
      display: inline-block;
      white-space: nowrap;
    }

    /* Botão customizado ao passar o mouse */
    .btn-default:hover {
      background-color: #062A4E30; /* cor ao passar o mouse */
      cursor: pointer; /* cursor de clique */
    }

    /* Criando uma classe */
    .card-hover {}

    /* Adicionando um efeito para a classe criada */
    .card-hover:hover {
      box-shadow: 0 .5rem 1rem rgba(var(--bs-body-color-rgb), .15) !important;
    }

</style>


<div class="row" style="margin-left: 2.5vw; margin-right: 2.5vw;">
  <h1 style="font-family: 'Oswald'; text-align: center; margin-top: 5vh; padding-top: 5vh;">{{ page.title }}</h1>

  <hr style="max-width: 50px;border-width: 3px;border-color: rgba(6,42,78);text-align: center;margin: auto;padding-bottom: 10px; opacity:1; margin-bottom: 2vw;">

  {% for post in site.posts %}
    <div class="card mb-3 card-hover" style="max-width: 100%; padding-left: 0; border-radius:0px; border-width: 0;">
      <div class="row g-0">
        <div class="col-md-2">
          <a href="{{ post.url }}">
            <div class="container-fluid m-0 p-0 h-100" style="background-image: url('{{ post.hero_url }}'); background-size: cover;background-repeat: no-repeat;">
            </div>
            <!-- Badge de Categoria -->
            <div class="card-img-overlay m-1 p-1" style="height: 0%;">
              <span class="badge badge-data"><i class="bi bi-calendar3"></i> {% include date_short.html post_date = post.date %}</span>
            </div>
          </a>
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <span>
              <h5 class="card-title">{{ post.title}}<small style="font-size: 1rem;">{% include badge.html categories = post.categories %}</small></h5>
            </span>
            <p class="card-text">{{ post.content | strip_html | truncatewords: 25 }}</p>
                <!-- Linha de Autor e LEIA MAIS -->
                <div class="row m-0 p-0">
                  <!-- Coluna Avatar -->
                  <div class="col">
                    <!-- Autor do Destaque 1 -->
                    {% include author.html id_author = post.id_author %}
                  </div>
                  <!-- Coluna: LEIA MAIS -->
                  <div class="col">
                    <div class="container-fluid m-0 p-0 g-0" style="text-align: right;">
                      <a class="btn btn-default" href="{{ post.url }}"><i class="bi bi-book"></i> Leia mais</a>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  {% endfor %}


</div>