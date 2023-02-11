---
layout: default
title: Categorias
permalink: /categorias
hero_url: /assets/images/pages/categories-page.jpg
---

{% include post_info.html %}

<hr style="max-width: 50px;border-width: 3px;border-color: rgba(6,42,78);text-align: center;margin: auto;padding-bottom: 10px; opacity:1; margin-bottom: 2vw;">


{% for category in site.categories %}

	<p>{{ category }}</p>

		{% for i in category %}

			<p>{{ i }}</p>

		{% endfor %}

	<p>{{ category[0] }}</p>

{% endfor %}