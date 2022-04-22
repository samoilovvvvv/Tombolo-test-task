import React from 'react'

import styles from '../styles/EditProjectModal.module.scss';

import _ from 'lodash'

import {
  Grid,
  Modal,
  Slide,
  Typography
} from '@mui/material';

import RenameIcon from './icons/RenameIcon';
import FolderIcon from './icons/FolderIcon';
import DeleteIcon from './icons/DeleteIcon';

const EditProjectModal = ({
  open = false,
  id = null,
  projects = [],
  onClose = () => {},
  onRename = () => {},
  setProjects = () => {}
}) => {
  
  const archiveProjectHandler = () => {
    const cloneProjects = _.cloneDeep(projects)
    
    for (let project in cloneProjects) {
      if (cloneProjects[project].id === id) {
        cloneProjects[project].archived = true
      }
    }
    
    setProjects(cloneProjects)
    onClose()
  }
  
  return (
    <Modal
      open={open}
      onClose={onClose}
      className={styles.modal}
    >
      <Slide direction={'up'} in={open} mountOnEnter unmountOnExit>
        <Grid
          container
          direction={'column'}
          className={styles.container}
        >
          <Grid
            container
            item
            alignItems={'center'}
            onClick={onRename}
          >
            <RenameIcon/>
            <Typography className={styles.text}>Rename</Typography>
          </Grid>
          <Grid
            container
            item
            alignItems={'center'}
            style={{marginTop: 17}}
            onClick={archiveProjectHandler}
          >
            <FolderIcon modal={true}/>
            <Typography className={styles.text}>Move to Done/Archive</Typography>
          </Grid>
          <Grid
            container
            item
            alignItems={'center'}
            style={{marginTop: 17}}
          >
            <DeleteIcon/>
            <Typography className={styles.text}>Delete</Typography>
          </Grid>
        </Grid>
      </Slide>
    </Modal>
  )
}

export default EditProjectModal