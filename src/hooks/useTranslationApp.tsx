import { FallbackNs, useTranslation } from 'react-i18next';

import { TFunction } from 'i18next';

import { HookOutput } from './types';

export const useTranslationApp = (): HookOutput<
	{ ready: boolean },
	{ t: TFunction<FallbackNs<unknown>, unknown>; i18n: unknown }
> => {
	const { t, i18n, ready } = useTranslation();

	return {
		state: { ready },
		actions: { t, i18n },
	};
};
