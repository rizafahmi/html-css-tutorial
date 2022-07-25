import { c as create_ssr_component, j as subscribe, e as escape } from "../../../../_app/immutable/chunks/index-559eb7fe.js";
import "clsx";
import { f as frontmatter } from "../../../../_app/immutable/chunks/scroll-134c54c0.js";
const U5B_2u5Dsecond_page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $frontmatter, $$unsubscribe_frontmatter;
  $$unsubscribe_frontmatter = subscribe(frontmatter, (value) => $frontmatter = value);
  $$unsubscribe_frontmatter();
  return `<h1>${escape($frontmatter.title)}</h1>
<p>${escape($frontmatter.description)}</p>`;
});
export {
  U5B_2u5Dsecond_page as default
};
