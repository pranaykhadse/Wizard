import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { Box } from "@mui/material";
import { IdGenerator } from "../../../../../IDgenerator/IdGenerator";

const Draggable = (props) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `draggable-${props.id}`,
    data: {
      id: IdGenerator(),
      label: props.label,
      inputType: props.inputType,
      icon: props.icon,
      comp: props.comp,
    },
  });


  return (
    <Box
      key={props.id}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      width="100%"
      height={40}
      display="flex"
      alignItems="center"
      flexDirection="row"
      sx={{
        overflowX: "auto",
        borderRadius: 1,
        border: isDragging ? "1px solid blue" : "1px solid grey",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Draggable;

export const DraggableOverlay = (props) => {
  return (
    <Box
      width={160}
      height={40}
      display="flex"
      alignItems="center"
      flexDirection="row"
      sx={{
        overflowX: "auto",
        borderRadius: 1,
        border: "1px dashed blue",
      }}
    >
      {props.children}
    </Box>
  );
};
