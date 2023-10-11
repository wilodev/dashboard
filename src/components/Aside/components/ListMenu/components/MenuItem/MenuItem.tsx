import React from 'react';

import Image from 'next/image';

import Link from 'next/link';

import { ProjectItemInterface } from '@/components/Aside/types';

function MenuItem({
	id,
	image,
	title,
	description,
	link,
}: ProjectItemInterface) {
	return (
		<Link
			href={link}
			className="custom-list d-flex align-items-center px-5 py-4"
			id={id}
		>
			{/* <!--begin::Symbol--> */}
			<div className="symbol symbol-40px me-5">
				<span className="symbol-label">
					<Image
						src={image}
						className="h-50 align-self-center"
						alt=""
						width={20}
						height={20}
					/>
				</span>
			</div>
			{/* <!--end::Symbol--> */}
			{/* <!--begin::Description--> */}
			<div className="d-flex flex-column flex-grow-1">
				{/* <!--begin::Title--> */}
				<h5 className="custom-list-title fw-semibold text-gray-800 mb-1">
					{title}
				</h5>
				{/* <!--end::Title--> */}
				{/* <!--begin::Link--> */}
				<span className="text-gray-400 fw-semibold">{description}</span>
				{/* <!--end::Link--> */}
			</div>
			{/* <!--begin::Description--> */}
		</Link>
	);
}

export default MenuItem;
