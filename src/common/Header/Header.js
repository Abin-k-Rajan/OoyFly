import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import './header.scss'

function Header(props) {
    const {user, auth} = useAuth()
    return (
        <Fragment>
            <div className="grid grid-flow-col py-2 px-4 place-content-between">
                <div>
                    <img className="logo-img" src="./logo-new.png" />
                </div>
                <div className="grid grid-flow-col gap-5 place-content-center">
                    <Link to='/list-flight'>Flights</Link>
                    <Link to={'/profile'}>Tickets</Link>
                </div>
                <div className="grid place-content-center">
                    <Link to={'/login'}>
                        {
                            auth == true ?
                            <button>{user}</button> : 
                            <button>LOGIN / SIGNUP</button>
                        }
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;