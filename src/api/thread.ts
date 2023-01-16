import { AxiosError } from "axios";
import type { Thread } from "../types/thread";
import axios from "./initAxios";
import { API_ERROR_MESSAGE } from "./const";
import { ApiReturns } from "./types";

export const ThreadAPI = {
	get: {
		/**
		 * スレッド一覧を取得する
		 *
		 * @return {Promise<ApiReturns<Thread[]>>} 指定したスレッド、もしくはエラーを含むオブジェクト
		 */
		threads: async (): Promise<ApiReturns<Thread[]>> => {
			try {
				const { data } = await axios.get<Thread[]>("/threads");
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
		 * @return {Promise<ApiReturns<Thread>>} 作成したスレッド、もしくはエラーを含むオブジェクト
		 */
		threads: async (title: string): Promise<ApiReturns<Thread>> => {
			try {
				const { data } = await axios.post<Thread>("/threads", {
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
