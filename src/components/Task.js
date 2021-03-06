import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Task = ({task,onDelete}) => {
    return (
        <>
    
            <h3>{task.text}
            <FaTimes style={{color:'red',cursor:'pointer'}}  onClick= {() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
            
        </>
    )
}

Task.propTypes = {

}

Task.defaultProps ={

}

export default Task
