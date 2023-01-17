import React from "react";
import { H1 } from "../../../util/baseElements";
import { useThreadShow } from "./hooks";

import { Div } from "./styles";

export type ThreadShowProps = {
	threadId: string;
};

export const ThreadShow: React.FC<ThreadShowProps> = ({
	threadId,
}: ThreadShowProps) => {
	const { posts, title } = useThreadShow(threadId);

	return (
		<Div>
			<H1>{title}</H1>
			<p>Enjoy {JSON.stringify(posts)} component life!!</p>
		</Div>
	);
};
