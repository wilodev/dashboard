'use client';

import React from 'react';

import ReactDOM from 'react-dom';

import { ModalInterface } from './type';

import { Icon } from '../Icon';

function Modal({ id, children, title, size = 'lg' }: ModalInterface) {
	const modalContent = (
		<div
			className="modal fade"
			id={id}
			tabIndex={-1}
			style={{ display: 'none' }}
			aria-modal="true"
			role="dialog"
		>
			{/* <!--begin::Modal dialog--> */}
			<div className={`modal-dialog modal-${size} p-9`}>
				{/* <!--begin::Modal content--> */}
				<div className="modal-content modal-rounded">
					{/* <!--begin::Modal header--> */}
					<div className="modal-header py-7 d-flex justify-content-between">
						{/* <!--begin::Modal title--> */}
						<h2>{title}</h2>
						{/* <!--end::Modal title--> */}

						{/* <!--begin::Close--> */}
						<div
							className="btn btn-sm btn-icon btn-active-color-primary"
							data-bs-dismiss="modal"
						>
							<Icon name="app-icon app-icon-cross fs-1" />{' '}
						</div>
						{/* <!--end::Close--> */}
					</div>
					{/* <!--begin::Modal header--> */}

					{/* <!--begin::Modal body--> */}
					<div className="modal-body scroll-y m-5">
						{/* <!--begin::Content--> */}
						{children}
						{/* <!--end::Content--> */}
					</div>
					{/* <!--begin::Modal body--> */}
				</div>
			</div>
		</div>
	);
	if (typeof document !== 'undefined') {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById('modal-root')!
		);
	}
	return null;
}

export default Modal;
