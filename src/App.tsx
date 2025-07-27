import { useState } from 'react'
import Todos from './Components/Todo'

function App() {

  return (
    <div>
      <Todos todos={[{
        title: "Hello",
        description: "How are you",
        isCompleted: false
      }]}/>
    </div>
  )
}

export default App
