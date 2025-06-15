import { useState } from "react";
import { useTranslation } from "react-i18next";
import StateSelect from "../../components/select/StateSelect";
import { cpfMask, phoneMask, removeCpfMask, removePhoneMask } from '../../util/MaskUtils';
import * as Styles from "./Style";

const CreateAccount = () => {
	const { t } = useTranslation();

	const [ fullname, setFullname ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ phone, setPhone ] = useState("");
	const [ cpf, setCpf ] = useState('');
	const [ password, setPassword ] = useState("");
	const [ confirmPassword, setConfirmPassword ] = useState("");
	const [ salary, setSalary ] = useState("");
	const [ street, setStreet ] = useState("");
	const [ number, setNumber ] = useState("");
	const [ neighborhood, setNeighborhood ] = useState("");
	const [ city, setCity ] = useState("");
	const [ state, setState ] = useState("");
	const [ postalCode, setPostalCode ] = useState("");

	const handleOnSubmit = async (e) => {
		const removeNonNumeric = (value) => value.replace(/\D/g, "");
		e.preventDefault();

		if (password !== confirmPassword) return;

		const cpfNumber = removeCpfMask(cpf);
		const phoneNumber = removePhoneMask(phone);
		const salaryNumber = removeNonNumeric(salary); 

		const user = {
			fullname,
			email: email.trim(),
			phoneNumber,
			cpf: cpfNumber,
			salary: salaryNumber,
			password: password.trim(),
			address: {
				street,
				number,
				neighborhood,
				city,
				state,
				postalCode
			}
		};

		try {
			const response = await fetch(`http://localhost:3001/users`, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})

			const data = await response.json();

			if(!data) {
				alert("Erro ao cadastrar o usuário!")
			}

			alert("Usuário cadastrado com sucesso!");
			window.location.href = "/"
		} catch {
			alert("Erro ao cadastrar usuário!")
		}

	}

	return (
		<div>
			<Styles.Container>
				<Styles.Title>{t("creatAccount")}</Styles.Title>
				<Styles.FormContainer onSubmit={handleOnSubmit}>
					<Styles.FieldWrapper>
						<Styles.InputGroup>
							<Styles.Label htmlFor="fullname">{t("fullname")}</Styles.Label>
							<Styles.Input 
								type="text"
								id="fullname"
								value={fullname}
								onChange={(e) => setFullname(e.target.value)}
								placeholder={t("placeholderFullName")}
								required
							/>
						</Styles.InputGroup>
						<Styles.InputGroup>
							<Styles.Label htmlFor="email">{t("email")}</Styles.Label>
							<Styles.Input 
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder={t("placeholderEmail")}
								required
							/>
						</Styles.InputGroup>
						<Styles.InputGroup>
							<Styles.Label htmlFor="phone">{t("phone")}</Styles.Label>
							<Styles.Input 
								id="phone"
								type="text"
								value={phone}
								onChange={(e) => setPhone(phoneMask(e.target.value))}
								placeholder={t("placeholderPhoneNumber")}
								required
							/>
						</Styles.InputGroup>
						<Styles.InputGroup>
							<Styles.Label htmlFor="cpf">{t("cpf")}</Styles.Label>
							<Styles.Input 
								id="cpf"
								type="text"
								value={cpf}
								onChange={(e) => setCpf(cpfMask(e.target.value))}
								placeholder={t("cpfPlaceholder")}
								required
							/>
						</Styles.InputGroup>
						<Styles.InputGroup>
							<Styles.Label htmlFor="salary">{t("salary")}</Styles.Label>
							<Styles.Select
								id="salary"
								value={salary}
								onChange={(e) => setSalary(e.target.value)}
								required
							>
								<option value="" disabled>{t("salaryRangePlaceholder")}</option>
								<option value="R$ 1.000 - R$ 2.000">R$ 1.000 - R$ 2.000</option>
								<option value="R$ 2.001 - R$ 3.000">R$ 2.001 - R$ 3.000</option>
								<option value="R$ 3.001 - R$ 5.000">R$ 3.001 - R$ 5.000</option>
								<option value="R$ 5.001 - R$ 7.000">R$ 5.001 - R$ 7.000</option>
								<option value="R$ 7.001 - R$ 10.000">R$ 7.001 - R$ 10.000</option>
								<option value="Acima de R$ 10.000">Acima de R$ 10.000</option>
							</Styles.Select>
						</Styles.InputGroup>
					</Styles.FieldWrapper>

					<Styles.FieldWrapper>
						<Styles.InputGroup>
							<Styles.Label htmlFor="password">{t("password")}</Styles.Label>
							<Styles.Input 
								id="password"
								type="text"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder={t("placeholderPassword")}
								required
							/>
						</Styles.InputGroup>
						<Styles.InputGroup>
							<Styles.Label htmlFor="confirmPassword">{t("confirmPassword")}</Styles.Label>
							<Styles.Input 
								id="confirmPassword"
								type="text"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								placeholder={t("placeholderConfirmPassword")}
								required
							/>
						</Styles.InputGroup>
					</Styles.FieldWrapper>

					<Styles.FieldWrapper>
						<Styles.InputGroup>
							<Styles.Label htmlFor="street">{t("street")}</Styles.Label>
							<Styles.Input 
								id="street"
								type="text"
								value={street}
								onChange={(e) => setStreet(e.target.value)}
								placeholder={t("streetPlaceholder")}
								required
							/>
						</Styles.InputGroup>
						<Styles.InputGroup>
							<Styles.Label htmlFor="number">{t("number")}</Styles.Label>
							<Styles.Input 
								id="number"
								type="text"
								value={number}
								onChange={(e) => setNumber(e.target.value)}
								placeholder={t("addressNumberPlaceholder")}
								required
							/>
						</Styles.InputGroup>
						<Styles.InputGroup>
							<Styles.Label htmlFor="neighborhood">{t("neighborhood")}</Styles.Label>
							<Styles.Input 
								id="neighborhood"
								type="text"
								value={neighborhood}
								onChange={(e) => setNeighborhood(e.target.value)}
								placeholder={t("neighborhoodPlaceholder")}
								required
							/>
						</Styles.InputGroup>
						<Styles.InputGroup>
							<Styles.Label htmlFor="city">{t("city")}</Styles.Label>
							<Styles.Input 
								id="city"
								type="text"
								value={city}
								onChange={(e) => setCity(e.target.value)}
								placeholder={t("cityPlaceholder")}
								required
							/>
						</Styles.InputGroup>
						<Styles.InputGroup>	
							<Styles.Label htmlFor="state">{t("state")}</Styles.Label>
							<StateSelect value={state} onChange={(e) => setState(e.target.value)}/>
						</Styles.InputGroup>
						<Styles.InputGroup>
							<Styles.Label htmlFor="postalCode">{t("postalCode")}</Styles.Label>
							<Styles.Input 
								id="postalCode"
								type="text"
								value={postalCode}
								onChange={(e) => setPostalCode(e.target.value)}
								placeholder={t("postalCodePlaceholder")}
								required
							/>
						</Styles.InputGroup>
					</Styles.FieldWrapper>
					<Styles.Button
						type="submit"	
					>
						{t("register")}
					</Styles.Button>
					
						<Styles.Paragraph>
							{t("alreadyHaveAccount")}
							<Styles.Link href={"/"}>{t("login")}</Styles.Link>
						</Styles.Paragraph>
				</Styles.FormContainer>
			</Styles.Container>
		</div>
	)
}

export default CreateAccount;