import Header from './components/Header'
import Progress from './components/Progress'
import './App.scss'
import InputTask from './components/Task/InputTask'
import TaskList from './components/Task/TaskList'
import { AuthProvider } from './Contexts/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <Header/>
        <div className='custom__container'>
          <Progress/>
          <InputTask/>
          <TaskList/>
        </div>
      </AuthProvider>
    </>
    
  )
}

export default App
