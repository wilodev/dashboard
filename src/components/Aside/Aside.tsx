'use client';

import React from 'react';

import Image from 'next/image';

import Link from 'next/link';

import clsx from 'clsx';

import { ColorScheme } from './components/ColorScheme';
import { MainItem } from './components/MainItem';
import { SecondaryMenu } from './components/SecondaryMenu';
import { ToggleSecondaryMenu } from './components/ToggleSecondaryMenu';
import { UserMenu } from './components/UserMenu';
import { mainMenuData } from './constants';
import { useAside } from './useAside';

function Aside() {
	const {
		state: {
			secondaryMenuActive,
			secondaryMenuData,
			showUserMenu,
			divRefUserMenu,
			showColorSchemeMenu,
			divRefColorSchemeMenu,
			isDarkMode,
			showAsideMobile,
			divRefAsideMenu,
		},
		actions: {
			handleCurrentSubMenu,
			handleToggleMenu,
			handleToggleScheme,
			handleChangeColorScheme,
		},
	} = useAside();
	return (
		<div
			id="navbarAside"
			className={clsx(
				'aside aside-extended',
				!secondaryMenuActive && 'aside-min',
				showAsideMobile && 'drawer drawer-start drawer-on'
			)}
			ref={divRefAsideMenu}
		>
			{/* <!--begin::Primary--> */}
			<div className="aside-primary d-flex flex-column align-items-lg-center flex-row-auto">
				{/* <!--begin::Logo--> */}
				<div className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10">
					<Link href="/home">
						<Image
							src="assets/media/logos/logo-default.svg"
							className="h-50px"
							width={150}
							height={40}
							alt="Logo de la aplicación"
						/>
					</Link>
				</div>
				{/* <!--end::Logo--> */}
				{/* <!--begin::Nav--> */}
				<div className="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0">
					{/* <!--begin::Wrapper--> */}
					<div className="hover-scroll-overlay-y mb-10 scroll-ms">
						{/* <!--begin::Nav--> */}
						<ul className="nav flex-column">
							{/* <!--begin::Nav item--> */}
							{mainMenuData.map((item) => (
								<MainItem
									key={item.id}
									id={item.id}
									title={item.title}
									icon={item.icon}
									link={item.link}
									handleClick={handleCurrentSubMenu}
								/>
							))}
							{/* <!--end::Nav item--> */}
						</ul>
						{/* <!--end::Tabs--> */}
					</div>
					{/* <!--end::Nav--> */}
				</div>
				{/* <!--end::Nav--> */}
				{/* <!--begin::Footer--> */}
				<div className="aside-footer d-flex flex-column align-items-center flex-column-auto">
					{/* <!--begin::Theme mode--> */}
					<ColorScheme
						show={showColorSchemeMenu}
						handleToggleShowMenu={handleToggleScheme}
						handleChangeScheme={handleChangeColorScheme}
						isDarkMode={isDarkMode}
						ref={divRefColorSchemeMenu}
					/>
					{/* <!--end::Theme mode--> */}
					{/* <!--begin::User--> */}
					<UserMenu
						show={showUserMenu}
						ref={divRefUserMenu}
						handleClick={handleToggleMenu}
					/>
					{/* <!--end::User--> */}
				</div>
				{/* <!--end::Footer--> */}
			</div>
			{/* <!--end::Primary--> */}
			{/* <!--begin::Secondary--> */}
			{secondaryMenuActive && secondaryMenuData && (
				<SecondaryMenu data={secondaryMenuData} />
			)}
			{/* <!--end::Secondary--> */}
			{/* <!--begin::Aside Toggle--> */}
			<ToggleSecondaryMenu />
			{/* <!--end::Aside Toggle--> */}
		</div>
	);
}

export default Aside;
