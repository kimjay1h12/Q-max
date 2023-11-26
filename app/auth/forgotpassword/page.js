"use client";
import React, { useState } from "react";
import {
  Button,
  ButtonBase,
  Checkbox,
  Grid,
  Hidden,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AuthLayout from "@/layouts.js/AuthLayout";

import { makeStyles } from "@mui/styles";
import Visibility from "@mui/icons-material/Visibility";
const useStyles = makeStyles({
  logo: {
    height: 50,
    width: 120,
  },
  center: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    height: "70vh",
    justifyContent: "center",
    // width: "100%",
    // width: 300,
    ["@media (min-width : 1200px)"]: {
      width: 350,
    },
  },
});
function Fogottenpassword() {
  const classes = useStyles();
  const [steps, setSteps] = useState(0);
  return (
    <AuthLayout>
      <form>
        <div className={classes.right}>
          <img src="/img/logo.png" className={classes.logo}></img>

          <div className={classes.center}>
            <Typography variant="h4" gutterBottom>
              Forget Password
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: "#707070", marginBottom: 5 }}
            >
              simply dummy text of the printing and typesetting
            </Typography>
            {steps === 0 ? (
              <div>
                <TextField fullWidth size="small" label="Email"></TextField>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    setSteps(1);
                  }}
                  sx={{ marginTop: 6 }}
                >
                  Continue
                </Button>
              </div>
            ) : (
              <div>
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Visibility />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  label="Password"
                  fullWidth
                  sx={{ marginBottom: 3 }}
                />
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Visibility />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  label="Password"
                  fullWidth
                />
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    setSteps(1);
                  }}
                  sx={{ marginTop: 6 }}
                >
                  Continue
                </Button>
              </div>
            )}
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Fogottenpassword;
