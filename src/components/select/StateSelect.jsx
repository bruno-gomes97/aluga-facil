import { useTranslation } from "react-i18next";
import { statesByCountry } from "../../util/States";
import * as Styles from "./Style";

const StateSelect = ({ value, onChange }) => {
	const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
	
	return (
		<Styles.Select
			name="state"
			id="state"
			value={value}
			onChange={onChange}
			required
		>
			<option value="">{t("statePlaceholder")}</option>
			{statesByCountry.BR.map((state) => {
        const stateName = state.name[currentLang] || state.name.pt;
        return (
          <option key={state.code} value={stateName}>
            {stateName} - {state.code}
          </option>
        );
      })}
		</Styles.Select>
	)
}

export default StateSelect;