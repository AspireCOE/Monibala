import React from 'react'
import { useState } from 'react'

function Label() {
    const [value,setValue] = useState('')
    const option=[
        {label:"1",value:1},
        {label:"2",value:2},
        {label:"3",value:3},
        {label:"4",value:4},
        {label:"5",value:5},
        {label:"6",value:6},
        {label:"7",value:7},
        {label:"8",value:8},
        {label:"9",value:9},
    ]
    function selection(event){
        setValue(event.target.value)
    }
  return (
    <div className="d-flex justify-content-center mt-5">
        <div className="w-100 p-3 border rounded">
      <h1>Get selected value</h1>
      <select className="form-select" onChange={selection}>
        {option.map(option=>(
            <options value={option.value}>{option.label}</options>
        ))}
      </select>
      </div>
      <p>{value}</p>
    </div>
  )
}

export default Label
