import React from 'react';

function CardLine() {
	return (
		<div className="col-lg-9">
			{/* <!--begin::Graph--> */}
			<div className="card card-flush h-lg-100">
				{/* <!--begin::Card header--> */}
				<div className="card-header mt-6">
					{/* <!--begin::Card title--> */}
					<div className="card-title flex-column">
						<h3 className="fw-bold mb-1">Presupuesto de la obra</h3>

						{/* <!--begin::Labels--> */}
						<div className="fs-6 d-flex text-gray-400 fs-6 fw-semibold">
							{/* <!--begin::Label-->    */}
							<div className="d-flex align-items-center me-6">
								<span className="menu-bullet d-flex align-items-center me-2">
									<span className="bullet bg-success" />
								</span>
								Presupuesto inicial del proyecto
							</div>
							{/* <!--end::Label--> */}

							{/* <!--begin::Label-->    */}
							<div className="d-flex align-items-center">
								<span className="menu-bullet d-flex align-items-center me-2">
									<span className="bullet bg-primary" />
								</span>
								Presupuesto estimado al finalizar la obra
							</div>
							{/* <!--end::Label-->     */}
						</div>
						{/* <!--end::Labels--> */}
					</div>
					{/* <!--end::Card title--> */}
				</div>
				{/* <!--end::Card header--> */}

				{/* <!--begin::Card body--> */}
				<div className="card-body pt-10 pb-0 px-5">
					{/* <!--begin::Chart--> */}
					<div
						id="kt_project_overview_graph"
						className="card-rounded-bottom"
						style={{ height: '300px', minHeight: '315px' }}
					>
						<div
							id="apexchartsbi8d7m83f"
							className="apexcharts-canvas apexchartsbi8d7m83f apexcharts-theme-light"
							style={{ width: '808px', height: '300px' }}
						>
							<svg
								id="SvgjsSvg1097"
								width="808"
								height="300"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								className="apexcharts-svg apexcharts-zoomable hovering-zoom"
								transform="translate(0, 0)"
								style={{ background: 'transparent' }}
							>
								<foreignObject x="0" y="0" width="808" height="300">
									<div
										className="apexcharts-legend"
										style={{ maxHeight: '150px' }}
									/>
								</foreignObject>
								<rect
									id="SvgjsRect1127"
									width="0"
									height="0"
									x="0"
									y="0"
									rx="0"
									ry="0"
									opacity="1"
									strokeWidth="0"
									stroke="none"
									strokeDasharray="0"
									fill="#fefefe"
								/>
								<g
									id="SvgjsG1154"
									className="apexcharts-yaxis"
									transform="translate(12.109375, 0)"
								>
									<g id="SvgjsG1155" className="apexcharts-yaxis-texts-g">
										<text
											id="SvgjsText1157"
											fontFamily="Helvetica, Arial, sans-serif"
											x="20"
											y="31.5"
											textAnchor="end"
											dominantBaseline="auto"
											fontSize="12px"
											fontWeight="400"
											fill="#99a1b7"
											className="apexcharts-text apexcharts-yaxis-label "
											style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
										>
											<tspan id="SvgjsTspan1158">84</tspan>
											<title>84</title>
										</text>
										<text
											id="SvgjsText1160"
											fontFamily="Helvetica, Arial, sans-serif"
											x="20"
											y="77.8078"
											textAnchor="end"
											dominantBaseline="auto"
											fontSize="12px"
											fontWeight="400"
											fill="#99a1b7"
											className="apexcharts-text apexcharts-yaxis-label "
											style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
										>
											<tspan id="SvgjsTspan1161">77</tspan>
											<title>77</title>
										</text>
										<text
											id="SvgjsText1163"
											fontFamily="Helvetica, Arial, sans-serif"
											x="20"
											y="124.1156"
											textAnchor="end"
											dominantBaseline="auto"
											fontSize="12px"
											fontWeight="400"
											fill="#99a1b7"
											className="apexcharts-text apexcharts-yaxis-label "
											style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
										>
											<tspan id="SvgjsTspan1164">70</tspan>
											<title>70</title>
										</text>
										<text
											id="SvgjsText1166"
											fontFamily="Helvetica, Arial, sans-serif"
											x="20"
											y="170.42340000000002"
											textAnchor="end"
											dominantBaseline="auto"
											fontSize="12px"
											fontWeight="400"
											fill="#99a1b7"
											className="apexcharts-text apexcharts-yaxis-label "
											style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
										>
											<tspan id="SvgjsTspan1167">63</tspan>
											<title>63</title>
										</text>
										<text
											id="SvgjsText1169"
											fontFamily="Helvetica, Arial, sans-serif"
											x="20"
											y="216.7312"
											textAnchor="end"
											dominantBaseline="auto"
											fontSize="12px"
											fontWeight="400"
											fill="#99a1b7"
											className="apexcharts-text apexcharts-yaxis-label "
											style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
										>
											<tspan id="SvgjsTspan1170">56</tspan>
											<title>56</title>
										</text>
										<text
											id="SvgjsText1172"
											fontFamily="Helvetica, Arial, sans-serif"
											x="20"
											y="263.039"
											textAnchor="end"
											dominantBaseline="auto"
											fontSize="12px"
											fontWeight="400"
											fill="#99a1b7"
											className="apexcharts-text apexcharts-yaxis-label "
											style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
										>
											<tspan id="SvgjsTspan1173">49</tspan>
											<title>49</title>
										</text>
									</g>
								</g>
								<g
									id="SvgjsG1099"
									className="apexcharts-inner apexcharts-graphical"
									transform="translate(42.109375, 30)"
								>
									<defs id="SvgjsDefs1098">
										<clipPath id="gridRectMaskbi8d7m83f">
											<rect
												id="SvgjsRect1102"
												width="1750.69140625"
												height="234.539"
												x="-3.5"
												y="-1.5"
												rx="0"
												ry="0"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												strokeDasharray="0"
												fill="#fff"
											/>
										</clipPath>
										<clipPath id="forecastMaskbi8d7m83f" />
										<clipPath id="nonForecastMaskbi8d7m83f" />
										<clipPath id="gridRectMarkerMaskbi8d7m83f">
											<rect
												id="SvgjsRect1103"
												width="747.69140625"
												height="235.539"
												x="-2"
												y="-2"
												rx="0"
												ry="0"
												opacity="1"
												strokeWidth="0"
												stroke="none"
												strokeDasharray="0"
												fill="#fff"
											/>
										</clipPath>
									</defs>
									<g id="SvgjsG1115" className="apexcharts-grid">
										<g
											id="SvgjsG1116"
											className="apexcharts-gridlines-horizontal"
										>
											<line
												id="SvgjsLine1120"
												x1="0"
												y1="46.3078"
												x2="743.69140625"
												y2="46.3078"
												stroke="#f1f1f2"
												strokeDasharray="4"
												strokeLinecap="butt"
												className="apexcharts-gridline"
											/>
											<line
												id="SvgjsLine1121"
												x1="0"
												y1="92.6156"
												x2="743.69140625"
												y2="92.6156"
												stroke="#f1f1f2"
												strokeDasharray="4"
												strokeLinecap="butt"
												className="apexcharts-gridline"
											/>
											<line
												id="SvgjsLine1122"
												x1="0"
												y1="138.92340000000002"
												x2="743.69140625"
												y2="138.92340000000002"
												stroke="#f1f1f2"
												strokeDasharray="4"
												strokeLinecap="butt"
												className="apexcharts-gridline"
											/>
											<line
												id="SvgjsLine1123"
												x1="0"
												y1="185.2312"
												x2="743.69140625"
												y2="185.2312"
												stroke="#f1f1f2"
												strokeDasharray="4"
												strokeLinecap="butt"
												className="apexcharts-gridline"
											/>
										</g>
										<g
											id="SvgjsG1117"
											className="apexcharts-gridlines-vertical"
										/>
										<line
											id="SvgjsLine1126"
											x1="0"
											y1="231.539"
											x2="743.69140625"
											y2="231.539"
											stroke="transparent"
											strokeDasharray="0"
											strokeLinecap="butt"
										/>
										<line
											id="SvgjsLine1125"
											x1="0"
											y1="1"
											x2="0"
											y2="231.539"
											stroke="transparent"
											strokeDasharray="0"
											strokeLinecap="butt"
										/>
									</g>
									<g id="SvgjsG1118" className="apexcharts-grid-borders">
										<line
											id="SvgjsLine1119"
											x1="0"
											y1="0"
											x2="743.69140625"
											y2="0"
											stroke="#f1f1f2"
											strokeDasharray="4"
											strokeLinecap="butt"
											className="apexcharts-gridline"
										/>
										<line
											id="SvgjsLine1124"
											x1="0"
											y1="231.539"
											x2="743.69140625"
											y2="231.539"
											stroke="#f1f1f2"
											strokeDasharray="4"
											strokeLinecap="butt"
											className="apexcharts-gridline"
										/>
									</g>
									<g
										id="SvgjsG1104"
										className="apexcharts-area-series apexcharts-plot-series"
									>
										<g id="SvgjsG1105" className="apexcharts-series">
											<path
												id="SvgjsPath1108"
												d="M 0 231.539 L 0 92.61560000000009C 43.381998697916664 92.61560000000009 80.56656901041669 92.61560000000009 123.94856770833334 92.61560000000009C 167.33056640625 92.61560000000009 204.51513671875003 26.46160000000009 247.89713541666669 26.46160000000009C 291.27913411458337 26.46160000000009 328.46370442708337 26.46160000000009 371.845703125 26.46160000000009C 415.2277018229167 26.46160000000009 452.4122721354167 59.53860000000009 495.79427083333337 59.53860000000009C 539.17626953125 59.53860000000009 576.36083984375 59.53860000000009 619.7428385416666 59.53860000000009C 663.1248372395833 59.53860000000009 700.3094075520834 59.53860000000009 743.69140625 59.53860000000009C 743.69140625 59.53860000000009 743.69140625 59.53860000000009 743.69140625 231.539M 743.69140625 59.53860000000009z"
												fill="rgba(248,245,255,1)"
												fillOpacity="1"
												strokeOpacity="1"
												strokeLinecap="butt"
												strokeWidth="0"
												strokeDasharray="0"
												className="apexcharts-area"
												clipPath="url(#gridRectMaskbi8d7m83f)"
											/>
											<path
												id="SvgjsPath1109"
												d="M 0 191.61560000000009C 190.381998697916664 189.61560000000009 187.56656901041669 195.61560000000009 123.94856770833334 192.61560000000009C 167.33056640625 92.61560000000009 204.51513671875003 26.46160000000009 247.89713541666669 26.46160000000009C 291.27913411458337 26.46160000000009 328.46370442708337 26.46160000000009 371.845703125 26.46160000000009C 415.2277018229167 26.46160000000009 452.4122721354167 59.53860000000009 495.79427083333337 59.53860000000009C 539.17626953125 59.53860000000009 576.36083984375 59.53860000000009 619.7428385416666 59.53860000000009C 663.1248372395833 59.53860000000009 700.3094075520834 59.53860000000009 743.69140625 59.53860000000009"
												fill="none"
												fillOpacity="1"
												stroke="#7239ea"
												strokeOpacity="1"
												strokeLinecap="butt"
												strokeWidth="3"
												strokeDasharray="0"
												className="apexcharts-area"
												clipPath="url(#gridRectMaskbi8d7m83f)"
												fillRule="evenodd"
											/>
											<g
												id="SvgjsG1106"
												className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
											>
												<g className="apexcharts-series-markers">
													<circle
														id="SvgjsCircle1177"
														r="0"
														cx="619.7428385416666"
														cy="59.53860000000009"
														className="apexcharts-marker wig0zdpdy no-pointer-events"
														stroke="#7239ea"
														fill="#f8f5ff"
														fillOpacity="1"
														strokeWidth="3"
														strokeOpacity="0.9"
													/>
												</g>
											</g>
										</g>
										<g id="SvgjsG1110" className="apexcharts-series">
											<path
												id="SvgjsPath1113"
												d="M 0 231.539 L 0 M 0 191.84660000000008C 191.381998697916664 191.84660000000008 191.56656901041669 191.84660000000008 191.94856770833334 191.84660000000008C 191.33056640625 191.84660000000008 191.51513671875003 191.76960000000008 191.89713541666669 191.76960000000008C 191.27913411458337 191.76960000000008 191.46370442708337 191.76960000000008 191.845703125 191.76960000000008C 191.2277018229167 191.76960000000008 191.4122721354167 191.84660000000008 191.79427083333337 191.84660000000008C 191.17626953125 191.84660000000008 191.36083984375 191.84660000000008 191.7428385416666 191.84660000000008C 191.1248372395833 191.84660000000008 191.3094075520834 191.76960000000008 743.69140625 158.76960000000008z"
												fill="rgba(232,255,243,1)"
												fillOpacity="1"
												strokeOpacity="1"
												strokeLinecap="butt"
												strokeWidth="0"
												strokeDasharray="0"
												className="apexcharts-area"
												clipPath="url(#gridRectMaskbi8d7m83f)"
											/>
											<path
												id="SvgjsPath1114"
												d="M 0 191.84660000000008C 191.381998697916664 191.84660000000008 191.56656901041669 191.84660000000008 191.94856770833334 191.84660000000008C 191.33056640625 191.84660000000008 191.51513671875003 191.76960000000008 191.89713541666669 191.76960000000008C 191.27913411458337 191.76960000000008 191.46370442708337 191.76960000000008 191.845703125 191.76960000000008C 191.2277018229167 191.76960000000008 191.4122721354167 191.84660000000008 191.79427083333337 191.84660000000008C 191.17626953125 191.84660000000008 191.36083984375 191.84660000000008 191.7428385416666 191.84660000000008C 191.1248372395833 191.84660000000008 191.3094075520834 191.76960000000008 743.69140625 158.76960000000008"
												fill="none"
												fillOpacity="1"
												stroke="#50cd89"
												strokeOpacity="1"
												strokeLinecap="butt"
												strokeWidth="3"
												strokeDasharray="0"
												className="apexcharts-area"
												clipPath="url(#gridRectMaskbi8d7m83f)"
												fillRule="evenodd"
											/>
											<g
												id="SvgjsG1111"
												className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
											>
												<g className="apexcharts-series-markers">
													<circle
														id="SvgjsCircle1178"
														r="0"
														cx="619.7428385416666"
														cy="191.84660000000008"
														className="apexcharts-marker wqkrnyqjf no-pointer-events"
														stroke="#50cd89"
														fill="#e8fff3"
														fillOpacity="1"
														strokeWidth="3"
														strokeOpacity="0.9"
													/>
												</g>
											</g>
										</g>
										<g id="SvgjsG1107" className="apexcharts-datalabels" />
										<g id="SvgjsG1112" className="apexcharts-datalabels" />
									</g>
									<line
										id="SvgjsLine1128"
										x1="619.2428385416666"
										y1="0"
										x2="619.2428385416666"
										y2="231.539"
										stroke="#7239ea"
										strokeDasharray="3"
										strokeLinecap="butt"
										className="apexcharts-xcrosshairs"
										x="619.2428385416666"
										y="0"
										width="1"
										height="231.539"
										fill="#b1b9c4"
										filter="none"
										fillOpacity="0.9"
										strokeWidth="1"
									/>
									<line
										id="SvgjsLine1129"
										x1="0"
										y1="0"
										x2="743.69140625"
										y2="0"
										stroke="#b6b6b6"
										strokeDasharray="0"
										strokeWidth="1"
										strokeLinecap="butt"
										className="apexcharts-ycrosshairs"
									/>
									<line
										id="SvgjsLine1130"
										x1="0"
										y1="0"
										x2="743.69140625"
										y2="0"
										strokeDasharray="0"
										strokeWidth="0"
										strokeLinecap="butt"
										className="apexcharts-ycrosshairs-hidden"
									/>
									<g
										id="SvgjsG1131"
										className="apexcharts-xaxis"
										transform="translate(0, 0)"
									>
										<g
											id="SvgjsG1132"
											className="apexcharts-xaxis-texts-g"
											transform="translate(0, -4)"
										>
											<text
												id="SvgjsText1134"
												fontFamily="Helvetica, Arial, sans-serif"
												x="0"
												y="260.539"
												textAnchor="middle"
												dominantBaseline="auto"
												fontSize="12px"
												fontWeight="400"
												fill="#99a1b7"
												className="apexcharts-text apexcharts-xaxis-label "
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												<tspan id="SvgjsTspan1135">Feb</tspan>
												<title>Feb</title>
											</text>
											<text
												id="SvgjsText1137"
												fontFamily="Helvetica, Arial, sans-serif"
												x="123.94856770833334"
												y="260.539"
												textAnchor="middle"
												dominantBaseline="auto"
												fontSize="12px"
												fontWeight="400"
												fill="#99a1b7"
												className="apexcharts-text apexcharts-xaxis-label "
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												<tspan id="SvgjsTspan1138">Mar</tspan>
												<title>Mar</title>
											</text>
											<text
												id="SvgjsText1140"
												fontFamily="Helvetica, Arial, sans-serif"
												x="247.89713541666666"
												y="260.539"
												textAnchor="middle"
												dominantBaseline="auto"
												fontSize="12px"
												fontWeight="400"
												fill="#99a1b7"
												className="apexcharts-text apexcharts-xaxis-label "
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												<tspan id="SvgjsTspan1141">Apr</tspan>
												<title>Apr</title>
											</text>
											<text
												id="SvgjsText1143"
												fontFamily="Helvetica, Arial, sans-serif"
												x="371.84570312499994"
												y="260.539"
												textAnchor="middle"
												dominantBaseline="auto"
												fontSize="12px"
												fontWeight="400"
												fill="#99a1b7"
												className="apexcharts-text apexcharts-xaxis-label "
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												<tspan id="SvgjsTspan1144">May</tspan>
												<title>May</title>
											</text>
											<text
												id="SvgjsText1146"
												fontFamily="Helvetica, Arial, sans-serif"
												x="495.7942708333333"
												y="260.539"
												textAnchor="middle"
												dominantBaseline="auto"
												fontSize="12px"
												fontWeight="400"
												fill="#99a1b7"
												className="apexcharts-text apexcharts-xaxis-label "
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												<tspan id="SvgjsTspan1147">Jun</tspan>
												<title>Jun</title>
											</text>
											<text
												id="SvgjsText1149"
												fontFamily="Helvetica, Arial, sans-serif"
												x="619.7428385416667"
												y="260.539"
												textAnchor="middle"
												dominantBaseline="auto"
												fontSize="12px"
												fontWeight="400"
												fill="#99a1b7"
												className="apexcharts-text apexcharts-xaxis-label "
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												<tspan id="SvgjsTspan1150">Jul</tspan>
												<title>Jul</title>
											</text>
											<text
												id="SvgjsText1152"
												fontFamily="Helvetica, Arial, sans-serif"
												x="743.6914062500001"
												y="260.539"
												textAnchor="middle"
												dominantBaseline="auto"
												fontSize="12px"
												fontWeight="400"
												fill="#99a1b7"
												className="apexcharts-text apexcharts-xaxis-label "
												style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
											>
												<tspan id="SvgjsTspan1153">Aug</tspan>
												<title>Aug</title>
											</text>
										</g>
									</g>
									<g id="SvgjsG1174" className="apexcharts-yaxis-annotations" />
									<g id="SvgjsG1175" className="apexcharts-xaxis-annotations" />
									<g id="SvgjsG1176" className="apexcharts-point-annotations" />
									<rect
										id="SvgjsRect1179"
										width="0"
										height="0"
										x="0"
										y="0"
										rx="0"
										ry="0"
										opacity="1"
										strokeWidth="0"
										stroke="none"
										strokeDasharray="0"
										fill="#fefefe"
										className="apexcharts-zoom-rect"
									/>
									<rect
										id="SvgjsRect1180"
										width="0"
										height="0"
										x="0"
										y="0"
										rx="0"
										ry="0"
										opacity="1"
										strokeWidth="0"
										stroke="none"
										strokeDasharray="0"
										fill="#fefefe"
										className="apexcharts-selection-rect"
									/>
								</g>
							</svg>
							<div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
								<div className="apexcharts-yaxistooltip-text" />
							</div>
						</div>
					</div>
					{/* <!--end::Chart--> */}
				</div>
				{/* <!--end::Card body--> */}
			</div>
			{/* <!--end::Graph--> */}
		</div>
	);
}

export default CardLine;
