import React from "react";

import { SCreateThreadLink, SHeader, STitle } from "./styles";
import { Link, Route } from "react-router-dom";

export const Header: React.FC = () => {
	return (
		<SHeader>
			<STitle>掲示板</STitle>
			<SCreateThreadLink to="/thread/new">スレッドを立てる</SCreateThreadLink>
		</SHeader>
	);
};
