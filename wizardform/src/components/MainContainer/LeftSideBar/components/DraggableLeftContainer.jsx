import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";

import Draggable from "../components/common-styled-components/Draggable";


const DraggableLeftContainer = (props) => {

  return (
      <Draggable
        id={props.id}
        label={props.item.label}
        inputType={props.item.inputType}
        icon={props.item.icon}
        comp={props.item.comp}
      >
        <SvgIcon
          component={props.item.icon}
          sx={{
            color: "gray",
            fontSize: 50,
            height: "60%",
          }}
        />
        <Typography
          variant="p"
          component="p"
          sx={{
            color: "gray",
          }}
        >
          {props.item.label}
        </Typography>
      </Draggable>
  );
};

export default DraggableLeftContainer;
