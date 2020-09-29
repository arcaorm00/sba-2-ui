import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const toggleTodo = todoId => dispatch(toggleTodoAction(todoId))
    const deleteTodo = todoId => dispatch(deleteTodoAction(todoId))
    
    return <>
        <p>No Todo at the moment</p>
    </>
}

export default TodoList