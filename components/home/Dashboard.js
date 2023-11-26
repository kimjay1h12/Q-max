"use client";
import MainLayout from "@/layouts.js/MainLayout";
import {
  Typography,
  Grid,
  Paper,
  Divider,
  Avatar,
  ButtonBase,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import Wrapper from "../custom/Wrapper";
import React from "react";
import UpcomingEvent from "../dashboard/UpcomingEvent";

const DashboardRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(6),
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              <Typography gutterBottom>Good Morning Kim Jay</Typography>
              <Paper sx={{ background: "#f7f7f7" }}>
                <Wrapper p={2}>
                  <Typography fontWeight={600}>
                    Internal Communication
                  </Typography>
                </Wrapper>
                <Divider />
                <div>
                  <UpcomingEvent />
                  <UpcomingEvent />
                </div>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </DashboardRoot>
    </MainLayout>
  );
}

export default Dashboard;
