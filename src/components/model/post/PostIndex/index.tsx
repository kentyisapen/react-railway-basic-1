import React from "react";
import { H1, H2 } from "../../../util/baseElements";
import { usePostIndex } from "./hooks";

import { Caption, Div, Table, Tbody, Td, Tr } from "./styles";

export type PostIndexProps = {
	threadId: string;
};

export const PostIndex: React.FC<PostIndexProps> = ({
	threadId,
}: PostIndexProps) => {
	const { posts, title, isLoaded } = usePostIndex(threadId);

	const tableRows = posts.map((post) => {
		return (
			<Tr key={post.id}>
				<Td>{post.post}</Td>
			</Tr>
		);
	});

	return (
		<Div>
			<Table>
				<Caption>
					<H1>{title}</H1>
					{tableRows.length == 0 && isLoaded ? <H2>投稿がありません</H2> : null}
				</Caption>
				<Tbody>{tableRows}</Tbody>
			</Table>
		</Div>
	);
};
