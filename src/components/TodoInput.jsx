import React from 'react'

const TodoInput = () => {
    return <>
        <h1>할 일 등록</h1>
        <form action="">
            <div>
                <input type="text" name="todo"/>
                <input type="submit" value="SUBMIT"/>
            </div>
        </form>
    </>
}

export default TodoInput