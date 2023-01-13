import React from 'react'

function Todo({title,isDone}) {
  return (
    <li key={this.index}>
    <input type="checkbox" checked={isDone} />
    <span>{title}</span>
  </li>
  )
}

export default Todo