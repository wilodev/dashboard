/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import { ProjectItemInterface } from '@/components/Aside/types';
import { AppStoreInterface, useAppStore } from '@/store/store';
import { TableRubros } from '@/ui/TableRubros';

export default function Project({ params }: { params: { slug: string } }) {
	// Buscar en el store el proyecto en base a un id del slug
	// Si no existe, mostrar un error
	// Si existe, mostrar el proyecto
	const { projects } = useAppStore((state: AppStoreInterface) => state);
	// Buscar en projects en base a un id del slug
	// Si no existe, mostrar un error
	// Si existe, mostrar el proyecto
	// console.log(projects);
	// console.log(params.slug);
	const currentProject = projects.find(
		(project: ProjectItemInterface) => project.id === params.slug
	);
	if (!currentProject) return <div>El proyecto no existe</div>;
	return (
		<>
			<div className="card mb-6 mb-xl-9">
				<div className="card-body pt-9 pb-0">
					{/* <!--begin::Details--> */}
					<div className="d-flex flex-wrap flex-sm-nowrap mb-6">
						{/* <!--begin::Image--> */}
						<div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
							<Image
								className="mw-50px mw-lg-75px"
								src={currentProject.image}
								alt="image"
								width={75}
								height={75}
							/>
						</div>
						{/* <!--end::Image--> */}

						{/* <!--begin::Wrapper--> */}
						<div className="flex-grow-1">
							{/* <!--begin::Head--> */}
							<div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
								{/* <!--begin::Details--> */}
								<div className="d-flex flex-column">
									{/* <!--begin::Status--> */}
									<div className="d-flex align-items-center mb-1">
										<p className="text-gray-800 text-hover-primary fs-2 fw-bold me-3">
											{currentProject.title}
										</p>
										<span
											className={clsx(
												'badge me-auto',
												currentProject.status === 1
													? 'badge-light-success'
													: 'badge-light-danger'
											)}
										>
											{currentProject.status === 0 ? 'En progreso' : 'Completo'}
										</span>
									</div>
									{/* <!--end::Status--> */}

									{/* <!--begin::Description--> */}
									<div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400">
										{currentProject.description}
									</div>
									{/* <!--end::Description--> */}
								</div>
								{/* <!--end::Details--> */}
							</div>
							{/* <!--end::Head--> */}

							{/* <!--begin::Info--> */}
							<div className="d-flex flex-wrap justify-content-start">
								{/* <!--begin::Stats--> */}
								<div className="d-flex flex-wrap">
									{/* <!--begin::Stat--> */}
									<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
										{/* <!--begin::Number--> */}
										<div className="d-flex align-items-center">
											<div className="fs-4 fw-bold">
												{currentProject.startDate}
											</div>
										</div>
										{/* <!--end::Number--> */}

										{/* <!--begin::Label--> */}
										<div className="fw-semibold fs-6 text-gray-400">
											Fecha de inicio
										</div>
										{/* <!--end::Label--> */}
									</div>
									{/* <!--end::Stat--> */}

									{/* <!--begin::Stat--> */}
									<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
										{/* <!--begin::Number--> */}
										<div className="d-flex align-items-center">
											<i className="ki-duotone ki-arrow-down fs-3 text-danger me-2">
												<span className="path1" />
												<span className="path2" />
											</i>{' '}
											<div
												className="fs-4 fw-bold counted"
												data-kt-countup="true"
												data-kt-countup-value={currentProject.task || 0}
												data-kt-initialized="1"
											>
												{currentProject.task || 0}
											</div>
										</div>
										{/* <!--end::Number--> */}

										{/* <!--begin::Label--> */}
										<div className="fw-semibold fs-6 text-gray-400">Tareas</div>
										{/* <!--end::Label--> */}
									</div>
									{/* <!--end::Stat--> */}

									{/* <!--begin::Stat--> */}
									<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
										{/* <!--begin::Number--> */}
										<div className="d-flex align-items-center">
											<i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
												<span className="path1" />
												<span className="path2" />
											</i>{' '}
											<div
												className="fs-4 fw-bold counted"
												data-kt-countup="true"
												data-kt-countup-value={currentProject.total || 0}
												data-kt-countup-prefix="$"
												data-kt-initialized="1"
											>
												${currentProject.total || 0}
											</div>
										</div>
										{/* <!--end::Number-->                                 */}

										{/* <!--begin::Label--> */}
										<div className="fw-semibold fs-6 text-gray-400">
											Presupuesto Estimado
										</div>
										{/* <!--end::Label--> */}
									</div>
									{/* <!--end::Stat--> */}
								</div>
								{/* <!--end::Stats--> */}
							</div>
							{/* <!--end::Info--> */}
						</div>
						{/* <!--end::Wrapper--> */}
					</div>
					{/* <!--end::Details--> */}

					<div className="separator" />
				</div>
			</div>
			<TableRubros {...currentProject} />
		</>
	);
}
