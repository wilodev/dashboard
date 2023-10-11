import React from 'react';

import clsx from 'clsx';

import { timeLines } from '@/constants/projects';

function CardTime() {
	// Obtener la fecha actual
	const currentDate = +new Date().toLocaleDateString('es-ES', {
		day: 'numeric',
	});
	return (
		<div className="card h-md-100">
			{/* <!--begin::Header--> */}
			<div className="card-header border-0 pt-5">
				<h3 className="card-title align-items-start flex-column">
					<span className="card-label fw-bold text-dark">
						Próximas visitas o eventos de la obra
					</span>

					<span className="text-muted mt-1 fw-semibold fs-7">
						Total 42 eventos
					</span>
				</h3>

				{/* <!--begin::Toolbar--> */}
				<div className="card-toolbar">
					<button type="button" className="btn btn-sm btn-light" disabled>
						Añadir nueva evento
					</button>
				</div>
				{/* <!--end::Toolbar--> */}
			</div>
			{/* <!--end::Header--> */}

			{/* <!--begin::Body--> */}
			<div className="card-body pt-7 px-0">
				{/* <!--begin::Nav-->              */}
				<ul
					className="nav nav-stretch nav-pills nav-pills-custom nav-pills-active-custom d-flex justify-content-between mb-8 px-5"
					role="tablist"
				>
					{/* <!--begin::Nav item--> */}
					{/* Crear un loop que empiece en timeLines.startDay y termine en timeLines.numDays */}
					{Array.from({ length: timeLines.numDays }, (_, index) => {
						const item = timeLines.startDay + index;
						// Sabiendo el Mes que se tiene en timeLines.startMonth y el día usando toLocaleDateString() obtener el día de la semana en formato 3 caracteres.
						const dayOfWeek = new Date(2023, timeLines.startMonth, item)
							.toLocaleDateString('es-ES', { weekday: 'short' })
							.toLocaleUpperCase();
						return (
							<li
								className="nav-item p-0 ms-0"
								role="presentation"
								key={`${index}-${item}`}
							>
								{/* <!--begin::Date--> */}
								<a
									className={clsx(
										'nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 btn-active-danger',
										currentDate === item && 'active'
									)}
									data-bs-toggle="tab"
									href={`#timeline_widget_3_tab_content_${item}`}
									aria-selected="false"
									role="tab"
								>
									<span className="fs-7 fw-semibold">{dayOfWeek}</span>
									<span className="fs-6 fw-bold">{item}</span>
								</a>
								{/* <!--end::Date-->        */}
							</li>
						);
					})}
					{/* <!--end::Nav item--> */}
				</ul>
				{/* <!--end::Nav--> */}

				{/* <!--begin::Tab Content -> */}
				<div className="tab-content mb-2 px-9">
					{Array.from({ length: timeLines.days.length }, (_, index) => {
						const day: number = index;
						const itemDay = timeLines.startDay + index;
						return (
							<>
								{/* <!--begin::Tap pane--> */}
								<div
									className={clsx(
										'tab-pane fade',
										currentDate === itemDay && 'show active'
									)}
									id={`timeline_widget_3_tab_content_${itemDay}`}
									role="tabpanel"
									key={index}
								>
									{timeLines.days[day].map((item) => (
										<>
											{/* <!--begin::Wrapper--> */}
											<div className="d-flex align-items-center mb-6">
												{/* <!--begin::Bullet--> */}
												<span
													data-kt-element="bullet"
													className={clsx(
														'bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4',
														item.bg ? item.bg : 'bg-success'
													)}
												/>
												{/* <!--end::Bullet--> */}

												{/* <!--begin::Info--> */}
												<div className="flex-grow-1 me-5">
													{/* <!--begin::Time--> */}
													<div className="text-gray-800 fw-semibold fs-2">
														{item.time}
														<span className="text-gray-400 fw-semibold fs-7">
															{item.hours}{' '}
														</span>
													</div>
													{/* <!--end::Time--> */}

													{/* <!--begin::Description--> */}
													<div className="text-gray-700 fw-semibold fs-6">
														{item.description}{' '}
													</div>
													{/* <!--end::Description--> */}

													{/* <!--begin::Link--> */}
													<div className="text-gray-400 fw-semibold fs-7">
														Creado por
														{/* <!--begin::Name--> */}
														<a
															href="/"
															className="text-primary opacity-75-hover fw-semibold"
														>
															{'   -  '}
															{item.poweredBy}
														</a>
														{/* <!--end::Name-->   */}
													</div>
													{/* <!--end::Link--> */}
												</div>
												{/* <!--end::Info--> */}

												{/* <!--begin::Action-->                             */}
												<a
													href="/"
													className="btn btn-sm btn-light"
													data-bs-toggle="modal"
													data-bs-target="#kt_modal_create_project"
												>
													Ver
												</a>
												{/* <!--end::Action-->   */}
											</div>
											{/* <!--end::Wrapper--> */}
										</>
									))}
								</div>
								{/* <!--end::Tap pane-->     */}
							</>
						);
					})}
				</div>
				{/* <!--end::Tab Content-->    */}

				{/* <!--begin::Action--> */}
				<div className="float-end d-none">
					<a
						href="/"
						className="btn btn-sm btn-light me-2"
						data-bs-toggle="modal"
						data-bs-target="#kt_modal_create_project"
					>
						Add Lesson
					</a>

					<a
						href="/"
						className="btn btn-sm btn-danger"
						data-bs-toggle="modal"
						data-bs-target="#kt_modal_create_app"
					>
						Call Sick for Today
					</a>
				</div>
				{/* <!--end::Action-->   */}
			</div>
			{/* <!--end: Card Body--> */}
		</div>
	);
}

export default CardTime;
