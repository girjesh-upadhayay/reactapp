import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {

    return (
       <>
           <button onClick={props.onClick} className="btn btn-default" style={{backgroundColor:props.color}} >{props.text}</button>  
        </>
    )
}

Button.propTypes = {

    text:PropTypes.string,
    onClick:PropTypes.func,
}

Button.defaultProps = {
    color:'steelblue',
    
}
export default Button
