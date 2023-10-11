import React from 'react';

import { MenuItem } from './components/MenuItem';

import { MenuItemInterface } from '../../types';

function MainMenu({ data }: { data: MenuItemInterface[] }): JSX.Element {
	console.log('🚀 ~ file: MainMenu.tsx:8 ~ MainMenu ~ data:', data);
	return (
		<div
			className="menu menu-column menu-sub-indention menu-rounded menu-active-bg menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-arrow-gray-500 fw-semibold fs-6 px-2 my-5 my-lg-0"
			id="kt_aside_menu"
			data-kt-menu="true"
		>
			<div id="kt_aside_menu_wrapper">
				<div className="menu-item">
					{/* <!--begin:Menu content--> */}
					<div className="menu-content pb-2">
						<span className="menu-section text-muted text-uppercase fs-8 ls-1">
							Título
						</span>
					</div>
					{/* <!--end:Menu content--> */}
				</div>
				{/* <!--begin:Menu item--> */}
				{data.map((item) => (
					<MenuItem
						key={item.id}
						icon={item.icon}
						id={item.id}
						link={item?.link || '#'}
						submenu={item.submenu || []}
						title="title"
					/>
				))}
				{/* <!--end:Menu item--> */}
			</div>
		</div>
	);
}

export default MainMenu;
