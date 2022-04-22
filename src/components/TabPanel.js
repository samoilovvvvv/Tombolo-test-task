import React from 'react';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
  const { value, index, children, ...other } = props;
  
  return (
    <div
      style={{
        width: '100%',
        maxHeight: 330,
        overflow: 'auto'
      }}
      hidden={value !== index}
      {...other}
    >
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default TabPanel;
