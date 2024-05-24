import React, { useState } from "react";
import { Box, Grid, Typography, createTheme, styled } from "@mui/material";
import { useDroppable, useDndMonitor } from "@dnd-kit/core";
import RightContainerStyledLayout from "./components/styledComponent/RightContainerStyledLayout";
import DragableFormElement, {
  DragableFormElementOverlay,
} from "./components/DragableFormElement";
import DroppingShowArea from "./components/DroppingShowArea";

const RightContainer = ({ isDropped, droppedData }) => {
  const [allFormEl, setAllFormEl] = useState([]);
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  useDndMonitor({
    onDragEnd(event) {
      const { active, over } = event;
      if (!active || !over) return;

      if (event.active.id.split("-")[0] == "formElementDrag") {
        // if (over.data.current !== undefined) {
        //   if (over.id.split("-")[1] == "right") {
        //     console.log("=========================", active.id);
        //     replaceElement(
        //       event.active.data.current.id,
        //       over.data.current.index,
        //       event.active.data.current.label,
        //       event.active.data.current.inputType,
        //       active.id
        //     );
        //   }
        // } else {
        //   console.log("Not Undefined");
        // }
      } else if (event.over.id.split("-")[0] == "ShowDropableArea") {
        createElement(
          event.active.data.current.id,
          over.data.current.index,
          event.active.data.current.label,
          event.active.data.current.inputType,
          over.id.split("-")[0],
          active.data.current.comp
        );
      } else if (event.over.id.split("-")[0] == "showSectionDesignArea") {
        createSectionEl(event, over, active);
      } else {
        console.log("w===w===w===w", event);
        if (over.data.current !== undefined) {
          console.log(over);

          createElement(
            event.active.data.current.id,
            over.data.current.index,
            event.active.data.current.label,
            event.active.data.current.inputType,
            over.id,
            active.data.current.comp
          );
          if (over.id.split("-")[1] == "right") {
            createElement(
              event.active.data.current.id,
              over.data.current.index,
              event.active.data.current.label,
              event.active.data.current.inputType,
              over.id.split("-")[0],
              active.data.current.comp
            );
          }
        } else {
          createElement(
            event.active.data.current.id,
            allFormEl.length - 1,
            event.active.data.current.label,
            event.active.data.current.inputType,
            over.id,
            active.data.current.comp
          );
        }
      }
    },
  });

  const replaceElement = (id, index, label, inputType, over) => {
    if (allFormEl.filter((e) => e.id == over.split("-")[1]).length != 0) {
      let allelArr = allFormEl;

      let idOfOverData = allelArr.filter((e) => e.id != over.split("-")[1]);
      if (allelArr[index].position == 12) {
        idOfOverData[index].position = 6;
        idOfOverData.splice(index + 1, 0, {
          id: id,
          label: label,
          index: index + 1,
          inputType: inputType,
          position: 6,
        });
        setAllFormEl([...idOfOverData]);
      }
    }
  };
  console.log(allFormEl);
  const createElement = (id, index, label, inputType, over, comp) => {
    if (allFormEl.length > 1) {
      if (inputType == "section") {
        setAllFormEl([
          ...allFormEl,
          {
            id: id,
            index: 0,
            label: label,
            inputType: inputType,
            position: 12,
            comp: comp,
            fields: [],
          },
        ]);
      }else{
        setAllFormEl(() => {
          const newElement = [...allFormEl];
          newElement.splice(index, 0, {
            id: id,
            index: index + 1,
            label: label,
            inputType: inputType,
            position: 12,
            comp: comp,
          });
          return newElement;
        });
      }
     
    } else if (allFormEl.length == 1) {
      console.log("cwjhvchwsjvkwergvnre",label);
      if (inputType == "section") {
        setAllFormEl([
          ...allFormEl,
          {
            id: id,
            index: 0,
            label: label,
            inputType: inputType,
            position: 12,
            comp: comp,
            fields: [],
          },
        ]);
      }else{
        let allelArr = allFormEl;
      if (allFormEl.filter((e) => e.id == over).length != 0) {
        let idOfOverItem = allFormEl.filter((e) => e.id == over)[0].id;
        if (
          allelArr[allFormEl.length - 1].position == 12 &&
          over == idOfOverItem
        ) {
          allelArr[allFormEl.length - 1].position = 6;
          allelArr.splice(index + 1, 0, {
            id: id,
            label: label,
            index: index + 1,
            inputType: inputType,
            position: 6,
            comp: comp,
          });
          setAllFormEl([...allelArr]);
        }
      } else {
        setAllFormEl([
          ...allFormEl,
          {
            id: id,
            index: allFormEl.length,
            label: label,
            inputType: inputType,
            position: 12,
            comp: comp,
          },
        ]);
      }
      }
    } else {
      if (inputType == "section") {
        setAllFormEl([
          ...allFormEl,
          {
            id: id,
            index: 0,
            label: label,
            inputType: inputType,
            position: 12,
            comp: comp,
            fields: [],
          },
        ]);
      } else {
        setAllFormEl([
          ...allFormEl,
          {
            id: id,
            index: 0,
            label: label,
            inputType: inputType,
            position: 12,
            comp: comp,
          },
        ]);
      }
    }
  };

  const createSectionEl = (event, over, active) => {
    const activeid = event.active.data.current.id;
    const index = event.over.id.split("-")[1];
    const label = event.active.data.current.label;
    const inputType = event.active.data.current.inputType;
    const overBox = over.id.split("-")[0];
    const activecomp = active.data.current.comp;
    const overComp = active.data.current.comp;
    const overId = event.over.data.current.id;
  if (inputType == "section") return;
    if (allFormEl.filter((e) => e.id == overId).length != 0){

      let allelArr = allFormEl;
      
      
      let idOfOverData = allelArr.filter((e) => e.id == overId)[0];

      const fieldArray = {
        id: activeid,
        label: label,
        index: index,
        inputType: inputType,
        position: 6,
        comp:activecomp,
      }
      idOfOverData.fields.push(fieldArray);
      console.log("nvsjvnjk",[idOfOverData]);
    }
  };

  const customTheme = createTheme({
    border: isOver ? "1px solid  blue" : "1px solid grey",
  });

  const deleteItem = (e) => {
    let arr = allFormEl;
    arr.splice(
      allFormEl.findIndex((a) => a.id === e),
      1
    );
    setAllFormEl([...arr]);
  };

  return (
    <RightContainerStyledLayout theme={customTheme}>
      {allFormEl.length != 0 && (
        <Box sx={{ height: "fit-content" }}>
          <Grid container spacing={0}>
            <DroppingShowArea index={0} />

            {allFormEl.map((el, i) => (
              <React.Fragment key={i}>
                <DragableFormElement
                  id={el.id}
                  index={i}
                  label={el.label}
                  inputType={el.inputType}
                  position={el.position}
                >
                  {console.log("gsdvbdsjabv",el.fields)}
                  <el.comp
                    id={el.id}
                    index={i}
                    label={el.label}
                    inputType={el.inputType}
                    position={el.position}
                   sectionFields={el.fields}
                    deleteItem={deleteItem}
                  />

                  {isDropped == "formElementDrag" && (
                    <DragableFormElementOverlay
                      label={droppedData.label}
                      inputType={droppedData.inputType}
                    />
                  )}
                </DragableFormElement>
                <DroppingShowArea index={i + 1} />
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      )}

      <Box ref={setNodeRef} sx={{ height: "100%" }} width="100%">
        {!isOver && allFormEl.length == 0 && (
          <Typography
            display="flex"
            flexGrow={1}
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            color="gray"
          >
            Drop Here
          </Typography>
        )}
      </Box>
    </RightContainerStyledLayout>
  );
};

export default RightContainer;
