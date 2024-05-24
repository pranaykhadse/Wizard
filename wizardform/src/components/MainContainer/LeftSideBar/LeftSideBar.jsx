import { Box, Grid, SvgIcon, Typography } from "@mui/material";
import React from "react";

import LeftFieldContainer from "./components/common-styled-components/LeftFieldContainer";
import DraggableLeftContainer from "./components/DraggableLeftContainer";
import fieldElement from "../../../GlobalVariables/fieldElement";


const LeftSideBar = () => {
  return (
    <LeftFieldContainer>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          {fieldElement.map((item, i) => (
            <Grid item xs={6} key={i}>
              <DraggableLeftContainer item={item} id={i} />
            </Grid>
          ))}
        </Grid>
        
      </Box>
    </LeftFieldContainer>
  );
};

export default LeftSideBar;
