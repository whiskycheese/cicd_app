import { POSTS_TOTAL } from "../../api/posts.ts";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll.ts";
import { usePostsInfiniteQuery } from "../../hooks/usePostsInfiniteQuery.ts";
import { LoadingIndicator } from "./LoadingIndicator.tsx";

function ScrollList() {
	const {
		posts,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isLoading,
		isLoadingMore,
		status,
	} = usePostsInfiniteQuery();

	const { scrollContainerRef, loadMoreRef } = useInfiniteScroll({
		hasNextPage: hasNextPage ?? false,
		isLoading,
		isFetching,
		onLoadMore: fetchNextPage,
	});

	if (status === "error" && error) {
		return <p role="alert">Error: {error.message}</p>;
	}

	return (
		<section
			aria-label="Posts"
			className="flex min-h-0 flex-1 flex-col px-4 pb-4"
		>
			<div className="shrink-0">
				<h1>Posts</h1>
				{isFetching && (
					<p className="mb-2 text-sm font-medium text-blue-600" role="status">
						データを取得中...
					</p>
				)}
			</div>
			<div
				ref={scrollContainerRef}
				className="relative min-h-0 w-1/2 flex-1 overflow-y-auto border border-gray-200 p-4"
			>
				{isLoading ? (
					<LoadingIndicator label="Loading posts..." />
				) : (
					<>
						<ul className="space-y-4">
							{posts.map((post) => (
								<li key={post.id} className="border-b border-gray-100 pb-4">
									<h2 className="font-semibold">{post.title}</h2>
									<p className="text-gray-600">{post.body}</p>
								</li>
							))}
						</ul>
						{hasNextPage && (
							<div ref={loadMoreRef} aria-hidden="true" className="h-4" />
						)}
						{!hasNextPage && posts.length > 0 && (
							<p className="py-4 text-center text-gray-500">
								All posts loaded.
							</p>
						)}
					</>
				)}
				{isLoadingMore && (
					<div className="pointer-events-none sticky bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95">
						<LoadingIndicator label="Loading more..." />
					</div>
				)}
			</div>
			<p className="mt-2 shrink-0 text-sm text-gray-500">
				{isFetching
					? "読み込み中..."
					: `${posts.length} / ${POSTS_TOTAL} posts loaded`}
			</p>
		</section>
	);
}

export default ScrollList;
