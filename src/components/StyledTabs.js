import React from 'react'

import { Tabs } from '@mui/material'
import { styled } from '@mui/material/styles'

export default styled(Tabs)({
  width: '100%',
  height: 52,
  paddingTop: 4,
  
  '& .MuiTabs-flexContainer': {
    justifyContent: 'space-between'
  },
  
  '& .MuiTabs-indicator': {
    backgroundColor: '#114BC2'
  }
})