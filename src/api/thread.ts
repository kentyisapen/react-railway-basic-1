import { AxiosError } from "axios";
import type { Thread } from "../types/thread";
import axios from "./initAxios";
import { API_ERROR_MESSAGE } from "./const";

export const ThreadAPI = {
	get: {
		/**
		 * スレッド一覧を取得する
		 *
		 * @return {Thread[] | null} 失敗時はnull
		 */
		threads: async () => {
			const { data } = await axios
				.get<Thread[]>("/threads")
				.catch((e: AxiosError) => {
					console.log(e);
					alert(API_ERROR_MESSAGE);
					return { data: null };
				});
			return data;
		},
	},
	post: {
		/**
		 * スレッドを作成する
		 *
		 * @param {string} タイトル
		 * @return {Thread | null} 作成したスレッド 失敗時はnull
		 */
		threads: async (title: string) => {
			const { data } = await axios
				.post<Thread>("/threads", {
					title: title,
				})
				.catch((e: AxiosError) => {
					console.log(e);
					alert(API_ERROR_MESSAGE);
					return { data: null };
				});
			return data;
		},
	},
};
