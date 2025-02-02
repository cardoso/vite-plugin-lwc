import editorWorker from "monaco-editor/esm/vs/editor/editor.worker.js?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker.js?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker.js?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker.js?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker.js?worker";
import lwcWorker from "./lwc.worker.js?worker";
import { languages } from "monaco-editor";
import dataConfiguration from "./lwc/dataConfiguration.js";
import languageDef from "./lwc/languageDef.js";

self.MonacoEnvironment = {
  getWorker(_workerId: string, label: string) {
    switch (label) {
      case "html":
        return new htmlWorker();
      case "lwc":
        return new lwcWorker();
      case "css":
        return new cssWorker();
      case "json":
        return new jsonWorker();
      case "typescript":
      case "javascript":
        return new tsWorker();
      default:
        return new editorWorker();
    }
  },
};
languages.register({
  id: "lwc",
  aliases: ["lwc"],
  extensions: [".html"],
  mimetypes: ["text/html"],
});
// languages.register;
languages.setMonarchTokensProvider("lwc", languageDef);
languages.registerHoverProvider("lwc", {
  provideHover(model, position, token, context) {
    return {
      contents: [{ value: "Hello" }],
      range: {
        endColumn: position.column,
        startColumn: position.column,
        endLineNumber: position.lineNumber,
        startLineNumber: position.lineNumber,
      },
      canDecreaseVerbosity: true,
      canIncreaseVerbosity: true,
    };
  },
});

languages.html.registerHTMLLanguageService(
  "lwc",
  {
    ...languages.html.htmlDefaults.options,
    suggest: { html5: true },
    data: dataConfiguration,
  },
  {
    ...languages.html.htmlDefaults.modeConfiguration,
    documentHighlights: true,
    colors: true,
    hovers: true,
  },
);
