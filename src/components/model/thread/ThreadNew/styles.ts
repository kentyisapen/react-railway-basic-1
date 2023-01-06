import { Link } from "react-router-dom";
import styled from "styled-components";

// import { ThemeProps } from 'styles/Theme';

export const Div = styled.div`
	margin: 0 auto;
	max-width: 400px;
`;

export const Input = styled.input`
	margin: 40px 0;
	padding: 10px;
`;

export const SSplitDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SBackToTopLink = styled(Link)``;

export const SSubmitButton = styled.button`
	width: 100px;
	height: 30px;
	border: none;
	background-color: black;
	border-radius: 5px;
	color: white;
`;
