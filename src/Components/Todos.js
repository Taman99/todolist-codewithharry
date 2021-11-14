import React from 'react'
import TodoItem from './TodoItem'

// named export technique, imported as '{ Todos }'
export const Todos = (props) => {
    return (
        <div className="container my-3">
            <h3 className="text-center my-3">Todo List</h3> 
            { props.todos.length > 0 ? props.todos.map( (todo) => {
                return <> < TodoItem todo={ todo } key={todo.id} onDelete={props.onDelete}/> <hr/> </>
            }) : "No todo to display" }
            
        </div>
    )
}
