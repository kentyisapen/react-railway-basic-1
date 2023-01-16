import { useState } from "react";
import { ThreadAPI } from "../../../../api/thread";
import { useNavigate } from "react-router-dom";

export const useThreadNew = () => {
	const [newThreadTitle, setNewThreadTtile] = useState("");
	const navigation = useNavigate();
	const createNewThread = async (title: string) => {
		await ThreadAPI.post.threads(title);
		navigation("/");
	};

	return { newThreadTitle, setNewThreadTtile, createNewThread };
};
