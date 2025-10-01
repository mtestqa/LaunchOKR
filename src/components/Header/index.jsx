import { Box, IconButton, Typography } from "@mui/material";
import { FaRocket } from "react-icons/fa";
import { color } from "../../lib/color";
import PrimaryButton from "../PrimaryButton";

const Header = () => {
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
					</Box>
					{/* ============ navigation Btn ============ */}
					<a href="#emailForm">
						<PrimaryButton
							content="Get Early Access"
							btnStyle={{
								fontSize: { xs: 12, sm: 16 },
							}}
						/>
					</a>
				</Box>
			</div>
		</Box>
	);
};

export default Header;
