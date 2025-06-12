import styled from "styled-components";

export const Container = styled.div`
	margin: var(--spacing-16px) 0;
`;

export const Title = styled.h3`
	font-size: var(--font-size-18px);
	font-weight: bold;
	margin-bottom: var(--spacing-16px);
`;

export const ContainerButton = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	gap: var(--spacing-12px);
`;

export const Button = styled.a`
	font-size: var(--font-size-14px);
	font-weight: bold;
	padding: var(--spacing-8px) var(--spacing-16px);
	border: none;
	border-radius: var(--radius-md);
	cursor: pointer;
`;