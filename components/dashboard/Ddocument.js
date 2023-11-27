import { styled } from "@mui/styles";
import React from "react";
import Wrapper from "../custom/Wrapper";
import { Typography } from "@mui/material";

function Ddocument() {
  const EventBox = styled("div")(({ theme }) => ({
    padding: theme.spacing(1.2),
    // marginBottom: theme.spacing(0.2),
  }));
  return (
    <EventBox>
      <div
        style={{
          background: "#fff",
          minHeight: 45,
          borderRadius: 10,
          padding: 15,
        }}
      >
        <Wrapper mb={0} mt={0}>
          <Wrapper gap={20} mb={0} mt={0}>
            <img
              src="/img/file.png"
              style={{ width: 50, height: 50, objectFit: "contain" }}
            />
            <div>
              <Typography gutterBottom fontWeight={600}>
                Staff handbook special
              </Typography>
              <Typography color="grey">Date: April 23, 2022</Typography>
            </div>
          </Wrapper>
          <img
            src="/img/icongrp.png"
            style={{ width: 100, height: 40, objectFit: "contain" }}
          />
        </Wrapper>
      </div>
    </EventBox>
  );
}

export default Ddocument;
