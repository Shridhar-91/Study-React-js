import React,{useState, useReducer} from "react";

const initialState = {
    todos : []
}

const reducer = (state, action) =>{
    switch (action.type){
        case "ADD_TODO":
            return {
                todos:[ ...state.todos, {id:Date.now(), text : action.payload},],
            };
        case "DELETE_TODO": 
        return {
            todos:state.todos.filter(
                (todo) => todo.id !== action.payload),
        };
        default:
            return state;
    }
}

const toDoReducer = () => {
    const [text, setText] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodo =()=> {
        if(!text.trim()) return;
        dispatch({
            type: "ADD_TODO",
            payload:text,
        });
        setText("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>useReducer Todo Example</h1>
            <input type="text" placeholder="Enter the Todo" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button onClick={addTodo}>Add Todo</button>
            <hr />
            {state.todos.map((todo) => (
                <div key={todo.id}>
                    <p>{todo.text}</p>
                    <button onClick={() => dispatch({
                        type: "DELETE_TODO",
                        payload: todo.id
                    })}>Delete</button>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default toDoReducer;