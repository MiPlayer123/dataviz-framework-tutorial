// Bonus loader: fetch gapminder population data and emit just the 2010 rows.
import {csvParse, csvFormat} from "d3-dsv";

async function text(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`fetch failed: ${response.status} ${response.statusText}`);
  return await response.text();
}

const raw = await text("https://datavis.cs.columbia.edu/files/data/gapminder/population.csv");
const rows = csvParse(raw);
const year2010 = rows.filter(d => d.Year === "2010");
process.stdout.write(csvFormat(year2010));
