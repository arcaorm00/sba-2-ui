import React from 'react'
import Counter from './components/Counter'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import store from './store'
import { Provider } from 'react-redux'
import Signup from './components/Signup'

const App = () => {
  return <>
    <Provider store = {store}>
    <div style={{width: "1000px", margin: "0 auto"}}>
      <Signup/>
    </div>
    </Provider>
  </>
}

export default App;
