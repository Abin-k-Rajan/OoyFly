import React, { Fragment } from "react";
import './header.scss'

function Header(props) {
    return (
        <Fragment>
            <div className="grid grid-flow-col py-2 px-4 place-content-between">
                <div>
                    <img className="logo-img" src="./logo-new.png" />
                </div>
                <div className="grid grid-flow-col gap-5 place-content-center">
                    <div>Flights</div>
                    <div>Book Flight</div>
                </div>
                <div className="grid place-content-center">
                    <div>
                        LOGIN / SIGNUP
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;