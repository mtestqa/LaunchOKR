import React, { useState } from "react";
import {
	Box,
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { FaRocket } from "react-icons/fa";
import { color } from "../../lib/color";
import PrimaryButton from "../PrimaryButton";
import { Menu } from "@mui/icons-material";

const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width:1023px)");

	const navLinks = [{ path: "#pricing", label: "Pricing" }];

	return (
		<Box
			sx={{
				py: 2,
			}}
		>
			<div className="container">
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						{/* ============ Logo ============ */}
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								flexWrap: "wrap",
								gap: 1,
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
							<Typography variant="h5">LaunchOKR</Typography>
						</Box>
						{/* ============ navigation links ============ */}
						{!isMobile && (
							<Box>
								{navLinks.map((item, index) => (
									<Typography
										key={index}
										component="a"
										href={item.path}
										sx={{
											display: "inline-block",
											color: color.gray,
											ml: 4,
											fontWeight: 500,
											textDecoration: "none",
											"&:hover": {
												color: color.primary,
											},
										}}
									>
										{item.label}
									</Typography>
								))}
							</Box>
						)}
					</Box>
					{/* ============ navigation Btn ============ */}
					<Box>
						{!isMobile ? (
							<>
								<a href="#emailForm">
									<PrimaryButton content="Get Early Access" />
								</a>
							</>
						) : (
							<IconButton onClick={() => setDrawerOpen(true)}>
								<Menu sx={{ color: color.black }} />
							</IconButton>
						)}
					</Box>
				</Box>
			</div>
			{/* ===== Mobile Drawer ===== */}
			<Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
				<Box sx={{ width: 250, p: 2 }}>
					<List>
						{navLinks.map((item, index) => (
							<ListItem
								button
								key={index}
								component="a"
								href={item.path}
								onClick={() => setDrawerOpen(false)}
							>
								<ListItemText primary={item.label} />
							</ListItem>
						))}
					</List>
					<Box sx={{ mt: 2 }}>
						<a href="#emailForm">
							<PrimaryButton content="Get Early Access" fullWidth />
						</a>
					</Box>
				</Box>
			</Drawer>
		</Box>
	);
};

export default Header;
