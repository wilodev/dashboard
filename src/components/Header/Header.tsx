/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React from 'react';

import Image from 'next/image';

import Link from 'next/link';

import clsx from 'clsx';

import { Icon } from '@/ui/Icon';

import { Modal } from '@/ui/Modal';

import { useHeader } from './useHeader';

function Header() {
	const {
		state: { deviceType, showAsideMobile },
		actions: { handleAsideMenu, handleSubmit },
	} = useHeader();
	return (
		<div
			id="kt_header"
			className="header"
			data-kt-sticky="true"
			data-kt-sticky-name="header"
			data-kt-sticky-offset="{default: '200px', lg: '300px'}"
		>
			{/* <!--begin::Container--> */}
			<div
				className="container-xxl d-flex align-items-center justify-content-between"
				id="kt_header_container"
			>
				{/* <!--begin::Page title--> */}
				{deviceType === 'desktop' && (
					<div
						className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-2 pb-5 pb-lg-0"
						data-kt-swapper="true"
						data-kt-swapper-mode="prepend"
						data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}"
					>
						{/* <!--begin::Heading--> */}
						<h1 className="text-dark fw-semibold my-0 fs-2">Inicio</h1>
						{/* <!--end::Heading--> */}
						{/* <!--begin::Breadcrumb--> */}
						<ul className="breadcrumb breadcrumb-line text-muted fw-semibold fs-base my-1">
							<li className="breadcrumb-item text-muted">
								<a href="../dist/index.html" className="text-muted">
									Aplicación
								</a>
							</li>
							<li className="breadcrumb-item text-muted">Inicio</li>
							<li className="breadcrumb-item text-dark">Todos los proyectos</li>
						</ul>
						{/* <!--end::Breadcrumb--> */}
					</div>
				)}
				{/* <!--end::Page title=--> */}
				{/* <!--begin::Wrapper--> */}
				<div className="d-flex d-lg-none align-items-center ms-n2 me-2">
					{/* <!--begin::Aside mobile toggle--> */}
					<button
						type="button"
						className={clsx(
							'btn btn-icon btn-active-icon-primary btn-link',
							showAsideMobile && 'active'
						)}
						onClick={handleAsideMenu}
					>
						<Icon name="app-icon app-icon-abstract-14 fs-2x" />
					</button>
					{/* <!--end::Aside mobile toggle--> */}
					{/* <!--begin::Logo--> */}
					<Link href="/home" className="d-flex align-items-center">
						<Image
							alt="Logo"
							width={40}
							height={40}
							src="assets/media/logos/logo-default.svg"
							className="h-40px"
						/>
					</Link>
					{/* <!--end::Logo--> */}
				</div>
				{/* <!--end::Wrapper--> */}
				{/* <!--begin::Toolbar wrapper--> */}
				<div className="d-flex flex-shrink-0">
					{/* <!--begin::Invite user--> */}
					<div className="d-flex ms-3" />
					{/* <!--end::Invite user--> */}
					{/* <!--begin::Create app--> */}
					<div className="d-flex ms-3">
						<button
							type="button"
							className="btn btn-info"
							data-bs-toggle="modal"
							data-bs-target="#modal_create_project"
						>
							Nuevo Proyecto
						</button>
					</div>
					<Modal id="modal_create_project" title="Nuevo Proyecto">
						<form
							className="mx-auto mw-600px w-100 py-10 fv-plugins-bootstrap5 fv-plugins-framework"
							onSubmit={handleSubmit}
						>
							<div className="mb-10 fv-row fv-plugins-icon-container">
								{/* <!--begin::Label-->                   */}
								<label className="form-label mb-3" htmlFor="title">
									Nombre del proyecto
								</label>
								{/* <!--end::Label--> */}
								{/* <!--begin::Input--> */}
								<input
									type="text"
									className="form-control form-control-lg form-control-solid"
									name="title"
									placeholder=""
									id="title"
								/>

								{/* <!--end::Input--> */}
								<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
							</div>

							<div className="mb-10 fv-row fv-plugins-icon-container">
								{/* <!--begin::Label-->                   */}
								<label className="form-label mb-3" htmlFor="description">
									Descripción del proyecto
								</label>
								{/* <!--end::Label--> */}
								{/* <!--begin::Input--> */}
								<input
									type="text"
									className="form-control form-control-lg form-control-solid"
									name="description"
									placeholder=""
									id="description"
								/>

								{/* <!--end::Input--> */}
								<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
							</div>

							<div className="mb-10 fv-row fv-plugins-icon-container">
								{/* <!--begin::Label-->                   */}
								<label className="form-label mb-3" htmlFor="task">
									Numero de tareas en la construcción
								</label>
								{/* <!--end::Label--> */}
								{/* <!--begin::Input--> */}
								<input
									type="number"
									className="form-control form-control-lg form-control-solid"
									name="task"
									placeholder=""
									id="task"
								/>

								{/* <!--end::Input--> */}
								<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
							</div>

							<div className="mb-10 fv-row fv-plugins-icon-container">
								{/* <!--begin::Label-->                   */}
								<label className="form-label mb-3" htmlFor="total">
									Presupuesto total de la obra
								</label>
								{/* <!--end::Label--> */}
								{/* <!--begin::Input--> */}
								<input
									type="text"
									className="form-control form-control-lg form-control-solid"
									name="total"
									placeholder=""
									id="total"
								/>

								{/* <!--end::Input--> */}
								<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
							</div>

							<div className="mb-10 fv-row fv-plugins-icon-container">
								{/* <!--begin::Label-->                   */}
								<label className="form-label mb-3" htmlFor="startDate">
									Fecha de inicio del proyecto
								</label>
								{/* <!--end::Label--> */}
								{/* <!--begin::Input--> */}
								<input
									type="date"
									className="form-control form-control-lg form-control-solid"
									name="startDate"
									placeholder=""
									id="startDate"
								/>

								{/* <!--end::Input--> */}
								<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
							</div>

							<div className="d-flex flex-stack pt-15">
								<div>
									<button type="submit" className="btn btn-lg btn-primary">
										Crear proyecto
									</button>
								</div>
							</div>
						</form>
					</Modal>
					{/* <!--end::Create app--> */}
				</div>
				{/* <!--end::Toolbar wrapper--> */}
			</div>
			{/* <!--end::Container--> */}
		</div>
	);
}

export default Header;
