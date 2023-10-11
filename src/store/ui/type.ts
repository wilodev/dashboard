export interface UiStateInterface {
	loading: boolean;
	screenWidth: number;
	screenHeight: number;
	deviceType: 'mobile' | 'tablet' | 'desktop';
	hasError: boolean;
	hasNetwork: boolean;
	isDarkMode: boolean;
	showAsideMobile: boolean;
	// Actions
	setLoading: (loading: boolean) => void;
	setScreenSize: (screenWidth: number, screenHeight: number) => void;
	setScreenWidth: (screenWidth: number) => void;
	setScreenHeight: (screenHeight: number) => void;
	setDeviceType: (deviceType: 'mobile' | 'tablet' | 'desktop') => void;
	setHasError: (hasError: boolean) => void;
	setHasNetwork: (hasNetwork: boolean) => void;
	setIsDarkMode: (isDarkMode: boolean) => void;
	setShowAsideMobile: (showAsideMobile: boolean) => void;
}
