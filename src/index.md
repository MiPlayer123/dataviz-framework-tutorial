---
toc: false
---

<div class="hero">
  <h1>Framework Tutorial</h1>
  <h2>A walkthrough of the <a href="https://observablehq.com/framework">Observable Framework</a> answering every exercise in the starter gist.</h2>
  <a href="example-report">Open the example report <span style="display: inline-block; transform: translateY(-1px);">&rarr;</span></a>
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
  background-size: 200% 100%;
  animation: gradient 6s linear infinite;
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

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@media (min-width: 640px) {
  .hero h1 { font-size: 90px; }
}

</style>

## What's inside

This site demonstrates the features covered in the Observable Framework starter gist:

- [**Example Report**](./example-report) — Markdown basics, frontmatter, styled headings, inline spans, classes
- [**Example Dashboard**](./example-dashboard) — Loading data from a JS data loader (`launches.csv.js`)
- [**Project Sketches**](./project) — Grid layouts, details/summary, sliders, Zip file attachments, custom loaders, and a scatter plot of GDP vs. life expectancy

