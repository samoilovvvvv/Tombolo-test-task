import React from 'react';

import { styled } from '@mui/material/styles';
import { Tab } from '@mui/material';

export default styled(props => <Tab disableRipple {...props}/>)({
  width: 'auto',
  minWidth: 30,
  padding: 0,
  
  color: '#898793',
  textTransform: 'none',
  
  fontSize: 12,
  
  '&.Mui-selected': {
    color: '#114BC2',
  }
})