import React, { forwardRef } from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import { UserMenuInterface } from './type';

const UserMenu = forwardRef<HTMLDivElement, UserMenuInterface>(
	({ show, handleClick }, ref) => {
		return (
			<div className="d-flex align-items-center mb-10">
				{/* <!--begin::Menu wrapper--> */}
				<button
					type="button"
					className={clsx(
						'cursor-pointer symbol symbol-40px btn btn-link',
						show && 'show menu-dropdown'
					)}
					onClick={handleClick}
				>
					<Image
						src="/assets/media/avatars/300-1.jpg"
						alt="image"
						width={30}
						height={30}
					/>
				</button>
				{/* <!--begin::User account menu--> */}
				<div
					className={clsx(
						'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px',
						show && 'show user-menu-show'
					)}
					ref={ref}
				>
					{/* <!--begin::Menu item--> */}
					<div className="menu-item px-3">
						<div className="menu-content d-flex align-items-center px-3">
							{/* <!--begin::Avatar--> */}
							<div className="symbol symbol-50px me-5">
								<Image
									alt="Logo"
									src="/assets/media/avatars/300-1.jpg"
									width={40}
									height={40}
								/>
							</div>
							{/* <!--end::Avatar--> */}
							{/* <!--begin::Username--> */}
							<div className="d-flex flex-column">
								<div className="fw-bold d-flex align-items-center fs-5">
									Max Smith
									<span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
										Pro
									</span>
								</div>
								<p className="fw-semibold text-muted text-hover-primary fs-7">
									max@kt.com
								</p>
							</div>
							{/* <!--end::Username--> */}
						</div>
					</div>
					{/* <!--end::Menu item--> */}
					{/* <!--begin::Menu separator--> */}
					<div className="separator my-2" />
					{/* <!--end::Menu separator--> */}
					{/* <!--begin::Menu item--> */}
					<div className="menu-item px-5">
						<a href="../dist/account/overview.html" className="menu-link px-5">
							My Profile
						</a>
					</div>
					{/* <!--end::Menu item--> */}
					{/* <!--begin::Menu item--> */}
					<div className="menu-item px-5">
						<a
							href="../dist/apps/projects/list.html"
							className="menu-link px-5"
						>
							<span className="menu-text">My Projects</span>
							<span className="menu-badge">
								<span className="badge badge-light-danger badge-circle fw-bold fs-7">
									3
								</span>
							</span>
						</a>
					</div>
					{/* <!--end::Menu item--> */}
					{/* <!--begin::Menu item--> */}
					<div className="menu-item px-5">
						<a
							href="../dist/account/statements.html"
							className="menu-link px-5"
						>
							My Statements
						</a>
					</div>
					{/* <!--end::Menu item--> */}
					{/* <!--begin::Menu separator--> */}
					<div className="separator my-2" />
					{/* <!--end::Menu separator--> */}
					{/* <!--begin::Menu item--> */}
					<div className="menu-item px-5 my-1">
						<a href="../dist/account/settings.html" className="menu-link px-5">
							Account Settings
						</a>
					</div>
					{/* <!--end::Menu item--> */}
					{/* <!--begin::Menu item--> */}
					<div className="menu-item px-5">
						<a
							href="../dist/authentication/sign-in/basic.html"
							className="menu-link px-5"
						>
							Sign Out
						</a>
					</div>
					{/* <!--end::Menu item--> */}
				</div>
				{/* <!--end::User account menu--> */}
				{/* <!--end::Menu wrapper--> */}
			</div>
		);
	}
);

export default UserMenu;
