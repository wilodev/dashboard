import React from 'react';

import { Icon } from '@/ui/Icon';

function ToggleSecondaryMenu() {
	return (
		<button
			type="button"
			className="btn btn-sm btn-icon bg-body btn-color-gray-600 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex"
			data-kt-toggle="true"
			data-kt-toggle-state="active"
			data-kt-toggle-target="body"
			data-kt-toggle-name="aside-minimize"
		>
			<Icon name="app-icon app-icon-element-11 fs-2x" />
		</button>
	);
}

export default ToggleSecondaryMenu;
