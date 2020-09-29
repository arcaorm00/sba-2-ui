import React, { useState } from 'react' // 상속의 개념. 내장 프로퍼티
import uuid from 'uuid/v4' // universally unique identifier, UUID
import { useDispatch } from 'react-redux' // https://redux.js.org/ 리액트용 리덕스
// redux: A Predictable State Container for JS Apps (상태 저장소)
// 코드는 react에 있지만 useState, useDispatch 등은 redux에 속한다.
// react와 redux 두가지 개념이 따로 존재하고 친밀하게 협력한다.
import { addTodoAction } from '../store/todoReducer'

const TodoInput = () => {
    // todo가 CRUD 대상(object)이다. -> TodoInput의 속성이 된다.
    // es6 이전 모드에서는 variable이 var 하나였다.
    // es 6 이후에는 let(변수), const(상수) 두가지로 정의된다.
    // 함수는 const 타입에 할당한다.
    // 여기서 todo와 setTodo는 TodoInput의 것이 아니라 useState의 것.
    // JSON = Java Script Object Notation
    // object {a: 'a', b: ()=>{}}, array []
    // a: 'a', b: ()=>{}의 경우 key이름과 val이 같기에 그냥 a, b로 쓸 수 있다.
    // JSON은 객체이기 때문에 value로 기능이 올 수도 있다!
    const [todo, setTodo] = useState('') // redux를 사용하는 중! (todo의 타입을 결정)
    const dispatch = useDispatch() // react와 redux가 이것으로 연결된다.
    const submitForm = e => {
        e.preventDefault() // 디폴트 이벤트를 막음
        const newTodo = {
            todoId: uuid(),
            name: todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo("")
        document.getElementById('input').value = ''
    }
    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)
    }
    const addTodo = todo => {
        dispatch(addTodoAction(todo)) 
        // 영속적으로 저장할 곳 (state -> api -> database) 으로 보낸다.
    }
    return <>
        <h1>할 일 등록</h1>
        <form onSubmit={submitForm} method="POST">
            <div>
                <input type="text" name="todo" id="input" onChange={handleChange}/>
                <input type="submit" value="ADD_TODO"/>
            </div>
        </form>
    </>
}

export default TodoInput