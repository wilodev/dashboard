import React from 'react';

import { Icon } from '../Icon';

function CardUsers() {
	return (
		<div className="card card-flush h-md-50 mb-5 mb-xl-10">
			{/* <!--begin::Header--> */}
			<div className="card-header pt-5">
				{/* <!--begin::Title--> */}
				<div className="card-title d-flex flex-column">
					{/* <!--begin::Info-->  */}
					<div className="d-flex align-items-center">
						{/* <!--begin::Currency--> */}
						<span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">
							$
						</span>
						{/* <!--end::Currency--> */}

						{/* <!--begin::Amount--> */}
						<span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">
							69,700
						</span>
						{/* <!--end::Amount--> */}

						{/* <!--begin::Badge--> */}
						<span className="badge badge-light-success fs-base">
							<Icon name="app-icon app-icon-arrow-up fs-5 text-success ms-n1" />
							2.2%
						</span>
						{/* <!--end::Badge-->  */}
					</div>
					{/* <!--end::Info-->  */}

					{/* <!--begin::Subtitle--> */}
					<span className="text-gray-400 pt-1 fw-semibold fs-6">
						Presupuesto mensual Septiembre
					</span>
					{/* <!--end::Subtitle-->  */}
				</div>
				{/* <!--end::Title-->       */}
			</div>
			{/* <!--end::Header--> */}

			{/* <!--begin::Card body--> */}
			<div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
				{/* <!--begin::Chart--> */}
				<div className="d-flex flex-center me-5 pt-2">
					<div
						id="kt_card_widget_17_chart"
						style={{ minWidth: '70px', minHeight: '70px' }}
						data-kt-size="70"
						data-kt-line="11"
					>
						<span />
						<canvas height="70" width="70" />
					</div>
				</div>
				{/* <!--end::Chart--> */}

				{/* <!--begin::Labels--> */}
				<div className="d-flex flex-column content-justify-center flex-row-fluid">
					{/* <!--begin::Label--> */}
					<div className="d-flex fw-semibold align-items-center">
						{/* <!--begin::Bullet--> */}
						<div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
						{/* <!--end::Bullet--> */}

						{/* <!--begin::Label--> */}
						<div className="text-gray-500 flex-grow-1 me-4">Materiales</div>
						{/* <!--end::Label--> */}

						{/* <!--begin::Stats--> */}
						<div className="fw-bolder text-gray-700 text-xxl-end">$7,660</div>
						{/* <!--end::Stats--> */}
					</div>
					{/* <!--end::Label--> */}

					{/* <!--begin::Label--> */}
					<div className="d-flex fw-semibold align-items-center my-3">
						{/* <!--begin::Bullet--> */}
						<div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
						{/* <!--end::Bullet--> */}

						{/* <!--begin::Label--> */}
						<div className="text-gray-500 flex-grow-1 me-4">Mano de obra</div>
						{/* <!--end::Label--> */}

						{/* <!--begin::Stats--> */}
						<div className="fw-bolder text-gray-700 text-xxl-end">$2,820</div>
						{/* <!--end::Stats-->                     */}
					</div>
					{/* <!--end::Label--> */}

					{/* <!--begin::Label--> */}
					<div className="d-flex fw-semibold align-items-center">
						{/* <!--begin::Bullet--> */}
						<div
							className="bullet w-8px h-3px rounded-2 me-3"
							style={{ backgroundColor: '#E4E6EF' }}
						/>
						{/* <!--end::Bullet--> */}

						{/* <!--begin::Label--> */}
						<div className="text-gray-500 flex-grow-1 me-4">Otros</div>
						{/* <!--end::Label--> */}

						{/* <!--begin::Stats--> */}
						<div className=" fw-bolder text-gray-700 text-xxl-end">$5,257</div>
						{/* <!--end::Stats-->                       */}
					</div>
					{/* <!--end::Label--> */}
				</div>
				{/* <!--end::Labels--> */}
			</div>
			{/* <!--end::Card body--> */}
		</div>
	);
}

export default CardUsers;
