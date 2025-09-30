import React, { Fragment, useEffect, useState } from "react";
import {
	Check,
	CheckCircle,
	Circle,
	Close,
	Error,
	ErrorOutline,
	ExpandMore,
	Extension,
	Groups,
	HelpOutline,
	Notifications,
	StarRateRounded,
	WatchLater,
} from "@mui/icons-material";
import {
	Box,
	Grid,
	IconButton,
	Typography,
	CardMedia,
	Rating,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import { color } from "./lib/color";
import PrimaryButton from "./components/PrimaryButton";
import { FaChartLine, FaClipboardList, FaCloud, FaHeadset, FaLock, FaRocket } from "react-icons/fa";
import { FaChartGantt, FaListCheck, FaMobileScreen, FaUsersGear } from "react-icons/fa6";
import FormInput from "./components/FormInput";

const LandingPage = () => {
	const [step, setStep] = useState(0);
	const [close, setClose] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setStep((prev) => (prev + 1) % 2);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Fragment>
			{/* ========== Early Access ========== */}
			{close && (
				<Box
					sx={{
						background: "linear-gradient(to right, #9333ea, #2563eb)",
					}}
				>
					<Box
						className="container"
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							color: color.white,
							py: 1.5,
							gap: 1.5,
						}}
					>
						<Typography variant="subtitle2" textAlign={{ xs: "center", sm: "left" }}>
							🚀 Early Access Now Available! Join 100+ teams preparing smarter
							launches
						</Typography>
						<Close
							onClick={() => setClose(false)}
							sx={{
								fontSize: 18,
								cursor: "pointer",
							}}
						/>
					</Box>
				</Box>
			)}
			{/* ========== Hero Banner ========== */}
			<Box
				sx={{
					bgcolor: "#fdfbff",
				}}
			>
				<Box className="container">
					<Grid container py="80px" alignItems="center" spacing={6}>
						<Grid item size={{ xs: 12, md: 6 }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: 1,
									color: "rgb(107, 33, 168,1)",
									fontWeight: 600,
									bgcolor: "rgb(243, 232, 255)",
									p: 1,
									px: 2,
									width: "fit-content",
									borderRadius: 18,
								}}
							>
								{step === 0 && <ErrorOutline fontSize="12px" />}
								{step === 1 && <HelpOutline fontSize="12px" />}
								<Typography variant="body2" fontWeight={500}>
									Built for Fast-Moving Teams
								</Typography>
							</Box>
							<Typography variant="h1" color={color.black} fontWeight={700} mt={3}>
								LaunchOKR
							</Typography>
							<Typography
								variant="h1"
								fontWeight={700}
								sx={{
									background: "linear-gradient(to right, #9333ea, #2563eb)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
							>
								Launch with clarity. Lead with confidence.
							</Typography>
							<Typography variant="h6" color={color.gray} mt={3} fontWeight={400}>
								From kickoff to release, LaunchOKR keeps your team aligned, your
								roadmap clear, and your launch on track.
							</Typography>
							<Grid container mt={3} spacing={3}>
								<Grid item size={{ xs: 12, sm: 5 }}>
									<a href="#emailForm">
										<PrimaryButton
											fullWidth={true}
											content={
												<>
													<IconButton
														sx={{
															m: 0,
															mr: 0.5,
															color: color.white,
														}}
													>
														<FaRocket style={{ fontSize: 20 }} />
													</IconButton>{" "}
													Get Early Access
												</>
											}
											p="16px 0px"
										/>
									</a>
								</Grid>
							</Grid>
							<Grid container alignItems="center" mt={4} pt={2}>
								<Grid
									item
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
									}}
								>
									<CardMedia
										component="img"
										image="/images/avatar1.jpg"
										sx={{
											width: "2rem",
											height: "2rem",
											borderRadius: "50%",
											border: `2px solid ${color.white}`,
										}}
									/>
									<CardMedia
										component="img"
										image="/images/avatar2.jpg"
										sx={{
											width: "2rem",
											height: "2rem",
											borderRadius: "50%",
											border: `2px solid ${color.white}`,
											ml: -1,
										}}
									/>
									<CardMedia
										component="img"
										image="/images/avatar3.jpg"
										sx={{
											width: "2rem",
											height: "2rem",
											borderRadius: "50%",
											border: `2px solid ${color.white}`,
											ml: -1,
										}}
									/>
								</Grid>
								<Grid item>
									<Typography variant="body2" ml={1.5} color={color.gray}>
										100+ teams already signed up
									</Typography>
								</Grid>
								<Grid
									item
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										ml: 1.5,
									}}
								>
									<Rating name="read-only" value={5} readOnly />
									<Typography variant="body2" ml={1} color={color.gray}>
										5.0 rating
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item size={{ xs: 12, md: 6 }} sx={{ position: "relative" }}>
							<Box
								sx={{
									bgcolor: color.white,
									p: 3,
									boxShadow: 2,
									borderRadius: 3,
									rotate: 3,
									transform: "rotate(3deg)",
									transition: "transform 0.5s ease",
									"&:hover": {
										transform: "rotate(0deg)",
									},
								}}
							>
								<Grid
									container
									justifyContent="space-between"
									alignItems="center"
									mb={2}
								>
									<Grid item>
										<Typography
											variant="subtitle2"
											color={color.black}
											fontWeight={600}
										>
											Launch Readiness Dashboard
										</Typography>
									</Grid>
									<Grid item>
										<Box
											sx={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
											}}
										>
											<Box
												sx={{
													width: 12,
													height: 12,
													bgcolor: "#EF4444",
													borderRadius: "50%",
												}}
											/>
											<Box
												sx={{
													width: 12,
													height: 12,
													bgcolor: "#EAB308",
													ml: 1,
													borderRadius: "50%",
												}}
											/>
											<Box
												sx={{
													width: 12,
													height: 12,
													bgcolor: "#22C55E",
													ml: 1,
													borderRadius: "50%",
												}}
											/>
										</Box>
									</Grid>
								</Grid>
								{[
									{
										icon: (
											<CheckCircle
												sx={{
													color: "#22C55E",
													fontSize: 18,
													mr: 1,
												}}
											/>
										),
										label: "Release Plan",
										labelBgcolor: "#F0FDF4",
										percentage: "100%",
										percentageColor: "#166534",
										percentageBgcolor: "#DCFCE7",
									},
									{
										icon: (
											<WatchLater
												sx={{
													color: "#2563eb",
													fontSize: 18,
													mr: 1,
												}}
											/>
										),
										label: "OKR Tracker",
										labelBgcolor: "#EFF6FF",
										percentage: "60%",
										percentageColor: "#1E40AF",
										percentageBgcolor: "#DBEAFE",
									},
									{
										icon: (
											<Error
												sx={{
													color: "#EAB308",
													fontSize: 18,
													mr: 1,
												}}
											/>
										),
										label: "Coverage",
										labelBgcolor: "#FEFCEB",
										percentage: "60%",
										percentageColor: "#854D0E",
										percentageBgcolor: "#FEF9C3",
									},
									{
										icon: (
											<Circle
												sx={{
													color: "#4B5563",
													fontSize: 18,
													mr: 1,
												}}
											/>
										),
										label: "Launch Ready",
										labelBgcolor: "#F9FAFB",
										percentage: "30%",
										percentageColor: "#1F2937",
										percentageBgcolor: "#F3F4F6",
									},
								].map((item, index) => (
									<Grid
										key={index}
										container
										justifyContent="space-between"
										alignItems="center"
										sx={{
											p: 1.5,
											bgcolor: item.labelBgcolor,
											borderRadius: 3,
											mb: 2,
										}}
									>
										<Grid item>
											<Box
												sx={{
													display: "flex",
													flexDirection: "row",
													alignItems: "center",
												}}
											>
												{item.icon}
												<Typography
													variant="body2"
													color={color.black}
													fontWeight={600}
												>
													{item.label}
												</Typography>
											</Box>
										</Grid>
										<Grid item>
											<Box
												sx={{
													color: item.percentageColor,
													p: "2px 6px",
													fontSize: 12,
													borderRadius: 3,
													fontWeight: 600,
													bgcolor: item.percentageBgcolor,
												}}
											>
												<Typography variant="caption" fontWeight={500}>
													{item.percentage}
												</Typography>
											</Box>
										</Grid>
									</Grid>
								))}
								<Grid
									container
									alignItems="center"
									justifyContent="space-between"
									sx={{
										pt: 2,
										borderTop: `1px solid rgb(229, 234, 245)`,
									}}
								>
									<Grid item>
										<Typography
											variant="body2"
											color="#374151"
											fontWeight={600}
										>
											Overall Progress
										</Typography>
									</Grid>
									<Grid item>
										<Typography
											variant="body2"
											fontWeight={600}
											color={color.primary}
										>
											68%
										</Typography>
									</Grid>
								</Grid>
								<Box
									sx={{
										bgcolor: "#F3F4F6",
										height: 8,
										borderRadius: 12,
										mt: 1,
									}}
								>
									<Box
										sx={{
											background:
												"linear-gradient(to right, #9333ea, #2563eb)",
											width: "68%",
											height: "100%",
											borderRadius: 12,
										}}
									/>
								</Box>
							</Box>
							<Box
								sx={{
									bgcolor: "#BFDBFE",
									borderRadius: "50%",
									width: "4rem",
									height: "4rem",
									position: "absolute",
									zIndex: 2,
									top: "-1.5rem",
									left: "-1.5rem",
									opacity: 0.5,
								}}
							/>
							<Box
								sx={{
									bgcolor: "#E9D5ff",
									borderRadius: "50%",
									width: "6rem",
									height: "6rem",
									position: "absolute",
									zIndex: 2,
									bottom: "-1.5rem",
									right: "-1.5rem",
									opacity: 0.5,
								}}
							/>
						</Grid>
					</Grid>
				</Box>
			</Box>
			{/* ========== Why LaunchOKR? ========== */}
			<Box
				sx={{
					py: "80px",
				}}
			>
				<Box className="container">
					<Typography variant="h2" color={color.black} mb={3} textAlign="center">
						Why LaunchOKR?
					</Typography>
					<Typography
						variant="h6"
						fontWeight={400}
						color={color.gray}
						maxWidth={{ xs: "100%", md: "47rem" }}
						mx="auto"
						mb="4rem"
						textAlign="center"
					>
						Launch day shouldn’t feel like a scramble. LaunchOKR gives you the structure
						and foresight to stay ahead — every step of the way.
					</Typography>
					<Grid container spacing={5} alignItems="center">
						<Grid item size={{ xs: 12, md: 6 }}>
							{[
								{
									label: "Customizable checklists for every phase",
									content:
										"Tailor your launch process with phase-specific checklists that adapt to your team's workflow and requirements.",
									icon: <FaListCheck style={{ fontSize: 22 }} />,
									iconColor: color.primary,
									iconBgcolor: "#F3E8FF",
								},
								{
									label: "Automated reminders and status tracking",
									content:
										"Never miss a critical milestone with smart notifications and real-time progress tracking across all teams.",
									icon: <Notifications style={{ fontSize: 24 }} />,
									iconColor: "#2563eb",
									iconBgcolor: "#DBEAFE",
								},
								{
									label: "Cross-team visibility for product, QA, and ops",
									content:
										"Unite your product, QA, and operations teams with shared visibility into launch progress and dependencies.",
									icon: <Groups style={{ fontSize: 26 }} />,
									iconColor: "#22C55E",
									iconBgcolor: "#DCFCE7",
								},
								{
									label: "One-click launch readiness reports",
									content:
										"Generate comprehensive launch readiness reports instantly to make informed go/no-go decisions.",
									icon: <FaChartLine style={{ fontSize: 22 }} />,
									iconColor: "#fb8c00",
									iconBgcolor: "#FFEDD5",
								},
							].map((item, index) => (
								<Box
									key={index}
									sx={{
										display: "flex",
										flexDirection: "row",
										mt: index == 0 ? 0 : 4,
									}}
								>
									<Box
										sx={{
											width: "3rem",
											height: "3rem",
											borderRadius: 2,
											bgcolor: item.iconBgcolor,
											color: item.iconColor,
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "center",
											flexShrink: 0,
										}}
									>
										{item.icon}
									</Box>
									<Box ml={2}>
										<Typography variant="h6" color={color.black} mb={1}>
											{item.label}
										</Typography>
										<Typography variant="subtitle2" color={color.gray}>
											{item.content}
										</Typography>
									</Box>
								</Box>
							))}
						</Grid>

						<Grid item size={{ xs: 12, md: 6 }}>
							<Grid
								container
								alignItems="center"
								spacing={2}
								sx={{
									p: 4,
									bgcolor: "#eff6ff ",
									borderRadius: 4,
								}}
							>
								{[
									{
										icon: (
											<FaRocket
												style={{ fontSize: 24, color: color.primary }}
											/>
										),
										label: "95%",
										content: "Success Rate",
									},
									{
										icon: (
											<WatchLater
												style={{ fontSize: 28, color: "#2563eb" }}
											/>
										),
										label: "40+",
										content: "Time Saved",
									},
									{
										icon: <Groups style={{ fontSize: 34, color: "#22C55E" }} />,
										label: "100+",
										content: "Teams Using",
									},
									{
										icon: (
											<StarRateRounded
												style={{ fontSize: 34, color: "#EAB308" }}
											/>
										),
										label: "5.0",
										content: "User Rating",
									},
								].map((item, index) => (
									<Grid item size={{ xs: 6 }} key={index}>
										<Box
											sx={{
												p: 2,
												textAlign: "center",
												bgcolor: color.white,
												borderRadius: 3,
												"&:hover": {
													transform: "scale(1.02)",
												},
											}}
										>
											{item.icon}
											<Typography variant="h5">{item.label}</Typography>
											<Typography variant="body2" color={color.gray}>
												{item.content}
											</Typography>
										</Box>
									</Grid>
								))}
								<Box
									sx={{
										mt: 2,
										mx: "auto",
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										gap: 1,
										bgcolor: color.white,
										color: color.gray,
										fontWeight: 600,
										p: 1,
										px: 2,
										borderRadius: 18,
									}}
								>
									{step === 0 && (
										<ErrorOutline sx={{ color: "#008000" }} fontSize="12px" />
									)}
									{step === 1 && (
										<HelpOutline fontSize="12px" sx={{ color: "#008000" }} />
									)}
									<Typography variant="body2" fontWeight={500}>
										Trusted by leading teams worldwide
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Box>
			{/* ========== successful launch ========== */}
			<Box
				sx={{
					py: "80px",
					bgcolor: "#fdfbff",
				}}
			>
				<Box className="container">
					<Typography variant="h2" color={color.black} textAlign="center" mb={3}>
						Everything you need for a successful launch
					</Typography>
					<Typography
						variant="h6"
						fontWeight={400}
						color={color.gray}
						maxWidth={{ xs: "100%", md: "47rem" }}
						mx="auto"
						mb="4rem"
						textAlign="center"
					>
						From planning to post-launch monitoring, LaunchOKR provides comprehensive
						tools for every stage of your product release.
					</Typography>
					<Grid container spacing={4} mb="4rem">
						{[
							{
								icon: <FaChartGantt style={{ fontSize: 24 }} />,
								iconBgcolor: "#DBEAFE",
								iconColor: "#2563eb",
								label: "Plan with Precision",
								content:
									"Define OKRs, assign accountable owners, and align milestones across sprints — so every release is traceable and on time.",
								points: [
									{ tag: "OKR alignment" },
									{ tag: "Milestone tracking" },
									{ tag: "Accountable ownership" },
									{ tag: "Sprint planning" },
								],
							},
							{
								icon: <FaClipboardList style={{ fontSize: 24 }} />,
								iconBgcolor: "#F3E8FF",
								iconColor: "#9333ea",
								label: "Smart Checklist",
								content:
									"Integrate QA workflows, code changes, and test coverage into one launch-ready view. Catch issues early, reduce risk, and ship confidently.",
								points: [
									{ tag: "QA workflows" },
									{ tag: "Code reviews" },
									{ tag: "Test coverage" },
									{ tag: "Risk reduction" },
								],
							},
							{
								icon: <FaChartLine style={{ fontSize: 24 }} />,
								iconBgcolor: "#FEF9C3",
								iconColor: "#F59E0B",
								label: "Monitor Impact",
								content:
									"Track adoption, user feedback, and post-launch metrics with precision — so you can iterate fast and prove ROI.",
								points: [
									{ tag: "User adoption" },
									{ tag: "Feedback loops" },
									{ tag: "Post-launch metrics" },
									{ tag: "ROI tracking" },
								],
							},
						].map((item, index) => (
							<Grid key={index} item size={{ xs: 12, md: 4 }}>
								<Box
									sx={{
										p: "32px",
										bgcolor: color.white,
										borderRadius: "1rem",
										boxShadow: 1,
										"&:hover": {
											transform: "scale(1.02)",
										},
									}}
								>
									<Box
										sx={{
											width: "4rem",
											height: "4rem",
											borderRadius: "1rem",
											bgcolor: item.iconBgcolor,
											color: item.iconColor,
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "center",
											flexShrink: 0,
											mb: "1.5rem",
										}}
									>
										{item.icon}
									</Box>
									<Typography variant="h5" color={color.black} mb={2}>
										{item.label}
									</Typography>
									<Typography variant="subtitle2" color={color.gray} mb={3}>
										{item.content}
									</Typography>
									{item.points.map((i, _) => (
										<Box
											key={_}
											sx={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												mt: _ == 0 ? 0 : 1,
											}}
										>
											<Check style={{ color: "#22c55e", fontSize: 16 }} />
											<Typography
												variant="body2"
												color={color.gray}
												ml={0.75}
											>
												{i.tag}
											</Typography>
										</Box>
									))}
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
			{/* ========== Built for Fast-Moving Teams ========== */}
			<Box
				sx={{
					py: "80px",
					bgcolor: "#fdfbff",
				}}
			>
				<Box className="container">
					<Typography variant="h2" color={color.black} textAlign="center" mb={3}>
						Built for Fast-Moving Teams{" "}
					</Typography>
					<Typography
						variant="h6"
						fontWeight={400}
						color={color.gray}
						maxWidth={{ xs: "100%", md: "47rem" }}
						mx="auto"
						mb="4rem"
						textAlign="center"
					>
						Whether you're launching a mobile app, SaaS feature, or major release —
						LaunchOKR keeps your team aligned and your launch on track.
					</Typography>
					<Grid container spacing={4} mb="4rem" alignItems="center">
						{[
							{
								icon: <FaMobileScreen style={{ fontSize: 24 }} />,
								iconBgcolor: "#F3E8FF",
								iconColor: color.primary,
								label: "Mobile App Launches",
								content:
									"Coordinate app store submissions, marketing campaigns, and user acquisition strategies.",
								points: [
									{
										tag: "App store optimization",
									},
									{
										tag: "Beta testing coordination",
									},
									{
										tag: "Marketing asset preparation",
									},
									{
										tag: "User feedback integration",
									},
								],
							},
							{
								icon: <FaCloud style={{ fontSize: 32 }} />,
								iconBgcolor: "#DBEAFE",
								iconColor: "#2563eb",
								label: "SaaS Feature Releases",
								content:
									"Manage feature rollouts, user communications, and performance monitoring.",
								points: [
									{
										tag: "Feature flag management",
									},
									{
										tag: "User segment targeting",
									},
									{
										tag: "Performance monitoring",
									},
									{
										tag: "Rollback procedures",
									},
								],
							},
							{
								icon: <FaRocket style={{ fontSize: 32 }} />,
								iconBgcolor: "#DCFCE7",
								iconColor: "#22c55e",
								label: "Major Product Releases",
								content:
									"Orchestrate complex launches with multiple stakeholders and dependencies.",
								points: [
									{
										tag: "Stakeholder coordination",
									},
									{
										tag: "Cross-team dependencies",
									},
									{
										tag: "Go-to-market strategy",
									},
									{
										tag: "Post-launch monitoring",
									},
								],
							},
						].map((item, index) => (
							<Grid key={index} item size={{ xs: 12, md: 4 }}>
								<Box
									sx={{
										p: "32px",
										bgcolor: color.white,
										borderRadius: "1rem",
										boxShadow: 1,
										"&:hover": {
											transform: "scale(1.02)",
										},
									}}
								>
									<Box
										sx={{
											width: "4rem",
											height: "4rem",
											borderRadius: "1rem",
											bgcolor: item.iconBgcolor,
											color: item.iconColor,
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "center",
											flexShrink: 0,
											mb: "1.5rem",
											mx: "auto",
										}}
									>
										{item.icon}
									</Box>
									<Typography
										variant="h5"
										color={color.black}
										mb={2}
										textAlign="center"
									>
										{item.label}
									</Typography>
									<Typography
										variant="subtitle2"
										color={color.gray}
										mb={3}
										textAlign="center"
									>
										{item.content}
									</Typography>
									{item.points.map((i, _) => (
										<Box
											key={_}
											sx={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												mt: _ == 0 ? 0 : 1,
											}}
										>
											<Check style={{ color: "#22c55e", fontSize: 16 }} />
											<Typography
												variant="body2"
												color={color.gray}
												ml={0.75}
											>
												{i.tag}
											</Typography>
										</Box>
									))}
								</Box>
							</Grid>
						))}
					</Grid>
					<Box
						sx={{
							p: "48px",
							bgcolor: "#F9FAFB",
							mt: "64px",
							borderRadius: "1rem",
						}}
					>
						<Grid container spacing={4} alignItems="center">
							<Grid item size={{ xs: 12, md: 6 }}>
								<Typography variant="h3" color={color.black} mb={3}>
									Trusted by Tech Leaders Worldwide
								</Typography>
								<Typography
									variant="subtitle2"
									fontSize={18}
									color={color.gray}
									mb={4}
								>
									Built by Mtest Labs, LaunchOKR is trusted by quality assurance
									professionals and product teams at leading companies around the
									globe.
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "row",
										alignItems: "center",
										gap: 2,
									}}
								>
									<Box>
										<Typography
											variant="h3"
											color={color.primary}
											textAlign="center"
										>
											50K+
										</Typography>
										<Typography
											variant="body2"
											color={color.gray}
											textAlign="center"
										>
											Tests Executed
										</Typography>
									</Box>
									<Box>
										<Typography variant="h3" color="#2563EB" textAlign="center">
											99.9%
										</Typography>
										<Typography
											variant="body2"
											color={color.gray}
											textAlign="center"
										>
											Uptime
										</Typography>
									</Box>
									<Box>
										<Typography variant="h3" color="#16A34A" textAlign="center">
											24/7
										</Typography>
										<Typography
											variant="body2"
											color={color.gray}
											textAlign="center"
										>
											Support
										</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item size={{ xs: 12, md: 6 }}>
								<Grid container spacing={2}>
									<Grid item size={{ xs: 6 }}>
										<Box
											sx={{
												p: 2,
												bgcolor: color.white,
												borderRadius: 3,
											}}
										>
											<CardMedia
												component="img"
												image="/images/company1.png"
												sx={{
													width: "100%",
													height: "6rem",
													objectFit: "contain",
												}}
											/>
										</Box>
									</Grid>
									<Grid item size={{ xs: 6 }}>
										<Box
											sx={{
												p: 2,
												bgcolor: color.white,
												borderRadius: 3,
											}}
										>
											<CardMedia
												component="img"
												image="/images/company2.png"
												sx={{
													width: "100%",
													height: "6rem",
													objectFit: "contain",
												}}
											/>
										</Box>
									</Grid>
									<Grid item size={{ xs: 6 }}>
										<Box
											sx={{
												p: 2,
												bgcolor: color.white,
												borderRadius: 3,
											}}
										>
											<CardMedia
												component="img"
												image="/images/company3.png"
												sx={{
													width: "100%",
													height: "6rem",
													objectFit: "contain",
												}}
											/>
										</Box>
									</Grid>
									<Grid item size={{ xs: 6 }}>
										<Box
											sx={{
												p: 2,
												bgcolor: color.white,
												borderRadius: 3,
											}}
										>
											<CardMedia
												component="img"
												image="/images/company4.png"
												sx={{
													width: "100%",
													height: "6rem",
													objectFit: "contain",
												}}
											/>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Box>
			{/* ========== Simple, Transparent Pricing ========== */}
			<Box py="80px" id="pricing">
				<Box className="container" textAlign="center">
					{/* Headline */}
					<Typography variant="h2" color={color.black} mb={3}>
						Built for Fast-Moving Tech Teams. Free for Early Access.
					</Typography>

					{/* Subheadline */}
					<Typography
						variant="h6"
						fontWeight={400}
						color={color.gray}
						maxWidth={{ xs: "100%", md: "47rem" }}
						mx="auto"
						mb={4}
					>
						Join the Founding Teams Program and get:
					</Typography>

					{/* Checklist items */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
							alignItems: "center",
							mb: 4,
						}}
					>
						{[
							"✅ Free access during beta",
							"🧪 Personalized launch audit",
							"🚀 Priority onboarding",
							"💸 Lifetime discount when we go live",
						].map((item, index) => (
							<Typography
								key={index}
								variant="subtitle1"
								color={color.black}
								fontWeight={500}
							>
								{item}
							</Typography>
						))}
					</Box>

					{/* CTA Button */}
					<a href="#emailForm">
						<PrimaryButton
							content="Request Early Access"
							bgcolor={color.primary}
							color={color.white}
							sx={{ px: 4, py: 1.5, fontSize: "1.1rem", fontWeight: 600 }}
						/>
					</a>
					{/* Subtext */}
					<Typography variant="subtitle2" color={color.gray} mt={2} fontStyle="italic">
						Limited to the first 100 teams — secure your spot
					</Typography>
				</Box>
			</Box>

			{/* ========== Frequently Asked Questions ========== */}
			<Box py="80px">
				<Box className="container">
					<Typography variant="h2" color={color.black} textAlign="center" mb={3}>
						Frequently Asked Questions
					</Typography>
					<Typography
						variant="h6"
						fontWeight={400}
						color={color.gray}
						maxWidth={{ xs: "100%", md: "47rem" }}
						mx="auto"
						mb="4rem"
						textAlign="center"
					>
						Get answers to common questions about LaunchOKR and how it can transform
						your product launch process.
					</Typography>
					<Box
						sx={{
							maxWidth: { xs: "100%", md: 850 },
							mx: "auto",
						}}
					>
						{[
							{
								question:
									"How does LaunchOKR differ from other project management tools?",
								answer: "LaunchOKR is specifically designed for product launches, not general project management. We provide launch-specific templates, automated go/no-go decision frameworks, cross-team dependency tracking, and post-launch monitoring—all tailored for the unique challenges of product releases.",
							},
							{
								question: "Can LaunchOKR integrate with our existing tools?",
								answer: "Yes! LaunchOKR integrates with popular tools including Slack, Microsoft Teams, Jira, Asana, GitHub, GitLab, and many more. We also provide REST APIs for custom integrations and webhook support for real-time data sync.",
							},
							{
								question: "How quickly can we get started with LaunchOKR?",
								answer: "Most teams are up and running within 24 hours. Our onboarding includes pre-built templates, guided setup, and data import from existing tools. Early access customers receive priority onboarding with dedicated support.",
							},
							{
								question: "Is LaunchOKR suitable for small teams?",
								answer: "Absolutely! Our Starter plan is designed for teams of 5 or fewer, and even small teams benefit greatly from structured launch processes. Many startups use LaunchOKR to establish professional launch practices from day one.",
							},
							{
								question: "What kind of support do you provide?",
								answer: "We provide 24/7 support via chat and email, comprehensive documentation, video tutorials, and regular webinars. Professional and Enterprise customers get priority support and dedicated success managers.",
							},
							{
								question: "How secure is our data in LaunchOKR?",
								answer: "Security is our top priority. We're SOC 2 Type II compliant, use 256-bit encryption, provide SSO integration, role-based access controls, and regular security audits. Enterprise customers can also opt for on-premise deployment.",
							},
						].map((item, index) => (
							<Accordion
								key={index}
								sx={{
									bgcolor: "#F9FAFB",
									px: 1,
									py: 1,
									mb: 3,
									boxShadow: 0,
									position: "inherit",
								}}
							>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel1-content"
									id="panel1-header"
								>
									<Typography
										component="span"
										fontWeight={600}
										color={color.black}
										fontSize={20}
									>
										{item.question}
									</Typography>
								</AccordionSummary>
								<AccordionDetails
									sx={{
										color: color.gray,
										fontSize: 16,
									}}
								>
									<Typography variant="subtitle2" color={color.gray}>
										{item.answer}
									</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</Box>
				</Box>
			</Box>
			{/* ========== Ready to Transform Your Launch Process? ========== */}
			<Box
				id="emailForm"
				sx={{
					py: "80px",
					background: "linear-gradient(to right, #9333ea, #2563eb)",
				}}
			>
				<Box className="container">
					<Typography variant="h2" color={color.white} textAlign="center" mb={3}>
						Ready to Transform Your Launch Process?
					</Typography>
					<Typography
						variant="h6"
						fontWeight={400}
						color={color.white}
						maxWidth={{ xs: "100%", md: "48rem" }}
						mx="auto"
						mb="4rem"
						textAlign="center"
					>
						Join the hundreds of teams who have already revolutionized their product
						launches with LaunchOKR. Get early access and start your journey to
						confident, successful releases.
					</Typography>
					<Box
						component="form"
						action="https://formspree.io/f/xjkakvgy"
						method="POST"
						sx={{
							maxWidth: { xs: "100%", md: "48rem" },
							mx: "auto",
						}}
					>
						<Grid container spacing={1} justifyContent="center" alignItems="center">
							<Grid item size={{ xs: 12, sm: 7 }}>
								<FormInput
									placeholder="Enter your work email"
									name="email"
									mb={0}
									bgcolor={color.white}
									colors={color.black}
								/>
							</Grid>
							<Grid item size={{ xs: 12, sm: 3.5 }}>
								<a href="#emailForm">
									<PrimaryButton
										type="submit"
										fullWidth={true}
										content="Get Early Access"
										color={color.primary}
										bgcolor={color.white}
										p="14px 0px"
									/>
								</a>
							</Grid>
						</Grid>
						<Typography variant="body2" color={color.white} textAlign="center" mt={2}>
							14-day free trial • No credit card required • Setup in minutes
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", sm: "row" },
								justifyContent: "space-between",
								mt: 3,
							}}
						>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: 1,
									color: color.white,
									fontWeight: 600,
									p: 1,
									px: 2,
									width: "fit-content",
									borderRadius: 18,
									mx: { xs: "auto", sm: 0 },
								}}
							>
								<FaRocket style={{ color: color.white, fontSize: 28 }} />

								<Typography variant="body1" fontWeight={500}>
									Launch with confidence
								</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: 1,
									color: color.white,
									fontWeight: 600,
									p: 1,
									px: 2,
									width: "fit-content",
									borderRadius: 18,
									mx: { xs: "auto", sm: 0 },
								}}
							>
								<Groups style={{ color: color.white, fontSize: "32px" }} />
								<Typography variant="body1" fontWeight={500}>
									Align your entire team
								</Typography>
							</Box>

							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: 1,
									color: color.white,
									fontWeight: 600,
									mx: { xs: "auto", sm: 0 },
									p: 1,
									px: 2,
									width: "fit-content",
									borderRadius: 18,
								}}
							>
								<FaChartLine style={{ color: color.white }} fontSize="22px" />
								<Typography variant="body1" fontWeight={500}>
									Track progress in real-time
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Fragment>
	);
};

export default LandingPage;
