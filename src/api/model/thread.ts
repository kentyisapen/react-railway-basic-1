import { AxiosError } from "axios";
import type { Thread } from "../../types/thread";
import axios from "../initAxios";
import { API_ERROR_MESSAGE } from "../const";
import {
	ApiReturns,
	ThreadCreateResponse,
	ThreadListGetResponse,
} from "../types";

export const ThreadAPI = {
	get: {
		/**
		 * スレッド一覧を取得する
		 *
		 * @return {Promise<ApiReturns<ThreadListGetResponse>>} 指定したスレッド、もしくはエラーを含むオブジェクト
		 */
		threads: async (): Promise<ApiReturns<ThreadListGetResponse>> => {
			try {
				const { data } = await axios.get<ThreadListGetResponse>("/threads");
				return { isValid: true, data: data, error: undefined };
			} catch (e) {
				console.log(e);
				alert(API_ERROR_MESSAGE);
				return { isValid: false, data: undefined, error: e };
			}
		},
	},
	post: {
		/**
		 * スレッドを作成する
		 *
		 * @param {string} タイトル
		 * @return {Promise<ApiReturns<ThreadCreateResponse>>} 作成したスレッド、もしくはエラーを含むオブジェクト
		 */
		threads: async (
			title: string
		): Promise<ApiReturns<ThreadCreateResponse>> => {
			try {
				const { data } = await axios.post<ThreadCreateResponse>("/threads", {
					title: title,
				});
				return { isValid: true, data: data, error: undefined };
			} catch (e) {
				console.log(e);
				alert(API_ERROR_MESSAGE);
				return { isValid: false, data: undefined, error: e };
			}
		},
	},
};
