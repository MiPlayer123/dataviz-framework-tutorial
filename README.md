# Mikul's Tutorial

An Observable Framework project that works through every exercise in the
[starter gist](https://gist.github.com/samizdatco/4c17ecaeae8642f069580588d6334056).

## What's inside

```
observablehq.config.js          # title, theme, and sidebar config
src/
├── index.md                    # landing page
├── example-report.md           # markdown, h2/h3 styling, spans, classes, inline expr
├── example-dashboard.md        # loads launches.csv from a JS data loader
├── launches.csv.js             # JS data loader (exercise from the gist)
├── project.md                  # 3x3 grid, <details>/<summary>, slider, zip, scatter plot
├── images/sketch.svg           # figure shown inside <details>
└── data/
    ├── gapminder.zip           # archive read via FileAttachment(...).zip()
    ├── words.txt               # source for the slider exercise
    ├── life-2010.csv.js        # loader: filters life-expectancy to year 2010
    ├── gdp-2010.csv.js         # loader: filters gdp-per-capita to year 2010
    └── population-2010.csv.js  # loader: filters population to year 2010
.github/workflows/deploy.yml    # GitHub Pages deploy workflow
```

## Run locally

```sh
npm install
npm run dev      # live-reload preview at http://127.0.0.1:3000
npm run build    # static site → dist/
```

## Exercise checklist

The following items from the gist are all implemented:

- [x] `observablehq.config.js` has a `title` and `theme`
- [x] `<style>` block re-styles `<h2>` and `<h3>` in `example-report.md`
- [x] Inline-styled `<span>` (cyan gradient underline)
- [x] Class-based `<span>` (`.essential`) with matching CSS rule
- [x] `project.md` with a `title: Project Sketches` frontmatter
- [x] Image inside `<details>` / `<summary>` via `FileAttachment`
- [x] 3 × 3 grid with a middle row spanning all three columns
- [x] Each cell uses a different theme color class
- [x] `Inputs.range` slider that controls how many words are displayed
- [x] Zip archive: `.filenames`, `.file()`, `.csv()`, rendered with `Inputs.table`
- [x] Country list rendered from the `Entity` column
- [x] Custom loader: `life-2010.csv.js` (fetch → filter → `csvFormat` → stdout)
- [x] Parallel loader: `gdp-2010.csv.js`
- [x] Bonus loader: `population-2010.csv.js`
- [x] Scatter plot: `scaleLog` on GDP, `scaleLinear` on life expectancy, using `d3.extent`
- [x] Radio input for dot color
- [x] Population-scaled dot radius
- [x] "Color encodes" radio: solid / gdp / population / life expectancy

## Deploying

Push this repo to GitHub, then enable GitHub Pages with the
**GitHub Actions** source. The included `.github/workflows/deploy.yml`
will build and publish the site on every push to `main`.

Alternatively: `npm run build` and SFTP/rsync the resulting `dist/` directory
to any static host.
