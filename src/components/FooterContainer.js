import { Grid } from '@mui/material';

import HomeIcon from './icons/HomeIcon';
import FolderIcon from './icons/FolderIcon';
import NotificationIcon from './icons/NotificationIcon';
import ProfileIcon from './icons/ProfileIcon';
import WalletIcon from './icons/WalletIcon';

import styles from '../styles/FooterContainer.module.scss'

const FooterContainer = ({children}) => {
  
  return (
    <Grid className={styles.wrapper}>
      <Grid
        item
        style={{
          marginBottom: 56
        }}
      >
        {children}
      </Grid>
      <Grid
        container
        item
        className={styles.footerContainer}
      >
        <Grid
          container
          item
          className={styles.footer}
        >
          <HomeIcon/>
          <FolderIcon/>
          <WalletIcon/>
          <NotificationIcon notification={true}/>
          <ProfileIcon/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FooterContainer