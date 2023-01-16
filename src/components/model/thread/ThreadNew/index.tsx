import React from "react";
import { H1 } from "../../../util/baseElements";
import { useThreadNew } from "./hooks";

import { Div, Input, SBackToTopLink, SSplitDiv, SSubmitButton } from "./styles";

export const ThreadNew: React.FC = () => {
	const { newThreadTitle, setNewThreadTtile, createNewThread } = useThreadNew();

	return (
		<Div>
			<H1>スレッドの新規作成</H1>
			<form onSubmit={(e) => createNewThread(e)}>
				<Input
					placeholder="スレッドタイトル"
					value={newThreadTitle}
					onChange={(e) => setNewThreadTtile(e.target.value)}
					required
				></Input>
				<SSplitDiv>
					<SBackToTopLink to="/">トップへ戻る</SBackToTopLink>
					<SSubmitButton type="submit">作成</SSubmitButton>
				</SSplitDiv>
			</form>
		</Div>
	);
};
