import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from './locales/en.json';
import esARTranslation from './locales/es.json';
import ptTranslation from './locales/pt.json';

const resources = {
	en: {
		translation: enTranslation,
	},
	pt: {
		translation: ptTranslation,
	},
	'es-AR': {
		translation: esARTranslation,
	},
};

const savedLng = localStorage.getItem("i18nextLng") || 'pt';

i18n
	.use(initReactI18next)
	.init({
		resources,
		debug: true,
		lng: savedLng,
		fallbackLng: 'pt',
		interpolation: {
			escapeValue: false,
		},
		react: {
			wait: true,
		}
	});

export default i18n;
