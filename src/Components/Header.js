import React from 'react'
import propType from 'prop-types'
import {Link} from 'react-router-dom'

// default export technique, imported as 'Header'
export default function Header(props) { //set default value for prop or line 33 ,ex. {title = "default value"}
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/*  // 'Link' is used to route to home page using react router */}
                <Link classNameName="navbar-brand" to="/"> {props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>                        
                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className ="btn btn-outline-success" type ="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

// To set default for props
Header.defaultProps = {
    title : "Your Title here"
    // more can be added
}

// To set strict type rule
Header.propTypes = {
    title : propType.string
    // more can be added
}