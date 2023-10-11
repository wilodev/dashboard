'use client';

import React from 'react';

import { useAppStore } from '@/store/store';

function CardProjects() {
	const { projects } = useAppStore((state) => state);
	const data = projects;
	const total = data.length;
	const pending = data.filter((item) => item.status === 0).length;
	const value = ((pending / total) * 100).toFixed(2);
	return (
		<div
			className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-center border-0 mb-5 mb-xl-10"
			style={{ backgroundColor: '#080655' }}
		>
			{/* <!--begin::Header--> */}
			<div className="card-header pt-5">
				{/* <!--begin::Title--> */}
				<div className="card-title d-flex flex-column">
					{/* <!--begin::Amount--> */}
					<span className="fs-2hx fw-bold me-2 text-white lh-1 ls-n2">
						{data.length.toString()}
					</span>
					{/* <!--end::Amount--> */}

					{/* <!--begin::Subtitle--> */}
					<span className="opacity-50 pt-1 text-white fw-semibold fs-6">
						Proyectos Totales
					</span>
					{/* <!--end::Subtitle-->  */}
				</div>
				{/* <!--end::Title-->          */}
			</div>
			{/* <!--end::Header--> */}

			{/* <!--begin::Card body--> */}
			<div className="card-body d-flex align-items-end pt-0">
				{/* <!--begin::Progress--> */}
				<div className="d-flex align-items-center flex-column mt-3 w-100">
					<div className="d-flex justify-content-between fw-bold text-white fs-6 opacity-50 w-100 mt-auto mb-2">
						<span>{pending} Pendientes</span>
						<span>{value}%</span>
					</div>

					<div className="h-8px mx-3 w-100 bg-light-danger rounded">
						<div
							className="bg-danger rounded h-8px"
							role="progressbar"
							style={{ width: `${value}%` }}
							aria-valuenow={50}
							aria-valuemin={0}
							aria-valuemax={100}
							aria-label="Progress bar"
						/>
					</div>
				</div>
				{/* <!--end::Progress--> */}
			</div>
			{/* <!--end::Card body--> */}
		</div>
	);
}

export default CardProjects;
