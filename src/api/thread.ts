import { AxiosError } from "axios";
import type { Thread } from "../types/thread";
import axios from "./initAxios";

export const ThreadAPI = {
	get: {
		/**
		 * スレッド一覧を取得する
		 *
		 * @return {Thread[]}
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
		 * @return {Thread}
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
