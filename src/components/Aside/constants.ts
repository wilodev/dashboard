import { MainItemInterface } from './components/MainItem/type';
import { MenuItemInterface, ProjectItemInterface } from './types';

export const mainMenuData: MainItemInterface[] = [
	{
		id: '1',
		title: 'Panel de control',
		icon: 'app-icon app-icon-element-11 fs-2x',
		link: '/',
	},
];

export const projectsMenu: ProjectItemInterface[] = [
	{
		id: '1',
		image: 'images/avatars/150-1.jpg',
		title: 'Aplicación 1',
		description: 'Descripción de la aplicación 1',
		link: '/',
		status: 1,
	},
];

export const appMenuData: MenuItemInterface[] = [
	{
		id: '1',
		icon: 'fa fa-home',
		title: 'Inicio',
		link: '/',
		submenu: [],
	},
	{
		id: '1',
		icon: 'fa fa-home',
		title: 'Usuarios',
		link: '',
		submenu: [
			{
				id: '1',
				icon: 'fa fa-home',
				title: 'Listado',
				link: '/users',
				submenu: [],
			},
			{
				id: '2',
				icon: 'fa fa-home',
				title: 'Nuevo',
				link: '/users/new',
				submenu: [],
			},
		],
	},
];

export const footerMenuData = [
	{
		id: '1',
		title: 'Inicio',
		link: '/',
	},
];
