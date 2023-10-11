'use client';

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { ProjectItemInterface } from '@/components/Aside/types';

import { StorageService } from '@/lib/storage';
import { AppStoreInterface, useAppStore } from '@/store/store';

import { Modal } from '../Modal';

function TableRubros({ ...props }: ProjectItemInterface) {
	const { setUpdateProjectToProjects, projects } = useAppStore(
		(state: AppStoreInterface) => state
	);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Se obtiene la data del formulario.
		const description = (event.target as HTMLFormElement).elements.namedItem(
			'description'
		) as HTMLInputElement;

		const rubro = (event.target as HTMLFormElement).elements.namedItem(
			'rubro'
		) as HTMLInputElement;

		const unit = (event.target as HTMLFormElement).elements.namedItem(
			'unit'
		) as HTMLInputElement;

		const quantity = (event.target as HTMLFormElement).elements.namedItem(
			'quantity'
		) as HTMLInputElement;

		const performance = (event.target as HTMLFormElement).elements.namedItem(
			'performance'
		) as HTMLInputElement;

		const unitPrice = (event.target as HTMLFormElement).elements.namedItem(
			'unitPrice'
		) as HTMLInputElement;

		if (description && rubro && unit && quantity && performance && unitPrice) {
			const id = new Date().getTime().toString();
			const data = {
				...props,
				rubros: [
					...(props.rubros || []),
					{
						id,
						detail: description.value,
						rubro: rubro.value,
						unit: unit.value,
						quantity: quantity.value,
						performance: performance.value,
						unitPrice: unitPrice.value,
						description: description.value,
					},
				],
			} as ProjectItemInterface;
			setUpdateProjectToProjects(data);
			// Se Guarda en el local storage la actualización del proyecto
			// De projects buscar el proyecto en base a un id y actualizarlo
			const localProjects = projects;
			const index = projects.findIndex(
				(project: ProjectItemInterface) => project.id === data.id
			);
			localProjects[index] = data;
			// Se guarda en el local storage
			StorageService.setObject('projects', localProjects);
			// Se limpia los inputs
			description.value = '';
			rubro.value = '';
			unit.value = '';
			quantity.value = '';
			performance.value = '';
			unitPrice.value = '';
			// Eliminar del body la clase modal-open
			document.body.classList.remove('modal-open');
			document.getElementById('modal_create_rubro')?.classList.remove('show');
			document.querySelector('.modal-backdrop')?.classList.remove('show');
		}
	};
	return (
		<div className="card card-flush mt-6 mt-xl-9">
			{/* <!--begin::Card header--> */}
			<div className="card-header mt-5">
				{/* <!--begin::Card title--> */}
				<div className="card-title flex-column">
					<h3 className="fw-bold mb-1">Rubros</h3>

					<div className="fs-6 text-gray-400">Total</div>
				</div>
				{/* <!--begin::Card title--> */}
				<div className="card-toolbar my-1">
					<div className="d-flex align-items-center position-relative my-1">
						<button
							type="button"
							className="btn btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#modal_create_rubro"
						>
							Agregar Rubro
						</button>
					</div>
				</div>
			</div>
			{/* <!--end::Card header--> */}

			{/* <!--begin::Card body--> */}
			<div className="card-body pt-0">
				{/* <!--begin::Table container--> */}
				<div className="table-responsive">
					{/* <!--begin::Table--> */}
					<div
						id="kt_profile_overview_table_wrapper"
						className="dataTables_wrapper dt-bootstrap4 no-footer"
					>
						<div className="table-responsive">
							<table
								id="kt_profile_overview_table"
								className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold dataTable no-footer"
							>
								<thead className="fs-7 text-gray-400 text-uppercase">
									<tr>
										<th
											className="min-w-250px sorting"
											tabIndex={0}
											aria-controls="kt_profile_overview_table"
											rowSpan={1}
											colSpan={1}
											aria-label="Manager: activate to sort column ascending"
											style={{ width: ' 250px' }}
										>
											Descripción
										</th>
										<th
											className="min-w-150px sorting"
											tabIndex={0}
											aria-controls="kt_profile_overview_table"
											rowSpan={1}
											colSpan={1}
											aria-label="Date: activate to sort column ascending"
											style={{ width: ' 150px' }}
										>
											Rendimiento
										</th>
										<th
											className="min-w-90px sorting"
											tabIndex={0}
											aria-controls="kt_profile_overview_table"
											rowSpan={1}
											colSpan={1}
											aria-label="Amount: activate to sort column ascending"
											style={{ width: ' 90px' }}
										>
											Cantidad
										</th>
										<th
											className="min-w-90px sorting"
											tabIndex={0}
											aria-controls="kt_profile_overview_table"
											rowSpan={1}
											colSpan={1}
											aria-label="Status: activate to sort column ascending"
											style={{ width: ' 95.7422px' }}
										>
											Precio Unitario
										</th>
										<th
											className="min-w-50px text-end sorting"
											tabIndex={0}
											aria-controls="kt_profile_overview_table"
											rowSpan={1}
											colSpan={1}
											aria-label="Details: activate to sort column ascending"
											style={{ width: ' 93.6484px' }}
										>
											Precio Total
										</th>
									</tr>
								</thead>
								<tbody className="fs-6">
									{props.rubros && props.rubros?.length > 0 ? (
										props.rubros.map((rubro) => (
											<tr className="odd" key={`${rubro.id}-${props.id}`}>
												<td>
													{/* <!--begin::User--> */}
													<div className="d-flex align-items-center">
														{/* <!--begin::Wrapper--> */}
														<div className="me-5 position-relative">
															{/* <!--begin::Avatar--> */}
															<div className="symbol symbol-35px symbol-circle">
																<span className="symbol-label bg-light-danger text-danger fw-semibold">
																	R{' '}
																</span>
															</div>
															{/* <!--end::Avatar--> */}
														</div>
														{/* <!--end::Wrapper--> */}

														{/* <!--begin::Info--> */}
														<div className="d-flex flex-column justify-content-center">
															<div className="fw-semibold text-gray-400">
																{rubro.detail}
															</div>
														</div>
														{/* <!--end::Info--> */}
													</div>
													{/* <!--end::User--> */}
												</td>
												<td>{rubro.performance}</td>
												<td>{rubro.quantity}</td>
												<td>
													<span className="badge badge-light-warning fw-bold px-4 py-3">
														{rubro.unitPrice}
													</span>
												</td>
												<td>
													<span className="badge badge-light-success fw-bold px-4 py-3">
														{(rubro.quantity * rubro.unitPrice).toFixed(2)}
													</span>
												</td>
												<td className="text-end">
													<a href="/#" className="btn btn-light btn-sm">
														Ver
													</a>
												</td>
											</tr>
										))
									) : (
										<tr className="odd">
											<td colSpan={5} className="text-center">
												No hay rubros disponibles
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
					{/* <!--end::Table--> */}
				</div>
				{/* <!--end::Table container-->                                       */}
			</div>
			{/* <!--end::Card body--> */}
			{/* <!--begin::Modal--> */}
			<Modal id="modal_create_rubro" title="Nuevo Rubro">
				<form
					className="mx-auto mw-600px w-100 py-10 fv-plugins-bootstrap5 fv-plugins-framework"
					onSubmit={handleSubmit}
				>
					<div className="mb-10 fv-row fv-plugins-icon-container">
						{/* <!--begin::Label-->                   */}
						<label className="form-label mb-3" htmlFor="description">
							Descripción del rubro
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
						<label className="form-label mb-3" htmlFor="rubro">
							Rubro
						</label>
						{/* <!--end::Label--> */}
						{/* <!--begin::Input--> */}
						<input
							type="text"
							className="form-control form-control-lg form-control-solid"
							name="rubro"
							placeholder=""
							id="rubro"
						/>

						{/* <!--end::Input--> */}
						<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
					</div>

					<div className="mb-10 fv-row fv-plugins-icon-container">
						{/* <!--begin::Label-->                   */}
						<label className="form-label mb-3" htmlFor="unit">
							Unidad
						</label>
						{/* <!--end::Label--> */}
						{/* <!--begin::Input--> */}
						<input
							type="text"
							className="form-control form-control-lg form-control-solid"
							name="unit"
							placeholder=""
							id="unit"
						/>

						{/* <!--end::Input--> */}
						<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
					</div>

					<div className="mb-10 fv-row fv-plugins-icon-container">
						{/* <!--begin::Label-->                   */}
						<label className="form-label mb-3" htmlFor="quantity">
							Cantidad
						</label>
						{/* <!--end::Label--> */}
						{/* <!--begin::Input--> */}
						<input
							type="text"
							className="form-control form-control-lg form-control-solid"
							name="quantity"
							placeholder=""
							id="quantity"
						/>

						{/* <!--end::Input--> */}
						<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
					</div>

					<div className="mb-10 fv-row fv-plugins-icon-container">
						{/* <!--begin::Label-->                   */}
						<label className="form-label mb-3" htmlFor="performance">
							Rendimiento
						</label>
						{/* <!--end::Label--> */}
						{/* <!--begin::Input--> */}
						<input
							type="text"
							className="form-control form-control-lg form-control-solid"
							name="performance"
							placeholder=""
							id="performance"
						/>

						{/* <!--end::Input--> */}
						<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
					</div>

					<div className="mb-10 fv-row fv-plugins-icon-container">
						{/* <!--begin::Label-->                   */}
						<label className="form-label mb-3" htmlFor="unitPrice">
							Precio unitario
						</label>
						{/* <!--end::Label--> */}
						{/* <!--begin::Input--> */}
						<input
							type="text"
							className="form-control form-control-lg form-control-solid"
							name="unitPrice"
							placeholder=""
							id="unitPrice"
						/>

						{/* <!--end::Input--> */}
						<div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
					</div>

					<div className="d-flex flex-stack pt-15">
						<div>
							<button type="submit" className="btn btn-lg btn-primary">
								Crear Rubro
							</button>
						</div>
					</div>
				</form>
			</Modal>
			{/* <!--end::Modal--> */}
		</div>
	);
}

export default TableRubros;
