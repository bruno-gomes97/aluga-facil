import styled from "styled-components";

export const Container = styled.div`
	margin: var(--spacing-16px) 0 var(--spacing-64px); 
`;

export const Title = styled.h3`
	font-size: var(--font-size-18px);
	font-weight: bold;
	margin-bottom: var(--spacing-8px);
`;

export const Table = styled.div`
	border: 1px solid var(--color-border-primary);
	border-radius: var(--radius-md);
`;

export const Header = styled.header`
	padding: var(--spacing-12px) var(--spacing-16px);
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const TableCell = styled.p`
	font-size: var(--font-size-14px);
	text-align: center;
`;

export const Body = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const Row = styled.li`
	padding: var(--spacing-24px) var(--spacing-16px);
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	text-align: center;
	border-top: 1px solid var(--color-border-primary);
	border-bottom: 1px solid var(--color-border-primary);
	align-items: center;
`;

export const DateCell = styled.p`
	font-size: var(--font-size-14px);
	color: var(--color-placheholder-input);
`;

export const StatusCell = styled.p`
	border-radius: var(--radius-md);
	background-color: var(--color-button-secundary);
	color: var(--color-text-primary);
	font-size: var(--font-size-14px);
	text-align: center;
	padding: var(--spacing-8px) var(--spacing-48px);
	width: 154px;
	margin: 0 auto;
`;

