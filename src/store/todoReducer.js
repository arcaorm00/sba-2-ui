export const addTodoAction = todo => ({
    type: "ADD_TODO",
    payload: todo
}) // ({}): JSON을 리턴함을 명시한다. {}와 구분하기 위함.

export const toggleTodoAction = todoId => ({
    type: "TOGGLE_TODO",
    payload: todoId
})

export const deleteTodoAction = todoId => ({
    type: "DELETE_TODO",
    payload: todoId
})

const initialState = {todos: []}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {...state, todos: [...state.todos, action.payload]}
            // ...state: 나머지. 이전 상태도 유지한다.
        case "TOGGLE_TODO":
            return {...state, todos: 
                state.todos.map(todo => todo.todoId === action.payload?
                    {...todo, complete: !todo.complete}: todo)
            } // map: for-each 구문과 비슷
        case "DELETE_TODO":
            return {...state, todos: state.todos.filter(todo => todo.todoId !== action.payload)}
            // filter: todoid가 payload와 같지 않은 것만 걸러내니 todoid가 곧 삭제된다.
        default:
            return state
    }
}

export default todoReducer