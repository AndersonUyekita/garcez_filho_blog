---
title: Regularização Ambiental
layout: post
author: Jose Carlos Garcez Filho
---

<h1>{{ page.title }}</h1>

Agora vai esr H2

<h2>{{ page.title }}</h2>


Esse post foi escrito no ano {{ page.date | date: "%Y" }}

Esse post foi escrito no mês (número) {{ page.date | date: "%m" }}

Esse post foi escrito no mês (extenso) {{ page.date | date: "%B" }}

Esse post foi escrito no dia {{ page.date | date: "%d" }}

Data em extenso: {{ page.date | date: "%d de %B de %Y" }}

O Autor foi: {{ page.author }}