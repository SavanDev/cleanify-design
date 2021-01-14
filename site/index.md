---
layout: default
title: "Welcome"
---
{% article grid color-secondary %}
{% section transparent %}

#### HTML5 support

Cleanify use tags implemented in HTML5 for better organization and code reading.

**Examples:** _<nav>_, _<section>_, _<article>_, etc.

{% endsection %}
{% section transparent %}
{% highlight html linenos %}
<nav>
    <a class="navbar-title">Cleanify Design</a>
    <ul class="navbar-menu">
        <li>Example Text</li>
    </ul>
</nav>
<article>
    <section>...</section>
</article>
<footer>...</footer>
{% endhighlight %}
{% endsection %}
{% endarticle %}
{% article grid color-dark %}
{% section transparent %}

#### Dark Mode

The framework has a dark variant that can also be modified with the theme system.

You **can activate** it using:
{% highlight html linenos %}
<body dark="1">
    ...
</body>
{% endhighlight %}
{% endsection %}
{% section transparent %}
<img src="{{ "/assets/img/CDExample.png" | relative_url }}" alt="Example" class="rounded" width="100%" />
{% endsection %}
{% endarticle %}
{% article grid color-primary %}
{% section transparent %}

#### Mobile ready

The design has been adapted for better mobile viewing and anything screen with a responsive style like Bootstrap!

> Now with a own responsive system that work in desktop, tablet and mobile resolutions properly!

{% endsection %}
{% section transparent %}
<img src="{{ "/assets/img/Mobile.png" | relative_url }}" alt="Mobile" width="100%" />
{% endsection %}
{% endarticle %}
