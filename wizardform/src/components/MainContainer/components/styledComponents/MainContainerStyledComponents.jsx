import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainContainerStyledComponents = styled(Box)(({ theme }) => ({
  height: 600,
  display: "flex",
  flexDirection: "row",
  gap: 4,
  marginInline: 20,
  marginTop: 30,
  marginBottom: 30,
  justifyContent: "flex-start",
  maxHeight: "fit-content",
}));

export default MainContainerStyledComponents;
