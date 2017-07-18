---
layout: page
title: Categories
permalink: /categories/
---

{% for category in site.categories %}
	{{ category }}
{% endfor %}