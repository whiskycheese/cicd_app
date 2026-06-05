import { expect, test } from "@playwright/test";

test.describe("Counter page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("shows initial count on home", async ({ page }) => {
		await expect(page).toHaveURL("/");
		await expect(page.getByText("Count: 0")).toBeVisible();
		await expect(page.getByRole("link", { name: "Count" })).toBeVisible();
		await expect(page.getByRole("link", { name: "About" })).toBeVisible();
	});

	test("increments and resets count", async ({ page }) => {
		await page.getByRole("button", { name: "Increment" }).click();
		await page.getByRole("button", { name: "Increment" }).click();
		await expect(page.getByText("Count: 2")).toBeVisible();

		await page.getByRole("button", { name: "Reset" }).click();
		await expect(page.getByText("Count: 0")).toBeVisible();
	});

	test("applies +5 and -5 adjustments", async ({ page }) => {
		await page.getByRole("button", { name: "+5" }).click();
		await expect(page.getByText("Count: 5")).toBeVisible();

		await page.getByRole("button", { name: "-5" }).click();
		await expect(page.getByText("Count: 0")).toBeVisible();
	});
});

test.describe("Routing", () => {
	test("navigates between Count and About via links", async ({ page }) => {
		await page.goto("/");

		await page.getByRole("link", { name: "About" }).click();
		await expect(page).toHaveURL("/about");
		await expect(page.getByText("Hello")).toBeVisible();
		await expect(page.getByText("Count: 0")).not.toBeVisible();

		await page.getByRole("link", { name: "Count" }).click();
		await expect(page).toHaveURL("/");
		await expect(page.getByText("Count: 0")).toBeVisible();
	});

	test("loads About page when visiting /about directly", async ({ page }) => {
		await page.goto("/about");

		await expect(page).toHaveURL("/about");
		await expect(page.getByText("Hello")).toBeVisible();
	});

	test("supports browser back navigation", async ({ page }) => {
		await page.goto("/");
		await page.getByRole("link", { name: "About" }).click();
		await expect(page).toHaveURL("/about");

		await page.goBack();
		await expect(page).toHaveURL("/");
		await expect(page.getByText("Count: 0")).toBeVisible();
	});
});
