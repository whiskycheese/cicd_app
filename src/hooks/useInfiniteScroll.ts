import { useEffect, useRef } from "react";

type UseInfiniteScrollOptions = {
	hasNextPage: boolean;
	isLoading: boolean;
	isFetching: boolean;
	onLoadMore: () => void;
	rootMargin?: string;
};

export function useInfiniteScroll({
	hasNextPage,
	isLoading,
	isFetching,
	onLoadMore,
	rootMargin = "100px",
}: UseInfiniteScrollOptions) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const loadMoreRef = useRef<HTMLDivElement>(null);
	const isFetchingRef = useRef(false);

	isFetchingRef.current = isFetching;

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;
		const loadMoreTarget = loadMoreRef.current;
		if (!scrollContainer || !loadMoreTarget || !hasNextPage || isLoading) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting && !isFetchingRef.current) {
					onLoadMore();
				}
			},
			{ root: scrollContainer, rootMargin },
		);

		observer.observe(loadMoreTarget);

		return () => {
			observer.disconnect();
		};
	}, [hasNextPage, isLoading, onLoadMore, rootMargin]);

	return { scrollContainerRef, loadMoreRef };
}
