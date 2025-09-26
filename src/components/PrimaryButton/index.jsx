import { Button } from "@mui/material";

export default function PrimaryButton({
	ml,
	borderRadius = 2,
	p = "10px 24px",
	content,
	bgcolor,
	border,
	color,
	fullWidth,
	type,
}) {
	return (
		<Button
			fullWidth={fullWidth}
			variant="contained"
			type={type}
			sx={{
				textTransform: "inherit",
				fontSize: 16,
				ml: ml,
				p: p,
				borderRadius: borderRadius,
				fontWeight: 600,
				bgcolor: bgcolor,
				border: border,
				color: color,
			}}
		>
			{content}
		</Button>
	);
}
