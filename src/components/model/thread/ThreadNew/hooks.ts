import { useState } from "react";
import { ThreadAPI } from "../../../../api";
import { useNavigate } from "react-router-dom";

export const useThreadNew = () => {
	const [newThreadTitle, setNewThreadTtile] = useState("");
	const navigation = useNavigate();
	const createNewThread = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await ThreadAPI.post.threads(newThreadTitle);
		navigation("/");
	};

	return { newThreadTitle, setNewThreadTtile, createNewThread };
};
