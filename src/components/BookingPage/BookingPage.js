import React, { Fragment, useEffect, useState } from "react";
import FlightRoute from "../../common/FlightRoute/FlightRoute";
import './bookingpage.scss'
import { RiFlightTakeoffFill } from 'react-icons/ri';
import Guideline from "../../common/Guidelines/Guidelines";
import FareSummary from "../../common/FareSummary/FareSummary";
import TravellerDetails from "../../common/Forms/TravellerDetails";
import PlaneSeating from "../PlaneSeating/PlaneSeating";
import { useLocation, useNavigate } from "react-router-dom";
import { api_url } from "../../common";
import axios from "axios";
import { useAuth } from "../../AuthProvider";

function BookingPage(props) {
    const location = useLocation()
    const { state } = location
    const traveller_and_class = state.travellerClassData.split(" ")
    traveller_and_class[0] = parseInt(traveller_and_class[0])
    traveller_and_class[1] = parseInt(traveller_and_class[1])
    traveller_and_class[2] = parseInt(traveller_and_class[2])

    const navigate = useNavigate()

    const [newSelectedSeats, setNewSelectedSeats] = useState([])

    console.log(traveller_and_class)
    const [grand_total, setGrandTotal] = useState(0)
    const {auth, user} = useAuth()

    const fees = [923, 899, -255]

    const compute_base_fare = () => {
        let rate = 0
        rate = parseInt(state.rate) * traveller_and_class[0] +
            parseInt(state.rate - 0.25 * state.rate) * traveller_and_class[1] +
            parseInt(state.rate - 0.5 * state.rate) * traveller_and_class[2]
        return rate
    }

    const fare_details = [
        {
            'Name': 'Base Fare',
            'Value': compute_base_fare(),
            'Details': [
                {'Name': 'Adult', 'Value': state.rate, 'Count': traveller_and_class[0]},
                {'Name': 'Child', 'Value': parseInt(state.rate - 0.25 * state.rate), 'Count': traveller_and_class[1]},
                {'Name': 'Infant', 'Value': parseInt(state.rate - 0.5 * state.rate), 'Count': traveller_and_class[2]},
            ]   
        },
        {
            'Name': 'Taxes and Sucharges',
            'Value': fees[0],
            'Details': []
        },
        {
            'Name': 'Add Ons',
            'Value': fees[1],
            'Details': [
                {'Name': 'Zero Cancellation', 'Value': fees[1], 'Count': 1}
            ]
        },
        {
            'Name': 'Discount',
            'Value': fees[2],
            'Details': [
                {
                    'Name': 'GISUPER', 'Value': fees[2], 'Count': 1
                }
            ]
        }
    ]

    useEffect(() => {
        compute_grand_total()
    }, [])

    const compute_grand_total = () => {
        let total = 0
        fare_details.map(val => {
            val.Details.map(costs => {
                total += costs.Value * costs.Count
            })
        })
        console.log(total)
        setGrandTotal(total)
    }

    const book_ticket = async (v) => {
        if (auth == false)
        {
            alert('Please Login to Purchase Ticket !!')
            return;
        }
        if (newSelectedSeats.length != (traveller_and_class[0] + traveller_and_class[1])) {
            alert('Plase select seats!!!')
            return;
        }
        const user_id = user._id
        const booking_data = {
            passengers: v.passengers,
            seats: newSelectedSeats,
            user_id: user_id,
            flight_route_id: state.id,
            departure: state.departure
        }
        const booked_seats_data = {
            id: state.id,
            booked_seats: newSelectedSeats
        }
        if (auth === false)
        {
            alert('Please login to purchase ticket')
            return
        }
        console.log(newSelectedSeats)
        const url = `${api_url}/user/add-ticket`
        axios.post(url, booking_data).then(res => alert("Ticket purchased, Please view your profile to download ticket")).catch(err => console.log(err))
        axios.post(`${api_url}/flights/book-seat`, booked_seats_data).then(res => {
            alert('Ticket booked!!')
            navigate('/profile')
        }).catch(err => console.log('Booking failed'))
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
                                            Flying made easy ooyfly
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                                <div className="block">
                                    <FlightRoute setNewSelectedSeats={setNewSelectedSeats} plane_id={state.id} number_of_passengers={traveller_and_class[0] + traveller_and_class[1]} photo={state.photo} name={state.name}/>
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