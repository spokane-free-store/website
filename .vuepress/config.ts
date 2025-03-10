import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Spokane Free Store",
  description: "The website of the Spokane Free Store",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
