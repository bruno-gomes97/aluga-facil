import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	border: none;
	border-bottom: 1px solid var(--color-border-primary);
	display: flex;
	justify-content: space-between;
	align-items: center;
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

export const Button = styled.a`
	color: var(--color-text-primary);
	font-size: var(--font-size-14px);
	font-weight: bold;
	padding: var(--spacing-8px) var(--font-size-20px);
	border-radius: var(--radius-md);
	background-color: var(--color-button-secundary);
	cursor: pointer;
`;