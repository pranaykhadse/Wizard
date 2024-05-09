import { Box } from '@mui/material'
import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightContainer from '../RightContainer/RightContainer'

const MainContainer = () => {
  return (
    <Box
    height={500}
    display="flex"
    flexDirection="row"
    gap={1}
    mx={4}
    my={4}
    sx={{
      justifyContent: "flex-start",
      maxHeight: "fit-content",
    }}
    >
        <LeftSideBar />
        <RightContainer />
    </Box>
  )
}

export default MainContainer