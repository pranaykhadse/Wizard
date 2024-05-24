import { useDroppable } from "@dnd-kit/core";
import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";

const DroppingShowArea = ({ index }) => {
  const [setOpen, setSetOpen] = useState(false);
  const showDesignArea = useDroppable({
    id: "ShowDropableArea-" + index,
    data: {
      index: index,
    }
  });

  if (showDesignArea?.over?.id.split("-")[0] == "draggable") return;


  return (
    <Box
      ref={showDesignArea.setNodeRef}
      width="100%"
      height={
        showDesignArea?.over?.id == "ShowDropableArea-" + index
          ? "40px"
          : "10px"
      }
      m={
        showDesignArea?.over?.id == "ShowDropableArea-" + index ? "6px" : "0px"
      }
      border={
        showDesignArea?.over?.id == "ShowDropableArea-" + index
          ? "1px dashed blue"
          : "none"
      }
      bgcolor="white"
    ></Box>
 
  );
};

export default DroppingShowArea;
