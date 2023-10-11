import { StateCreator } from 'zustand';

import { ProjectItemInterface } from '@/components/Aside/types';

import { TemplateStateInterface } from './types';

// Se define el store TemplateStore de la aplicación
export const createTemplateStore: StateCreator<TemplateStateInterface> = (
	set
) => ({
	/** State */
	secondaryMenuActive: false,
	secondaryMenuData: [],
	projects: [],

	/** Actions */
	setSecondaryMenuActive: (isActive) => set({ secondaryMenuActive: isActive }),
	setSecondaryMenuData: (data) => set({ secondaryMenuData: data }),
	setAddProjectToProjects: (project: ProjectItemInterface) =>
		set((state) => ({ projects: [...state.projects, project] })),
	setProjects: (projects: ProjectItemInterface[]) => set({ projects }),
	setUpdateProjectToProjects: (project: ProjectItemInterface) => {
		set((state) => ({
			projects: state.projects.map((item) =>
				item.id === project.id ? project : item
			),
		}));
	},
});
