// See https://observablehq.com/framework/config for documentation.
export default {
  // The app's title; used in the sidebar and webpage titles.
  title: "Mikul's Framework",

  // The pages and sections in the sidebar. If you don't specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and specify the order.
  pages: [
    {name: "Example dashboard", path: "/example-dashboard"},
    {name: "Example report", path: "/example-report"}
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: "",

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: "default", // try "light", "dark", "slate", etc.
  header: "", // what to show in the header (HTML)
  footer: "Built with Observable Framework.", // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  toc: true, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  output: "dist", // path to the output root for build
  search: true, // activate search
  linkify: true, // convert URLs in Markdown to links
  typographer: false, // smart quotes and other typographic improvements
  preserveExtension: false, // drop .html from URLs
  preserveIndex: false, // drop /index from URLs
};
