import { expect, test } from "vitest";
import { page } from "@vitest/browser/context";
import { LWC_VERSION } from "@lwc/shared";

test("should render", async () => {
  await expect
    .element(page.getByRole("heading", { level: 1 }))
    .toHaveTextContent(`LWC Version ${LWC_VERSION}`);
});

test("should update", async () => {
  await expect.element(page.getByTitle("counter")).toHaveTextContent("0");

  await page.getByRole("button", { name: "+" }).click();

  await expect.element(page.getByTitle("counter")).toHaveTextContent("1");

  await page.getByRole("button", { name: "+" }).click();

  await expect.element(page.getByTitle("counter")).toHaveTextContent("2");
});
