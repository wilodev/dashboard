'use client';

import React, { useEffect, useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ProjectItemInterface } from '@/components/Aside/types';
import { projectsData } from '@/constants/projects';
import { StorageService } from '@/lib/storage';
import { AppStoreInterface, useAppStore } from '@/store/store';
import { AppPropsInterface } from '@/types/default';

import '../../next-18next.config';

export const BaseProviders = ({ children }: AppPropsInterface) => {
	const [queryClient] = useState(() => new QueryClient());
	const { setDeviceType, setScreenSize, setProjects } = useAppStore(
		(state: AppStoreInterface) => state
	);
	useEffect(() => {
		const handleResize = () => {
			const { innerWidth, innerHeight } = window;
			setScreenSize(innerWidth, innerHeight);
			// Saber si es móvil, tablet o desktop
			if (innerWidth < 768) {
				setDeviceType('mobile');
			} else if (innerWidth >= 768 && innerWidth < 1024) {
				setDeviceType('tablet');
			} else {
				setDeviceType('desktop');
			}
		};
		const initStore = async () => {
			// Load initial data
			const storeProjects =
				await StorageService.getObject<ProjectItemInterface[]>('projects');
			// Si projects es null debemos cargarlo desde la constante projectsData al local storage y store project
			if (!storeProjects) {
				StorageService.setObject('projects', projectsData);
				setProjects(projectsData);
			} else {
				// Si projects no es null debemos cargarlo al store
				setProjects(storeProjects);
			}
		};
		initStore();
		// eslint-disable-next-line global-require
		require('bootstrap/dist/js/bootstrap');
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
