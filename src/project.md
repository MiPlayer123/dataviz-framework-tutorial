---
title: Project Sketches
toc: true
---

# Project Sketches

A scratch page working through the later exercises from the starter gist: file attachments, Zip archives, custom loaders, inputs, and a scatter plot.

## A 3 × 3 grid with a spanning middle row

<div class="grid grid-cols-3">
  <div class="card" style="color: var(--theme-red);">A</div>
  <div class="card" style="color: var(--theme-blue);">B</div>
  <div class="card" style="color: var(--theme-green);">C</div>
  <div class="card grid-colspan-3" style="color: var(--theme-yellow); text-align: center;">
    D &mdash; a single cell spanning all three columns
  </div>
  <div class="card" style="color: var(--theme-pink);">E</div>
  <div class="card" style="color: var(--theme-cyan);">F</div>
  <div class="card" style="color: var(--theme-orange);">G</div>
</div>

## A sketch, hidden behind `<details>`

<details>
  <summary>Show my rough project sketch</summary>
  ${resize((width) => htl.html`<img src="${FileAttachment("images/sketch.svg").href}" style="width: 100%; max-width: 560px; border-radius: 8px; border: 1px solid var(--theme-foreground-faintest);" alt="Rough hand-drawn sketch of a scatter plot of GDP vs life expectancy.">`)}
</details>

## First *n* words of a text

Load a text file, split it into words, and use an `Inputs.range` slider to control how many are shown.

```js
const text = await FileAttachment("data/words.txt").text();
const words = text.trim().split(/\s+/);
```

```js
const n = view(Inputs.range([1, words.length], {value: 12, step: 1, label: "Number of words"}));
```

```js
display(html`<blockquote style="font-family: var(--serif); font-size: 1.1rem; line-height: 1.5; max-width: 42em;">
  ${words.slice(0, n).join(" ")}${n < words.length ? "\u2026" : ""}
</blockquote>`);
```

## Reading CSV files from a Zip archive

The gapminder archive lives at `data/gapminder.zip`. We can list what's inside it, then pull out the continents file and display its rows.

```js
const gapminder = FileAttachment("data/gapminder.zip").zip();
```

```js
display(html`<div class="note">Zip contents: <code>${(await gapminder).filenames.join(", ")}</code></div>`);
```

```js
const continents = (await gapminder).file("gapminder/continents.csv").csv({typed: true});
```

```js
Inputs.table(continents)
```

### Every country name, from the `Entity` column

```js
display(html`<div style="columns: 3; font-size: 0.85rem; line-height: 1.5;">
  ${continents.map(d => html`<div>${d.Entity}</div>`)}
</div>`);
```

## A custom loader (life expectancy, 2010)

`src/data/life-2010.csv.js` fetches the full life-expectancy series, filters to 2010, and streams the result back to stdout. We load the generated CSV the same way as any other `FileAttachment`:

```js
const life = FileAttachment("data/life-2010.csv").csv({typed: true});
```

```js
Inputs.table(life, {rows: 10})
```

## GDP data, same pattern

```js
const gdp = FileAttachment("data/gdp-2010.csv").csv({typed: true});
```

```js
Inputs.table(gdp, {rows: 10})
```

## Bonus — population data

```js
const population = FileAttachment("data/population-2010.csv").csv({typed: true});
```

## Scatter plot: GDP vs. life expectancy (2010)

Join the two loaders by ISO country code and draw each country as a dot. Pick a dot color below.

```js
const byCode = new Map();
for (const row of gdp) {
  if (row.Code) byCode.set(row.Code, {code: row.Code, entity: row.Entity, gdp: row["GDP per capita"]});
}
for (const row of life) {
  const entry = byCode.get(row.Code);
  if (entry) entry.life = row["Life expectancy"];
}
for (const row of population) {
  const entry = byCode.get(row.Code);
  if (entry) entry.population = row["Population (historical estimates)"];
}
const countries = Array.from(byCode.values()).filter(d => d.gdp != null && d.life != null);
```

```js
const colorChoice = view(Inputs.radio(
  ["crimson", "steelblue", "seagreen"],
  {label: "Dot color", value: "crimson"}
));
```

```js
const sizeMetric = view(Inputs.radio(
  ["fixed", "population"],
  {label: "Dot size", value: "fixed"}
));
```

```js
const colorMetric = view(Inputs.radio(
  ["solid", "gdp", "population", "life expectancy"],
  {label: "Color encodes", value: "solid"}
));
```

```js
import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";
```

```js
const gdpExtent = d3.extent(countries, d => d.gdp);
const lifeExtent = d3.extent(countries, d => d.life);
const popExtent = d3.extent(countries.filter(d => d.population), d => d.population);
```

```js
display(Plot.plot({
  width: 900,
  height: 520,
  marginLeft: 60,
  marginBottom: 50,
  x: {
    type: "log",
    label: "GDP per capita (2010 USD, log scale) →",
    domain: gdpExtent,
    grid: true,
    tickFormat: "~s"
  },
  y: {
    type: "linear",
    label: "↑ Life expectancy (years)",
    domain: lifeExtent,
    grid: true,
    nice: true
  },
  color: colorMetric === "solid" ? undefined : {
    type: "sequential",
    scheme: "viridis",
    label: colorMetric,
    legend: true
  },
  r: sizeMetric === "fixed" ? undefined : {range: [2, 18], domain: popExtent},
  marks: [
    Plot.dot(countries, {
      x: "gdp",
      y: "life",
      r: sizeMetric === "population" ? (d => d.population ?? popExtent[0]) : 4,
      fill: colorMetric === "solid"
        ? colorChoice
        : colorMetric === "gdp"
        ? "gdp"
        : colorMetric === "population"
        ? (d => d.population ?? popExtent[0])
        : "life",
      fillOpacity: 0.75,
      stroke: "white",
      strokeWidth: 0.5,
      title: d => `${d.entity}\nGDP: $${Math.round(d.gdp).toLocaleString()}\nLife: ${d.life?.toFixed(1)} years${d.population ? `\nPop: ${d.population.toLocaleString()}` : ""}`
    })
  ]
}));
```

---

<div class="tip">
  <strong>What's going on:</strong> each loader (<code>life-2010.csv.js</code>, <code>gdp-2010.csv.js</code>, <code>population-2010.csv.js</code>) runs once at build time, fetches a large CSV from the web, filters to the single year we care about, and caches the result. The page then joins the three small files by ISO country code before drawing.
</div>
