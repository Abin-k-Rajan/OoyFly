import React, { Fragment } from "react";
import FlightRoute from "../../common/FlightRoute/FlightRoute";
import './bookingpage.scss'
import { RiFlightTakeoffFill } from 'react-icons/ri';
import Guideline from "../../common/Guidelines/Guidelines";
import FareSummary from "../../common/FareSummary/FareSummary";
import TravellerDetails from "../../common/Forms/TravellerDetails";

function BookingPage() {
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
                                    <FlightRoute />
                                    <FlightRoute />
                                </div>
                            </div>
                            <div>
                                <Guideline />
                            </div>
                            <div className="mr-5">
                                <TravellerDetails />
                            </div>
                        </div>
                        <div>
                            <FareSummary />
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default BookingPage;