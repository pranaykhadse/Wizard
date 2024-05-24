import { DragOverlay, useDndMonitor } from "@dnd-kit/core";
import React, { useState } from "react";
import { DraggableOverlay } from "./Draggable";
import { SvgIcon, Typography } from "@mui/material";

const DragOverlayWrapper = ({ droppedData }) => {
 
  return (
    <DragOverlay>
      <DraggableOverlay >
        <SvgIcon
          component={droppedData.icon}
          sx={{
            color: "gray",
            fontSize: 50,
            height: "70%",
          }}
        />
        <Typography
          variant="p"
          component="p"
          sx={{
            color: "gray",
          }}
        >
          {droppedData.label}
        </Typography>
      </DraggableOverlay>
    </DragOverlay>
  );
};

export default DragOverlayWrapper;
