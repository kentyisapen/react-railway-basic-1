import { useState } from "react";

export const useNew = () => {
	const [x, setX] = useState(0);

	return [x, setX];
};
