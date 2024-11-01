import { expect, test } from "vitest";
import { page } from "@vitest/browser/context";
import { LWC_VERSION } from "@lwc/shared";

test("should render", async () => {
  const h1 = page.getByRole("heading", { level: 1 });
  await expect.element(h1).toHaveTextContent(`LWC Version ${LWC_VERSION}`);
});

test("should update", async () => {
  const counter = page.getByTitle("counter");
  const plus = page.getByRole("button", { name: "+" });
  const minus = page.getByRole("button", { name: "-" });

  await expect.element(counter).toHaveTextContent("0");

  await plus.click();
  await expect.element(counter).toHaveTextContent("1");

  await plus.click();
  await expect.element(counter).toHaveTextContent("2");

  await minus.click();
  await expect.element(counter).toHaveTextContent("1");

  await minus.click();
  await expect.element(counter).toHaveTextContent("0");
});
