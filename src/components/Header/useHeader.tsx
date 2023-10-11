import { HookOutput } from '@/hooks/types';
import { StorageService } from '@/lib/storage';

import { AppStoreInterface, useAppStore } from '@/store/store';

export const useHeader = (): HookOutput<
	{
		deviceType: 'mobile' | 'tablet' | 'desktop';
		showAsideMobile: boolean;
	},
	{
		handleAsideMenu: () => void;
		handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	}
> => {
	const {
		deviceType,
		showAsideMobile,
		setShowAsideMobile,
		setAddProjectToProjects,
		projects,
	} = useAppStore((state: AppStoreInterface) => state);

	const handleAsideMenu = () => {
		setShowAsideMobile(true);
		document.getElementById('app')?.setAttribute('data-app-drawer', 'on');
		document.getElementById('app')?.setAttribute('data-kt-drawer-aside', 'on');
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		// Se obtiene la data del formulario.
		const title = (event.target as HTMLFormElement).elements.namedItem(
			'title'
		) as HTMLInputElement;

		const description = (event.target as HTMLFormElement).elements.namedItem(
			'description'
		) as HTMLInputElement;

		const startDate = (event.target as HTMLFormElement).elements.namedItem(
			'startDate'
		) as HTMLInputElement;

		const task = (event.target as HTMLFormElement).elements.namedItem(
			'task'
		) as HTMLInputElement;

		const total = (event.target as HTMLFormElement).elements.namedItem(
			'total'
		) as HTMLInputElement;

		if (title && description) {
			const id = new Date().getTime().toString();
			const data = {
				id,
				title: title.value,
				description: description.value,
				startDate: startDate.value,
				task: +task.value,
				total: parseFloat(total.value),
				image:
					'https://preview.keenthemes.com/seven-html-pro/assets/media/svg/brand-logos/rgb.svg',
				link: `/project/${id}`,
				status: 0,
			};
			setAddProjectToProjects(data);
			// Se Guarda en el local storage
			StorageService.setObject('projects', [...projects, data]);
			// Se limpia los inputs
			title.value = '';
			description.value = '';
			startDate.value = '';
			task.value = '';
			total.value = '';
			// Eliminar del body la clase modal-open
			document.body.classList.remove('modal-open');
			document.getElementById('modal_create_project')?.classList.remove('show');
			document.querySelector('.modal-backdrop')?.classList.remove('show');
		}
		// Se cierra el modal para agregar proyecto
		// const myModal = bootstrap.Modal.getInstance(
		// 	document.getElementById('modal_create_project')
		// );
		// myModal?.hide();
	};

	return {
		state: {
			deviceType,
			showAsideMobile,
		},
		actions: { handleAsideMenu, handleSubmit },
	};
};
