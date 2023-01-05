import React from "react";
import { useThreadIndex } from "./hooks";

import { Div, Table, Tbody, Td, Tr, Caption } from "./styles";
import { Thread } from "../../../../types/thread";
import { H1 } from "../../../util/baseElements";

export type ThreadIndexProps = {
	threads: Thread[];
};

export const ThreadIndex: React.FC<ThreadIndexProps> = ({
	threads,
}: ThreadIndexProps) => {
	// const [x, setX] = useThreadIndex();

	const tableRows = threads.map((thread) => {
		return (
			<Tr key={thread.id}>
				<Td>{thread.title}</Td>
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
