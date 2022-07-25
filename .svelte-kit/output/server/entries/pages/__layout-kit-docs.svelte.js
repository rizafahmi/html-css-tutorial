import { o as onDestroy, c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_attribute_value, f as escape_object, g as add_attribute, v as validate_component, h as createEventDispatcher, i as compute_slots, j as subscribe, m as missing_component, e as escape, k as each, l as set_store_value } from "../../_app/immutable/chunks/index-559eb7fe.js";
import { i as isUndefined, g as getI18nContext, a as isString, p as page, b as isNull, c as getNavbarContext, u as uppercaseFirstLetter, d as getSidebarContext, e as isFunction, f as isActiveSidebarLink, h as getNavigationContext, s as setNavigationContext, j as setNavbarContext, k as setSidebarContext, l as createSidebarContext, m as setI18nContext, D as DEFAULT_NAVIGATION_CONFIG, n as DEFAULT_I18N_TRANSLATIONS } from "../../_app/immutable/chunks/contexts-7c06151c.js";
import clsx from "clsx";
import { i as isDarkColorScheme, c as colorScheme, a as colorSchemes, b as isLargeScreen, _ as __kitDocs, k as kitDocs, h as hasMarkdownHeaders, s as scrollDirection, d as scrollTop, w as writable } from "../../_app/immutable/chunks/scroll-134c54c0.js";
const normalize = "";
const fonts = "";
const theme = "";
const vars = "";
const SvelteLogo = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 519 139"><title>svelte-horizontal</title><path d="M172.4428,100.3382a24.0793,24.0793,0,0,1-13.72-3.8769,19.8715,19.8715,0,0,1-8.0107-10.6094l8.3515-3.0683a15.4054,15.4054,0,0,0,5.4541,6.6044,14.3656,14.3656,0,0,0,8.2657,2.4288,12.1375,12.1375,0,0,0,7.8818-2.3858,8.2746,8.2746,0,0,0,2.94-6.8174,7.4559,7.4559,0,0,0-.8095-3.4511,10.325,10.325,0,0,0-1.8321-2.6,12.3611,12.3611,0,0,0-3.1533-2.0879q-2.1314-1.0635-3.5361-1.6192-1.4062-.5521-4.1328-1.4912-3.41-1.1924-5.1133-1.874a38.46,38.46,0,0,1-4.4737-2.2588,16.5385,16.5385,0,0,1-4.1757-3.1523,15.2908,15.2908,0,0,1-2.5137-4.1338,14.77,14.77,0,0,1,4.0049-16.7871q5.1138-4.5162,13.8906-4.5166,7.3272,0,12.0576,3.2382a15.6579,15.6579,0,0,1,6.3487,8.6075l-8.1807,2.7265a9.5238,9.5238,0,0,0-3.9629-4.3887,13.31,13.31,0,0,0-6.9443-1.6621,10.703,10.703,0,0,0-6.69,1.875,6.2891,6.2891,0,0,0-2.4287,5.2832,5.5132,5.5132,0,0,0,1.874,4.0909,12.885,12.885,0,0,0,3.92,2.6416q2.0464.8524,6.2217,2.3007,2.5547.939,3.791,1.4063t3.6221,1.5762a24.997,24.997,0,0,1,3.6641,2.0029,32.1346,32.1346,0,0,1,2.9824,2.4287,12.7235,12.7235,0,0,1,2.6,3.11,17.39,17.39,0,0,1,1.5332,3.8339,17.5828,17.5828,0,0,1,.64,4.8155q0,8.3524-5.71,13.08Q181.3892,100.3388,172.4428,100.3382Zm54.6221-1.0224L206.6128,39.6644h9.5449L229.7065,81.25a64.4659,64.4659,0,0,1,1.875,6.8173,64.0335,64.0335,0,0,1,1.875-6.8173l13.3789-41.586h9.459L235.9272,99.3158Zm47.294,0V39.6644h36.9843V48.016H283.2221V64.3773h18.15v8.3516h-18.15V90.9642h29.9952v8.3516Zm61.44,0V39.6644h8.8633v51.13h29.1435v8.5215Zm71.41-51.13v51.13h-8.8632v-51.13H381.4741V39.6644h42.6074v8.5215Zm35.1934,51.13V39.6644h36.9844V48.016H451.2661V64.3773h18.15v8.3516h-18.15V90.9642h29.9951v8.3516Z" style="fill:currentColor"/><path d="M110.2859,28.3189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L38.4118,35.1078A29.9232,29.9232,0,0,0,24.8931,55.1506a31.5143,31.5143,0,0,0,3.1076,20.2318,30.0059,30.0059,0,0,0-4.4761,11.1829,31.8885,31.8885,0,0,0,5.4472,24.1157c10.4022,14.8865,30.9424,19.2966,45.7915,9.8348l26.0826-16.6237a29.9182,29.9182,0,0,0,13.5187-20.0428,31.5276,31.5276,0,0,0-3.1057-20.2323,30.0012,30.0012,0,0,0,4.4742-11.1824,31.88,31.88,0,0,0-5.4472-24.1157" style="fill:#ff3e00"/><path d="M61.9463,112.0815A20.718,20.718,0,0,1,39.71,103.8389a19.173,19.173,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3362.9815a33.6466,33.6466,0,0,0,10.203,5.0978l.9694.2941-.0892.9675a5.8469,5.8469,0,0,0,1.052,3.8781,6.2388,6.2388,0,0,0,6.6952,2.485,5.7456,5.7456,0,0,0,1.602-.7041L85.3993,81.781A5.431,5.431,0,0,0,87.85,78.15a5.7944,5.7944,0,0,0-.9876-4.3712,6.2435,6.2435,0,0,0-6.6977-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9533,6.3449a19.0336,19.0336,0,0,1-5.2964,2.3259A20.7182,20.7182,0,0,1,41.078,72.4241a19.173,19.173,0,0,1-3.2766-14.5024,17.9892,17.9892,0,0,1,8.13-12.0513L72.0125,29.2472a19.0031,19.0031,0,0,1,5.3-2.3287A20.718,20.718,0,0,1,99.549,35.1611a19.1734,19.1734,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9693-.2942.0892-.9675a5.8576,5.8576,0,0,0-1.052-3.878,6.2388,6.2388,0,0,0-6.6952-2.485,5.7456,5.7456,0,0,0-1.602.7041L53.8592,57.219A5.422,5.422,0,0,0,51.41,60.85a5.7858,5.7858,0,0,0,.9857,4.3717,6.2435,6.2435,0,0,0,6.6977,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.952-6.3425a18.9787,18.9787,0,0,1,5.2958-2.3278,20.7183,20.7183,0,0,1,22.2369,8.2427,19.173,19.173,0,0,1,3.2766,14.5024,17.9982,17.9982,0,0,1-8.13,12.0532L67.246,109.7528a19.0031,19.0031,0,0,1-5.3,2.3287" style="fill:#fff"/></svg>\n';
function createDisposalBin() {
  let bin = [];
  function add(callback) {
    bin.push(callback);
  }
  function dispose() {
    bin.forEach((fn) => fn());
    bin = [];
  }
  try {
    onDestroy(dispose);
  } catch (e) {
  }
  return {
    add,
    dispose
  };
}
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isButton;
  let buttonClass;
  let contentClass;
  let arrowClass;
  let $$restProps = compute_rest_props($$props, ["type", "arrow", "as", "class"]);
  let { type = "flat" } = $$props;
  let { arrow = null } = $$props;
  let { as: __as = "button" } = $$props;
  let { class: __class = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.as === void 0 && $$bindings.as && __as !== void 0)
    $$bindings.as(__as);
  if ($$props.class === void 0 && $$bindings.class && __class !== void 0)
    $$bindings.class(__class);
  isButton = __as === "button" && isUndefined($$restProps["href"]);
  buttonClass = clsx("group transform-gpu text-lg font-medium transition-transform hover:scale-105", type === "raised" && "bg-gray-inverse text-gray-current hover:bg-gray-hover-inverse shadow-md hover:shadow-xl px-8 py-3", (isButton || type === "raised") && "rounded-md", __class);
  contentClass = clsx("inline-block transform transition-transform duration-100 group-hover:translate-x-0", arrow === "left" && "-translate-x-3 ", arrow === "right" && "translate-x-2");
  arrowClass = clsx(arrow && "opacity-0 transition-opacity duration-100 group-hover:visible group-hover:opacity-100", !arrow ? "hidden" : "inline-block");
  return `${isButton ? `<button${spread([
    {
      class: escape_attribute_value(buttonClass)
    },
    escape_object($$restProps)
  ], {})}>${arrow === "left" ? `<span${add_attribute("class", arrowClass, 0)}>&lt;-</span>` : ``}
    <span${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</span>
    ${arrow === "right" ? `<span${add_attribute("class", arrowClass, 0)}>-&gt;</span>` : ``}</button>` : `
  <a${spread([
    {
      class: escape_attribute_value(buttonClass)
    },
    escape_object($$restProps)
  ], {})}>${arrow === "left" ? `<span${add_attribute("class", arrowClass, 0)}>&lt;-</span>` : ``}
    <span${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</span>
    ${arrow === "right" ? `<span${add_attribute("class", arrowClass, 0)}>-&gt;</span>` : ``}</a>`}`;
});
const Moon_clear_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    escape_object($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22C6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Sun_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    escape_object($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Settings_2_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    escape_object($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const css$1 = {
  code: "[hidden]{display:none !important}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggle = void 0 } = $$props;
  let { transitions = "" } = $$props;
  let { inTransition = "" } = $$props;
  let { outTransition = inTransition } = $$props;
  let { inState = "" } = $$props;
  let { onState = "" } = $$props;
  let { outState = inState } = $$props;
  let { offVisible = false } = $$props;
  let div;
  let slot;
  const setClasses = (...classes) => {
    const toRemove = clean(transitions, inTransition, outTransition, inState, onState, outState);
    slot.classList.value = clean(slot.classList.value).split(" ").filter((c) => !toRemove.includes(c)).join(" ") + " " + classes.join(" ");
  };
  const clean = (...args) => args.join(" ").replace(/\s+/g, " ").trim();
  let initialized = false;
  let firstToggleState = toggle;
  const event = (toggle2) => {
    slot.toggle = toggle2;
    toggle2 ? enterEvent() : leaveEvent();
  };
  const enterEvent = () => {
    if (slot.hidden)
      ;
    else {
      setClasses(transitions, inTransition, onState);
    }
  };
  const leaveEvent = () => {
    setClasses(transitions, outTransition, outState);
  };
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.inState === void 0 && $$bindings.inState && inState !== void 0)
    $$bindings.inState(inState);
  if ($$props.onState === void 0 && $$bindings.onState && onState !== void 0)
    $$bindings.onState(onState);
  if ($$props.outState === void 0 && $$bindings.outState && outState !== void 0)
    $$bindings.outState(outState);
  if ($$props.offVisible === void 0 && $$bindings.offVisible && offVisible !== void 0)
    $$bindings.offVisible(offVisible);
  $$result.css.add(css$1);
  firstToggleState !== toggle && (initialized = true);
  initialized && event(toggle);
  return `<div hidden${add_attribute("this", div, 0)}></div>

${``}`;
});
function ariaBool(value) {
  return value ? "true" : "false";
}
let idCount$1 = 0;
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let menuId = `menu-${idCount$1 += 1}`;
  let menuButtonId = `menu-button-${idCount$1}`;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `<div class="${"relative inline-block text-left not-prose"}"><button${add_attribute("id", menuButtonId, 0)} type="${"button"}"${add_attribute("class", clsx("inline-flex w-full justify-center rounded-md p-2 text-lg font-medium", open ? "text-gray-inverse" : "text-gray-soft hover:text-gray-inverse"), 0)}${add_attribute("aria-controls", menuId, 0)}${add_attribute("aria-expanded", ariaBool(open), 0)} aria-haspopup="${"true"}">${slots.button ? slots.button({}) : ``}</button>

  ${validate_component(Transition, "Transition").$$render($$result, {
    toggle: open,
    transitions: "transition transform",
    inTransition: "ease-out duration-100",
    inState: "opacity-0 scale-95",
    onState: "opacity-100 scale-100",
    outTransition: "ease-in duration-75"
  }, {}, {
    default: () => {
      return `<ul${add_attribute("id", menuId, 0)} class="${"absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md border border-gray-divider bg-gray-elevate shadow-md"}" role="${"menu"}" aria-orientation="${"vertical"}"${add_attribute("aria-labelledby", menuButtonId, 0)} tabindex="${"-1"}"><div class="${"py-1"}" role="${"none"}">${slots.default ? slots.default({}) : ``}</div></ul>`;
    }
  })}</div>`;
});
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  createEventDispatcher();
  let { selected = false } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  return `<li${add_attribute("class", clsx("flex items-center px-4 py-2 text-sm hover:cursor-pointer transition-colors duraiton-100", selected ? "text-brand" : "text-gray-soft hover:text-gray-inverse focus-visible:text-gray-inverse"), 0)} role="${"menuitem"}" tabindex="${"-1"}">${$$slots.icon ? `<div class="${"mr-3 h-5 w-5"}">${slots.icon ? slots.icon({}) : ``}</div>` : ``}

  ${slots.default ? slots.default({}) : ``}</li>`;
});
const ColorSchemeMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkColorScheme, $$unsubscribe_isDarkColorScheme;
  let $colorScheme, $$unsubscribe_colorScheme;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_isDarkColorScheme = subscribe(isDarkColorScheme, (value) => $isDarkColorScheme = value);
  $$unsubscribe_colorScheme = subscribe(colorScheme, (value) => $colorScheme = value);
  const buttonIcon = {
    light: Sun_fill,
    dark: Moon_clear_fill,
    system: $isDarkColorScheme ? Moon_clear_fill : Sun_fill
  };
  const menuIcon = { ...buttonIcon, system: Settings_2_fill };
  const i18n = getI18nContext();
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  $$unsubscribe_isDarkColorScheme();
  $$unsubscribe_colorScheme();
  $$unsubscribe_i18n();
  return `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {
    button: () => {
      return `${validate_component(buttonIcon[$colorScheme] || missing_component, "svelte:component").$$render($$result, { class: "h-6 w-6" }, {}, {})}
    <span class="${"sr-only"}">${escape($i18n.colorScheme.title)}</span>
  `;
    },
    default: () => {
      return `${each(colorSchemes, (scheme) => {
        return `${validate_component(MenuItem, "MenuItem").$$render($$result, { selected: $colorScheme === scheme }, {}, {
          icon: () => {
            return `${validate_component(menuIcon[scheme] || missing_component, "svelte:component").$$render($$result, { slot: "icon" }, {}, {})}`;
          },
          default: () => {
            return `${escape($i18n.colorScheme[scheme])}
    `;
          }
        })}`;
      })}`;
    }
  })}`;
});
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `<div${add_attribute("class", clsx("fixed top-0 left-0 bg-black/40 backdrop-blur-sm dark:bg-gray-700/80 transition-opacity duration-75 pointer-events-auto z-40", "w-screen h-screen", open ? "opacity-100 visible" : "opacity-0 invisible"), 0)}></div>`;
});
const Close_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    escape_object($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m12 10.586l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.414 1.414l-4.95-4.95l-4.95 4.95l-1.414-1.414l4.95-4.95l-4.95-4.95L7.05 5.636z"/>`}<!-- HTML_TAG_END --></svg>`;
});
function hideDocumentScrollbar(hidden) {
  window.requestAnimationFrame(() => {
    document.documentElement.classList[hidden ? "add" : "remove"]("overflow-hidden");
    document.documentElement.classList[!hidden ? "add" : "remove"]("overflow-x-hidden");
  });
}
let idCount = 0;
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLargeScreen, $$unsubscribe_isLargeScreen;
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_isLargeScreen = subscribe(isLargeScreen, (value) => $isLargeScreen = value);
  let { open = false } = $$props;
  let { overlay = false } = $$props;
  createEventDispatcher();
  let popoverId = `popover-${idCount += 1}`;
  let popoverButtonId = `popover-button-${idCount}`;
  let closeDialog;
  const i18n = getI18nContext();
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.overlay === void 0 && $$bindings.overlay && overlay !== void 0)
    $$bindings.overlay(overlay);
  {
    if ($isLargeScreen) {
      closeDialog == null ? void 0 : closeDialog();
      hideDocumentScrollbar(false);
    }
  }
  $$unsubscribe_isLargeScreen();
  $$unsubscribe_i18n();
  return `<div class="${"relative inline-block text-left not-prose"}"><button${add_attribute("id", popoverButtonId, 0)} type="${"button"}"${add_attribute("class", clsx("inline-flex w-full justify-center rounded-md p-2 text-lg font-medium", open ? "text-gray-inverse" : "text-gray-soft hover:text-gray-inverse"), 0)}${add_attribute("aria-controls", popoverId, 0)}${add_attribute("aria-expanded", ariaBool(open), 0)} aria-haspopup="${"true"}">${slots.button ? slots.button({}) : ``}</button>

  ${overlay ? `${validate_component(Overlay, "Overlay").$$render($$result, { open }, {}, {})}` : ``}

  ${validate_component(Transition, "Transition").$$render($$result, {
    toggle: open,
    transitions: "transition transform",
    inTransition: "ease-out duration-150",
    inState: "opacity-0 scale-95",
    onState: "opacity-100 scale-100",
    outTransition: "ease-out duration-100"
  }, {}, {
    default: () => {
      return `<div${add_attribute("id", popoverId, 0)}${add_attribute("class", clsx("absolute -top-4 -right-5 min-w-[340px] p-5 pt-4 origin-top-right z-50", !open && "invisible"), 0)} tabindex="${"-1"}" role="${"dialog"}"><div class="${"flex min-h-[60px] flex-col overflow-hidden rounded-md border border-gray-divider bg-gray-elevate shadow-md"}"><div class="${"flex items-center z-20"}"><div class="${"flex-1"}"></div>
          <button${add_attribute("class", clsx("p-4 text-gray-soft hover:text-gray-inverse mt-[0.125rem] mr-[0.125rem]", !open && "pointer-events-none"), 0)}>${validate_component(Close_fill, "CloseIcon").$$render($$result, { width: "24", height: "24" }, {}, {})}
            <span class="${"sr-only"}">${escape($i18n.dialog.close)}</span></button></div>

        <div class="${"px-4 pt-2.5 pb-6 -mt-[2.5rem]"}">${slots.default ? slots.default({}) : ``}</div></div></div>`;
    }
  })}</div>`;
});
const Arrow_drop_down_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    escape_object($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m12 14l-4-4h8z"/>`}<!-- HTML_TAG_END --></svg>`;
});
function slugToRequestParam(slug) {
  return normalizePath(slug).replace(/\//g, "_");
}
function normalizePath(path) {
  return path.replace(/^\//, "").replace(/\/$/, "");
}
async function loadKitDocsMeta(slug, { fetch }) {
  try {
    const res = await fetch(`/kit-docs/${slug === "/" ? "index" : slugToRequestParam(slug.replace(/\.html$/, ""))}.meta.json`);
    return await res.json();
  } catch (e) {
    return null;
  }
}
async function loadKitDocsSidebar(path, { url, fetch }) {
  const matchedPath = matchSidebarPath(url, path);
  if (!matchedPath) {
    return null;
  }
  try {
    const res = await fetch(`/kit-docs/${slugToRequestParam(matchedPath)}.sidebar.json`);
    return res.json();
  } catch (e) {
    return null;
  }
}
function matchSidebarPath(url, path) {
  if (isString(path))
    return path;
  const currentPath = url.pathname;
  const sortedPaths = Object.keys(path).sort((a, b) => b.length - a.length);
  for (const possiblePath of sortedPaths) {
    if (currentPath.startsWith(possiblePath)) {
      return path[possiblePath];
    }
  }
  return null;
}
function createKitDocsLoader(options = {}) {
  return async ({ url, fetch }) => {
    const meta = await loadKitDocsMeta(url.pathname, { fetch });
    return {
      props: options.sidebar ? { meta, sidebar: await loadKitDocsSidebar(options.sidebar, { url, fetch }) } : { meta }
    };
  };
}
const KitDocs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { meta = null } = $$props;
  onDestroy(() => {
    __kitDocs.set({ meta: null });
  });
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  {
    __kitDocs.set({ meta });
  }
  return `${slots.default ? slots.default({}) : ``}`;
});
const Menu_unfold_fill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    escape_object($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M21 18v2H3v-2h18zM17.05 3.55L22 8.5l-4.95 4.95v-9.9zM12 11v2H3v-2h9zm0-7v2H3V4h9z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Arrow_right_s_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    escape_object($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.414L16 12l-6.364 6.364l-1.414-1.414z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Menu_5_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    escape_object($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title } = $$props;
  let { slug } = $$props;
  let { match = null } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.match === void 0 && $$bindings.match && match !== void 0)
    $$bindings.match(match);
  isActive = match == null ? void 0 : match.test($page.url.pathname);
  $$unsubscribe_page();
  return `<li class="${"mt-4 first:mt-0 992:mt-0"}"><a${add_attribute("class", clsx("p-1", isActive ? "border-b hover:border-b-2 border-brand text-gray-inverse" : "text-gray-soft hover:text-gray-inverse"), 0)}${add_attribute("href", slug, 0)}${add_attribute("target", isNull(match) ? "_blank" : null, 0)}>${escape(title)}</a></li>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navLinks;
  let $context, $$unsubscribe_context;
  let $i18n, $$unsubscribe_i18n;
  let $colorScheme, $$unsubscribe_colorScheme;
  $$unsubscribe_colorScheme = subscribe(colorScheme, (value) => $colorScheme = value);
  let { search = false } = $$props;
  createEventDispatcher();
  const context = getNavbarContext();
  $$unsubscribe_context = subscribe(context, (value) => $context = value);
  const i18n = getI18nContext();
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  navLinks = $context.links;
  $$unsubscribe_context();
  $$unsubscribe_i18n();
  $$unsubscribe_colorScheme();
  return `<div class="${"flex w-full flex-col items-center justify-center mx-auto max-w-[var(--kd-navbar-max-width)] p-[var(--kd-navbar-padding)] h-[var(--kd--navbar-height)]"}"><div${add_attribute("class", clsx("flex w-full items-center"), 0)}>${slots.left ? slots.left({}) : ``}

    <div class="${"flex-1"}"></div>

    <div class="${"992:hidden -mr-2 flex items-center"}">${search ? `${slots.search ? slots.search({}) : ``}` : ``}

      ${validate_component(Popover, "Popover").$$render($$result, { overlay: true }, {}, {
    button: () => {
      return `${validate_component(Menu_5_line, "MenuIcon").$$render($$result, { width: "30", height: "30" }, {}, {})}
          <span class="${"sr-only"}">${escape($i18n.nav.mainMenu)}</span>
        `;
    },
    default: () => {
      return `${slots["popover-top"] ? slots["popover-top"]({}) : ``}

        <section class="${"flex flex-col items-start"}"><h1 class="${"mb-6 text-xl font-medium"}">${escape($i18n.nav.links)}</h1>
          <nav><ul>${each(navLinks, (navLink) => {
        return `${validate_component(NavLink, "NavLinkItem").$$render($$result, Object.assign(navLink), {}, {})}`;
      })}</ul></nav></section>

        ${slots["popover-middle"] ? slots["popover-middle"]({}) : ``}

        <hr class="${"my-6 h-2 w-full border-t-2 border-dashed border-gray-200 dark:border-gray-400"}">

        <section class="${"flex flex-col items-start"}"><h1 class="${"mb-6 text-xl font-medium"}">${escape($i18n.nav.options)}</h1>
          <div class="${"flex flex-col space-y-6"}">${slots["popover-options"] ? slots["popover-options"]({}) : ``}
            <div class="${"flex items-center"}">Theme

              <label class="${"relative ml-4 flex items-center border border-gray-200 px-4 py-1 dark:border-gray-400 rounded-md focus-within:ring-2"}" style="${"--tw-ring-color: var(--kd-color-focus);"}"><span class="${"sr-only"}">${escape($i18n.colorScheme.theme)}</span>
                ${escape(uppercaseFirstLetter($colorScheme))}
                ${validate_component(Arrow_drop_down_fill, "ArrowDropDownIcon").$$render($$result, { width: "20", height: "20", class: "ml-1" }, {}, {})}
                <select class="${"absolute inset-0 appearance-none opacity-0"}"><option value="${"light"}">${escape($i18n.colorScheme.light)}</option><option value="${"dark"}">${escape($i18n.colorScheme.dark)}</option><option value="${"system"}">${escape($i18n.colorScheme.system)}</option></select></label></div></div></section>

        ${slots["popover-bottom"] ? slots["popover-bottom"]({}) : ``}`;
    }
  })}</div>

    <div class="${"992:flex 992:items-center hidden"}"><nav><ul class="${"flex items-center space-x-8 text-lg font-medium"}">${each(navLinks, (navLink) => {
    return `${validate_component(NavLink, "NavLinkItem").$$render($$result, Object.assign(navLink), {}, {})}`;
  })}</ul></nav>

      ${slots.right ? slots.right({}) : ``}

      <div class="${"border-gray-divider ml-6 mr-2.5 h-7 w-2 border-l-[1.5px]"}"></div>

      <div class="${"hidden 992:flex items-center"}">${slots["right-alt"] ? slots["right-alt"]({}) : ``}
        ${validate_component(ColorSchemeMenu, "ColorSchemeMenu").$$render($$result, {}, {}, {})}</div></div></div>

  ${slots.bottom ? slots.bottom({}) : ``}</div>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_activeLink;
  let $isLargeScreen, $$unsubscribe_isLargeScreen;
  let $config, $$unsubscribe_config;
  let $page, $$unsubscribe_page;
  $$unsubscribe_isLargeScreen = subscribe(isLargeScreen, (value) => $isLargeScreen = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  createEventDispatcher();
  let sidebar;
  let { open = false } = $$props;
  let { search = false } = $$props;
  let { class: _class = "" } = $$props;
  let { style = "" } = $$props;
  const { config, activeLink } = getSidebarContext();
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$unsubscribe_activeLink = subscribe(activeLink, (value) => value);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$unsubscribe_activeLink();
  $$unsubscribe_isLargeScreen();
  $$unsubscribe_config();
  $$unsubscribe_page();
  return `<aside id="${"main-sidebar"}"${add_attribute("class", clsx("sidebar", isFunction(_class) ? _class({ open }) : _class), 0)}${add_attribute("role", !$isLargeScreen ? "dialog" : null, 0)}${add_attribute("aria-modal", ariaBool(!$isLargeScreen), 0)}${add_attribute("style", style, 0)}${add_attribute("this", sidebar, 0)}><div class="${"992:hidden sticky top-0 left-0 flex items-center"}"><div class="${"flex-1"}"></div>
    <button${add_attribute("class", clsx("text-gray-soft hover:text-gray-inverse p-4 -mx-6", !open && "pointer-events-none"), 0)}>${validate_component(Close_fill, "CloseIcon").$$render($$result, { width: "24", height: "24" }, {}, {})}
      <span class="${"sr-only"}">Close sidebar</span></button></div>

  <nav class="${"992:px-1"}">${search ? `<div class="${"992:block pointer-events-none sticky top-0 -ml-0.5 hidden min-h-[80px]"}"><div class="${"h-6 bg-white dark:bg-gray-800"}"></div>
        <div class="${"pointer-events-auto relative bg-white dark:bg-gray-800"}">${slots.search ? slots.search({}) : ``}</div>
        <div class="${"h-8 bg-gradient-to-b from-white dark:from-gray-800"}"></div></div>` : ``}

    ${slots.top ? slots.top({}) : ``}

    <ul${add_attribute("class", clsx(!search && "mt-8", "pb-28 992:pb-0"), 0)}>${each(Object.keys($config.links), (category) => {
    let links = $config.links[category];
    return `
        <li class="${"992:mt-10 mt-12 first:mt-0"}">${category !== "." ? `<h5 class="${"text-gray-strong 992:mb-3 mb-8 text-lg font-semibold"}">${escape(category)}
            </h5>` : `<div class="${"mt-10"}"></div>`}
          <ul class="${"border-gray-divider space-y-3 border-l"}">${each(links, (link) => {
      var _a, _b;
      return `<li class="${"first:mt-6"}"><a${add_attribute("class", clsx("992:py-1.5 -ml-px flex items-center border-l-2 py-2 pl-4", isActiveSidebarLink(link, $page.url.pathname) ? "text-brand font-semibold" : "hover:border-gray-inverse text-gray-soft hover:text-gray-inverse border-transparent font-normal"), 0)}${add_attribute("href", link.slug, 0)}${add_attribute("style", isActiveSidebarLink(link, $page.url.pathname) ? "border-color: var(--kd-sidebar-border-active);" : "", 0)}>${((_a = link.icon) == null ? void 0 : _a.before) ? `${validate_component(link.icon.before || missing_component, "svelte:component").$$render($$result, { class: "mr-1", width: "24", height: "24" }, {}, {})}` : ``}
                  ${escape(link.title)}
                  ${((_b = link.icon) == null ? void 0 : _b.after) ? `${validate_component(link.icon.after || missing_component, "svelte:component").$$render($$result, { class: "ml-1", width: "24", height: "24" }, {}, {})}` : ``}</a>
              </li>`;
    })}</ul>
        </li>`;
  })}</ul>

    ${slots.bottom ? slots.bottom({}) : ``}</nav></aside>

<div class="${"992:hidden z-40"}">${validate_component(Overlay, "Overlay").$$render($$result, { open }, {}, {})}</div>`;
});
const Arrow_drop_right_line = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    escape_object($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243l-1.414-1.415z"/>`}<!-- HTML_TAG_END --></svg>`;
});
function useActiveHeaderLinks(navContext) {
  createDisposalBin();
}
const OnThisPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $kitDocs, $$unsubscribe_kitDocs;
  let $i18n, $$unsubscribe_i18n;
  let $nav, $$unsubscribe_nav;
  let $page, $$unsubscribe_page;
  $$unsubscribe_kitDocs = subscribe(kitDocs, (value) => $kitDocs = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { class: __class = "" } = $$props;
  let { style = "" } = $$props;
  const nav = getNavigationContext();
  $$unsubscribe_nav = subscribe(nav, (value) => $nav = value);
  const i18n = getI18nContext();
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  useActiveHeaderLinks();
  if ($$props.class === void 0 && $$bindings.class && __class !== void 0)
    $$bindings.class(__class);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$unsubscribe_kitDocs();
  $$unsubscribe_i18n();
  $$unsubscribe_nav();
  $$unsubscribe_page();
  return `${hasMarkdownHeaders($kitDocs.meta) ? `<div${add_attribute("class", clsx("on-this-page", __class), 0)}${add_attribute("style", style, 0)}><h5 class="${"font-semibold w-full text-left text-gray-inverse text-lg"}">${escape($i18n.toc.title)}</h5>
    <ul class="${"space-y-4 mt-4"}">${each($kitDocs.meta.headers, (header) => {
    var _a;
    return `<li${add_attribute("class", clsx($nav.cleanHash($page.url.hash) === `#${header.slug}` ? "text-brand" : "text-gray-soft hover:text-gray-inverse"), 0)}><a${add_attribute("href", `#${header.slug}`, 0)}>${escape(header.title)}</a></li>
        ${((_a = header.children) == null ? void 0 : _a.length) ? `<ul class="${"space-y-3"}">${each(header.children, (childHeader) => {
      return `<li${add_attribute("class", clsx("flex group group", $nav.cleanHash($page.url.hash) === `#${childHeader.slug}` ? "text-brand" : "text-gray-soft hover:text-gray-inverse"), 0)}>${validate_component(Arrow_drop_right_line, "RightArrowIcon").$$render($$result, {
        width: "20",
        height: "20",
        class: "mr-px mt-px text-gray-300 dark:text-gray-400 group-hover:text-gray-soft"
      }, {}, {})}
                <a${add_attribute("href", `#${childHeader.slug}`, 0)}>${escape(childHeader.title)}</a>
              </li>`;
    })}
          </ul>` : ``}`;
  })}</ul></div>` : ``}`;
});
const KitDocsLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let collapseNavbar;
  let showSidebar;
  let showBottomNav;
  let $activeLink, $$unsubscribe_activeLink;
  let $sidebarLinks, $$unsubscribe_sidebarLinks;
  let $scrollDirection, $$unsubscribe_scrollDirection;
  let $scrollTop, $$unsubscribe_scrollTop;
  let $isLargeScreen, $$unsubscribe_isLargeScreen;
  let $i18nContext, $$unsubscribe_i18nContext;
  let $sidebarConfig, $$unsubscribe_sidebarConfig;
  let $navbarContext, $$unsubscribe_navbarContext;
  let $navigatonContext, $$unsubscribe_navigatonContext;
  let $kitDocs, $$unsubscribe_kitDocs;
  let $activeCategory, $$unsubscribe_activeCategory;
  let $previousLink, $$unsubscribe_previousLink;
  let $nextLink, $$unsubscribe_nextLink;
  $$unsubscribe_scrollDirection = subscribe(scrollDirection, (value) => $scrollDirection = value);
  $$unsubscribe_scrollTop = subscribe(scrollTop, (value) => $scrollTop = value);
  $$unsubscribe_isLargeScreen = subscribe(isLargeScreen, (value) => $isLargeScreen = value);
  $$unsubscribe_kitDocs = subscribe(kitDocs, (value) => $kitDocs = value);
  let { navigation = null } = $$props;
  let { navbar } = $$props;
  let { sidebar = null } = $$props;
  let { i18n = null } = $$props;
  let { isSidebarOpen = false } = $$props;
  let { isNavPopoverOpen = false } = $$props;
  let { search = false } = $$props;
  const navigatonContext = writable();
  $$unsubscribe_navigatonContext = subscribe(navigatonContext, (value) => $navigatonContext = value);
  setNavigationContext(navigatonContext);
  const navbarContext = writable();
  $$unsubscribe_navbarContext = subscribe(navbarContext, (value) => $navbarContext = value);
  setNavbarContext(navbarContext);
  const sidebarConfig = writable();
  $$unsubscribe_sidebarConfig = subscribe(sidebarConfig, (value) => $sidebarConfig = value);
  setSidebarContext(createSidebarContext(sidebarConfig));
  const i18nContext = writable();
  $$unsubscribe_i18nContext = subscribe(i18nContext, (value) => $i18nContext = value);
  setI18nContext(i18nContext);
  const { activeCategory, allLinks: sidebarLinks, activeLink, nextLink, previousLink } = getSidebarContext();
  $$unsubscribe_activeCategory = subscribe(activeCategory, (value) => $activeCategory = value);
  $$unsubscribe_sidebarLinks = subscribe(sidebarLinks, (value) => $sidebarLinks = value);
  $$unsubscribe_activeLink = subscribe(activeLink, (value) => $activeLink = value);
  $$unsubscribe_nextLink = subscribe(nextLink, (value) => $nextLink = value);
  $$unsubscribe_previousLink = subscribe(previousLink, (value) => $previousLink = value);
  if ($$props.navigation === void 0 && $$bindings.navigation && navigation !== void 0)
    $$bindings.navigation(navigation);
  if ($$props.navbar === void 0 && $$bindings.navbar && navbar !== void 0)
    $$bindings.navbar(navbar);
  if ($$props.sidebar === void 0 && $$bindings.sidebar && sidebar !== void 0)
    $$bindings.sidebar(sidebar);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n !== void 0)
    $$bindings.i18n(i18n);
  if ($$props.isSidebarOpen === void 0 && $$bindings.isSidebarOpen && isSidebarOpen !== void 0)
    $$bindings.isSidebarOpen(isSidebarOpen);
  if ($$props.isNavPopoverOpen === void 0 && $$bindings.isNavPopoverOpen && isNavPopoverOpen !== void 0)
    $$bindings.isNavPopoverOpen(isNavPopoverOpen);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  set_store_value(navigatonContext, $navigatonContext = {
    ...DEFAULT_NAVIGATION_CONFIG,
    ...navigation
  }, $navigatonContext);
  set_store_value(navbarContext, $navbarContext = navbar ? navbar : { links: [] }, $navbarContext);
  set_store_value(sidebarConfig, $sidebarConfig = sidebar, $sidebarConfig);
  set_store_value(i18nContext, $i18nContext = { ...DEFAULT_I18N_TRANSLATIONS, ...i18n }, $i18nContext);
  collapseNavbar = $isLargeScreen ? false : $scrollTop > 60 && $scrollDirection === "down";
  showSidebar = $sidebarLinks.length > 0;
  showBottomNav = showSidebar || $activeLink;
  $$unsubscribe_activeLink();
  $$unsubscribe_sidebarLinks();
  $$unsubscribe_scrollDirection();
  $$unsubscribe_scrollTop();
  $$unsubscribe_isLargeScreen();
  $$unsubscribe_i18nContext();
  $$unsubscribe_sidebarConfig();
  $$unsubscribe_navbarContext();
  $$unsubscribe_navigatonContext();
  $$unsubscribe_kitDocs();
  $$unsubscribe_activeCategory();
  $$unsubscribe_previousLink();
  $$unsubscribe_nextLink();
  return `<div class="${"kit-docs bg-gray-body min-h-full min-w-full h-full transition-transform duration-150 ease-out"}"${add_attribute("style", clsx("font-family: var(--kd-font-family-sans, inherit);", !showBottomNav && "--kd-breadcrumbs-height: 0px;", `--kd--navbar-height: calc(var(--kd-navbar-height) + var(--kd-breadcrumbs-height));`), 0)}>${navbar ? `<div${add_attribute("class", clsx("fixed top-0 z-30 w-full flex-none transform-gpu transition-transform duration-150 ease-out", isNavPopoverOpen ? "bg-gray-100 dark:bg-gray-800" : "supports-backdrop-blur:bg-white/60 bg-gray-200/95 backdrop-blur dark:bg-gray-800/60", collapseNavbar ? "-translate-y-[calc(calc(var(--kd--navbar-height)-var(--kd-breadcrumbs-height))+1px)]" : "translate-y-0"), 0)} style="${"border-bottom: var(--kd-navbar-border-bottom);"}">${validate_component(Navbar, "Navbar").$$render($$result, { search }, {}, {
    "popover-bottom": () => {
      return `${slots["navbar-popover-bottom"] ? slots["navbar-popover-bottom"]({}) : ``}
        `;
    },
    "popover-options": () => {
      return `${slots["navbar-popover-options"] ? slots["navbar-popover-options"]({}) : ``}
        `;
    },
    "popover-middle": () => {
      return `${slots["navbar-popover-middle"] ? slots["navbar-popover-middle"]({}) : ``}
        `;
    },
    "popover-top": () => {
      return `${slots["navbar-popover-top"] ? slots["navbar-popover-top"]({}) : ``}
        `;
    },
    bottom: () => {
      var _a, _b;
      return `${showBottomNav ? `<div class="${"border-gray-divider 992:hidden flex w-full items-center mt-4 pt-4 border-t"}">${showSidebar ? `<button id="${"main-sidebar-button"}" type="${"button"}" class="${"text-gray-soft hover:text-gray-inverse inline-flex justify-center rounded-md p-2 text-sm font-medium"}" aria-controls="${"main-sidebar"}"${add_attribute("aria-expanded", ariaBool(isSidebarOpen), 0)} aria-haspopup="${"true"}"><span class="${"sr-only"}">${escape($i18nContext.nav.openSidebar)}</span>
                  ${validate_component(Menu_unfold_fill, "MenuUnfoldIcon").$$render($$result, { width: "28", height: "28" }, {}, {})}</button>` : ``}

              ${$activeLink || ((_a = $kitDocs.meta) == null ? void 0 : _a.title) ? `<ol${add_attribute("class", clsx("text-md text-gray-soft flex items-center whitespace-nowrap leading-6", showSidebar ? "mt-px ml-2.5" : "mt-2"), 0)}>${$activeCategory && $activeCategory !== "." ? `<li class="${"flex items-center"}">${escape($activeCategory)}
                      ${validate_component(Arrow_right_s_line, "RightArrowIcon").$$render($$result, { class: "mx-1", width: "16", height: "16" }, {}, {})}</li>` : ``}
                  <li class="${"truncate font-semibold text-slate-900 dark:text-slate-200"}">${escape(($activeLink == null ? void 0 : $activeLink.title) || ((_b = $kitDocs.meta) == null ? void 0 : _b.title))}</li></ol>` : ``}</div>` : ``}

          ${slots["navbar-bottom"] ? slots["navbar-bottom"]({}) : ``}
        `;
    },
    "right-alt": () => {
      return `${slots["navbar-right-alt"] ? slots["navbar-right-alt"]({}) : ``}
        `;
    },
    right: () => {
      return `${slots["navbar-right"] ? slots["navbar-right"]({}) : ``}
        `;
    },
    left: () => {
      return `${slots["navbar-left"] ? slots["navbar-left"]({}) : ``}
        `;
    },
    search: () => {
      return `${slots.search ? slots.search({}) : ``}`;
    }
  })}</div>` : ``}

  <div${add_attribute("class", clsx("mx-auto w-full flex flex-row min-h-full max-w-[var(--kd-content-max-width)]", navbar && "pt-[var(--kd--navbar-height)] z-20"), 0)}>${showSidebar ? `${validate_component(Sidebar, "Sidebar").$$render($$result, {
    search,
    class: ({ open }) => clsx("self-start fixed top-0 left-0 transform bg-gray-body z-50 border-gray-divider border-r", "-translate-x-full transform transition-transform duration-200 ease-out will-change-transform", "max-h-screen min-h-screen min-w-[var(--kd-sidebar-min-width)] max-w-[var(--kd-sidebar-max-width)]", "992:translate-x-0 922:block 992:sticky 992:z-0 overflow-y-auto p-[var(--kd-sidebar-padding)]", open && "translate-x-0", navbar ? "992:top-[var(--kd--navbar-height)] 992:min-h-[calc(100vh-var(--kd--navbar-height))] 992:max-h-[calc(100vh-var(--kd--navbar-height))]" : "992:top-0 min-h-screen max-h-screen"),
    open: isSidebarOpen
  }, {}, {
    search: () => {
      return `${slots.search ? slots.search({}) : ``}
        `;
    },
    bottom: () => {
      return `${slots["sidebar-bottom"] ? slots["sidebar-bottom"]({}) : ``}
        `;
    },
    top: () => {
      return `${slots["sidebar-top"] ? slots["sidebar-top"]({}) : ``}`;
    }
  })}` : ``}

    <main${add_attribute("class", clsx("w-full overflow-x-hidden", navbar ? `992:min-h-[calc(100vh-var(--kd--navbar-height))]` : "min-h-screen", navbar && "min-h-[calc(100vh-var(--kd--navbar-height))]", $kitDocs.meta && (showSidebar ? "px-8 992:px-16" : "px-6"), $kitDocs.meta && (navbar || showBottomNav ? "pt-8" : "")), 0)}${add_attribute("style", clsx(`max-width: ${$kitDocs.meta ? "var(--kd-main-max-width, var(--kd-article-max-width))" : "var(--kd-main-max-width)"};`), 0)}>${slots["main-top"] ? slots["main-top"]({}) : ``}

      ${$kitDocs.meta ? `<article class="${"markdown prose dark:prose-invert z-10 max-w-[var(--kd-article-max-width)]"}">${$activeCategory && $activeCategory !== "." ? `<p class="${"text-brand mb-3.5 text-[15px] font-semibold leading-6"}">${escape($activeCategory)}</p>` : ``}

          ${slots.default ? slots.default({}) : ``}</article>` : `${slots.default ? slots.default({}) : ``}`}

      ${$previousLink || $nextLink ? `<hr class="${"border-gray-divider mt-20"}">

        <div class="${"992:text-xl flex items-center pt-12 pb-20 text-lg font-semibold text-gray-300"}">${$previousLink ? `<div class="${"mb-4 flex flex-col items-start"}"><span class="${"text-gray-inverse ml-3 mb-4 inline-block"}">${escape($i18nContext.nav.previous)}</span>
              ${validate_component(Button, "Button").$$render($$result, {
    arrow: "left",
    href: $previousLink.slug,
    class: "hover:text-gray-inverse",
    "sveltekit:prefetch": true
  }, {}, {
    default: () => {
      return `${escape($previousLink.title)}`;
    }
  })}</div>` : ``}

          ${$nextLink ? `<div class="${"ml-auto mb-4 flex flex-col items-end"}"><span class="${"text-gray-inverse mr-3 mb-4 inline-block"}">${escape($i18nContext.nav.next)}</span>
              ${validate_component(Button, "Button").$$render($$result, {
    arrow: "right",
    href: $nextLink.slug,
    class: "hover:text-gray-inverse",
    "sveltekit:prefetch": true
  }, {}, {
    default: () => {
      return `${escape($nextLink.title)}`;
    }
  })}</div>` : ``}</div>` : ``}

      ${slots["main-bottom"] ? slots["main-bottom"]({}) : ``}</main>

    <div class="${"992:flex-1"}"></div>

    ${validate_component(OnThisPage, "OnThisPage").$$render($$result, {
    class: clsx("pt-8 pb-8 hidden overflow-auto min-w-[160px] sticky right-4 pr-4 1440:right-6 1440:pr-2 1280:block pl-0.5", navbar ? "top-[var(--kd--navbar-height)] max-h-[calc(100vh-var(--kd--navbar-height))]" : "top-0 max-h-screen")
  }, {}, {})}</div></div>`;
});
const __layoutKitDocs_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--kd-color-brand-rgb:233, 127, 6}:root.dark{--kd-color-brand-rgb:213, 149, 76}.logo.svelte-dfxhtd a{display:flex;align-items:center;justify-content:center}.logo.svelte-dfxhtd svg{height:36px;overflow:hidden}",
  map: null
};
const prerender = true;
const load = createKitDocsLoader({ sidebar: { "/": null, "/docs": "/docs" } });
const _layout_kit_docs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let category;
  let title;
  let description;
  let $activeCategory, $$unsubscribe_activeCategory;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { meta = null } = $$props;
  let { sidebar = null } = $$props;
  const navbar = {
    links: [
      {
        title: "Documentation",
        slug: "/docs",
        match: /\/docs/
      }
    ]
  };
  const { activeCategory } = createSidebarContext(sidebar);
  $$unsubscribe_activeCategory = subscribe(activeCategory, (value) => $activeCategory = value);
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  if ($$props.sidebar === void 0 && $$bindings.sidebar && sidebar !== void 0)
    $$bindings.sidebar(sidebar);
  $$result.css.add(css);
  category = $activeCategory ? `${$activeCategory}: ` : "";
  title = meta ? `${category}${meta.title} | KitDocs` : null;
  description = meta == null ? void 0 : meta.description;
  $$unsubscribe_activeCategory();
  $$unsubscribe_page();
  return `${$$result.head += `${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``}
    ${description ? `<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-3cm5o9">` : ``}`, ""}

${validate_component(KitDocs, "KitDocs").$$render($$result, { meta }, {}, {
    default: () => {
      return `${validate_component(KitDocsLayout, "KitDocsLayout").$$render($$result, { navbar, sidebar }, {}, {
        "navbar-left": () => {
          return `<div class="${"logo svelte-dfxhtd"}" slot="${"navbar-left"}">${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `<!-- HTML_TAG_START -->${SvelteLogo}<!-- HTML_TAG_END -->`;
            }
          })}</div>`;
        },
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}`;
    }
  })}`;
});
export {
  _layout_kit_docs as default,
  load,
  prerender
};
