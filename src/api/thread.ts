import { AxiosError } from "axios";
import type { Thread } from "../types/thread";
import axios from "./initAxios";

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
					alert(e);
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
					alert(e);
					return { data: null };
				});
			return data;
		},
	},
};
