import { useEffect } from 'react';

import { AppStoreInterface, useAppStore } from '@/store/store';

import { HookOutput } from './types';

export const useDimensions = (): HookOutput<
	{
		screenWidth: number;
		screenHeight: number;
		deviceType: 'mobile' | 'desktop' | 'tablet';
	},
	object
> => {
	const {
		screenWidth,
		screenHeight,
		deviceType,
		setDeviceType,
		setScreenSize,
	} = useAppStore((state: AppStoreInterface) => state);

	const handleResize = () => {
		const { width, height } = window.screen;
		console.log(
			'🚀 ~ file: useDimensions.tsx:25 ~ handleResize ~ window:',
			window
		);
		setScreenSize(width, height);
		// Saber si es móvil, tablet o desktop
		if (width < 768) {
			setDeviceType('mobile');
		} else if (width >= 768 && width < 990) {
			setDeviceType('tablet');
		} else {
			setDeviceType('desktop');
		}
	};
	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return {
		state: { screenWidth, screenHeight, deviceType },
		actions: {},
	};
};
