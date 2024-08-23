import NewProject from "./components/NewProject";
import NoProjectedSelected from "./components/NoProjectedSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import {useState} from 'react'
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState,setProjectsState]=useState({
    selectedProjectId:undefined, //no project or no project selected, null when project is there but not selected
    projects:[],
    tasks:[]
  });

  const handleStartAddProject=()=>{
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId:null,
      }
    })
  }

  const handleAddProject=(projectData)=>{
    setProjectsState(prevState=>{

      const newProject={
        ...projectData,
        id:Math.random()
      }
     
      return{
        ...prevState,
        selectedProjectId:undefined, //once added go back to fall back screen
        projects:[...prevState.projects,newProject]
      }
    })
  }

  const handleCancelAddProject=()=>{
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined, //once cancelled go back to fall back screen
      }
    })
  }

  const handleSelectProject=(id)=>{
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id, //once cancelled go back to fall back screen
      }
    })
  }

  const handleRemoveSelectedProject=(id)=>{
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined, //once cancelled go back to fall back screen
        projects:prevState.projects.filter((project)=>project.id!==projectsState.selectedProjectId)
      }
    })
  }

  const handleAddTask=(taskAdded)=>{
    setProjectsState(prevState=>{
      const taskId=Math.random();
      const newTask={
        text:taskAdded,
        taskId:taskId,
        projectId:prevState.selectedProjectId
      }
      return {
       ...prevState,
       tasks:[newTask,...prevState.tasks]
      }
    })
  }

  const handleDeleteTask=(taskId)=>{
    setProjectsState(prevState=>{
      return{
        ...prevState,
        tasks:prevState.tasks.filter((task)=>task.taskId!==taskId)
      }
    })
  }

  const selectedProject=projectsState.projects.find(project=>project.id===projectsState.selectedProjectId)
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} handleSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId}/>
      {projectsState.selectedProjectId===undefined && <NoProjectedSelected onStartAddProject={handleStartAddProject}/>}
      {projectsState.selectedProjectId===null && <NewProject handleAddProject={handleAddProject} handleCancelProject={handleCancelAddProject}/>}
      {(projectsState.selectedProjectId!==null && projectsState.selectedProjectId!==undefined )&& <SelectedProject project={selectedProject} handleRemoveSelectedProject={handleRemoveSelectedProject} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask} tasks={projectsState.tasks.filter(task=>task.projectId===projectsState.selectedProjectId)}/>}
    </main>
  );
}

export default App;
