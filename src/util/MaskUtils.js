// Máscara de CPF
export const cpfMask = (value) => {
	const onlyNumbers = value.replace(/\D/g, '');
	return onlyNumbers
		.replace(/^(\d{3})(\d)/, '$1.$2')
		.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
		.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
		.slice(0, 14);
};

export const removeCpfMask = (value) => value.replace(/\D/g, '');

// Máscara de telefone (formato: (11) 91234-5678)
export const phoneMask = (value) => {
	const onlyNumbers = value.replace(/\D/g, '');

	return onlyNumbers
		.replace(/^(\d{2})(\d)/, '($1) $2')
		.replace(/(\d{5})(\d)/, '$1-$2')
		.slice(0, 15);
};

export const removePhoneMask = (value) => value.replace(/\D/g, '');

// Máscara de CEP (formato: 12345-678)
export const cepMask = (value) => {
	const onlyNumbers = value.replace(/\D/g, '');

	return onlyNumbers
		.replace(/^(\d{5})(\d)/, '$1-$2')
		.slice(0, 9);
};

export const removeCepMask = (value) => value.replace(/\D/g, '');

export const removeNonNumeric = (value) => {
	return value.replace(/\D/g, '');
};
