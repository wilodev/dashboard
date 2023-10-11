import React from 'react';

import { CardGastos } from '@/ui/CardGastos';
import { CardPayments } from '@/ui/CardPayments';
import { CardProjects } from '@/ui/CardProjects';
import { CardTime } from '@/ui/CardTime';
import { CardUsers } from '@/ui/CardUsers';

export default function Home() {
	return (
		<div className="row g-5 g-xl-10 mb-xl-10">
			<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
				<CardProjects />
				<CardUsers />
			</div>
			<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
				<CardPayments />
				<CardGastos />
			</div>
			<div className="col-lg-12 col-xl-12 col-xxl-6 mb-5 mb-xl-0">
				<CardTime />
			</div>
		</div>
	);
}
