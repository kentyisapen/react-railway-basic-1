import React from "react";
import { useIndex } from "./hooks";

import { Div } from "./styles";

export const Index = () => {
	const [threads] = useIndex();

	return <Div>{JSON.stringify(threads)}</Div>;
};
