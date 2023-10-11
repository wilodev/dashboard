import { StateCreator } from 'zustand';

import { UiStateInterface } from './type';

// Se define el store uiStore de la aplicación
export const createUiStore: StateCreator<UiStateInterface> = (set) => ({
	/** State */
	loading: false,
	screenWidth: 0,
	screenHeight: 0,
	deviceType: 'desktop',
	hasError: false,
	hasNetwork: true,
	isDarkMode: false,
	showAsideMobile: false,
	/** Actions */
	setLoading: (loading: boolean) => set({ loading }),
	setScreenSize: (screenWidth: number, screenHeight: number) =>
		set({ screenWidth, screenHeight }),
	setScreenWidth: (screenWidth: number) => set({ screenWidth }),
	setScreenHeight: (screenHeight: number) => set({ screenHeight }),
	setDeviceType: (deviceType: 'mobile' | 'tablet' | 'desktop') =>
		set({ deviceType }),
	setHasError: (hasError: boolean) => set({ hasError }),
	setHasNetwork: (hasNetwork: boolean) => set({ hasNetwork }),
	setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
	setShowAsideMobile: (showAsideMobile: boolean) => set({ showAsideMobile }),
});
