import { p as noop, j as subscribe, r as run_all, q as safe_not_equal, t as is_function } from "./index-559eb7fe.js";
const Transition_svelte_svelte_type_style_lang = "";
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
function mediaQuery(query) {
  return readable(false);
}
const prefersDarkColorScheme = mediaQuery();
const colorSchemes = ["light", "dark", "system"];
const __colorScheme = writable(currentColorScheme());
const colorScheme = {
  ...__colorScheme,
  set(scheme) {
    __colorScheme.set(scheme);
  }
};
const isDarkColorScheme = derived([colorScheme, prefersDarkColorScheme], ([$scheme, $prefersDark]) => $scheme === "dark" || $scheme === "system" && $prefersDark);
function currentColorScheme() {
  return "system";
}
const isLargeScreen = mediaQuery();
mediaQuery();
const __kitDocs = writable({ meta: null });
const kitDocs = {
  subscribe: __kitDocs.subscribe
};
const frontmatter = derived(kitDocs, ($kitDocs) => {
  var _a;
  return (_a = $kitDocs == null ? void 0 : $kitDocs.meta) == null ? void 0 : _a.frontmatter;
});
function hasMarkdownHeaders(meta) {
  if (!meta)
    return false;
  const { headers } = meta;
  return headers && [...headers.map((h) => h.title), ...headers.map((h) => h.children).flat()].length > 1;
}
const scrollTop = readable(0, (set) => {
  return;
});
const scrollDirection = readable("none", (set) => {
  return;
});
export {
  __kitDocs as _,
  colorSchemes as a,
  isLargeScreen as b,
  colorScheme as c,
  scrollTop as d,
  derived as e,
  frontmatter as f,
  hasMarkdownHeaders as h,
  isDarkColorScheme as i,
  kitDocs as k,
  readable as r,
  scrollDirection as s,
  writable as w
};
