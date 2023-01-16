import { useEffect, useState } from "react";
import { ThreadAPI } from "../../../../api/thread";
import { Thread } from "../../../../types/thread";

export const useThreadIndex = () => {
	const [threads, setThreads] = useState<Thread[]>([]);

	useEffect(() => {
		(async () => {
			const { isValid, data } = await ThreadAPI.get.threads();
			if (!isValid) return;
			setThreads(data);
		})();
	}, []);

	return { threads };
};
