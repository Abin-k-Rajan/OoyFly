import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './listcard.scss'

const props = {
    FromStation: 'BLR, Bengaluru Urban',
    Departure: '10:15',
    Layover: 'Indore 2h 50m',
    Duration: '6h 15m',
    Destination: 'DEL New Delhi, India',
    Arrival: '00:20',
    Price: 5629,
    currency: 'INR'
}


function ListCard() {
    return (
        <Fragment>
            <div className="listcard-container my-10">
                <div className="grid grid-cols-5 h-full px-10">
                    <div className="my-auto">
                        <div>
                            <span>
                            <img width={25} height={25} src="./indigo.jpg" />
                            </span>
                        </div>
                        <div className="sub-text">{props.FromStation}</div>
                        <div className="heading">{props.Departure}</div>
                        <div className="sub-text">Layover {props.Layover}</div>
                    </div>
                    <div className="my-auto">
                        <div className="heading">{props.Duration}</div>
                    </div>
                    <div className="my-auto">
                        <div className="sub-text">{props.Destination}</div>
                        <div className="heading">{props.Arrival}</div>
                    </div>
                    <div className="my-auto text-center price-text">
                        <div>{props.Price} {props.currency}</div>
                    </div>
                    <div className="my-auto text-center">
                        <Link to={'/booking/1'}>
                            <button className="book-button">
                                BOOK 
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ListCard;