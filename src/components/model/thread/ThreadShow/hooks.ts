import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { PostAPI } from "../../../../api";
import { Post } from "../../../../types/post";

export const useThreadShow = (threadId: string) => {
	const [posts, setPosts] = useState<Post[] | null>();
	const [searchParams] = useSearchParams();
	const title = searchParams.get("title");

	useEffect(() => {
		(async () => {
			const { isValid, data } = await PostAPI.get.posts(threadId);
			if (!isValid) return;
			setPosts(data.posts);
		})();
	}, []);

	return { posts, title };
};
