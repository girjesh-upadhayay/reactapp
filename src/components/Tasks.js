
import PropTypes from 'prop-types'
import Task from "./Task";


// const tasks = [
//     {
//         id:1,
//         text: 'Doctor Appointment',
//         day: 'Feb 5th at 230 pm',
//         reminder: true,
//     },
//     {
//         id:2,
//         text: 'Meeting at office',
//         day: 'Feb 5th at 5:00 pm',
//         reminder: false,
//     },
//     {
//         id:3,
//         text: 'Shopping at mall',
//         day: 'Feb 5th at 9:00 pm',
//         reminder: true,
//     }
// ];
const Tasks = (props) => {
    
    return (
        <>
         {props.tasks.map((task)=> (
            <div key={task.id}>
            {/* <h3 >{task.text}</h3>   
            <p >{task.day}</p>  */}
            <Task task={task}></Task>
            </div>
         ))}   
        </>
    )
}

Task.propTypes = {

}
Task.defaultProps = {

}
export default Tasks
