import { Post } from "../types/post";
import { Thread } from "../types/thread";

export type ApiReturns<T> =
	| { isValid: true; data: T; error: undefined }
	| { isValid: false; data: undefined; error: unknown };

export interface PostListGetResponse {
	threadId: string;
	posts: Post[] | null;
}

export type ThreadListGetResponse = Thread[];

export type ThreadCreateResponse = Thread;
