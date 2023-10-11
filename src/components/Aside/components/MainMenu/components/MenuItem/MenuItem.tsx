import React from 'react';

import Link from 'next/link';

import { MenuItemInterface } from '@/components/Aside/types';
import { Icon } from '@/ui/Icon';

function MenuItem({ id, icon, title, link, submenu }: MenuItemInterface) {
	if (!submenu || submenu.length === 0) {
		return (
			<div className="menu-item" id={id}>
				{/* <!--begin:Menu link--> */}
				<Link className="menu-link" href={link}>
					<span className="menu-icon">
						<Icon name={icon} />
					</span>
					<span className="menu-title">{title}</span>
				</Link>
				{/* <!--end:Menu link--> */}
			</div>
		);
	}
	return (
		<div
			data-kt-menu-trigger="click"
			className="menu-item here show menu-accordion mb-1"
			id={id}
		>
			{/* <!--begin:Menu link--> */}
			<span className="menu-link">
				<span className="menu-icon">
					<Icon name={icon} />
				</span>
				<span className="menu-title">{title}</span>
				<span className="menu-arrow" />
			</span>
			{/* <!--end:Menu link--> */}
			{/* <!--begin:Menu sub--> */}
			<div className="menu-sub menu-sub-accordion">
				{/* <!--begin:Menu item--> */}
				{submenu.map((subitem) => (
					<div className="menu-item" key={subitem.id}>
						{/* <!--begin:Menu link--> */}
						<a className="menu-link active" href={subitem.link}>
							<span className="menu-bullet">
								<span className="bullet bullet-dot" />
							</span>
							<span className="menu-title">{subitem.title}</span>
						</a>
						{/* <!--end:Menu link--> */}
					</div>
				))}
				{/* <!--end:Menu item--> */}
			</div>
			{/* <!--end:Menu sub--> */}
		</div>
	);
}

export default MenuItem;
