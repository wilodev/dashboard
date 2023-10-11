import React from 'react';

import { SecondaryMenuInterface } from './type';

import { ListMenu } from '../ListMenu';
import { MainMenu } from '../MainMenu';

import { MenuItemInterface, ProjectItemInterface } from '../../types';

function SecondaryMenu({ data }: SecondaryMenuInterface) {
	if (data.length === 0) return null;
	const findData = data[0] as ProjectItemInterface;
	if (!findData) return null;
	const type = findData.image ? 'project' : 'menu';
	return (
		<div className="aside-secondary d-flex flex-row-fluid">
			{/* <!--begin::Workspace--> */}
			<div className="aside-workspace my-5 p-5">
				<div className="d-flex h-100 flex-column">
					{/* <!--begin::Wrapper--> */}
					<div className="flex-column-fluid hover-scroll-y">
						{/* <!--begin::Tab content--> */}
						<div className="tab-content">
							{/* <!--begin::Tab pane--> */}
							<div
								className="tab-pane show active fade"
								id="kt_aside_nav_tab_menu"
								role="tabpanel"
							>
								{/* <!--begin::SubMenu--> */}
								{/* Averiguar si data es del tipo MenuItemInterface[] para poder usar MainMenu  */}
								{type === 'menu' && (
									<MainMenu data={data as MenuItemInterface[]} />
								)}
								{type === 'project' && (
									<ListMenu
										data={data as ProjectItemInterface[]}
										title="Proyectos"
									/>
								)}
								{/* <!--end::SubMenu--> */}
								{/* <!--end::SubMenu--> */}
							</div>
							{/* <!--end::Tab pane--> */}
						</div>
						{/* <!--end::Tab content--> */}
					</div>
					{/* <!--end::Wrapper--> */}
				</div>
			</div>
			{/* <!--end::Workspace--> */}
		</div>
	);
}

export default SecondaryMenu;
