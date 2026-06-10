import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { renderApp } from "../../test/renderWithRouter";

afterEach(() => {
	cleanup();
});

describe("Count", () => {
	beforeEach(() => {
		renderApp({ routerProps: { initialEntries: ["/count"] } });
	});

	it("shows initial count of 0", () => {
		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});

	it("increments count when Increment is clicked", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByRole("button", { name: "Increment" }));

		expect(screen.getByText("Count: 1")).toBeInTheDocument();
	});

	it("decrements count when Decrement is clicked", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByRole("button", { name: "Increment" }));
		await user.click(screen.getByRole("button", { name: "Decrement" }));

		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});

	it("adds 5 when +5 is clicked", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByRole("button", { name: "+5" }));

		expect(screen.getByText("Count: 5")).toBeInTheDocument();
	});

	it("subtracts 5 when -5 is clicked", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByRole("button", { name: "+5" }));
		await user.click(screen.getByRole("button", { name: "-5" }));

		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});

	it("resets count to 0 when Reset is clicked", async () => {
		const user = userEvent.setup();

		await user.click(screen.getByRole("button", { name: "Increment" }));
		await user.click(screen.getByRole("button", { name: "Increment" }));
		expect(screen.getByText("Count: 2")).toBeInTheDocument();

		await user.click(screen.getByRole("button", { name: "Reset" }));

		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});
});
