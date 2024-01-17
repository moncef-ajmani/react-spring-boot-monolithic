import Header from './components/Header'
import Progress from './components/Progress'
import './App.scss'
import InputTask from './components/Task/InputTask'
import TaskList from './components/Task/TaskList'
import { useAuth } from './Contexts/AuthContext'
import { useEffect, useState } from 'react'
import { apiInstance } from './utils/Axios'


function App() {
  const { isLoggedIn, login } = useAuth() 
  const [tasks, setTasks] = useState([])

  const fetchTasks = () =>{
    apiInstance.get("/tasks")
    .then(({data})=>{
      console.log(data.tasks)
      setTasks(data.tasks)
    })
  }
  useEffect(()=>{
    fetchTasks()
  },[])

  return (
    <>
        <Header/>
        <div className='custom__container'>
          {isLoggedIn?(
            <>
              <Progress done={tasks.filter(t=>t.status=="COMPLETED").length} total={tasks.length}/>
              <InputTask fetchData={fetchTasks}/>
              <TaskList tasks={tasks} fetchData={fetchTasks}/>
            </>
            
          ):(
            <h1>You should Login!!</h1>
          )}
          
        </div>
    </>
    
  )
}

export default App
