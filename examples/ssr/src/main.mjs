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

// const error = import.meta.env.DEV ? console.error : noop;
const log = import.meta.env.DEV ? console.log : noop;
const warn = import.meta.env.DEV ? console.warn : noop;

/**
 * @param {import('@lwc/engine-dom')}
 * @returns
 */
export const createMount = ({
  setFeatureFlag,
  hydrateComponent,
  createElement,
}) => {
  return function mount() {
    const element = document.body.getElementsByTagName(tagName).item(0);

    for (const feature of features) {
      log(`Enabling feature flag: ${feature}`);
      setFeatureFlag(feature, true);
    }

    if (element) {
      hydrateComponent(element, App, props);
      return element;
    }

    warn(`Element <${tagName}> not found, falling back to CSR.`);
    document.body.append(createElement(tagName, { is: App, mode: "open" }));
  };
};

/**
 *
 * @param {import('@lwc/ssr-runtime')['renderComponent']} renderComponent
 * @returns
 */
export const createRenderer = (renderComponent) =>
  /**
   * @param {string} url
   * @param {string | undefined} ssrManifest
   * @returns {Promise<{ html?: string, head?: string }>}
   */
  async function render(url, ssrManifest) {
    log("[SSR] Rendering URL:", import.meta.env.BASE_URL + url);
    log("[SSR] Manifest:", ssrManifest);

    const { searchParams } = new URL(url, "http://localhost");

    // @ts-ignore
    const html = await renderComponent(tagName, App, {
      ...props,
      ...Object.fromEntries(searchParams.entries()),
    });
    return { html };
  };
