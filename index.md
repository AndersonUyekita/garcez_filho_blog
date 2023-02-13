---
title: TESTE
layout: shell
date: 2023-02-03 12:00:00 -0300
permalink: /index
featured_section: true
call_action_section: true
---

<!-- Últimas Postagens -->
<section class="reveal" style="margin: 2vh 0; padding: 2vh 0;">
    <!-- Configurando os limites da página -->
    <div class="row justify-content-center m-0 p-0">
	    <!-- Definindo um container responsivo. -->
	    <div class="col m-0 p-0 section-responsive">
	        <!-- Criando uma "linha" -->
	        <div class="row gx-4">
	            <!-- Coluna da Esquerda: Parte do Post -->
	            <div class="col-md-8">
	            	<h1 style="text-align: center; font-family:'Oswald';">ÚLTIMAS PUBLICAÇÕES</h1>
	            	<hr style="max-width: 50px;border-width: 3px;border-color: rgba(6,42,78);text-align: center;margin: auto;padding: 3vh; opacity:1">
	                <!-- Listar as publicações -->
	                <div class="row-cols-1 row-cols-sm-1 row-cols-md-1 g-3 m-0 p-0">
	                	{% include last_posts.html %}
	                </div>
	            </div>
	            <!-- Coluna da Direita: Outras informações -->
	            <div class="col-md-4">
	                <div class="position-sticky" style="top: 12vh;">
	                    <div class="p-4 mb-3 bg-light rounded">
	                      <h4 class="fst-italic" style="text-align: right;">Sobre</h4>
	                      <p class="mb-0"  style="text-align: justify;">Este blog tem o objetivo de fornece informações atualizadas sobre questões 
	                      jurídicas. Nossa equipe de especialistas em direito compartilha análises e opiniões informadas para 
	                      ajudá-lo a tomar decisões conscientes. Acompanhe-nos para ficar por dentro das tendências e desenvolvimentos 
	                      do mundo jurídico.</p>
	                    </div>
	                    <div class="p-4" style="text-align: right;">
	                      <h4 class="fst-italic">Arquivos</h4>
	                      <ol class="list-unstyled mb-0">
	                        <li><a href="#">Fevereiro 2023</a></li>
	                      </ol>
	                    </div>
	                    <div class="p-4" style="text-align: right;">
	                      <h4 class="fst-italic">Categorias</h4>
	                      <ol class="list-unstyled">
	                        <li><a href="{{ site.url }}/categorias/civil"><span class="badge badge-civil">Civil</span></a></li>
	                        <li><a href="{{ site.url }}/categorias/imobiliario"><span class="badge badge-imobiliario">Imobiliário</span></a></li>
	                        <li><a href="{{ site.url }}/categorias/ambiental"><span class="badge badge-ambiental">Ambiental</span></a></li>
	                        <li><a href="{{ site.url }}/categorias/penal"><span class="badge badge-penal">Penal</span></a></li>
	                        <li><a href="{{ site.url }}/categorias/trabalhista"><span class="badge badge-trabalhista">Trabalhista</span></a></li>
	                        <li><a href="{{ site.url }}/categorias/armas"><span class="badge badge-armas">Armas</span></a></li>
	                      </ol>
	                    </div>
	                  </div>
	            </div>
	        </div>
	    </div>
    </div>
</section>