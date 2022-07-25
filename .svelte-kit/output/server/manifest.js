export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-1574a863.js","imports":["_app/immutable/start-1574a863.js","_app/immutable/chunks/index-fa2e1bca.js","_app/immutable/chunks/singletons-75e1d0bd.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				id: "docs",
				pattern: /^\/docs\/?$/,
				names: [],
				types: [],
				path: "/docs",
				shadow: null,
				a: [2,3,4],
				b: [1]
			},
			{
				type: 'page',
				id: "@kit-docs",
				pattern: /^\/?$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [2,5],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "kit-docs/[slug].meta.json",
				pattern: /^\/kit-docs\/([^/]+?)\.meta\.json$/,
				names: ["slug"],
				types: [null],
				load: () => import('./entries/endpoints/kit-docs/_slug_.meta.json.js')
			},
			{
				type: 'endpoint',
				id: "kit-docs/[dir].sidebar.json",
				pattern: /^\/kit-docs\/([^/]+?)\.sidebar\.json$/,
				names: ["dir"],
				types: [null],
				load: () => import('./entries/endpoints/kit-docs/_dir_.sidebar.json.js')
			},
			{
				type: 'page',
				id: "docs/[...1]first-category/[...1]first-page",
				pattern: /^\/docs\/(.*?)first-category\/(.*?)first-page\/?$/,
				names: ["1","1"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,6],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...1]first-category/[...2]second-page",
				pattern: /^\/docs\/(.*?)first-category\/(.*?)second-page\/?$/,
				names: ["1","2"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,7],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...2]second-category/[...1]first-page",
				pattern: /^\/docs\/(.*?)second-category\/(.*?)first-page\/?$/,
				names: ["2","1"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,8],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...2]second-category/[...2]second-page",
				pattern: /^\/docs\/(.*?)second-category\/(.*?)second-page\/?$/,
				names: ["2","2"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,9],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
