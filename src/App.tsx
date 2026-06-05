import { Link } from "react-router-dom";
import { AppRoutes, ROUTES } from "./routes/index.ts";

function App() {
	return (
		<main>
			<nav>
				<Link to={ROUTES.count}>Count</Link>
				<Link to={ROUTES.about}>About</Link>
			</nav>
			<AppRoutes />
		</main>
	);
}

export default App;
