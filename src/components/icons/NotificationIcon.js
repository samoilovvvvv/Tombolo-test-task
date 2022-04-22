import { Grid } from '@mui/material';

const NotificationIcon = ({notification = false}) => {
  const Rectangle = () => {
    return (
      <svg
        style={{
          marginTop: 5,
          marginLeft: 7
        }}
        width="4"
        height="4"
        viewBox="0 0 4 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="4" height="4" rx="2" fill="#F05D4F"/>
      </svg>
    )
  }
  
  return (
    <Grid
      container
      direction={'column'}
      style={{
        width: 'auto',
        marginTop: notification ? 11 : 2
      }}
    >
      <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1_14" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="18">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.10352e-05 0H18.497V17.348H6.10352e-05V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_1_14)">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.24707 1.5C5.75207 1.5 3.31607 4.238 3.31607 6.695C3.31607 8.774 2.73907 9.735 2.22907 10.583C1.82007 11.264 1.49707 11.802 1.49707 12.971C1.66407 14.857 2.90907 15.848 9.24707 15.848C15.5501 15.848 16.8341 14.813 17.0001 12.906C16.9971 11.802 16.6741 11.264 16.2651 10.583C15.7551 9.735 15.1781 8.774 15.1781 6.695C15.1781 4.238 12.7421 1.5 9.24707 1.5ZM9.24707 17.348C4.57107 17.348 0.345074 17.018 7.43898e-05 13.035C-0.00292561 11.387 0.500074 10.549 0.944074 9.811C1.39307 9.063 1.81607 8.358 1.81607 6.695C1.81607 3.462 4.80207 0 9.24707 0C13.6921 0 16.6781 3.462 16.6781 6.695C16.6781 8.358 17.1011 9.063 17.5501 9.811C17.9941 10.549 18.4971 11.387 18.4971 12.971C18.1481 17.018 13.9231 17.348 9.24707 17.348Z" fill="#898793"/>
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.19827 21.5H9.19627C8.07527 21.499 7.01427 21.005 6.20927 20.108C5.93227 19.801 5.95727 19.326 6.26527 19.05C6.57327 18.772 7.04727 18.797 7.32427 19.106C7.84227 19.683 8.50727 20 9.19727 20H9.19827C9.89127 20 10.5593 19.683 11.0783 19.105C11.3563 18.798 11.8303 18.773 12.1373 19.05C12.4453 19.327 12.4703 19.802 12.1933 20.109C11.3853 21.006 10.3223 21.5 9.19827 21.5Z" fill="#898793"/>
      </svg>
      {notification && <Rectangle/>}
    </Grid>
  )
}

export default NotificationIcon