import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes";

const Navigation = () => {
	return (
		<nav className="flex shrink-0 gap-4 p-4">
			<Link to={ROUTES.count}>
				<button type="button" className="button">
					Count
				</button>
			</Link>
			<Link to={ROUTES.about}>
				<button type="button" className="button">
					About
				</button>
			</Link>
		</nav>
	);
};

export default Navigation;
