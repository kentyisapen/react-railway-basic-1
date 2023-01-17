import { ThreadShow } from "../../../model/thread/ThreadShow";
import { useShow } from "./hooks";

import { Div } from "./styles";

export const Show = () => {
	const { threadId } = useShow();

	return <Div>{threadId ? <ThreadShow threadId={threadId} /> : <></>}</Div>;
};
