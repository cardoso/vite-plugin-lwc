import "./editor/env.js";

import { editor } from "monaco-editor";

function getSavedValue(key: string) {
  return localStorage.getItem(key);
}

class CodeViewMonaco extends HTMLElement {
  _monacoEditor;
  _editor;

  constructor() {
    super();

    // Copy over editor styles
    const styles = document.querySelectorAll(
      "link[rel='stylesheet'][data-name^='vs/']",
    );

    for (const style of styles) {
      this.appendChild(style.cloneNode(true));
    }

    const template = document.getElementsByTagName("template")[0];

    if (!template) {
      throw new Error("Template not found");
    }
    this.appendChild(template.content.cloneNode(true));

    const container = this.querySelector("div");

    if (!container) {
      throw new Error("Editor not found");
    }

    this._editor = container;

    this._monacoEditor = editor.create(this._editor, {
      automaticLayout: true,
      language: "lwc",
      formatOnType: true,
    });

    this._monacoEditor.getModel()?.setValue(getSavedValue("code") || "");

    this._monacoEditor.onDidChangeModelContent(() => {
      localStorage.setItem("code", this._monacoEditor.getValue());
    });
  }
}

customElements.define("code-view-monaco", CodeViewMonaco);
