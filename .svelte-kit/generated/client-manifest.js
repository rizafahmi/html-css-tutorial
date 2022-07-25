export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/__layout-kit-docs.svelte"),
	() => import("../../src/routes/docs/__layout@kit-docs.svelte"),
	() => import("../../src/routes/docs/[...1]first-category/[...1]first-page.md"),
	() => import("../../src/routes/docs/[...1]first-category/[...2]second-page.md"),
	() => import("../../src/routes/docs/[...2]second-category/[...1]first-page.md"),
	() => import("../../src/routes/docs/[...2]second-category/[...2]second-page.md"),
	() => import("../../src/routes/docs/index.svelte"),
	() => import("../../src/routes/index@kit-docs.md")
];

export const dictionary = {
	"docs": [[2, 3, 8], [1]],
	"@kit-docs": [[2, 9], [1]],
	"docs/[...1]first-category/[...1]first-page": [[2, 3, 4], [1]],
	"docs/[...1]first-category/[...2]second-page": [[2, 3, 5], [1]],
	"docs/[...2]second-category/[...1]first-page": [[2, 3, 6], [1]],
	"docs/[...2]second-category/[...2]second-page": [[2, 3, 7], [1]]
};