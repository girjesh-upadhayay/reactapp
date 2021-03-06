//import React from 'react'
import React,{useState} from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from "./components/Tasks";

// class App extends React.Component{

//   render(){

//     return <h1>Hello from class component</h1>
//   }
// }
function App() {

  const [tasks, setTasks] = useState([{
    id:1,
    text: 'Doctor Appointment',
    day: 'Feb 5th at 230 pm',
    reminder: true,
},
{
    id:2,
    text: 'Meeting at office',
    day: 'Feb 5th at 5:00 pm',
    reminder: false,
},
{
    id:3,
    text: 'Shopping at mall',
    day: 'Feb 5th at 9:00 pm',
    reminder: true,
}])

const deleteTask = (id) => {
     setTasks(tasks.filter((task)=> task.id!==id));
}
  return (
    <>
    <div className="App">
    
     <Header title="Task Tracker"/>
     <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
    </>
  );
}

export default App;
