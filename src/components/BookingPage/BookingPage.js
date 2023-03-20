import React, { Fragment } from "react";
import FlightRoute from "../../common/FlightRoute/FlightRoute";


function BookingPage() {
    return (
        <Fragment>
            <div className="bd-container my-10">
                <div className="w-full bd-grid">
                    <div className="grid grid-flow-col grid-cols-[70%_30%]">
                        <div className="grid grid-flow-row mr-5">
                            <div>TICKET DETAILS</div>
                            <div className="block">
                                <FlightRoute />
                                <FlightRoute />
                            </div>
                        </div>
                        <div className="ml-5">
                            FARE SUMMARY
                        </div>
                    </div>
                </div>
            </div>
            <div className="bd-container">
                <div className="w-full bd-grid">
                    <div>
                        TRAVELLER DETAILS
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default BookingPage;