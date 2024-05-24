import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const LeftFieldContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  borderRadius: 1,
  flexWrap: "wrap",
  border: "1px solid grey",
  width: 350,
  minWidth: 350,
  display: "flex",
  flexDirection: "row",
  alignContent: "start",
  gap: "10px",
  padding: "12px",
  boxSizing: "border-box",
  overflowY: "auto",
  overflowX: "hidden",

}));

export default LeftFieldContainer;
