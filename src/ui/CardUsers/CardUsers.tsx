import React from 'react';

import Image from 'next/image';

function CardUsers() {
	return (
		<div className="card card-flush h-md-50 mb-5 mb-xl-10">
			{/* <!--begin::Header--> */}
			<div className="card-header pt-5">
				{/* <!--begin::Title--> */}
				<div className="card-title d-flex flex-column">
					{/* <!--begin::Amount--> */}
					<span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">357</span>
					{/* <!--end::Amount-->            */}

					{/* <!--begin::Subtitle--> */}
					<span className="text-gray-400 pt-1 fw-semibold fs-6">
						Personas en el proyecto
					</span>
					{/* <!--end::Subtitle-->  */}
				</div>
				{/* <!--end::Title-->            */}
			</div>
			{/* <!--end::Header--> */}

			{/* <!--begin::Card body--> */}
			<div className="card-body d-flex flex-column justify-content-end pe-0">
				{/* <!--begin::Title--> */}
				<span className="fs-6 fw-bolder text-gray-800 d-block mb-2">
					Últimas personas
				</span>
				{/* <!--end::Title--> */}

				{/* <!--begin::Users group--> */}
				<div className="symbol-group symbol-hover flex-nowrap">
					<div
						className="symbol symbol-35px symbol-circle"
						data-bs-toggle="tooltip"
						data-bs-original-title="Alan Warden"
						data-kt-initialized="1"
					>
						<span className="symbol-label bg-warning text-inverse-warning fw-bold">
							A
						</span>
					</div>
					<div
						className="symbol symbol-35px symbol-circle"
						data-bs-toggle="tooltip"
						aria-label="Michael Eberon"
						data-bs-original-title="Michael Eberon"
						data-kt-initialized="1"
					>
						<Image
							width={35}
							height={35}
							alt="Pic"
							src="/assets/media/avatars/300-11.jpg"
						/>
					</div>
					<div
						className="symbol symbol-35px symbol-circle"
						data-bs-toggle="tooltip"
						data-bs-original-title="Susan Redwood"
						data-kt-initialized="1"
					>
						<span className="symbol-label bg-primary text-inverse-primary fw-bold">
							S
						</span>
					</div>
					<div
						className="symbol symbol-35px symbol-circle"
						data-bs-toggle="tooltip"
						aria-label="Melody Macy"
						data-bs-original-title="Melody Macy"
						data-kt-initialized="1"
					>
						<Image
							width={35}
							height={35}
							alt="Pic"
							src="/assets/media/avatars/300-2.jpg"
						/>
					</div>
					<div
						className="symbol symbol-35px symbol-circle"
						data-bs-toggle="tooltip"
						data-bs-original-title="Perry Matthew"
						data-kt-initialized="1"
					>
						<span className="symbol-label bg-danger text-inverse-danger fw-bold">
							P
						</span>
					</div>
					<div
						className="symbol symbol-35px symbol-circle"
						data-bs-toggle="tooltip"
						aria-label="Barry Walter"
						data-bs-original-title="Barry Walter"
						data-kt-initialized="1"
					>
						<Image
							width={35}
							height={35}
							alt="Pic"
							src="/assets/media/avatars/300-12.jpg"
						/>
					</div>
					<a
						href="/"
						className="symbol symbol-35px symbol-circle"
						data-bs-toggle="modal"
						data-bs-target="#kt_modal_view_users"
					>
						<span className="symbol-label bg-dark text-gray-300 fs-8 fw-bold">
							+42
						</span>
					</a>
				</div>
				{/* <!--end::Users group--> */}
			</div>
			{/* <!--end::Card body--> */}
		</div>
	);
}

export default CardUsers;
