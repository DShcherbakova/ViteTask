import './App.css'
import TaskList from './components/TaskList'
import UserList from './components/UserList'
import PhotoList from './components/PhotoList';

function App() {

  return (
    <>
    <div className="img-container">
      <TaskList />
      <UserList />
      <PhotoList />
    </div>
    </>
  )
}

export default App;