import React from "react";
import { Typography, TextField } from "@mui/material";

export default function BookField({ fieldname, fieldValue, setField }) {
  return (
    <>
      <Typography variant="h7" fontWeight="bold">
        {fieldname}
      </Typography>
      <TextField
        autoFocus
        id="outlined-size-small"
        size="small"
        value={fieldValue}
        onChange={(e) => setField(e.target.value)}
      />
    </>
  );
}
