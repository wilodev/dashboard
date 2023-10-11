import React from 'react';

import { Icon } from '../Icon';

function CardGastos() {
	return (
		<div className="card card-flush h-lg-50">
			{/* <!--begin::Header--> */}
			<div className="card-header pt-5">
				{/* <!--begin::Title--> */}
				<h3 className="card-title text-gray-800">Gastos</h3>
				{/* <!--end::Title--> */}

				{/* <!--begin::Toolbar--> */}
				<div className="card-toolbar d-none">
					{/* <!--begin::Daterangepicker(defined in src/js/layout/app.js)--> */}
					<div
						data-kt-daterangepicker="true"
						data-kt-daterangepicker-opens="left"
						className="btn btn-sm btn-light d-flex align-items-center px-4"
						data-kt-initialized="1"
					>
						{/* <!--begin::Display range--> */}
						<div className="text-gray-600 fw-bold">
							11 sep. 2023 - 10 oct. 2023
						</div>
						{/* <!--end::Display range--> */}
						<Icon name="app-icon app-icon-calendar-8 fs-1 ms-2 me-0" />
					</div>
					{/* <!--end::Daterangepicker-->                          */}
				</div>
				{/* <!--end::Toolbar--> */}
			</div>
			{/* <!--end::Header--> */}

			{/* <!--begin::Body--> */}
			<div className="card-body pt-5">
				{/* <!--begin::Item--> */}
				<div className="d-flex flex-stack">
					{/* <!--begin::Section--> */}
					<div className="text-gray-700 fw-semibold fs-6 me-2">
						Mano de obra
					</div>
					{/* <!--end::Section-->   */}

					{/* <!--begin::Statistics-->  */}
					<div className="d-flex align-items-center">
						<Icon name="app-icon app-icon-arrow-up-right fs-2 text-success me-2" />

						{/* <!--begin::Number-->            */}
						<span className="text-gray-900 fw-bolder fs-6">7.8</span>
						{/* <!--end::Number-->   */}

						<span className="text-gray-400 fw-bold fs-6">/10</span>
					</div>
					{/* <!--end::Statistics-->            */}
				</div>
				{/* <!--end::Item--> */}

				{/* <!--begin::Separator--> */}
				<div className="separator separator-dashed my-3" />
				{/* <!--end::Separator--> */}

				{/* <!--begin::Item--> */}
				<div className="d-flex flex-stack">
					{/* <!--begin::Section--> */}
					<div className="text-gray-700 fw-semibold fs-6 me-2">Materiales</div>
					{/* <!--end::Section-->   */}

					{/* <!--begin::Statistics-->  */}
					<div className="d-flex align-items-center">
						<Icon name="app-icon app-icon-arrow-down-right fs-2 text-danger me-2" />

						{/* <!--begin::Number-->            */}
						<span className="text-gray-900 fw-bolder fs-6">730</span>
						{/* <!--end::Number-->   */}
					</div>
					{/* <!--end::Statistics-->            */}
				</div>
				{/* <!--end::Item--> */}

				{/* <!--begin::Separator--> */}
				<div className="separator separator-dashed my-3" />
				{/* <!--end::Separator--> */}

				{/* <!--begin::Item--> */}
				<div className="d-flex flex-stack">
					{/* <!--begin::Section--> */}
					<div className="text-gray-700 fw-semibold fs-6 me-2">Equipos</div>
					{/* <!--end::Section-->   */}

					{/* <!--begin::Statistics-->  */}
					<div className="d-flex align-items-center">
						<Icon name="app-icon app-icon-arrow-up-right fs-2 text-success me-2" />

						{/* <!--begin::Number-->            */}
						<span className="text-gray-900 fw-bolder fs-6">$2,309</span>
						{/* <!--end::Number-->   */}
					</div>
					{/* <!--end::Statistics-->            */}
				</div>
				{/* <!--end::Item--> */}
			</div>
			{/* <!--end::Body--> */}
		</div>
	);
}

export default CardGastos;
