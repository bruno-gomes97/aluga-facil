export function applyPhoneMask(inputElement) {
	inputElement.addEventListener("input", () => {
		let value = inputElement.value;

		// Remove tudo que não for número
		value = value.replace(/\D/g, "");

		// Aplica a máscara com base na quantidade de números
		if (value.length <= 10) {
			value = value.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, function (_, ddd, part1, part2) {
				if (!part1) return ddd;
				if (!part2) return `(${ddd}) ${part1}`;
				return `(${ddd}) ${part1}-${part2}`;
			});
		} else {
			value = value.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})/, function (_, ddd, part1, part2) {
				if (!part2) return `(${ddd}) ${part1}`;
				return `(${ddd}) ${part1}-${part2}`;
			});
		}

		inputElement.value = value;
	});
}
