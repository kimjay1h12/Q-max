"use client";
import { color } from "@/components/colors/page";
import Wrapper from "@/components/custom/Wrapper";
import AuthLayout from "@/layouts.js/AuthLayout";
import { Visibility } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
import { styled, useTheme } from "@mui/system";
import React from "react";

const LoginWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "70vh",
  justifyContent: "center",
  [theme.breakpoints.up("lg")]: {
    width: 350,
  },
}));

const LogoImage = styled("img")({
  height: 50,
  width: 120,
});

const RightContainer = styled("div")(({ theme }) => ({
  padding: 10,
  marginTop: 40,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 70,
  },
}));

const CheckboxWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});

const ForgotPasswordLink = styled(ButtonBase)({
  marginLeft: "-8%",
});

function Login() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <AuthLayout>
      <form>
        <RightContainer>
          <LogoImage src="/img/logo.png" />
          <LoginWrapper>
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
              <CheckboxWrapper>
                <Checkbox sx={{ marginLeft: "-8%" }} />
                <Typography variant="body2" color="grey">
                  Remember me
                </Typography>
              </CheckboxWrapper>
              <ForgotPasswordLink
                onClick={() => {
                  router.push("/auth/forgotpassword");
                }}
              >
                <Typography color="#2685CA" variant="body2">
                  Forgot Password
                </Typography>
              </ForgotPasswordLink>
            </Wrapper>
            <Button variant="contained">Sign In</Button>
          </LoginWrapper>
        </RightContainer>
      </form>
    </AuthLayout>
  );
}

export default Login;
