import { Box } from "@mui/material";
import React from "react";

const LeftSideBar = () => {
  return (
    <Box
      width={260}
      display="flex"
      flexDirection="row"
      alignContent="start"
      gap={2}
      p={4}
      minWidth={260}
      sx={{
        height: "100%",
        borderRadius: 1,
        flexWrap: 'wrap',
        border: "1px solid grey",
      }}
    >
      <Box
        width={120}
        height={120}
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          overflowX: "auto",
          borderRadius: 1,
          border: "1px solid grey",
        }}
      ></Box>
      <Box
        width={120}
        height={120}
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          overflowX: "auto",
          borderRadius: 1,
          border: "1px solid grey",
        }}
      ></Box>
      <Box
        width={120}
        height={120}
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          overflowX: "auto",
          borderRadius: 1,
          border: "1px solid grey",
        }}
      ></Box>
      <Box
        width={120}
        height={120}
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          overflowX: "auto",
          borderRadius: 1,
          border: "1px solid grey",
        }}
      ></Box>
     <Box
        width={120}
        height={120}
        display="flex"
        flexDirection="column"
        sx={{
          overflowX: "auto",
          borderRadius: 1,
          border: "1px solid grey",
        }}
      ></Box>
    </Box>
  );
};

export default LeftSideBar;
