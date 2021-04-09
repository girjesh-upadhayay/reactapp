//import React from 'react'
import React,{useState} from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import AddTask from "./components/AddTask";


// class App extends React.Component{

//   render(){

//     return <h1>Hello from class component</h1>
//   }
// }
function App() {

  let newtime = new Date().toLocaleString();
  const [mytime,setMytime] = useState(newtime);

  setInterval(()=>{
   let newtime = new Date().toLocaleString();
    setMytime(newtime);
  },1000);

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
}
])

const deleteTask = (id) => {
  console.log(id);
     setTasks(tasks.filter((task)=> task.id!==id));
}

const addTask = (task) => {
  console.log(task);
  const id = Math.floor(Math.random()*10000)+1;
  const newtask = {id,...task};
  setTasks([newtask,...tasks]);

}
  return (
    <>
    <div className="App">
    <p style={{color:'red', padding:'25px',fontFamily:'monospace'}}>{mytime}</p>
     <Header title="Now PUB G ban in india!"/>
     <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? (
     <Tasks tasks={tasks} onDelete={deleteTask} />
     ) : (' No Items')}

     
    </div>
    </>
  );
}

export default App;
