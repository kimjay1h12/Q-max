"use client";
// import { CheckBox } from "@mui/icons-material";
import { Grid, Hidden } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  img: {
    minHeight: "100vh",
    // height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  right: {
    padding: 10,
    marginTop: 40,
    ["@media (min-width : 1200px)"]: {
      paddingLeft: 70,
    },
  },
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
function AuthLayout({ children }) {
  const classes = useStyles();
  return (
    <Grid
      container
      style={{ height: "100vh", maxWidth: "100%", overflow: "hidden" }}
    >
      {" "}
      <Hidden smDown>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Add your image here */}
          <img
            src="/img/auth.png"
            alt="AuthLayout Image"
            style={{ maxWidth: "100%", maxHeight: "100%", height: "100%" }}
          />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={6}>
        <div className={classes.right}>
          {/* Add your AuthLayout form here */}
          {children}
        </div>
      </Grid>
    </Grid>
  );
}

export default AuthLayout;
