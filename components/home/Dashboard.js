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
import { makeStyles } from "@mui/styles";
// import Wrapper from "@/components.js/";
import React from "react";
import Wrapper from "../custom/Wrapper";
import UpcomingEvent from "../dashboard/UpcomingEvent";
const useStyles = makeStyles({
  root: {
    padding: 50,
  },
  box: {
    padding: 15,
    background: "#fff",
  },
});
function Dashboard() {
  const classes = useStyles();
  return (
    <MainLayout active={"dashboard"}>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              <Typography gutterBottom>Good Morning Kim Jay</Typography>
              <Paper sx={{ background: "#f7f7f7" }}>
                <Wrapper p={15}>
                  <Typography fontWeight={600}>
                    Internal Comunication
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
      </div>
    </MainLayout>
  );
}

export default Dashboard;
