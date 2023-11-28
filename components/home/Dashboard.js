"use client";
import MainLayout from "@/layouts.js/MainLayout";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import Wrapper from "../custom/Wrapper";
import InternalComunication from "../dashboard/InternalComunication";
import Performance from "../dashboard/Performance";
import UpcommingEvents from "../dashboard/UpcommingEvents";
import Ddocument from "../dashboard/Ddocument";

const DashboardRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(-3),
    padding: theme.spacing(6),
  },
}));

const DashboardBox = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  background: "#fff",
}));

function Dashboard() {
  const theme = useTheme();
  return (
    <MainLayout active={"dashboard"}>
      <DashboardRoot>
        <Grid container spacing={{ xs: 2, md: 6 }}>
          <Grid item xs={12} md={7}>
            <Typography
              fontWeight={600}
              variant="h6"
              style={{ marginBottom: 8 }}
            >
              Good Morning Kim Jay
            </Typography>
            <div>
              <Paper style={{ background: "#f7f7f7" }}>
                <Wrapper p={15} bg={"#fff"}>
                  <Typography fontWeight={600}>
                    Internal Communication
                  </Typography>
                </Wrapper>
                <Divider />
                <div>
                  <InternalComunication />
                  <InternalComunication />
                </div>
              </Paper>
              <Paper style={{ background: "#f7f7f7", marginTop: 30 }}>
                <Wrapper p={15} bg={"#fff"}>
                  <Typography fontWeight={600}>
                    Internal Communication
                  </Typography>
                </Wrapper>
                <Divider />
                <div>
                  <UpcommingEvents />
                  <UpcommingEvents />
                  {/* <UpcommingEvents /> */}
                </div>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper style={{ background: "#ffff", marginTop: 35 }}>
              <Wrapper p={15} bg={"#fff"}>
                <Typography fontWeight={600}>Performance Managment</Typography>
                <Typography>Show: This week</Typography>
              </Wrapper>
              <Divider />
              <div>
                <Performance />
              </div>
            </Paper>
            <Paper style={{ background: "#ffff", marginTop: 35 }}>
              <Wrapper p={15} bg={"#fff"}>
                <Typography fontWeight={600}>Leave Managment</Typography>
                <Typography>Show: This month</Typography>
              </Wrapper>
              <Divider />
              <div style={{ minHeight: 150 }}>{/* <Performance /> */}</div>
            </Paper>
            <Paper style={{ background: "#f7f7f7", marginTop: 35 }}>
              <Wrapper p={15} bg={"#fff"}>
                <Typography fontWeight={600}>Departmental Documents</Typography>
                {/* <Typography>Show: This month</Typography> */}
              </Wrapper>
              <Divider style={{ marginTop: 0 }} />
              <div style={{ minHeight: 150 }}>
                <Ddocument />
                <Ddocument />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </DashboardRoot>
    </MainLayout>
  );
}

export default Dashboard;
