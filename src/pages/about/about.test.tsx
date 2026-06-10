import { cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { renderApp } from "../../test/renderWithRouter";

vi.mock("../../hooks/usePostsInfiniteQuery.ts", () => ({
	usePostsInfiniteQuery: () => ({
		posts: [],
		status: "success",
	}),
}));

afterEach(() => {
	cleanup();
});

describe("About", () => {
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
});
