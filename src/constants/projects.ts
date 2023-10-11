import { ProjectItemInterface } from '@/components/Aside/types';

export const projectsData: ProjectItemInterface[] = [
	{
		id: '1',
		image:
			'https://preview.keenthemes.com/seven-html-pro/assets/media/svg/brand-logos/rgb.svg',
		title: 'Construcción de la nave industrial',
		description: 'Construcción de la nave industrial para la compañía Bimbo',
		link: '/project/1',
		startDate: '2023-03-25',
		status: 1,
		total: 0,
		task: 30,
		rubros: [],
		materials: [],
		manpower: [],
		equipment: [],
	},
	{
		id: '2',
		image:
			'https://preview.keenthemes.com/seven-html-pro/assets/media/svg/brand-logos/rgb.svg',
		title: 'Proyecto la Ramada',
		description: 'Mantenimiento de la carretera del proyecto la Ramada',
		link: '/project/2',
		startDate: '2023-05-12',
		status: 0,
		total: 0,
		task: 20,
		rubros: [],
		materials: [],
		manpower: [],
		equipment: [],
	},
	{
		id: '3',
		image:
			'https://preview.keenthemes.com/seven-html-pro/assets/media/svg/brand-logos/rgb.svg',
		title: 'Portales del Sol',
		description: 'Edificio portales del Sol',
		link: '/project/3',
		startDate: '2022-01-08',
		status: 1,
		total: 0,
		task: 40,
		rubros: [],
		materials: [],
		manpower: [],
		equipment: [],
	},
	{
		id: '4',
		image:
			'https://preview.keenthemes.com/seven-html-pro/assets/media/svg/brand-logos/rgb.svg',
		title: 'Proyecto de vial',
		description: 'Proyecto de vial en la ciudad de Santa Cruz',
		link: '/project/4',
		startDate: '2023-08-28',
		status: 0,
		total: 0,
		task: 14,
		rubros: [],
		materials: [],
		manpower: [],
		equipment: [],
	},
];

export interface Rubros {
	id: string;
	detail: string;
	rubro: number;
	unit: 'cm2' | 'm2' | 'k2' | 'h2';
	quantity: GLfloat;
	performance: GLfloat;
	unitPrice: GLfloat;
}

export interface Materials {
	id: string;
	description: string;
	unit: 'cm2' | 'm2' | 'k2' | 'h2' | 'm3';
	unitPrice: GLfloat;
	quantity: GLfloat;
	total: GLfloat;
	distance: GLfloat;
	fee: GLfloat;
	transport: GLfloat;
	waste: GLfloat;
	index: string;
}

export interface Manpower {
	description: string;
	category: string;
	sRH: GLfloat;
	total: GLfloat;
	costManpower: GLfloat;
	personalAmount: GLfloat;
}

export interface Equipment {
	description: string;
	fee: GLfloat;
	equipmentTotal: GLfloat;
	equipmentCost: GLfloat;
	equipmentAmount: GLfloat;
	type: string;
}

export interface TimeLines {
	startDay: number;
	numDays: number;
	startMonth: number;
	days: {
		id: number;
		time: string;
		hours: 'AM' | 'PM';
		description: string;
		poweredBy?: string;
		bg:
			| 'bg-info'
			| 'bg-success'
			| 'bg-warning'
			| 'bg-danger'
			| 'bg-primary'
			| 'bg-secondary';
	}[][];
}

export const timeLines: TimeLines = {
	startDay: 10,
	numDays: 11,
	startMonth: 9,
	days: [
		[
			{
				id: 1,
				time: '08:00 - 12:00',
				hours: 'AM',
				description: 'Trabajo de campo',
				poweredBy: 'Juan Pérez',
				bg: 'bg-info',
			},
			{
				id: 2,
				time: '13:00 - 16:00',
				hours: 'PM',
				description: 'Trabajo de campo',
				poweredBy: 'Juan Pérez',
				bg: 'bg-success',
			},
			{
				id: 3,
				time: '17:00 - 18:00',
				hours: 'PM',
				description: 'Reunión de inicio de proyecto',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-primary',
			},
		],
		[
			{
				id: 1,
				time: '09:00 - 10:00',
				hours: 'AM',
				description: 'Visita de inicio de proyecto',
				poweredBy: 'Carlos Pérez',
				bg: 'bg-success',
			},
			{
				id: 2,
				time: '12:00 - 14:00',
				hours: 'PM',
				description: 'Visita de proyecto principal',
				poweredBy: 'Juan Pérez',
				bg: 'bg-danger',
			},
			{
				id: 3,
				time: '15:00 - 17:00',
				hours: 'PM',
				description: 'Fundación de losa',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-primary',
			},
		],
		[
			{
				id: 1,
				time: '08:00 - 09:00',
				hours: 'AM',
				description: 'Inicio de proyecto de construcción',
				poweredBy: 'Carlos Pérez',
				bg: 'bg-warning',
			},
			{
				id: 2,
				time: '12:00 - 14:00',
				hours: 'PM',
				description: 'Visita de proyecto principal',
				poweredBy: 'Miguel Valencia',
				bg: 'bg-primary',
			},
			{
				id: 3,
				time: '15:00 - 17:00',
				hours: 'PM',
				description: 'Reunión de proyecto',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-success',
			},
		],
		[
			{
				id: 1,
				time: '08:00 - 12:00',
				hours: 'AM',
				description: 'Trabajo de campo',
				poweredBy: 'Juan Pérez',
				bg: 'bg-info',
			},
			{
				id: 2,
				time: '13:00 - 16:00',
				hours: 'PM',
				description: 'Trabajo de campo',
				poweredBy: 'Juan Pérez',
				bg: 'bg-success',
			},
			{
				id: 3,
				time: '17:00 - 18:00',
				hours: 'PM',
				description: 'Reunión de inicio de proyecto',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-primary',
			},
		],
		[
			{
				id: 1,
				time: '09:00 - 10:00',
				hours: 'AM',
				description: 'Visita de inicio de proyecto',
				poweredBy: 'Carlos Pérez',
				bg: 'bg-success',
			},
			{
				id: 2,
				time: '12:00 - 14:00',
				hours: 'PM',
				description: 'Visita de proyecto principal',
				poweredBy: 'Juan Pérez',
				bg: 'bg-danger',
			},
			{
				id: 3,
				time: '15:00 - 17:00',
				hours: 'PM',
				description: 'Fundación de losa',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-primary',
			},
		],
		[
			{
				id: 1,
				time: '08:00 - 09:00',
				hours: 'AM',
				description: 'Inicio de proyecto de construcción',
				poweredBy: 'Carlos Pérez',
				bg: 'bg-warning',
			},
			{
				id: 2,
				time: '12:00 - 14:00',
				hours: 'PM',
				description: 'Visita de proyecto principal',
				poweredBy: 'Miguel Valencia',
				bg: 'bg-primary',
			},
			{
				id: 3,
				time: '15:00 - 17:00',
				hours: 'PM',
				description: 'Reunión de proyecto',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-success',
			},
		],
		[
			{
				id: 1,
				time: '08:00 - 12:00',
				hours: 'AM',
				description: 'Trabajo de campo',
				poweredBy: 'Juan Pérez',
				bg: 'bg-info',
			},
			{
				id: 2,
				time: '13:00 - 16:00',
				hours: 'PM',
				description: 'Trabajo de campo',
				poweredBy: 'Juan Pérez',
				bg: 'bg-success',
			},
			{
				id: 3,
				time: '17:00 - 18:00',
				hours: 'PM',
				description: 'Reunión de inicio de proyecto',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-primary',
			},
		],
		[
			{
				id: 1,
				time: '09:00 - 10:00',
				hours: 'AM',
				description: 'Visita de inicio de proyecto',
				poweredBy: 'Carlos Pérez',
				bg: 'bg-success',
			},
			{
				id: 2,
				time: '12:00 - 14:00',
				hours: 'PM',
				description: 'Visita de proyecto principal',
				poweredBy: 'Juan Pérez',
				bg: 'bg-danger',
			},
			{
				id: 3,
				time: '15:00 - 17:00',
				hours: 'PM',
				description: 'Fundación de losa',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-primary',
			},
		],
		[
			{
				id: 1,
				time: '08:00 - 09:00',
				hours: 'AM',
				description: 'Inicio de proyecto de construcción',
				poweredBy: 'Carlos Pérez',
				bg: 'bg-warning',
			},
			{
				id: 2,
				time: '12:00 - 14:00',
				hours: 'PM',
				description: 'Visita de proyecto principal',
				poweredBy: 'Miguel Valencia',
				bg: 'bg-primary',
			},
			{
				id: 3,
				time: '15:00 - 17:00',
				hours: 'PM',
				description: 'Reunión de proyecto',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-success',
			},
		],
		[
			{
				id: 1,
				time: '08:00 - 12:00',
				hours: 'AM',
				description: 'Trabajo de campo',
				poweredBy: 'Juan Pérez',
				bg: 'bg-info',
			},
			{
				id: 2,
				time: '13:00 - 16:00',
				hours: 'PM',
				description: 'Trabajo de campo',
				poweredBy: 'Juan Pérez',
				bg: 'bg-success',
			},
			{
				id: 3,
				time: '17:00 - 18:00',
				hours: 'PM',
				description: 'Reunión de inicio de proyecto',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-primary',
			},
		],
		[
			{
				id: 1,
				time: '09:00 - 10:00',
				hours: 'AM',
				description: 'Visita de inicio de proyecto',
				poweredBy: 'Carlos Pérez',
				bg: 'bg-success',
			},
			{
				id: 2,
				time: '12:00 - 14:00',
				hours: 'PM',
				description: 'Visita de proyecto principal',
				poweredBy: 'Juan Pérez',
				bg: 'bg-danger',
			},
			{
				id: 3,
				time: '15:00 - 17:00',
				hours: 'PM',
				description: 'Fundación de losa',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-primary',
			},
		],
		[
			{
				id: 1,
				time: '08:00 - 09:00',
				hours: 'AM',
				description: 'Inicio de proyecto de construcción',
				poweredBy: 'Carlos Pérez',
				bg: 'bg-warning',
			},
			{
				id: 2,
				time: '12:00 - 14:00',
				hours: 'PM',
				description: 'Visita de proyecto principal',
				poweredBy: 'Miguel Valencia',
				bg: 'bg-primary',
			},
			{
				id: 3,
				time: '15:00 - 17:00',
				hours: 'PM',
				description: 'Reunión de proyecto',
				poweredBy: 'Wilson Pérez',
				bg: 'bg-success',
			},
		],
	],
};
