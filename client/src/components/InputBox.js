import React from 'react'

function InputBox() {
  return (
    <div className="todoApp_inputbox">
    <input
      type="text"
      placeholder="할 일을 입력해주세요"
      className="todoApp_inputbox-input"
    />
    <button type="submit" className="todoApp__inputbox-add">
      추가
    </button>
  </div>
  )
}

export default InputBox