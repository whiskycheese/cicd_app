import { Route, Routes } from "react-router-dom";
import About from "../pages/about/index.tsx";
import Counter from "../pages/counter/index.tsx";
import Top from "../pages/top/index.tsx";
import { ROUTES } from "./paths.ts";

export function AppRoutes() {
	return (
		<Routes>
			<Route path={ROUTES.top} element={<Top />} />
			<Route path={ROUTES.count} element={<Counter />} />
			<Route path={ROUTES.about} element={<About />} />
		</Routes>
	);
}
