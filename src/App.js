import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

function App() {

let title = "My activities to do for the week "
  return (
    <div>
    <NavBar title={title} />
    <main>
    <Todo title="learning react" datetime="01st June 2022"/>
    <Todo title="leaening javascript" datetime="01st June 2022"/>
    <Todo title="learning css" datetime="01st June 2022"/>
    <Todo title="practicing html" datetime="01st June 2022"/>
    <Todo title="creating a website" datetime="01st June 2022"/>
    </main>
    </div>
  )
}

export default App