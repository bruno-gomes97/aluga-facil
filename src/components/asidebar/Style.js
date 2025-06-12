import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: var(--spacing-16px) 0;
	height: 100%;
`;

export const Header = styled.header`
	margin: var(--spacing-16px);
`;

export const Title = styled.h2`
	font-size: var(--font-size-16px);
	margin: var(--spacing-16px) 0;
`;

export const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-8px);

	:hover {
		background-color: var(--color-button-secundary);
		border-radius: var(--radius-md);
	}
`;

export const Link = styled.a`
	display: flex;
	gap: var(--spacing-12px);
	cursor: pointer;
	padding: var(--spacing-8px) var(--spacing-12px);
`;

export const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-16px);
	padding: var(--spacing-16px);
`;

export const Button = styled.a`
	font-size: var(--font-size-14px);
	font-weight: bold;
	text-align: center;
	color: var(--color-button-secundary);
	background-color: var(--color-button-primary);
	padding: var(--spacing-8px) var(--spacing-16px);
	border-radius: var(--radius-md);
	cursor: pointer;
`;
