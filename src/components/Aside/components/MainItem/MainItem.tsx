import React from 'react';

import Link from 'next/link';

import { MainItemInterface } from './type';

function MainItem({
	id,
	title,
	icon,
	link,
	handleClick,
}: MainItemInterface): JSX.Element {
	return (
		<li
			id={id}
			className="nav-item mb-2"
			data-bs-toggle="tooltip"
			data-bs-trigger="hover"
			data-bs-placement="right"
			data-bs-dismiss="click"
			title={title}
		>
			{/* <!--begin::Nav link--> */}
			<Link
				className="nav-link btn btn-custom btn-icon active"
				data-bs-toggle="tab"
				href={link ? `${link}` : '#'}
				onClick={handleClick ? () => handleClick(id) : () => {}}
			>
				<i className={icon}>
					<span className="path1" />
					<span className="path2" />
					<span className="path3" />
					<span className="path4" />
					<span className="path5" />
				</i>
			</Link>
			{/* <!--end::Nav link--> */}
		</li>
	);
}

export default MainItem;
