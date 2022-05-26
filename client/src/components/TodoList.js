import React from 'react'
import TodoItem from './TodoItem'

function TodoList() {
  return (
    <div className="todoApp_list">
    <p className="todoApp_list-title">해야할일/완료한일</p>
    <ul className="todoApp_list_ul">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  </div>
  )
}

export default TodoList