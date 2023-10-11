import React, { forwardRef } from 'react';

import clsx from 'clsx';

import { Icon } from '@/ui/Icon';

import { ColorSchemeInterface } from './type';

const ColorScheme = forwardRef<HTMLDivElement, ColorSchemeInterface>(
	({ handleChangeScheme, handleToggleShowMenu, show, isDarkMode }, ref) => {
		return (
			<div className="d-flex align-items-center mb-3">
				{/* <!--begin::Menu toggle--> */}
				<button
					type="button"
					className={clsx(
						'btn btn-icon btn-custom btn-link',
						show && 'show menu-dropdown'
					)}
					onClick={handleToggleShowMenu}
				>
					{!isDarkMode ? (
						<Icon name="app-icon app-icon-night-day fs-2" />
					) : (
						<Icon name="app-icon app-icon-moon fs-2" />
					)}
				</button>
				{/* <!--begin::Menu toggle--> */}
				{/* <!--begin::Menu--> */}
				<div
					className={clsx(
						'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px',
						show && 'show scheme-menu-show'
					)}
					ref={ref}
				>
					{/* <!--begin::Menu item--> */}
					<div className="menu-item px-3 my-0">
						<button
							onClick={() => handleChangeScheme('light')}
							type="button"
							className="menu-link px-3 py-2 btn w-100 btn-link"
						>
							<span className="menu-icon">
								<Icon name="app-icon app-icon-night-day fs-2" />
							</span>
							<span className="menu-title">Light</span>
						</button>
					</div>
					{/* <!--end::Menu item--> */}
					{/* <!--begin::Menu item--> */}
					<div className="menu-item px-3 my-0">
						<button
							onClick={() => handleChangeScheme('dark')}
							type="button"
							className="menu-link px-3 py-2 btn w-100 btn-link"
						>
							<span className="menu-icon">
								<Icon name="app-icon app-icon-moon fs-2" />
							</span>
							<span className="menu-title">Dark</span>
						</button>
					</div>
					{/* <!--end::Menu item--> */}
				</div>
				{/* <!--end::Menu--> */}
			</div>
		);
	}
);

export default ColorScheme;
