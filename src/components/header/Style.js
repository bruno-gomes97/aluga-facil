import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	border: none;
	border-bottom: 1px solid var(--color-border-primary);
	display: flex;
	justify-content: start;
	padding: var(--spacing-12px) var(--spacing-40px);
`;

export const Container = styled.div`
	img {
		float: left;
	}
`;

export const Span = styled.span`
	font-size: var(--font-size-18px);
	font-weight: bold;
	margin-left: var(--spacing-8px);
`;