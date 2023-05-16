import Button from '@mui/material/Button';
import React from "react";

export default function AddButton({ButtonName,type}) {
  return (
      <Button type={type} variant="contained" color="success">
        {ButtonName}
      </Button>
  );
}