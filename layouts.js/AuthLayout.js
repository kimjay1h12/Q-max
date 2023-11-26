import { Grid, Hidden } from "@mui/material";
import { styled, useTheme } from "@mui/system";

const AuthLayoutContainer = styled(Grid)({
  height: "100vh",
  maxWidth: "100%",
  overflow: "hidden",
});

const AuthImageContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const AuthImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
  height: "100%",
});

const AuthRightContainer = styled(Grid)(({ theme }) => ({
  padding: 10,
  marginTop: 40,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 70,
  },
}));

const AuthLayout = ({ children }) => {
  const theme = useTheme();

  return (
    <AuthLayoutContainer container>
      <Hidden smDown>
        <AuthImageContainer item xs={12} sm={6}>
          <AuthImage src="/img/auth.png" alt="AuthLayout Image" />
        </AuthImageContainer>
      </Hidden>
      <AuthRightContainer item xs={12} sm={6}>
        {children}
      </AuthRightContainer>
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
