import React from "react";
import { H1 } from "../../../util/baseElements";
import { useThreadNew } from "./hooks";

import { Div, Input, SBackToTopLink, SSplitDiv, SSubmitButton } from "./styles";

export const ThreadNew: React.FC = () => {
	const [x, setX] = useThreadNew();

	return (
		<Div>
			<H1>スレッドの新規作成</H1>
			<Input placeholder="スレッドタイトル"></Input>
			<SSplitDiv>
				<SBackToTopLink to="/">トップへ戻る</SBackToTopLink>
				<SSubmitButton>作成</SSubmitButton>
			</SSplitDiv>
		</Div>
	);
};
