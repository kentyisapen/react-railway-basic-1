import { Link } from "react-router-dom";
import styled from "styled-components";

// import { ThemeProps } from 'styles/Theme';

export const SHeader = styled.header`
	height: 60px;
	background-color: black;
	justify-content: space-between;
	align-items: center;
	display: flex;
	gap: 40px;
`;

export const STitle = styled.span`
	font-size: 20px;
	color: white;
	margin: 0 20px;
`;

export const SCreateThreadLink = styled(Link)`
	color: white;
	margin: 0 20px;
	:hover {
		text-decoration: underline;
	}
`;
