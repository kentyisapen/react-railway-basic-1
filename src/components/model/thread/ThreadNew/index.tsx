import React from "react";
import { H1 } from "../../../util/baseElements";
import { useThreadNew } from "./hooks";

import { Div, Input, SBackToTopLink, SSplitDiv, SSubmitButton } from "./styles";

export const ThreadNew: React.FC = () => {
	const { newThreadTitle, setNewThreadTtile, createNewThread } = useThreadNew();

	return (
		<Div>
			<H1>スレッドの新規作成</H1>
			<Input
				placeholder="スレッドタイトル"
				value={newThreadTitle}
				onChange={(e) => setNewThreadTtile(e.target.value)}
			></Input>
			<SSplitDiv>
				<SBackToTopLink to="/">トップへ戻る</SBackToTopLink>
				<SSubmitButton onClick={() => createNewThread(newThreadTitle)}>
					作成
				</SSubmitButton>
			</SSplitDiv>
		</Div>
	);
};
