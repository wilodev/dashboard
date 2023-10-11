import React from 'react';

import { MenuItem } from './components/MenuItem';
import { ListMenuInterface } from './type';

function ListMenu({ data, title }: ListMenuInterface): JSX.Element {
	return (
		<div className="m-0">
			{/* <!--begin::Heading--> */}
			<h1 className="text-gray-800 fw-semibold mb-6 mx-5">{title}</h1>
			{/* <!--end::List Menu--> */}
			<div className="mb-10">
				{data.map((item) => (
					<MenuItem
						key={item.id}
						id={item.id}
						description={item.description}
						image={item.image}
						link={item.link}
						title={item.title}
						status={item.status}
					/>
				))}
			</div>
			{/* <!--end::TList Menu--> */}
		</div>
	);
}

export default ListMenu;
