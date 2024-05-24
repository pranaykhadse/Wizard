import { useDroppable } from "@dnd-kit/core";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const InputField = ({ id, index, label, inputType, position, deleteItem }) => {
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

  // const topHalf = useDroppable({
  //   id: id + "-top",
  //   data: {
  //     id: id,
  //     index: index,
  //     label: label,
  //     inputType: inputType,
  //     position: position,
  //   },
  // });

  // const bottomHalf = useDroppable({
  //   id: id + "-bottom",
  //   data: {
  //     id: id,
  //     index: index,
  //     label: label,
  //     inputType: inputType,
  //     position: position,
  //   },
  // });

  const handlePopoverOpen = (e) => {
  
      setOpen(true);
    
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
      bgcolor="white"
      boxSizing="border-box"
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
        sx={{
          boxSizing: "border-box",
          width: "100%",
        }}
      />

      {/* {position == 12 ? (
        <>
          <Box
            ref={topHalf.setNodeRef}
            width="100%"
            height="100%"
            boxSizing="border-box"
            paddingRight={2}
            zIndex={0}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1 / 2,
              height: 1 / 2,
              border: topHalf.isOver ? "1px dashed blue" : "",
            }}
          ></Box>
          <Box
            ref={bottomHalf.setNodeRef}
            width="100%"
            height="100%"
            boxSizing="border-box"
            zIndex={0}
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 1 / 2,
              height: 1 / 2,
              border: bottomHalf.isOver ? "1px dashed blue" : "",
            }}
          ></Box>
        </>
      ) : (
        <>
          <Box
            ref={topHalf.setNodeRef}
            width="100%"
            height="100%"
            boxSizing="border-box"
            paddingRight={2}
            zIndex={0}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: 1 / 2,
              border: topHalf.isOver ? "1px dashed blue" : "",
            }}
          ></Box>
          <Box
            ref={bottomHalf.setNodeRef}
            width="100%"
            height="100%"
            boxSizing="border-box"
            paddingRight={2}
            zIndex={0}
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "100%",
              height: 1 / 2,
              border: bottomHalf.isOver ? "1px dashed blue" : "",
            }}
          ></Box>
        </>
      )} */}

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
          zIndex={10}
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

export default InputField;
