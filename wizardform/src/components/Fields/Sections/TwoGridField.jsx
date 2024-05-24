import React from "react";
import { DragOverlay, useDraggable, useDroppable } from "@dnd-kit/core";
import { Box, Grid, TextField, styled } from "@mui/material";
const TwoGridField = ({
    id,
  index,
  label,
  inputType,
  position,
  sectionFields,
}) => {
    const twoSectionDraggable = useDraggable({
        id: `twoSectionDrag`,
      });
      const showFirstDesignArea = useDroppable({
        id: "showSectionDesignArea-1-" + id,
        data: {
          id: id,
          index: index,
          label: label,
          inputType: inputType,
          position: position,
        },
      });
    
      const showSecondDesignArea = useDroppable({
        id: "showSectionDesignArea-2-" + id,
        data: {
          id: id,
          index: index,
          label: label,
          inputType: inputType,
          position: position,
        },
      });
    
      const fields = [...sectionFields];
      // console.log( id)
      // console.log( index)
      // console.log( label)
      // console.log( inputType)
      // console.log( position)
      // console.log( deleteItem)
      return (
        <Box
          ref={twoSectionDraggable.setNodeRef}
          {...twoSectionDraggable.listeners}
          {...twoSectionDraggable.attributes}
          sx={{
            boxSizing: "border-box",
            height: "fit-content",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            width="100%"
            container
            justifyContent="space-evenly"
            sx={{
              borderRadius: 1,
            }}
          >
            {fields.map((item, i) => (
              <Grid item xs={6} key={i}>
                <TextField
                  label={item.label}
                  variant="outlined"
                  size="small"
                  type={item.type}
                  sx={{
                    boxSizing: "border-box",
                    width: "96%",
                  }}
                />
              </Grid>
            ))}
            {fields.length == 1 && (
              <Grid item xs={6} ref={showSecondDesignArea.setNodeRef}>
                <Box
                  width="100%"
                  height="40px"
                  border="1px dashed blue"
                  bgcolor={showSecondDesignArea.isOver ? "#e1f5fe" : "white"}
                ></Box>
              </Grid>
            )}
            {fields.length == 0 && (
              <Grid item xs={6} ref={showFirstDesignArea.setNodeRef}>
                <Box
                  width="100%"
                  height="40px"
                  border="1px dashed blue"
                  bgcolor={showFirstDesignArea.isOver ? "#e1f5fe" : "white"}
                ></Box>
              </Grid>
            )}
            {fields.length == 0 && (
              <Grid item xs={6} ref={showSecondDesignArea.setNodeRef}>
                <Box
                  width="100%"
                  height="40px"
                  border="1px dashed blue"
                  bgcolor={showSecondDesignArea.isOver ? "#e1f5fe" : "white"}
                ></Box>
              </Grid>
            )}
           
          </Grid>
        </Box>
      )
}

export default TwoGridField