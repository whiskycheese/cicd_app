export type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

export const POSTS_PAGE_SIZE = 10;
export const POSTS_TOTAL = 100;
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

export async function fetchPosts(page: number): Promise<Post[]> {
	const response = await fetch(
		`${POSTS_API}?_page=${page}&_limit=${POSTS_PAGE_SIZE}`,
		{ cache: "no-store" },
	);

	if (!response.ok) {
		throw new Error("Failed to fetch posts");
	}

	return response.json() as Promise<Post[]>;
}
