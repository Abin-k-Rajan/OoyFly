import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { api_url } from "../../common";
import ListTicket from "../../common/Cards/ListTicket";
import FlightRoute from "../../common/FlightRoute/FlightRoute";
import './userprofile.scss'


function UserProfile () {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const user_id = localStorage.getItem('user_id')
        axios.get(`${api_url}/user/get-tickets?user_id=${user_id}`).then(res => setTickets(res.data))
    }, [])

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
                        {
                            tickets.map((val, index) => (
                                <ListTicket plane_id={val.flight_route_id} passengers={val.passengers} seats={val.seats}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default UserProfile;