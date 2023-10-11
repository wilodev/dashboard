import { RefObject, createRef, useEffect, useState } from 'react';

import { HookOutput } from '@/hooks/types';

import { AppStoreInterface, useAppStore } from '@/store/store';

import { MenuItemInterface, ProjectItemInterface } from './types';

export const useAside = (): HookOutput<
	{
		secondaryMenuData: MenuItemInterface[] | ProjectItemInterface[];
		secondaryMenuActive: boolean;
		showUserMenu: boolean;
		divRefUserMenu: RefObject<HTMLDivElement>;
		showColorSchemeMenu: boolean;
		divRefColorSchemeMenu: RefObject<HTMLDivElement>;
		isDarkMode: boolean;
		showAsideMobile: boolean;
		divRefAsideMenu: RefObject<HTMLDivElement>;
	},
	{
		handleCurrentSubMenu: (option: string) => void;
		handleToggleMenu: () => void;
		handleToggleScheme: () => void;
		handleChangeColorScheme: (scheme: string) => void;
	}
> => {
	const {
		secondaryMenuActive,
		secondaryMenuData,
		setSecondaryMenuActive,
		setSecondaryMenuData,
		isDarkMode,
		setIsDarkMode,
		showAsideMobile,
		setShowAsideMobile,
		projects,
	} = useAppStore((state: AppStoreInterface) => state);

	// User Menu
	const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
	const divRefUserMenu = createRef<HTMLDivElement>();

	// Color Scheme Menu
	const [showColorSchemeMenu, setShowColorSchemeMenu] =
		useState<boolean>(false);
	const divRefColorSchemeMenu = createRef<HTMLDivElement>();

	// Div Aside Menu
	const divRefAsideMenu = createRef<HTMLDivElement>();

	const handleCurrentSubMenu = (option: string) => {
		if (option === '0') {
			setSecondaryMenuActive(true);
			setSecondaryMenuData(projects);
			// Cambiar el valor de data se data-app-aside-minimize de on a off
			document
				.getElementById('app')
				?.setAttribute('data-app-aside-minimize', 'off');
		} else if (option === '2') {
			setSecondaryMenuData([]);
		}
	};

	const handleToggleMenu = () => {
		setShowUserMenu((prev) => !prev);
	};

	const handleToggleScheme = () => {
		setShowColorSchemeMenu((prev) => !prev);
	};

	const handleChangeColorScheme = (scheme: string) => {
		if (scheme === 'light') {
			document.getElementById('app')?.setAttribute('data-bs-theme', 'light');
			setIsDarkMode(false);
		} else if (scheme === 'dark') {
			document.getElementById('app')?.setAttribute('data-bs-theme', 'dark');
			setIsDarkMode(true);
		}
		setShowColorSchemeMenu(false);
	};

	useEffect(() => {
		handleCurrentSubMenu('0');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setSecondaryMenuActive(true);
		setSecondaryMenuData(projects);
		// Cambiar el valor de data se data-app-aside-minimize de on a off
		document
			.getElementById('app')
			?.setAttribute('data-app-aside-minimize', 'off');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [projects]);

	useEffect(() => {
		const handleGlobalClick = (e: MouseEvent) => {
			// Verifica si se hizo clic fuera de los menús y cierra los menús si están abiertos
			if (
				divRefUserMenu.current &&
				e.target instanceof Node &&
				!divRefUserMenu.current.contains(e.target) &&
				showUserMenu
			) {
				setShowUserMenu(false);
			}
			if (
				divRefColorSchemeMenu.current &&
				e.target instanceof Node &&
				!divRefColorSchemeMenu.current.contains(e.target) &&
				showColorSchemeMenu
			) {
				setShowColorSchemeMenu(false);
			}
			if (
				divRefAsideMenu.current &&
				e.target instanceof Node &&
				!divRefAsideMenu.current.contains(e.target) &&
				showAsideMobile
			) {
				setShowAsideMobile(false);
				document.getElementById('app')?.setAttribute('data-app-drawer', 'off');
				document
					.getElementById('app')
					?.setAttribute('data-app-drawer-aside', 'off');
			}
		};
		document.addEventListener('mousedown', handleGlobalClick);

		return () => {
			document.removeEventListener('mousedown', handleGlobalClick);
		};
	}, [
		divRefColorSchemeMenu,
		divRefUserMenu,
		showColorSchemeMenu,
		showUserMenu,
		showAsideMobile,
		divRefAsideMenu,
		setShowAsideMobile,
	]);

	return {
		state: {
			secondaryMenuActive,
			secondaryMenuData,
			showUserMenu,
			divRefUserMenu,
			showColorSchemeMenu,
			divRefColorSchemeMenu,
			isDarkMode,
			showAsideMobile,
			divRefAsideMenu,
		},
		actions: {
			handleCurrentSubMenu,
			handleToggleMenu,
			handleToggleScheme,
			handleChangeColorScheme,
		},
	};
};
