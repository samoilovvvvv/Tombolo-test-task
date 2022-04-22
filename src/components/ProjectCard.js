import React from "react";

import Image from 'next/image';


import { Grid, Typography } from '@mui/material';
import styles from "../styles/ProjectCard.module.scss";

import EllipsisIcon from './icons/EllipsisIcon';

const ProjectCard = ({
  project,
  onClickMenu = () => {},
  setEditingProjectId = () => {}
}) => {
  
  return (
    <Grid
      key={project.id}
      container
      item
      justifyContent={'space-between'}
      className={styles.project}
    >
      <Typography className={styles.text}>{project.name}</Typography>
      <Grid
        container
        item
        style={{width: 'auto'}}
      >
        <Grid item className={styles.image}>
          <Image
            src={project.img}
            width={26}
            height={26}
            style={{borderRadius: 5}}
            alt={'Person'}
          />
        </Grid>
        <EllipsisIcon
          style={{marginTop: 6}}
          onClick={() => {
            onClickMenu()
            setEditingProjectId(project.id)
          }}
        />
      </Grid>
    </Grid>
  )
}

export default ProjectCard