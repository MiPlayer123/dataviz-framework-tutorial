---
title: Example dashboard
toc: false
---

# Example Dashboard

This page loads the CSV produced by the `launches.csv.js` **data loader**. Because the file ends in `.js`, the generated output (`launches.csv`) is cached at build time and served as a plain static file at runtime.

```js
const launches = FileAttachment("launches.csv").csv({typed: true});
```

```js
display(launches);
```

## Launch count by country

```js
import * as Plot from "npm:@observablehq/plot";

display(
  Plot.plot({
    marginLeft: 80,
    x: {grid: true, label: "# of launches"},
    y: {label: null},
    marks: [
      Plot.barX(launches, Plot.groupY({x: "count"}, {y: "country", sort: {y: "x", reverse: true}})),
      Plot.ruleX([0])
    ]
  })
);
```

## Raw data

```js
Inputs.table(launches)
```
