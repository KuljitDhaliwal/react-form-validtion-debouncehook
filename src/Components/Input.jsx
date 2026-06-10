import React from 'react'

function Input({className, options, onChange, value, type}) {
  return (
    <input id={options.id} 
    value={value} 
    name={options.id}
    onChange={onChange}
    placeholder={options.placeholder}
    type={type}
    className={`rounded-lg p-3 px-4 border
    ${className}`}/>
  )
}

export default Input  