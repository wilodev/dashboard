import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { es } from './src/translations';

const resources = {
	es: {
		translations: es,
	},
};

i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	resources,
	lng: 'es',
	fallbackLng: 'es',
	keySeparator: false,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
