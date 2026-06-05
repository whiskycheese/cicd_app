import { Route, Routes } from "react-router-dom";
import About from "../About.tsx";
import Counter from "../Counter.tsx";
import { ROUTES } from "./paths.ts";

export function AppRoutes() {
	return (
		<Routes>
			<Route path={ROUTES.count} element={<Counter />} />
			<Route path={ROUTES.about} element={<About />} />
		</Routes>
	);
}
