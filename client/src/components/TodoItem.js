// rfce ~~

import React from 'react'
import{ VscWand }from"react-icons/vsc";
import{ VscTrash }from"react-icons/vsc";   


function TodoItem() {
  return (
    <li className='todoApp_Item'>

        <input type="checkbox" className='todoApp_Item-checkBox' />
        <div className='todoApp_item-contents'>ToDoList</div>
        <button type='button' className='todoApp_item-amend'><VscWand/></button>
        <button type='button' className='todoApp_item-delete'><VscTrash/></button>
        

    </li>
  )
}

export default TodoItem