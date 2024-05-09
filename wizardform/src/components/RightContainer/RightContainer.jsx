import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const RightContainer = () => {
  return (
    <Box
      display="flex"
      gap={0}
      p={4}
      flexDirection="row"
      sx={{
        flexGrow: 1,
        height: "100%",
        overflowX: "auto",
        borderRadius: 1,
        border: "1px solid grey",
      }}
    >
      <Box
        width={120}
        height="fit-content"
        display="flex"
        flexDirection="column"
        px={2}
        py={1}
        gap={1}
        sx={{
          flexGrow: 1,
          overflowX: "auto",
          borderRadius: 1,
          border: "1px solid grey",
        }}
      >
        <Typography variant="p" component="p" pr={1}>
          Name
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiInputBase-input": {
              padding: "5px",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default RightContainer;
