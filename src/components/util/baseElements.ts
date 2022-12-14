import React from "react";
import styled from "styled-components";

export const Padding = styled.div<{
	top: number;
	right: number;
	bottom: number;
	left: number;
}>`
	padding-top: ${(props) => props.top}px;
	padding-right: ${(props) => props.right}px;
	padding-bottom: ${(props) => props.bottom}px;
	padding-left: ${(props) => props.left}px;
`;
Padding.defaultProps = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
};

export const Margin = styled.div<{
	top: number;
	right: number;
	bottom: number;
	left: number;
}>`
	margin-top: ${(props) => props.top};
	margin-right: ${(props) => props.right};
	margin-bottom: ${(props) => props.bottom};
	margin-left: ${(props) => props.left};
`;
Margin.defaultProps = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
};

export const Text = styled.span<{
	display: "inline" | "inline-block" | "block";
	align: "right" | "left" | "center";
	fontSize: number;
	color: string;
	fontWeight: "normal" | "bold";
	lineHeight: number;
}>`
	display: ${(props) => props.display};
	text-align: ${(props) => props.align};
	font-size: ${(props) => props.fontSize};
	color: ${(props) => props.color};
	font-weight: ${(props) => props.fontWeight};
	line-height: ${(props) => props.lineHeight};
`;
Text.defaultProps = {
	display: "inline",
	align: "left",
	fontSize: 12,
	color: "#4B5467",
	fontWeight: "normal",
	lineHeight: 1,
};
