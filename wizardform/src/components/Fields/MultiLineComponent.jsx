import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { styled } from "@mui/system";
import {
  Box,
  TextField,
  TextareaAutosize ,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const MultiLineComponent = ({
  id,
  index,
  label,
  inputType,
  position,
  deleteItem,
}) => {
  const [open, setOpen] = useState(false);

  const rightHalf = useDroppable({
    id: id + "-right",
    data: {
      id: id,
      index: index,
      label: label,
      inputType: inputType,
      position: position,
    },
  });
 
  const topHalf = useDroppable({
    id: id + "-top",
    data: {
      id: id,
      index: index,
      label: label,
      inputType: inputType,
      position: position,
    },
  });

  const bottomHalf = useDroppable({
    id: id + "-bottom",
    data: {
      id: id,
      index: index,
      label: label,
      inputType: inputType,
      position: position,
    },
  });

  const handlePopoverOpen = (e) => {
    if (rightHalf.active && rightHalf.active.current) {
      setOpen(false);
    } else {
      console.log("1", rightHalf);
      setOpen(true);
    }
  };

  const handlePopoverClose = () => {
    setOpen(false);
    console.log("2");
  };



  return (
    <Box
      onMouseEnter={(e) => handlePopoverOpen(e)}
      onMouseLeave={handlePopoverClose}
      width="100%"
      height="fit-content"
      bgcolor={open ? "#f5f5f5" : "white"}
      boxSizing="border-box"
      paddingRight={1}
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
        label={label == "Date" ? "" : label}
        variant="outlined"
        size="small"
        type={inputType}
        multiline
        sx={{
          boxSizing: "border-box",
          width: "100%",
        }}
      />

  

  
        <Box
          ref={rightHalf.setNodeRef}
          width="100%"
          height="100%"
          boxSizing="border-box"
          paddingRight={2}
          zIndex={0}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 1 / 2,
            "&:hover": {
              display: "none",
            },
            "&:focus": {
              display: "none",
            },
            border: rightHalf.isOver ? "1px dashed blue" : "",
          }}
        ></Box>

      {open && (
        <Box
          onClick={() => deleteItem(id)}
          height="100%"
          boxSizing="border-box"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: position == 12 ? "5%" : "10%",
            bgcolor: "#f5f5f5",
            borderLeft: "1px dashed blue",
            "&:hover": {
              border: "1px dashed blue",
            },
          }}
        >
          <DeleteIcon
            sx={{
              color: "red",
              fontSize: 50,
              height: "60%",
              "&:hover": {
                color: "#f60815",
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default MultiLineComponent;
