import React from 'react'

export const AddTodo = ({ addTodo }) => {
    let title = ""
    let desc = ""

    const submit = (e) => {
        e.preventDefault()
        if(!title || !desc) alert("Title or desc missing")
        else addTodo(title, desc) 
    }

    return (
        <div className="container my-3">
            <form onSubmit = {submit}>
                <h4>Add new Todo</h4>                
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" onChange={(e) => title = e.target.value } class="form-control" id="name" aria-describedby="emailHelp" />
                     </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Description</label>
                    <input type="text" onChange = { (e) => desc = e.target.value } class="form-control" id="desc" />
                </div>              
                <button type="submit" class="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )}

