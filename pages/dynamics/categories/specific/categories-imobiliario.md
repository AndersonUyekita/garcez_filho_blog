---
layout: default
title: IMOBILIÁRIO
date: 2023-02-11
permalink: /categorias/imobiliario
hero_url: /assets/images/pages/categories-imobiliario.jpg
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

<hr style="max-width: 50px; border-width: 3px; border-color: rgba(6,42,78); text-align: center; margin: auto; padding-bottom: 10px; opacity:1; margin-bottom: 2vw;">

<div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 mx-1 gx-2 gy-2 h-100">

  {% for post in site.categories['imobiliario'] %}
  <div class="col">
    <div class="card card-hover mb-3 h-100" style="margin:auto; border-radius: 0px; border-width: 0px;">
      <div class="row g-0 h-100">
      	<!-- Imagem do POST -->
        <div class="col-md-4">
        	<a href="{{ post.url }}">
        		<div class="container-fluid h-100 w-100" style="background-image: url('{{ post.hero_url }}'); background-size: cover; background-position: center; min-height: 25vh; object-fit: cover;" title="Clique e leia mais publicações sobre {{ post.title }}">
        		</div>
        	</a>
        </div>
        <!-- Insere a DATA sobre a Imagem -->
		<div class="card-img-overlay" style="height:25%;">
			<div class="badge badge-data"><i class="bi bi-calendar3"></i> {{ post.date | date: "%d %b %Y" }}
			</div>
		</div>
		<!-- CORPO do CARD -->
        <div class="col-md-8">
          <div class="card-body pb-0">
          	<!-- Título do POST -->
            <h5 class="card-title">{{ post.title }}</h5>
            <!-- Resumo do POST -->
            <p class="card-text">{{ post.content | strip_html | truncatewords: 100 }}</p>
            <div class="row m-0 p-0">
            	<div class="col">
					<!-- Autor -->
					{% include author.html id_author = post.id_author %}
            	</div>
            	<div class="col">
					<!-- LEIA MAIS -->
					<div class="container-fluid m-0 p-0 g-0" style="text-align: right;">
						<a class="btn btn-default"  href="{{ post.url }}"><i class="bi bi-book"></i> Leia mais</a>
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