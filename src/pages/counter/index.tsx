import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className="p-4">
			<p className="flex ">Count: {count}</p>
			<div className="mt-3 flex flex-col gap-2 max-w-50">
				<button
					type="button"
					className="button"
					onClick={() => setCount((c) => c + 1)}
				>
					Increment
				</button>
				<button
					type="button"
					className="button"
					onClick={() => setCount((c) => c - 1)}
				>
					Decrement
				</button>
				<button
					type="button"
					className="button"
					onClick={() => setCount((c) => c + 5)}
				>
					+5
				</button>
				<button
					type="button"
					className="button"
					onClick={() => setCount((c) => c - 5)}
				>
					-5
				</button>
				<button type="button" className="button" onClick={() => setCount(0)}>
					Reset
				</button>
			</div>
		</div>
	);
}

export default Counter;
