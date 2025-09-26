import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { color } from "../../lib/color";
import { FaRocket } from "react-icons/fa";
import { GitHub, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
	return (
		<Box
			sx={{
				py: "64px",
				bgcolor: color.black,
			}}
		>
			<Box className="container">
				<Grid container spacing={5}>
					<Grid item size={{ xs: 12, md: 5 }}>
						{/* ============ Logo ============ */}
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								flexWrap: "wrap",
								gap: 1,
								mb: 3,
							}}
						>
							<IconButton
								sx={{
									p: 1.2,
									background: "linear-gradient(to right, #9333ea, #2563eb)",
									borderRadius: 3,
									color: color.white,
								}}
							>
								<FaRocket style={{ fontSize: 20 }} />
							</IconButton>
							<Typography variant="h5" color={color.white}>
								LaunchOKR
							</Typography>
						</Box>
						<Typography variant="subtitle2" color={color.lightGray} mb={3}>
							Built by Mtest Labs, LaunchOKR helps fast-moving teams plan, build,
							test, and ship products with confidence. Trusted by QA leaders
							worldwide.
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							{[
								{
									icon: <Twitter sx={{ fontSize: 18 }} />,
								},
								{
									icon: <LinkedIn sx={{ fontSize: 18 }} />,
								},
								{
									icon: <GitHub sx={{ fontSize: 18 }} />,
								},
								{
									icon: <YouTube sx={{ fontSize: 18 }} />,
								},
							].map((item, index) => (
								<Box
									key={index}
									component="a"
									href="#"
									sx={{
										width: "2.5rem",
										height: "2.5rem",
										borderRadius: "0.5rem",
										bgcolor: "#1F2937",
										color: color.white,
										display: "flex",
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										ml: index == 0 ? 0 : 2,
										"&:hover": {
											bgcolor: color.primary,
										},
									}}
								>
									{item.icon}
								</Box>
							))}
						</Box>
					</Grid>
					<Grid item size={{ xs: 12, md: 2.3 }}>
						<Typography variant="subtitle2" fontWeight={600} color={color.white} mb={2}>
							Product
						</Typography>
						{[
							{
								tag: "Product",
							},
							{
								tag: "Pricing",
							},
							{
								tag: "Integrations",
							},
							{
								tag: "Security",
							},
							{
								tag: "Roadmap",
							},
						].map((item, index) => (
							<a href="#" key={index}>
								<Typography
									variant="subtitle2"
									sx={{
										color: color.lightGray,
										mb: 1,
										"&:hover": {
											color: color.white,
										},
									}}
								>
									{item.tag}
								</Typography>
							</a>
						))}
					</Grid>
					<Grid item size={{ xs: 12, md: 2.3 }}>
						<Typography variant="subtitle2" fontWeight={600} color={color.white} mb={2}>
							Resources
						</Typography>
						{[
							{
								tag: "Documentation",
							},
							{
								tag: "API Reference",
							},
							{
								tag: "Templates",
							},
							{
								tag: "Blog",
							},
							{
								tag: "Webinars",
							},
						].map((item, index) => (
							<a href="#" key={index}>
								<Typography
									variant="subtitle2"
									sx={{
										color: color.lightGray,
										mb: 1,
										"&:hover": {
											color: color.white,
										},
									}}
								>
									{item.tag}
								</Typography>
							</a>
						))}
					</Grid>
					<Grid item size={{ xs: 12, md: 2.3 }}>
						<Typography variant="subtitle2" fontWeight={600} color={color.white} mb={2}>
							Company
						</Typography>
						{[
							{
								tag: "About Us",
							},
							{
								tag: "Careers",
							},
							{
								tag: "Contact",
							},
							{
								tag: "Privacy Policy",
							},
							{
								tag: "Terms of Service",
							},
						].map((item, index) => (
							<a href="#" key={index}>
								<Typography
									variant="subtitle2"
									sx={{
										color: color.lightGray,
										mb: 1,
										"&:hover": {
											color: color.white,
										},
									}}
								>
									{item.tag}
								</Typography>
							</a>
						))}
					</Grid>
				</Grid>
				<Box
					sx={{
						pt: 4,
						mt: "48px",
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						justifyContent: "space-between",
						alignItems: "center",
						borderTop: `1px solid #2d3748 `,
					}}
				>
					<Typography variant="body2" color={color.lightGray}>
						© 2024 LaunchOKR by Mtest Labs. All rights reserved.
					</Typography>
					<Typography variant="body2" color={color.lightGray}>
						Built with ❤️ for product teams
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
