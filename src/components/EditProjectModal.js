import React from 'react'

import styles from '../styles/EditProjectModal.module.scss';

import {
  Grid,
  Modal,
  Slide,
  Typography
} from '@mui/material';

import RenameIcon from './icons/RenameIcon';
import FolderIcon from './icons/FolderIcon';
import DeleteIcon from './icons/DeleteIcon';

import { useProjectContext } from '../context/projectContext'
import { useSnackbar } from 'notistack';

import { deleteProject, updateProject } from '../api/requests';

const EditProjectModal = ({
  open = false,
  id = null,
  onClose = () => {},
  onRename = () => {},
}) => {
  
  const { setData } = useProjectContext()
  
  const { enqueueSnackbar } = useSnackbar();
  
  const projectHandlers = async (request = () => {}) => {
    try {
      const response = await request(id)
    
      setData(response.data.data)
    
      enqueueSnackbar(response.data.message, {
        variant: 'success'
      })
    } catch (error) {
      enqueueSnackbar(error.response.data.message, {
        variant: 'error'
      })
    } finally {
      onClose()
    }
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
            onClick={() => projectHandlers(() => updateProject({id, archived: true}))}
          >
            <FolderIcon modal={true}/>
            <Typography className={styles.text}>Move to Done/Archive</Typography>
          </Grid>
          <Grid
            container
            item
            alignItems={'center'}
            style={{marginTop: 17}}
            onClick={() => projectHandlers(deleteProject)}
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