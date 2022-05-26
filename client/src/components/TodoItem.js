// rfce ~~

import React from 'react'

function TodoItem() {
  return (
    <li className='todoApp_Item'>

        <input type="check box" className='todoApp_Item-checkBox' />
        <div className='todoApp_item-contents'>ToDoList</div>
        <button type='button' className='todoApp_item-addition'>추가</button>
        <button type='button' className='todoApp_item-delete'>삭제</button>

    </li>
  )
}

export default TodoItem