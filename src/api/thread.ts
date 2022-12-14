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
			const { data } = await axios.get<Thread[]>("/threads");
			return data;
		},
	},
};
