import React from 'react'

import TodoList from '../components/TodoList'
import InputBox from '../components/InputBox' 


function Home() {
  return (
      <div className='todoApp_home'>
        <InputBox/>
        <TodoList/>
        <TodoList/>
      </div>
    
  )
}

export default Home