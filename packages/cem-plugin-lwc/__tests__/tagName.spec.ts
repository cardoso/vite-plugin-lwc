import { it, expect } from "vitest";
import { getTagName } from "../src/module.ts";

it("should support custom tag name", () => {
  expect(getTagName("/src/modules/c/app/app.ts")).toBe("c-app");
});
