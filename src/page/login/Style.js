import styled from "styled-components";

export const Title = styled.h1`
	font-size: var(--font-size-32px);
	font-weight: bold;
	margin: var(--spacing-24px) var(--spacing-16px);
	text-align: center;
`;

export const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
`;

export const Label = styled.label`
	color: var(--color-text-primary);
	font-size: var(--font-size-16px);
	margin: var(--spacing-8px) 0;
`;

export const Input = styled.input`
	border: 1px solid var(--color-border-primary);
	border-radius: var(--radius-md);
	color: var(--color-placheholder-input);
	outline: none;
	padding: var(--spacing-12px);
	font-size: var(--font-size-14px);
`;

export const Button = styled.button`
	background-color: var(--color-button-primary);
	color: var(--color-text-secondary);
	font-size: var(--font-size-16px);
	font-weight: bold;
	padding: var(--spacing-8px);
	border: none;
	border-radius: var(--radius-md);
	width: 100%;
	margin: var(--spacing-12px) 0;
	cursor: pointer;
`;

export const FormContainer = styled.form`
	width: 480px;
	padding: var(--spacing-16px);
	margin: 0 auto;
`;

export const Paragraph = styled.p`
	color: var(--color-placheholder-input);
	font-size: var(--font-size-14px);
`;

export const Link = styled.a`
	text-decoration: none;
	color: var(--color-placheholder-input);
	font-size: var(--font-size-14px);
	cursor: pointer;
`;

export const Container = styled.div`
	width: 480px;
	margin: 0 auto;
	text-align: center;
`;

