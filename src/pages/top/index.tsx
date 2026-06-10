import ScrollList from "../../components/ScrollList";
import Navigation from "./Navigation";

const TopPage = () => {
	return (
		<div className="flex h-dvh flex-col">
			<Navigation />
			<ScrollList />
		</div>
	);
};

export default TopPage;
