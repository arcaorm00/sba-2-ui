import React, { useState } from 'react'
import uuid from 'uuid/4' // universally unique identifier, UUID
import {} from 'react-redux' // https://redux.js.org/
// redux: A Predictable State Container for JS Apps (상태 저장소)
// 코드는 react에 있지만 useState를 비롯한 모든 {}는 redux에 속한다.
// react와 redux 두가지 개념이 따로 존재하고 친밀하게 협력한다.

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
    const [todo, setTodo] = useState('') // todo의 타입을 결정
    const submitForm = e => {
        e.preventDefault() // 디폴트 이벤트를 막음
        const newTodo = {
            todoId: uuid(),
            name: todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo("")
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
                <input type="text" name="todo" onChange={handleChange}/>
                <input type="submit" value="ADD TODO"/>
            </div>
        </form>
    </>
}

export default TodoInput