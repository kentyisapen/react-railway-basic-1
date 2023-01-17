export interface Post {
	id: string;
	post: string;
}

export interface PostListGetResponse {
	threadId: string;
	posts: Post[] | null;
}
