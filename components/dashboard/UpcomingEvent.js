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
const useStyles = makeStyles({
  root: {
    padding: 15,
    ["@media (min-width : 1200px)"]: {
      padding: 50,
    },
  },
  box: {
    padding: 15,
    background: "#fff",
  },
});
function UpcomingEvent() {
  const classes = useStyles();
  return (
    <div style={{ padding: 15 }}>
      <div className={classes.box}>
        <Typography fontWeight={600}>Invite to office meet-up</Typography>
        <div style={{ marginTop: 25 }}>
          <Typography>
            Word publishing and graphic design, Lorem ipsum is a placeholder
            text commonly
          </Typography>
          <Wrapper justifyContent="" gap={10}>
            <Typography color="grey">Date :</Typography>
            <Typography>April 18, 2022</Typography>
          </Wrapper>
          <Wrapper mt={10}>
            <Wrapper justifyContent="" gap={10}>
              <Avatar />
              <Typography fontWeight={500}>Rebecca Moore</Typography>
            </Wrapper>

            <ButtonBase sx={{ color: "#2685CA" }}>
              <Typography variant="caption" sx={{ color: "#2685CA" }}>
                Read More
              </Typography>
            </ButtonBase>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvent;
