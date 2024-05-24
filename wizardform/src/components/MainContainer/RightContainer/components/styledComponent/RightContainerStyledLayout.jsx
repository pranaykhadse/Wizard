import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const RightContainerStyledLayout = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  display: "flex",
  gap: 18,
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 16,
  paddingBottom: 12,
  flexDirection: "column",
  flexGrow: 1,
  height: "100%",
  borderRadius: 1,
  border: theme.border,
  overflowY: "auto",
  overflowX: "hidden",

}));

export default RightContainerStyledLayout;
