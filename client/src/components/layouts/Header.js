import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {
    const [loginUser, setLoginUser] = useState('')
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'))
        if(userData) {
            setLoginUser(userData)
        }
    }, [])

    const navigate = useNavigate()
    const logOutHandler = () => {
        localStorage.removeItem('user');
        message.success('Logout Successful')
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-grow-1 justify-content-center">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link">Link</Link>
                </li>
            </ul>
            <h4>{loginUser && loginUser.name }</h4>
            <button className="btn btn-danger" onClick={logOutHandler}>Log Out</button>
            </div>
        </div>
        </nav>

    )
}

export default Header