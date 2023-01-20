import { PostIndex } from "../../../model/post/PostIndex";
import { useShow } from "./hooks";

import { Div } from "./styles";

export const Show = () => {
	const { threadId } = useShow();

	return <Div>{threadId ? <PostIndex threadId={threadId} /> : <></>}</Div>;
};
