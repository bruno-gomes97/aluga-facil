import styled from "styled-components";

export const Container = styled.div`
	margin: var(--spacing-16px) 0;
`;

export const Title = styled.h3`
	font-size: var(--font-size-16px);
	font-weight: bold;
	margin-bottom: var(--spacing-8px);
`;

export const BoxContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: var(--spacing-16px);
`;

export const Box = styled.div`
	width: 280px;
	height: 112px;
	padding: var(--spacing-24px);
	border: 1px solid var(--color-border-primary);
	border-radius: var(--radius-md);
`;

export const BoxTitle = styled.h3`
	font-size: var(--font-size-16px);
	margin-bottom: var(--spacing-8px);
`;

export const TotalVehicle = styled.p`
	font-size: var(--font-size-16px);
	font-weight: bold;
`;
