type LoadingIndicatorProps = {
	label: string;
};

export function LoadingIndicator({ label }: LoadingIndicatorProps) {
	return (
		<div
			className="flex items-center justify-center gap-2 py-6 text-gray-600"
			role="status"
			aria-live="polite"
		>
			<span
				className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500"
				aria-hidden="true"
			/>
			<span>{label}</span>
		</div>
	);
}
