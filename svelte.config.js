import adapter from "@sveltejs/adapter-static";

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
    }),

    prerender: {
      default: true,
      entries: ["*"],
    },
  },
};

export default config;
