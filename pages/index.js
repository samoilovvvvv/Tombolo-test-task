import React, { useState } from 'react'

import PageContainer from '../src/components/PageContainer';
import DropDownIcon from '../src/components/icons/DropDownIcon';
import StyledTabs from '../src/components/StyledTabs';
import StyledTab from '../src/components/StyledTab';
import TabPanel from '../src/components/TabPanel';
import ProjectCard from '../src/components/ProjectCard';
import NewProjectModal from '../src/components/NewProjectModal'
import EditProjectModal from '../src/components/EditProjectModal'

import {
  Divider,
  Grid,
  Typography,
  Button,
} from '@mui/material'

import styles from '../src/styles/Home.module.scss'
import initialProjects from '../src/mocks/projects'

import clsx from 'clsx';

import { useProjectContext } from '../src/context/projectContext';

const Home = () => {
  const [tabValue, setTabValue] = useState(0)
  
  const [projects, setProjects] = useState(initialProjects)
  const [showNewProjectModal, setShowNewProjectModal] = useState(false)
  const [showEditProjectModal, setShowEditProjectModal] = useState(false)
  const [renameProject, setRenameProject] = useState(false)
  const [editingProjectId, setEditingProjectId] = useState(null)
  
  const { data, filteredData } = useProjectContext()
  
  const getMessage = () => {
    switch (tabValue) {
      case 2:
        return `
          You do not have any shared projects
        `
      case 3:
        return `
          You do not have any archived projects.
          Please press "Move to Done/Archive" to archive project
        `
      default:
        return `
          You do not have any projects created yet.
          Please press “New Project” button to create your first project
        `
    }
  }
  
  const getTabContent = (data) => {
    
    return (
      <Grid
        container
        className={clsx({[styles.centeredMessage]: !data?.length})}
      >
        {
          data?.length
            ? (
              <Grid
                container
                item
                direction={'column'}
              >
                <Grid
                  container
                  item
                  justifyContent={'space-between'}
                  style={{marginBottom: 8}}
                >
                  <Typography className={styles.projectsColumnText}>Name</Typography>
                  <Typography className={styles.projectsColumnText} style={{marginRight: 24}}>Owner</Typography>
                </Grid>
                {
                  data.map((project) => {
                    return (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onClickMenu={() => setShowEditProjectModal(true)}
                        setEditingProjectId={setEditingProjectId}
                      />
                    )
                  })
                }
              </Grid>
            )
            : <Typography className={styles.textContent}>{getMessage()}</Typography>
        }
      </Grid>
    )
  }
  
  return (
    <PageContainer>
      <Grid
        container
        direction={'column'}
        className={styles.mainContainer}
      >
        <Grid
          container
          item
          className={styles.dropdown}
        >
          <Typography>Projects</Typography>
          <DropDownIcon className={styles.icon}/>
        </Grid>
        <Divider/>
        <Grid
          container
          item
          className={styles.tabsContainer}
        >
          <StyledTabs value={tabValue} onChange={(event, newValue) => setTabValue(newValue)}
          >
            <StyledTab label={`All ${data.length}`}/>
            <StyledTab label={`My ${filteredData.createdByUser.length}`}/>
            <StyledTab label={`Shared ${filteredData.sharedData.length}`}/>
            <StyledTab label={`Archived ${filteredData.archivedData.length}`}/>
          </StyledTabs>
        </Grid>
        <Grid
          container
          item
          className={styles.buttonContainer}
        >
          <Button
            variant={'contained'}
            className={styles.button}
            onClick={() => setShowNewProjectModal(true)}
          >
            New Project
          </Button>
        </Grid>
        <Grid
          container
          item
          className={clsx(styles.contentContainer)}
        >
          <TabPanel value={tabValue} index={0}>
            {getTabContent(data)}
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {getTabContent(filteredData.createdByUser)}
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            {getTabContent(filteredData.sharedData)}
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            {getTabContent(filteredData.archivedData)}
          </TabPanel>
        </Grid>
      </Grid>
      <NewProjectModal
        open={showNewProjectModal}
        onClose={() => setShowNewProjectModal(false)}
        projects={projects}
        setProjects={setProjects}
        id={editingProjectId}
        rename={renameProject}
        setRename={() => setRenameProject(false)}
      />
      <EditProjectModal
        open={showEditProjectModal}
        onClose={() => setShowEditProjectModal(false)}
        id={editingProjectId}
        projects={projects}
        setProjects={setProjects}
        onRename={() => {
          setRenameProject(true)
          setShowNewProjectModal(true)
          setShowEditProjectModal(false)
        }}
      />
    </PageContainer>
  )
}

export default Home