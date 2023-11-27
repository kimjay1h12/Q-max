"use client";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, ButtonBase, TextField } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LogoutIcon from "@mui/icons-material/Logout";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import * as React from "react";
// import PersonIcon from "@mui/icons-material/Person";
import Wrapper from "@/components/custom/Wrapper";
import Settings from "@mui/icons-material/Settings";
import Head from "next/head";
const drawerWidth = 270;
const routes = [
  {
    label: "My Profile",
    path: "/",
    icon: <PersonIcon />,
    active: "profile",
  },
  {
    label: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
    active: "dashboard",
  },
  {
    label: "Modules",
    path: "/dashboard/orders",
    icon: <LayersIcon />,
    active: "modules",
  },
  {
    label: "Reporting line",
    path: "/dashboard/products",
    icon: <TextSnippetIcon />,
    active: "report",
  },
  {
    label: "Settings",
    path: "/dashboard/products",
    icon: <Settings />,
    active: "settings",
  },

  // {
  //   label: "Marketing",
  //   path: "/",
  //   icon: <CampaignIcon />,
  // },
];
const modulenav = [
  {
    label: "Performance",
    path: "/dashboard/products",
    // icon: <TextSnippetIcon />,
    active: "performace",
  },
  {
    label: "Leave Management",
    path: "/dashboard/products",
    // icon: <TextSnippetIcon />,
    active: "performace",
  },
  {
    label: "Survey",
    path: "/dashboard/products",
    // icon: <TextSnippetIcon />,
    active: "performace",
  },
  {
    label: "360 Assessment",
    path: "/dashboard/products",
    // icon: <TextSnippetIcon />,
    active: "performace",
  },
  {
    label: "Succession Plan",
    path: "/dashboard/products",
    // icon: <TextSnippetIcon />,
    active: "performace",
  },
  {
    label: "Loan / Payroll",
    path: "/dashboard/products",
    // icon: <TextSnippetIcon />,
    active: "performace",
  },
  {
    label: "Training",
    path: "/dashboard/products",
    // icon: <TextSnippetIcon />,
    active: "performace",
  },
];
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  background: "#fff",

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MainLayout({
  children,
  active,
  title,
  description,
  image,
}) {
  <Head>
    <title>{title || "q-max"}</title>
    <meta property="og:title" content={title || "Home | credo"} />
    <meta property="og:image" content={image || "/img/logo.png"} />
    <meta name="theme-color" content="#000" />
    <link rel="shortcut icon" href="/img/logo.png" />
    <meta name="description" content={description || "any"} />
    <meta property="og:description" content={description || "any"} />
  </Head>;
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [moduleopen, setModuleopen] = React.useState(false);
  return (
    <Box sx={{ display: "flex", boxShadow: 0 }}>
      <CssBaseline />
      <AppBar
        sx={{
          background: "#fff",
          boxShadow: 1,
          color: "#000",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <TextField
            placeholder="Search"
            size="small"
            sx={{ background: "transparent", border: "none" }}
          />
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <ButtonBase
              sx={{ background: "#f1f1f1", borderRadius: 30, padding: 1 }}
            >
              <NotificationsNoneIcon />
            </ButtonBase>
            <Avatar />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer sx={{ boxShadow: 1 }} variant="permanent" open={open}>
        <DrawerHeader>
          <Wrapper>
            <img
              src={"/img/logo.png"}
              style={{
                height: 40,
                width: 100,
                objectFit: "contain",
                position: "absolute",
                left: 10,
              }}
            />
            <IconButton
              style={{ display: "flex", justifyContent: "flex-end" }}
              onClick={handleDrawerClose}
            >
              {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
            </IconButton>
          </Wrapper>
        </DrawerHeader>

        <List>
          <Wrapper justifyContent="flex-start" gap={15} p={!open ? 10 : 15}>
            <Avatar />
            <div>
              <Typography variant="body2" fontWeight={600}>
                Adeyemi Adetayo
              </Typography>
              <Typography variant="caption">adetayo@gmail.com</Typography>
            </div>
          </Wrapper>
          <Divider />

          {routes.map((text, index) =>
            text.label === "Modules" ? (
              <div>
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    onClick={() => {
                      setModuleopen(!moduleopen);
                    }}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      marginBottom: 1,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: active === text.active && "#E15517",
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text.label}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: active === text.active && "#E15517",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                {moduleopen &&
                  open &&
                  modulenav?.map((cur, i) => (
                    <ListItem
                      key={i}
                      disablePadding
                      sx={{ display: "block", marginLeft: 5 }}
                    >
                      <ListItemButton
                        onClick={() => {
                          setModuleopen(!moduleopen);
                        }}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 1,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            color: active === cur.active && "#E15517",
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          <RadioButtonUncheckedIcon sx={{ fontSize: 10 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={cur.label}
                          sx={{
                            opacity: open ? 1 : 0,
                            color: active === cur.active && "#E15517",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
              </div>
            ) : (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => {
                    router.push(text.path);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    marginBottom: 1,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: active === text.active && "#E15517",
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.label}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: active === text.active && "#E15517",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
          <Divider />
          <ListItemButton
            // onClick={() => {
            //   router.push(text.path);
            // }}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              marginBottom: 1,
            }}
          >
            <ListItemIcon
              sx={{
                // color: active === text.active && "#E15517",
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LogoutIcon />
              {/* {text.icon} */}
            </ListItemIcon>
            <ListItemText
              primary={"Log Out"}
              sx={{
                opacity: open ? 1 : 0,
                color: "red",
                // color: active === text.active && "#E15517",
              }}
            />
          </ListItemButton>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          // height: "100%",
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
          // flex: 1,
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
