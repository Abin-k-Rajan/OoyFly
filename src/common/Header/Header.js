import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import './header.scss'

function Header(props) {
    const {user, auth, setAuth, setUser} = useAuth()

    const logout = () => {
        setUser(null)
        setAuth(false)
    }

    return (
        <Fragment>
            <div className="grid grid-flow-col py-2 px-4 place-content-between">
                <Link to='/'>
                    <img className="logo-img" src="./logo-new.png" />
                </Link>
                <div className="grid grid-flow-col gap-5 place-content-center">
                    <Link to='/list-flight'>Flights</Link>
                    <Link to={'/profile'}>Tickets</Link>
                </div>
                <div className="grid place-content-center">
                        {
                            auth == true ?
                            <Link to = {'/login'}>
                                <button><span className="bold">Hello&nbsp;</span> {user.username}!! {`(Logout)`}</button>
                            </Link> : 
                            <Link to={'/login'}>
                                <button>LOGIN / SIGNUP</button>
                            </Link>
                        }
                </div>
            </div>
        </Fragment>
    );
}

export default Header;