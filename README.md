Revizzle
========

It's some CSS and JS that allows a simple revision quiz to be made in HTML, with the CSS.css and JS.js files included in.

Text and images can be hidden from the user until they hover over them with the mouse. The order of the questions can be shuffled.

Requirements for the HTML
-------------------------

Needs the following tags:
```HTML
<button onclick="shuffle();">Shuffle</button>
<main id="ordered"></main>
<main id="shuffled"></main>
```

Each question should be written in a *div* inside main#ordered.

Words and pictures to be hidden should be wrapped in *del* tags.
