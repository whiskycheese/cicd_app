import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<main>
			<p>Count: {count}</p>
			<button type="button" onClick={() => setCount((c) => c + 1)}>
				Increment
			</button>
			<button type="button" onClick={() => setCount(0)}>
				Reset
			</button>
		</main>
	);
}

export default App;
