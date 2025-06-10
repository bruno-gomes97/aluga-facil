import { useTranslation } from "react-i18next";
import SignupHeader from "../../components/signupHeader/SignupHeader";
import * as Styles from "./Style";

const CreateAccount = () => {
	const { t } = useTranslation();

	return (
		<div>
			<SignupHeader />
			<Styles.Container>
				<Styles.Title>{t("creatAccount")}</Styles.Title>
				<Styles.FormContainer>
					<Styles.InputContainer>
						<Styles.Label>{t("fullname")}</Styles.Label>
						<Styles.Input 
							type="text"
							placeholder={t("placeholderFullName")}
						/>
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Label>{t("email")}</Styles.Label>
						<Styles.Input 
							type="text"
							placeholder={t("placeholderEmail")}
						/>
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Label>{t("phone")}</Styles.Label>
						<Styles.Input 
							type="text"
							placeholder={t("placeholderPhoneNumber")}
						/>
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Label>{t("password")}</Styles.Label>
						<Styles.Input 
							type="text"
							placeholder={t("placeholderPassword")}
						/>
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Label>{t("confirmPassword")}</Styles.Label>
						<Styles.Input 
							type="text"
							placeholder={t("placeholderConfirmPassword")}
						/>
					</Styles.InputContainer>
					<Styles.Button>{t("register")}</Styles.Button>
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