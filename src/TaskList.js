import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  return(
    props.tasks !== null ? props.tasks.map(task => <Task key={task.id} task={task}/>) : null
  )
}

export default TaskList
