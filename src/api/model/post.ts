import { PostListGetResponse } from "../../types/post";
import { ApiReturns } from "../types";
import axios from "../initAxios";
import { API_ERROR_MESSAGE } from "../const";

export const PostAPI = {
	get: {
		/**
		 * スレッド内の投稿を取得する
		 *
		 * @param {string} threadId
		 * @return {Promise<ApiReturns<PostListGetResponse>>} 指定したスレッドの投稿、もしくはエラーを含むオブジェクト
		 */
		posts: async (
			threadId: string
		): Promise<ApiReturns<PostListGetResponse>> => {
			try {
				const { data } = await axios.get<PostListGetResponse>(
					`/threads/${threadId}/posts`
				);
				return { isValid: true, data: data, error: undefined };
			} catch (e) {
				console.log(e);
				alert(API_ERROR_MESSAGE);
				return { isValid: false, data: undefined, error: e };
			}
		},
	},
};
