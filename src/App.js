import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { AddTodo } from "./Components/AddTodo";
import { Footer } from "./Components/Footer";
import About from "./Components/About"
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "TOdo1",
      description: "fgfdghghfgfgdf",
    },
    {
      id: 2,
      name: "TOdo2",
      description: "fgfdghghfgfgdf",
    },
    {
      id: 3,
      name: "TOdo3",
      description: "fgfdghghfgfgdf",
    },
  ]);

  function onDelete(id) {
    setTodos(() => {
      return todos.filter((todo) => todo.id !== id);
    });
  }

  function addTodo(title, desc) {
    const newTodo = {
      name: title,
      description: desc,
      id: 0,
    };
    if (todos.length !== 0) newTodo.id = todos[todos.length - 1].id + 1;
    setTodos([...todos, newTodo]);
  }

  return (
    /* install 'npm install react-router-dom' */
    <Router>
      <Header title="My Todo list" />
      <Switch>
      {/* Way 1 to set Route */}
        <Route exact path="/">
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
        </Route>
        {/*  Way 2 to set Route */}
        <Route path="/about" render={() => {
          return( <About /> )
        }}>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  
  );
}

export default App;
