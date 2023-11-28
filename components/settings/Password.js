import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import Wrapper from "../custom/Wrapper";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Password() {
  return (
    <div>
      <Typography fontWeight={600}>Reset Password</Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
        }}
      >
        <div style={{ width: 400 }}>
          <TextField
            label="New Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
            style={{ marginBottom: 15 }}
          />
          <TextField
            label="Re-type New Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
            style={{ marginBottom: 15 }}
          />
          <Wrapper justifyContent="center" alignItems="center">
            <Button variant="contained" style={{ width: 150 }}>
              Reset
            </Button>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default Password;
