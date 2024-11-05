// @ts-check
import App from "c/app";

/**
 * @import { LightningElement } from "lwc";
 * @type {Omit<App, keyof LightningElement>}
 */
const props = { greeting: "Client" };

const tagName = "c-app";

/**
 * @import { FeatureFlagMap } from "@lwc/features";
 * @type {(keyof FeatureFlagMap)[]}
 */
const features = [];

const noop = () => {
  /* do nothing */
};

const error = import.meta.env.DEV ? console.error : noop;
const log = import.meta.env.DEV ? console.log : noop;
const warn = import.meta.env.DEV ? console.warn : noop;

/**
 * @param {Pick<import('@lwc/engine-dom'), 'setFeatureFlag' | 'hydrateComponent' | 'createElement'>} config
 */
export const createMount = ({
  setFeatureFlag,
  hydrateComponent,
  createElement,
}) => {
  /**
   * @param {HTMLElement} parent
   */
  const getElement = (parent) => {
    const element = parent.getElementsByTagName(tagName).item(0);
    if (element) {
      return element;
    }
    error(`Element <${tagName}> not found.`);
    warn(`Fallback to creating a new element <${tagName}>.`);
    return parent.appendChild(
      createElement(tagName, { is: App, mode: "open" }),
    );
  };

  return function mount(parent = document.body) {
    for (const feature of features) {
      log(`Enabling feature flag: ${feature}`);
      setFeatureFlag(feature, true);
    }
    const element = getElement(parent);
    hydrateComponent(element, App, props);
    log(`Hydrated component <${tagName}>`);
    return element;
  };
};

/**
 * @param {Pick<import('@lwc/ssr-runtime'), 'renderComponent'>} config
 */
export const createRenderer = ({ renderComponent }) =>
  /**
   * @param {string} url
   * @param {string | undefined} ssrManifest
   * @returns {Promise<{ html?: string, head?: string }>}
   */
  async function render(url, ssrManifest) {
    log("[SSR] Rendering URL:", import.meta.env.BASE_URL + url);
    log("[SSR] Manifest:", ssrManifest);

    const { searchParams } = new URL(url, "http://localhost");

    const html = await renderComponent(
      tagName,
      // @ts-ignore
      App,
      {
        ...props,
        ...Object.fromEntries(searchParams.entries()),
      },
    );
    return { html };
  };
