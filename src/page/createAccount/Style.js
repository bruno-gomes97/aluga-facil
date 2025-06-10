import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Title = styled.h2`
	font-size: var(--font-size-32px);
	font-weight: bold;
	padding: var(--spacing-12px) 0;
	text-align: center;
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 480px;
	margin: 0 auto;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	font-size: var(--font-size-16px);
	margin: var(--spacing-12px) 0 var(--spacing-8px);
`;

export const Input = styled.input`
	width: 480px;
	border: none;
	border-radius: var(--radius-md);
	background-color: var(--color-border-primary);
	color: var(--color-text-primary);
	padding:var(--spacing-12px);
	outline: none;
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

export const Paragraph = styled.p`
	color: var(--color-placheholder-input);
	font-size: var(--font-size-14px);
	display: flex;
	gap: var(--spacing-4px);
`;

export const Link = styled.a`
	text-decoration: none;
	color: var(--color-placheholder-input);
	font-size: var(--font-size-14px);
	cursor: pointer;
`;