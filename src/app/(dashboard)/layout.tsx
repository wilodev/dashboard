import { Aside } from '@/components/Aside';
import { Header } from '@/components/Header';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<div className="page d-flex flex-row flex-column-fluid">
			{/* <!--begin::Aside--> */}
			<Aside />
			{/* <!--end::Aside--> */}
			{/* <!--begin::Wrapper--> */}
			<div className="wrapper d-flex flex-column flex-row-fluid" id="main">
				{/* <!--begin::Header--> */}
				<Header />
				{/* <!--end::Header--> */}
				{/* <!--begin::Content--> */}
				<div className="content d-flex flex-column flex-column-fluid">
					{/* <!--begin::Container--> */}
					<div className="container-xxl">{children}</div>
					{/* <!--end::Container--> */}
				</div>
				{/* <!--end::Content--> */}
				{/* <!--begin::Footer--> */}
				<div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
					{/* <!--begin::Container--> */}
					<div className="container-xxl d-flex flex-column flex-md-row flex-stack">
						{/* <!--begin::Copyright--> */}
						<div className="text-dark order-2 order-md-1">
							<span className="text-gray-400 fw-semibold me-1">Powered By</span>
							<a
								href="https://github.com/wilodev"
								target="_blank"
								className="text-muted text-hover-primary fw-semibold me-2 fs-6"
								rel="noreferrer"
							>
								Wilodev
							</a>
						</div>
						{/* <!--end::Copyright--> */}
					</div>
					{/* <!--end::Container--> */}
				</div>
				{/* <!--end::Footer--> */}
			</div>
			{/* <!--end::Wrapper--> */}
		</div>
	);
}
