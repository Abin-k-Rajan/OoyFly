import React, { Fragment } from "react";
import ListTicket from "../../common/Cards/ListTicket";
import FlightRoute from "../../common/FlightRoute/FlightRoute";
import './userprofile.scss'


function UserProfile () {
    return (
        <Fragment>
            <div className="h-[80vh] py-10">
                <div className="bd-grid container p-10 h-[75vh] overflow-scroll">
                    <div className="text-3xl bold">
                        Hello {'User!!'}
                    </div> 
                    <div>
                        Download your tickets from here
                    </div>
                    <div>
                        <ListTicket />
                        <ListTicket />
                        <ListTicket />
                        <ListTicket />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default UserProfile;