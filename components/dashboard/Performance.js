"use client";
import PropTypes from "prop-types";

import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";

// import Wrapper from "@/components.js/";
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
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};
function Performance() {
  const classes = useStyles();
  return (
    <div style={{ padding: 10 }}>
      <Container>
        <Typography fontWeight={600}>1 task completed out of 3</Typography>
        <div style={{ marginTop: 20 }}>
          <LinearProgress value={50} variant="determinate" />

          <Wrapper mt={26} justifyContent="space-between">
            <CircularProgressWithLabel
              value={100}
              size={100}
              variant="determinate"
              style={{ color: "#659D7F" }}
            />
            <CircularProgressWithLabel
              value={40}
              size={100}
              variant="determinate"
              style={{ color: "#E4C65B" }}
            />
            <CircularProgressWithLabel
              value={20}
              size={100}
              variant="determinate"
              style={{ color: "#E87D7D" }}
            />
          </Wrapper>
        </div>
      </Container>
    </div>
  );
}

export default Performance;
