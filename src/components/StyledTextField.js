import React from 'react'

import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export default styled(TextField)({
  margin: '25px 16px 24px',
  height: 40,
  
  '& .MuiOutlinedInput-root': {
    height: 40,
    
    fontSize: 14,
    lineHeight: 20,
    color: '#898793',
    
    backgroundColor: '#F4F5F7'
  },
  
  '& .MuiInputBase-input': {
    height: 40,
    boxSizing: 'border-box',
  }
})