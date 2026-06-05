import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<section>
			<p>Count: {count}</p>
			<button type="button" onClick={() => setCount((c) => c + 1)}>
				Increment
			</button>
			<button type="button" onClick={() => setCount((c) => c - 1)}>
				Decrement
			</button>
			<button type="button" onClick={() => setCount((c) => c + 5)}>
				+5
			</button>
			<button type="button" onClick={() => setCount((c) => c - 5)}>
				-5
			</button>
			<button type="button" onClick={() => setCount(0)}>
				Reset
			</button>
		</section>
	);
}

export default Counter;
