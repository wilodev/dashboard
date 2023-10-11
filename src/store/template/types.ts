import {
	MenuItemInterface,
	ProjectItemInterface,
} from '@/components/Aside/types';

export interface TemplateStateInterface {
	secondaryMenuActive: boolean;
	secondaryMenuData: MenuItemInterface[] | ProjectItemInterface[] | [];
	projects: ProjectItemInterface[] | [];

	// Actions
	setSecondaryMenuActive: (isActive: boolean) => void;
	setSecondaryMenuData: (
		data: MenuItemInterface[] | ProjectItemInterface[] | []
	) => void;
	setAddProjectToProjects: (project: ProjectItemInterface) => void;
	setProjects: (projects: ProjectItemInterface[]) => void;
	setUpdateProjectToProjects: (project: ProjectItemInterface) => void;
}
