import React, { Fragment, useEffect, useState } from "react";
import FlightRoute from "../../common/FlightRoute/FlightRoute";
import './bookingpage.scss'
import { RiFlightTakeoffFill } from 'react-icons/ri';
import Guideline from "../../common/Guidelines/Guidelines";
import FareSummary from "../../common/FareSummary/FareSummary";
import TravellerDetails from "../../common/Forms/TravellerDetails";
import PlaneSeating from "../PlaneSeating/PlaneSeating";
import { useLocation } from "react-router-dom";
import { api_url } from "../../common";
import axios from "axios";

function BookingPage(props) {
    const location = useLocation()
    const { state } = location
    const traveller_and_class = state.travellerClassData.split(" ")
    traveller_and_class[0] = parseInt(traveller_and_class[0])
    traveller_and_class[1] = parseInt(traveller_and_class[1])
    traveller_and_class[2] = parseInt(traveller_and_class[2])

    const [newSelectedSeats, setNewSelectedSeats] = useState([])

    console.log(traveller_and_class)

    const grand_total = 3049;

    const fare_details = [
        {
            'Name': 'Base Fare',
            'Value': 3800,
            'Details': [
                {'Name': 'Adult', 'Value': 1900, 'Count': traveller_and_class[0]},
                {'Name': 'Child', 'Value': 1900, 'Count': traveller_and_class[1]},
                {'Name': 'Infant', 'Value': 1900, 'Count': traveller_and_class[2]},
            ]   
        },
        {
            'Name': 'Taxes and Sucharges',
            'Value': 923,
            'Details': []
        },
        {
            'Name': 'Add Ons',
            'Value': 899,
            'Details': [
                {'Name': 'Zero Cancellation', 'Value': 899, 'Count': 1}
            ]
        },
        {
            'Name': 'Discount',
            'Value': 255,
            'Details': [
                {
                    'Name': 'GISUPER', 'Value': 255, 'Count': 1
                }
            ]
        }
    ]

    const book_ticket = async (v) => {
        const user_id = await localStorage.getItem("user_id")
        const booking_data = {
            passengers: v.passengers,
            seats: newSelectedSeats,
            user_id: user_id,
            flight_route_id: state.id
        }
        const url = `${api_url}/user/add-ticket`
        axios.post(url, booking_data).then(res => alert("Ticket purchased, Please view your profile to download ticket")).catch(err => console.log(err))
    }


    return (
        <Fragment>
            <div className="bd-container my-10">
                <div className="w-full bd-grid">
                    <div className="grid grid-flow-col grid-cols-[70%_30%]">
                        <div>
                            <div className="grid grid-flow-row mr-5 ticket-details">
                                <div className="px-5 py-5">
                                    <div className="sub-heading">TICKET DETAILS</div>
                                    <div className="flex gap-2 mb-2">
                                        <div>
                                            <RiFlightTakeoffFill className="logo" />
                                        </div>
                                        <div>
                                            Bengaluru to New Delhi
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                                <div className="block">
                                    <FlightRoute setNewSelectedSeats={setNewSelectedSeats} plane_id={state.id} number_of_passengers={traveller_and_class[0] + traveller_and_class[1]} />
                                </div>
                            </div>
                            <div>
                                <Guideline />
                            </div>
                            <div className="mr-5">
                                <TravellerDetails num_of_passengers={traveller_and_class[0] + traveller_and_class[1]} proceedFunction={book_ticket}/>
                                {/* <PlaneSeating />
                                <PlaneSeating/> */}
                            </div>
                        </div>
                        <div>
                            <FareSummary travellerClassData={traveller_and_class} fare_details={fare_details} grand_total={grand_total} />
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default BookingPage;