export interface ColorSchemeInterface {
	handleChangeScheme: (value: string) => void;
	handleToggleShowMenu: () => void;
	show: boolean;
	isDarkMode: boolean;
}
