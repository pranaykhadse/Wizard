import React from "react";
import { DragOverlay, useDraggable } from "@dnd-kit/core";
import { Box, Grid, TextField } from "@mui/material";

const DragableFormElement = (props) => {
  const formDraggable = useDraggable({
    id: `formElementDrag-${props.id}`,
    data: {
      id: props.id,
      label: props.label,
      inputType: props.inputType,
      position:props.position
    },
  });
  if (formDraggable.isDragging) return;

  return (
    <Grid
      item
      ref={formDraggable.setNodeRef}
      {...formDraggable.listeners}
      {...formDraggable.attributes}
      xs={props.position}
    >
      {props.children}
    </Grid>
  );
};

export default DragableFormElement;

export const DragableFormElementOverlay = (props) => {
  return (
    <DragOverlay>
      <Box
        width="50%"
        height="fit-content"
        bgcolor={open ? "#e0e0e0" : "white"}
        boxSizing="border-box"
        paddingRight={2}
        zIndex={10}
        sx={{
          position: "relative",
          "&:hover": {
            cursor: "pointer",
            border: "1px dashed blue",
          },
        }}
      >
        <TextField
          label={props.label}
          variant="outlined"
          size="small"
          type={props.inputType}
          sx={{
            boxSizing: "border-box",
            width: "100%",
            margin: "6px",
          }}
        />
      </Box>
    </DragOverlay>
  );
};
