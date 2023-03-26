import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useAuth } from "../../AuthProvider";
import { api_url } from "../../common";
import ListTicket from "../../common/Cards/ListTicket";
import './userprofile.scss'


function UserProfile () {
    const [tickets, setTickets] = useState([])
    const {user, auth} = useAuth()

    useEffect(() => {
        if (auth == true)
            axios.get(`${api_url}/user/get-tickets?user_id=${user._id}`).then(res => setTickets(res.data)).catch(err => {
                console.log('No Tickets booked')
            })
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
                            auth == true ? 
                            tickets.map((val, index) => (
                                <ListTicket plane_id={val.flight_route_id} passengers={val.passengers} seats={val.seats}/>
                            )) :
                            <div className="text-3xl">Please Login to View your Tickets</div>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default UserProfile;