import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 5,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          paddingTop: 40,
        },
      },
      defaultProps: {
        fontWeight: 700,
      },
    },
    MuiTypography: {
      styleOverrides: {
        fontFamily: "revert-layer",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          textTransform: "capitalize",
        },
        text: {
          textTransform: "capitalize",
        },
      },
    },
  },

  palette: {
    mode: "light",
    primary: {
      main: "#E15517",
      contrastText: "#fff",
    },

    secondary: {
      main: "#4D4D4D",
      contrastText: "#fff",
    },
  },
});

export default theme;
