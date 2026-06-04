import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

afterEach(() => {
	cleanup();
});

describe("App", () => {
	it("shows initial count of 0", () => {
		render(<App />);
		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});

	it("increments count when Increment is clicked", async () => {
		const user = userEvent.setup();
		render(<App />);

		await user.click(screen.getByRole("button", { name: "Increment" }));

		expect(screen.getByText("Count: 1")).toBeInTheDocument();
	});

	it("resets count to 0 when Reset is clicked", async () => {
		const user = userEvent.setup();
		render(<App />);

		await user.click(screen.getByRole("button", { name: "Increment" }));
		await user.click(screen.getByRole("button", { name: "Increment" }));
		expect(screen.getByText("Count: 2")).toBeInTheDocument();

		await user.click(screen.getByRole("button", { name: "Reset" }));

		expect(screen.getByText("Count: 0")).toBeInTheDocument();
	});
});
