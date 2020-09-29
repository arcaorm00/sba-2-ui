import React from 'react'
import Counter from './components/Counter'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


const App = () => {
  return <>
    <div style={{width: "150px", margin: "0 auto"}}>
      <TodoInput/>
      <br/>
      <TodoList/>
  </div>
  </>
}

export default App;
