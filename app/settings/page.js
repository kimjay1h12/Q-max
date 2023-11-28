"use client";
import MainLayout from "@/layouts.js/MainLayout";
import React, { useState } from "react";
// import styled from "styled-components";
import { styled, useTheme } from "@mui/system";
import { Divider, Paper, Typography } from "@mui/material";
import Password from "@/components/settings/Password";
import Education from "@/components/settings/Education";
import Training from "@/components/settings/Training";
const routes = [
  {
    label: "Password",
    value: "password",
  },
  {
    label: "Profile",
    value: "profile",
  },
  {
    label: "Education",
    value: "education",
  },
  {
    label: "Training",
    value: "training",
  },
];
const SettingsRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(-2),
    padding: theme.spacing(5),
  },
}));
const SettingsContent = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));
const SettingsHeader = styled("div")(({ theme }) => ({
  height: 50,
  display: "flex",
  alignItems: "center",
}));

function Page() {
  const [pages, setPages] = useState("password");
  return (
    <MainLayout active={"settings"}>
      <SettingsRoot>
        <Typography mb={1} fontWeight={600} variant="h6">
          Settings
        </Typography>
        <Paper style={{ minHeight: "80vh" }}>
          <SettingsHeader>
            {routes?.map((cur, i) => (
              <div
                key={i}
                onClick={() => {
                  setPages(cur.value);
                }}
                style={{
                  width: 120,
                  height: 50,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: pages === cur.value && "#00AD5C",
                  color: pages === cur.value && "#fff",
                }}
              >
                <Typography>{cur.label}</Typography>
              </div>
            ))}
          </SettingsHeader>
          <Divider />
          <SettingsContent>
            {pages === "password" && <Password />}
            {pages === "education" && <Education />}
            {pages === "training" && <Training />}
          </SettingsContent>
        </Paper>
      </SettingsRoot>
    </MainLayout>
  );
}

export default Page;
