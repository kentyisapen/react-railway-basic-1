import React from "react";

import { SCreateThreadLink, SHeader, STitle } from "./styles";

export const Header: React.FC = () => {
	return (
		<SHeader>
			<STitle>掲示板</STitle>
			<SCreateThreadLink>スレッドを立てる</SCreateThreadLink>
		</SHeader>
	);
};
