import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { renderApp } from "./test/renderWithRouter";

afterEach(() => {
	cleanup();
});

describe("App", () => {
	it("shows initial count of 0", () => {
		renderApp();
		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});

	it("increments count when Increment is clicked", async () => {
		const user = userEvent.setup();
		renderApp();

		await user.click(screen.getByRole("button", { name: "Increment" }));

		expect(screen.getByText("Count: 1")).toBeInTheDocument();
	});

	it("decrements count when Decrement is clicked", async () => {
		const user = userEvent.setup();
		renderApp();

		await user.click(screen.getByRole("button", { name: "Increment" }));
		await user.click(screen.getByRole("button", { name: "Decrement" }));

		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});

	it("adds 5 when +5 is clicked", async () => {
		const user = userEvent.setup();
		renderApp();

		await user.click(screen.getByRole("button", { name: "+5" }));

		expect(screen.getByText("Count: 5")).toBeInTheDocument();
	});

	it("subtracts 5 when -5 is clicked", async () => {
		const user = userEvent.setup();
		renderApp();

		await user.click(screen.getByRole("button", { name: "+5" }));
		await user.click(screen.getByRole("button", { name: "-5" }));

		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});

	it("shows About page with Hello when About link is clicked", async () => {
		const user = userEvent.setup();
		renderApp();

		await user.click(screen.getByRole("link", { name: "About" }));

		expect(screen.getByText("Hello")).toBeInTheDocument();
		expect(screen.queryByText("Count: 0")).not.toBeInTheDocument();
	});

	it("shows About page when navigating directly to /about", () => {
		renderApp({ routerProps: { initialEntries: ["/about"] } });

		expect(screen.getByText("Hello")).toBeInTheDocument();
	});

	it("returns to Count page when Count link is clicked from About", async () => {
		const user = userEvent.setup();
		renderApp({ routerProps: { initialEntries: ["/about"] } });

		await user.click(screen.getByRole("link", { name: "Count" }));

		expect(screen.getByText("Count: 0")).toBeInTheDocument();
		expect(screen.queryByText("Hello")).not.toBeInTheDocument();
	});

	it("resets count to 0 when Reset is clicked", async () => {
		const user = userEvent.setup();
		renderApp();

		await user.click(screen.getByRole("button", { name: "Increment" }));
		await user.click(screen.getByRole("button", { name: "Increment" }));
		expect(screen.getByText("Count: 2")).toBeInTheDocument();

		await user.click(screen.getByRole("button", { name: "Reset" }));

		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});
});
