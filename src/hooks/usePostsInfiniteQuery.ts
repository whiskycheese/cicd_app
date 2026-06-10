import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts, POSTS_PAGE_SIZE } from "../api/posts.ts";

export function usePostsInfiniteQuery() {
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		isLoading,
		status,
	} = useInfiniteQuery({
		queryKey: ["posts"],
		queryFn: ({ pageParam }) => fetchPosts(pageParam),
		initialPageParam: 1,
		getNextPageParam: (lastPage, _allPages, lastPageParam) =>
			lastPage.length < POSTS_PAGE_SIZE ? undefined : lastPageParam + 1,
		staleTime: 0,
		gcTime: 0,
	});

	const posts = data?.pages.flat() ?? [];
	const isLoadingMore = isFetchingNextPage || (isFetching && !isLoading);

	return {
		posts,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isLoading,
		isLoadingMore,
		status,
	};
}
