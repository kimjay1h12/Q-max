import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import Wrapper from "../custom/Wrapper";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TertiaryTable from "./Education/TertiaryTable";
function Education() {
  return (
    <div>
      <Paper style={{ minHeight: 200, padding: 15 }}>
        <Wrapper mb={10}>
          <Typography
            fontWeight={600}
            variant="h6"
            style={{ color: "#707070" }}
          >
            Tertiary Secondary
          </Typography>
          <Button
            style={{ background: "#2685CA" }}
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
          >
            Add
          </Button>
        </Wrapper>
        <TertiaryTable />
      </Paper>
      <Paper style={{ minHeight: 200, padding: 15, marginTop: 20 }}>
        <Wrapper mb={10}>
          <Typography
            fontWeight={600}
            variant="h6"
            style={{ color: "#707070" }}
          >
            Secondary / College School
          </Typography>
          <Button
            style={{ background: "#2685CA" }}
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
          >
            Add
          </Button>
        </Wrapper>
        <TertiaryTable />
      </Paper>
    </div>
  );
}

export default Education;
