import React from "react";
import { ThreadNew } from "../../../model/thread/ThreadNew";
import { useNew } from "./hooks";

import { Div } from "./styles";

export const New: React.FC = () => {
	const [x, setX] = useNew();

	return (
		<Div>
			<ThreadNew></ThreadNew>
		</Div>
	);
};
