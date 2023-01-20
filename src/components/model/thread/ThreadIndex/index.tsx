import React from "react";
import { useThreadIndex } from "./hooks";

import { Div, Table, Tbody, Td, Tr, Caption } from "./styles";
import { Thread } from "../../../../types/thread";
import { H1 } from "../../../util/baseElements";
import { Link } from "react-router-dom";

export type ThreadIndexProps = {
	threads: Thread[];
};

export const ThreadIndex = () => {
	const { threads } = useThreadIndex();

	const tableRows = threads.map((thread) => {
		return (
			<Tr key={thread.id}>
				<Td>
					<Link to={`/thread/${thread.id}?title=${thread.title}`}>
						{thread.title}
					</Link>
				</Td>
			</Tr>
		);
	});

	return (
		<Div>
			<Table>
				<Caption>
					<H1>新着情報</H1>
				</Caption>
				<Tbody>{tableRows}</Tbody>
			</Table>
		</Div>
	);
};
