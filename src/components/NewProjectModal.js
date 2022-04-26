import React, { useState } from 'react'

import styles from '../styles/NewProjectModal.module.scss'
import clsx from 'clsx'

import {
  Grid,
  Modal,
  Typography,
  Slide,
  Divider,
  Button
} from '@mui/material';

import TextField from './StyledTextField'

import CloseIcon from '@mui/icons-material/Close'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { useProjectContext } from '../context/projectContext';

import { useSnackbar } from 'notistack';

import { addProject, updateProject } from '../api/requests';

const IMAGES = [
  '/images/frodo.jpg',
  '/images/kanye_west.png'
]

const MIN_ID = 10
const MAX_ID = 9999999

const NewProjectModal = ({
  id = null,
  rename = false,
  open = false,
  onClose = () => {},
  setRename = () => {}
 }) => {
  const [value, setValue] = useState('')
  
  const { setData } = useProjectContext()
  
  const { enqueueSnackbar } = useSnackbar();
  
  const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  const projectHandlers = async (type = '', request = () => {}) => {
    try {
      const getBody = () => {
        switch (type) {
          case 'add':
            return {
              id: randomInteger(MIN_ID, MAX_ID),
              name: value,
              img: IMAGES[randomInteger(0, 1)],
              createdBy: 'Ilya'
            }
          case 'rename':
            return {
              id: id,
              name: value,
            }
          default:
            return {}
        }
      }
    
      const response = await request(getBody())
    
      setData(response.data.data)
    
      enqueueSnackbar(response.data.message, {
        variant: 'success'
      })
    } catch(error) {
      enqueueSnackbar(error.response.data.message, {
        variant: 'error'
      })
    } finally {
      onClose()
      setRename()
      setValue('')
    }
  }
  
  const onCloseModalHandler = () => {
    if (rename) {
      onClose()
      setRename()
      setValue('')
    } else {
      setValue('')
      onClose()
    }
  }
  
  return (
    <Modal
      open={open}
      onClose={onCloseModalHandler}
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
            justifyContent={'space-between'}
            alignItems={'center'}
            className={styles.header}
          >
            <Typography className={styles.text}>{ rename ? 'Rename' : 'New Project'}</Typography>
            <CloseIcon className={styles.closeIcon} onClick={onCloseModalHandler}/>
          </Grid>
          <Divider/>
          <Grid
            container
            item
            alignItems={'center'}
            className={styles.dueDate}
          >
            <CalendarMonthIcon className={styles.calendarIcon}/>
            <Typography className={styles.dateText}>Due Date</Typography>
          </Grid>
          <TextField
            variant={'outlined'}
            placeholder={'Project Name'}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <Divider/>
          <Grid
            container
            item
            justifyContent={'space-between'}
            style={{padding: '23px 15px'}}
          >
            <Button
              variant={'outlined'}
              className={clsx(styles.button, styles.cancelButton)}
              onClick={onCloseModalHandler}
            >
              Cancel
            </Button>
            <Button
              variant={'contained'}
              className={clsx(styles.button, styles.createButton)}
              onClick={() => {
                rename
                ? projectHandlers('rename', updateProject)
                : projectHandlers('add', addProject)
              }}
            >
              { rename ? 'Rename Project' : 'Create Project'}
            </Button>
          </Grid>
        </Grid>
      </Slide>
    </Modal>
  )
}

export default NewProjectModal