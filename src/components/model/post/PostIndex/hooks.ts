import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { PostAPI } from "../../../../api";
import { Post } from "../../../../types/post";

export const usePostIndex = (threadId: string) => {
	const [posts, setPosts] = useState<Post[] | null>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [searchParams] = useSearchParams();
	const title = searchParams.get("title");

	useEffect(() => {
		(async () => {
			const { isValid, data } = await PostAPI.get.posts(threadId);
			if (!isValid) return;
			setPosts(data.posts);
			setIsLoaded(true);
		})();
	}, []);

	return { posts: posts ?? [], title: title, isLoaded: isLoaded };
};
