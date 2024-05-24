import { Box } from "@mui/material";
import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import RightContainer from "../MainContainer/RightContainer/RightContainer";
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import MainContainerStyledComponents from "./components/styledComponents/MainContainerStyledComponents";
import DragOverlayWrapper from "../MainContainer/LeftSideBar/components/common-styled-components/DragOverlayWrapper";

const MainContainer = () => {
  const [isDropped, setIsDropped] = useState(null);
  const [droppedData, setDroppedData] = useState(null);

  function handleDragStart(event) {
    if (event.active.id.split("-")[0] == "draggable") {
      setIsDropped("droppable");
      setDroppedData(event.active.data.current);
    } else if (event.active.id.split("-")[0] == "formElementDrag") {
      setIsDropped("formElementDrag");
      setDroppedData(event.active.data.current);
    }
  }

  function handleDragEnd(event) {
    if (event.active.id.split("-")[0] == "draggable") {
      setDroppedData(event.active.data.current);
    } else if (event.active.id.split("-")[0] == "formElementDrag") {
      setDroppedData(event.active.data.current);
    }
   
    setIsDropped(null);
  }

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // 10px
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);


  return (
    <MainContainerStyledComponents>
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd} >
        <LeftSideBar />
        <RightContainer isDropped={isDropped} droppedData={droppedData} />
        {isDropped == "droppable" && (
          <DragOverlayWrapper droppedData={droppedData} />
        )}
      </DndContext>
    </MainContainerStyledComponents>
  );
};

export default MainContainer;
