'use client';

import React from 'react';

import clsx from 'clsx';

import { AppStoreInterface, useAppStore } from '@/store/store';

function Overlay() {
	const { showAsideMobile } = useAppStore((state: AppStoreInterface) => state);
	return (
		<div
			className={clsx(
				'body-overlay',
				showAsideMobile ? 'drawer-overlay z-109' : 'z-0'
			)}
		/>
	);
}

export default Overlay;
