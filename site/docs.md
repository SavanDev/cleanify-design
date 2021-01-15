---
layout: docs
title: Documentation
permalink: /docs/
---
{% section %}
## Let's start!
Once the files have been [downloaded]({{ "/download.html" | relative_url }}), the directory should look like this.
{% highlight text linenos %}
┌► website
├─► css
├──► cleanify.css
├─► js
├──► cleanify.js
└─► index.html
{% endhighlight %}
#### Starter template
{% highlight html linenos %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="./css/cleanify.css">
    <title>Cleanify Example</title>
</head>
<body>
    ...
    <script src="./js/cleanify.js"></script>
</body>
</html>
{% endhighlight %}
{% endsection %}