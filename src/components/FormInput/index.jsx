import { TextField } from "@mui/material";
import { color } from "../../lib/color";

export default function FormInput({
	name,
	placeholder,
	mb = 3,
	bgcolor = "#ffffff33",
	colors = color.white,
}) {
	return (
		<TextField
			fullWidth
			variant="outlined"
			name={name}
			placeholder={placeholder}
			sx={{
				mb: mb,
				"& .MuiOutlinedInput-root": {
					bgcolor: bgcolor,
					color: colors,
					borderRadius: 2,
					"& fieldset": {
						border: `1px solid ${color.white}`,
					},
					"&:hover fieldset": {
						border: `1px solid ${color.white}`,
					},
					"&.Mui-focused fieldset": {
						border: `2px solid ${color.white}`,
					},
				},
				input: {
					color: colors,
				},
				"& .MuiInputLabel-root": {
					color: colors,
				},
			}}
		/>
	);
}
