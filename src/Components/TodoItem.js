import React from 'react'


export default function TodoItem(props) {

    return (
        
        <div>
            <h3>{props.todo.name}</h3>
            <p>{props.todo.description}</p>
       
        <button className="btn-primary btn-sm" onClick={()=>{props.onDelete(props.todo.id)}}>Delete</button>
        </div>
    )
}
