"use client";
import { color } from "@/components/colors/page";
import Wrapper from "@/components/custom/Wrapper";
import AuthLayout from "@/layouts.js/AuthLayout";
import { Visibility } from "@mui/icons-material";
import { useRouter } from "next/navigation";

import VisibilityIcon from "@mui/icons-material/Visibility";
// import { CheckBox } from "@mui/icons-material";
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
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles({
  logo: {
    height: 50,
    width: 120,
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
function Login() {
  const router = useRouter();
  const classes = useStyles();
  return (
    <AuthLayout>
      <form>
        <div className={classes.right}>
          <img src="/img/logo.png" className={classes.logo}></img>
          <div className={classes.center}>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ color: "#707070", marginBottom: 5 }}
            >
              simply dummy text of the printing and typesetting
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Email/Payrolid"
              placeholder="Email/Payrolid"
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
            <Wrapper mt={30} mb={50}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox sx={{ marginLeft: "-8%" }} />
                <Typography variant="body2" color="grey">
                  Remember me
                </Typography>
              </div>
              <ButtonBase
                onClick={() => {
                  router.push("/auth/forgotpassword");
                }}
              >
                <Typography color="#2685CA" variant="body2">
                  Forgot Password
                </Typography>
              </ButtonBase>
            </Wrapper>
            <Button variant="contained">Sign In</Button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
