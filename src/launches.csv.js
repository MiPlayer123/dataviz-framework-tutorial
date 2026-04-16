// Emit a small CSV of rocket launches to stdout. Observable Framework runs
// this script at build time and caches the result as `launches.csv`.

const rows = [
  {date: "1957-10-04", vehicle: "Sputnik 8K71PS", country: "USSR",   payload: "Sputnik 1"},
  {date: "1958-01-31", vehicle: "Juno I",         country: "USA",    payload: "Explorer 1"},
  {date: "1961-04-12", vehicle: "Vostok-K",       country: "USSR",   payload: "Vostok 1 (Gagarin)"},
  {date: "1969-07-16", vehicle: "Saturn V",       country: "USA",    payload: "Apollo 11"},
  {date: "1981-04-12", vehicle: "Space Shuttle",  country: "USA",    payload: "STS-1 Columbia"},
  {date: "2003-10-15", vehicle: "Long March 2F",  country: "China",  payload: "Shenzhou 5"},
  {date: "2010-06-04", vehicle: "Falcon 9",       country: "USA",    payload: "Dragon (Demo)"},
  {date: "2023-04-20", vehicle: "Starship (IFT-1)", country: "USA",  payload: "Test article"}
];

process.stdout.write("date,vehicle,country,payload\n");
for (const r of rows) {
  process.stdout.write(`${r.date},${r.vehicle},${r.country},${r.payload}\n`);
}
