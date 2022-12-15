import React from "react";
import { useIndex } from "./hooks";

import { Div } from "./styles";

import { ThreadIndex } from "../../model/thread/ThreadIndex";

export const Index = () => {
	const [threads] = useIndex();

	return (
		<Div>
			<ThreadIndex threads={threads}></ThreadIndex>
		</Div>
	);
};
