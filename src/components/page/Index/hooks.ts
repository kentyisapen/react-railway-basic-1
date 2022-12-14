import { useState } from "react";

export const useIndex = () => {
	const [x, useX] = useState(0);

	return [x, useX];
};
