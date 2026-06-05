import { type RenderOptions, render } from "@testing-library/react";
import { MemoryRouter, type MemoryRouterProps } from "react-router-dom";
import App from "../App.tsx";

type RenderAppOptions = RenderOptions & {
	routerProps?: MemoryRouterProps;
};

export function renderApp({ routerProps, ...options }: RenderAppOptions = {}) {
	return render(
		<MemoryRouter {...routerProps}>
			<App />
		</MemoryRouter>,
		options,
	);
}
