import React from 'react'
import './style.css';

const Button = props => {
  const classes = `button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}`

  return <button 
    className={classes}
    onClick={() => props.click && props.click(props.label)}>
    {props.label}
  </button>
}


export default Button