import Header from './components/Header'
import Progress from './components/Progress'
import './App.scss'
import InputTask from './components/Task/InputTask'
import TaskList from './components/Task/TaskList'

function App() {

  return (
    <>
      <Header/>
      <div className='custom__container'>
        <Progress/>
        <InputTask/>
        <TaskList/>
      </div>
      
    </>
  )
}

export default App
