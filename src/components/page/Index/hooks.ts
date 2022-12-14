import { useEffect, useState } from "react";
import { ThreadAPI } from "../../../api/thread";
import type { Thread } from "../../../types/thread";

export const useIndex = () => {
	const [threads, setThreads] = useState<Thread[]>([]);

	useEffect(() => {
		(async () => {
			const data = await ThreadAPI.get.threads();
			setThreads(data);
		})();
	}, []);

	return [threads];
};
