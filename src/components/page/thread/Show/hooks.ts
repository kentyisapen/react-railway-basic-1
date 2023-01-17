import { useParams } from "react-router-dom";

export const useShow = () => {
	const urlParams = useParams<{ thread_id: string; title: string }>();

	return {
		threadId: urlParams.thread_id,
		threadTitle: urlParams.title,
	};
};
