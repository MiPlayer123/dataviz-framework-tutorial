---
toc: false
---

<div class="hero">
  <h1>Hello, Observable Framework</h1>
  <h2>Welcome to your new project! Edit <code>src/index.md</code> to change this page.</h2>
  <a href="https://observablehq.com/framework/getting-started">Get started <span style="display: inline-block; margin-left: 0.25rem;">↗</span></a>
</div>

```js
import * as Plot from "npm:@observablehq/plot";
```

```js
const launches = FileAttachment("launches.csv").csv({typed: true});
```

```js
const penguins = FileAttachment("penguins.json").json();
```

<div class="grid grid-cols-2" style="margin-top: 2rem;">
  <div class="card">
    <h2>Your awesomeness over time 🚀</h2>
    <h3>Up and to the right!</h3>

```js
display(Plot.plot({
  marks: [
    Plot.lineY(launches, {x: "date", y: (d, i) => 50 + i * 0.5, stroke: "var(--theme-foreground)", tip: true})
  ],
  y: {label: "↑ Awesomeness"},
  width,
  nice: true,
}));
```

  </div>
  <div class="card">
    <h2>How big are penguins, anyway? 🐧</h2>

```js
display(Plot.plot({
  marks: [
    Plot.dot(penguins, {
      x: "Flipper Length (mm)",
      y: "Body Mass (g)",
      stroke: "Species",
      tip: true
    }),
    Plot.linearRegressionY(penguins, {
      x: "Flipper Length (mm)",
      y: "Body Mass (g)",
      stroke: "Species"
    })
  ],
  y: {label: "↑ Body mass (g)"},
  x: {label: "Flipper length (mm) →"},
  color: {legend: true},
  width,
  nice: true,
}));
```

  </div>
</div>

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 { font-size: 90px; }
}

</style>
