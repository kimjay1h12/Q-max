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
import { makeStyles, styled } from "@mui/styles";
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
  box: {},
});
const Container = styled("div")(({ theme }) => ({
  padding: 10,
  background: "#fff",
  borderRadius: 10,
}));
function InternalComunication() {
  const classes = useStyles();
  return (
    <div style={{ padding: 10 }}>
      <Container>
        <Typography fontWeight={600}>Invite to office meet-up</Typography>
        <div style={{ marginTop: 20 }}>
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
              <Avatar style={{ height: 30, width: 30 }} />
              <Typography fontWeight={500}>Rebecca Moore</Typography>
            </Wrapper>

            <ButtonBase sx={{ color: "#2685CA" }}>
              <Typography variant="caption" sx={{ color: "#2685CA" }}>
                Read More
              </Typography>
            </ButtonBase>
          </Wrapper>
        </div>
      </Container>
    </div>
  );
}

export default InternalComunication;
