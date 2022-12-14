import axios from "axios";
import type { Thread } from "../types/thread";

export const ThreadAPI = {
	get: {
		/**
		 * スレッド一覧を取得する
		 *
		 * @return {Thread[]}
		 */
		thread: async () => {
			const { data } = await axios.get<Thread[]>("/threads");
			return data;
		},
	},
};
