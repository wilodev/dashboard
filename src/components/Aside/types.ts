import { Manpower, Materials, Rubros, Equipment } from '@/constants/projects';

export interface MenuItemInterface {
	id: string;
	icon: string;
	title: string;
	link: string;
	submenu: MenuItemInterface[] | [];
	isChildren?: boolean;
}

export interface ProjectItemInterface {
	id: string;
	image: string;
	title: string;
	description: string;
	link: string;
	status: number;
	startDate?: string;
	total?: GLfloat;
	task?: number;
	rubros?: Rubros[] | [];
	materials?: Materials[] | [];
	manpower?: Manpower[] | [];
	equipment?: Equipment[] | [];
}
