import TextField from "@mui/material/TextField";

export default function BasicTextFields({ value, onChange }) {

  return (
    <TextField
      id="city"
      label="City Name"
      variant="outlined"
      size="small"
      required
      value={value}
      onChange={onChange}
    />
  );

}
