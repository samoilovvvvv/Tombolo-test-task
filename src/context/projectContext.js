import React, {useState, useEffect, useContext, useMemo} from 'react';

import { getProjects } from '../api/requests';

const ProjectContext = React.createContext()

const ProjectProvider = ({children}) => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState({})
  
  useEffect(() => {
    getProjects()
      .then(data => setData(data.data))
      .catch(error => console.log(error))
  }, [])
  
  useMemo(() => {
    let createdByUser = data?.filter(i => i.createdBy === 'Ilya')
    let sharedData = data?.filter(i => i.createdBy !== 'Ilya')
    let archivedData = data?.filter(i => i?.archived === true)
    
    return setFilteredData({
      createdByUser,
      sharedData,
      archivedData
    })
    
  }, [data])
  
  return (
    <ProjectContext.Provider
      value={{
        data,
        setData,
        filteredData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

const useProjectContext = () => {
  const context = useContext(ProjectContext)
  
  if (context === undefined) {
    throw new Error('useProjectContext must be used within an ProjectProvider')
  }
  
  return context
}

export { ProjectProvider, useProjectContext }