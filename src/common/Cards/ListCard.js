import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { IoIosAirplane } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { api_url } from "../../common";
import './listcard.scss'


function ListCard({props, travellerClassData}) {
    const [fromStation, setFromStation] = useState('')
    const [toStaiton, setToStation] = useState('')
    const [departure, setDeparture] = useState(0)
    const [departureMins, setDepartureMins] = useState(0)
    const [arrival, setArrival] = useState(0)
    const [arrivalMins, setArrivalMins] = useState(0)
    const [displayDate, setDisplayDate] = useState('')

    const [hrs, setHrs] = useState()
    const [mins, setMins] = useState()

    useEffect(() => {
        const from_url=`${api_url}/airport/get-airport-details?id=${props.from}`
        const to_url=`${api_url}/airport/get-airport-details?id=${props.to}`

        axios.get(from_url).then(res => setFromStation(res.data[0]))
        axios.get(to_url).then(res => setToStation(res.data[0]))

        const departure_date = new Date(props.departure)
        const arrival_date = new Date(props.arrival)

        setDisplayDate(`${departure_date.getDate()}/${departure_date.getMonth() + 1}/${departure_date.getFullYear()}`)

        setDeparture(departure_date.getHours())
        setDepartureMins(departure_date.getMinutes())
        setArrival(arrival_date.getHours())
        setArrivalMins(arrival_date.getMinutes())

        setMins(props.duration % 60)
        setHrs(parseInt(props.duration / 60))
    }, [])


    return (
        <Fragment>
            <div className="listcard-container my-10">
                <div className="grid grid-cols-5 h-full px-10">
                    <div className="my-auto">
                        <div className="flex gap-4">
                            <span>
                            <img width={25} height={25} src="./indigo.jpg" />
                            </span>
                            <span>{props.airplane_name}</span>
                            <span className="text-sm bold">{displayDate}</span>
                        </div>
                        <div className="sub-text">{fromStation.name}</div>
                        <div className="heading">{departure}:{`${departureMins/10 < 1 ? '0' : ''}`}{departureMins}</div>
                        <div className="sub-text">{fromStation.municipality} {fromStation.iata_code} {fromStation.ident}</div>
                    </div>
                    <div className="my-auto flex">
                            <div className='m-auto'>
                                <TbPointFilled className='logo' />
                            </div>
                            <div className='large-text bold'>{hrs}h {mins}m</div>
                            <div className='m-auto'>
                                <IoIosAirplane className='logo' />
                            </div>
                    </div>
                    <div className="my-auto">
                        <div className="sub-text">{toStaiton.name}</div>
                        <div className="heading">{arrival}:{`${departureMins/10 < 1 ? '0' : ''}`}<span>{arrivalMins}</span></div>
                        <div className="sub-text">{toStaiton.municipality} {toStaiton.iata_code} {toStaiton.ident}</div>
                    </div>
                    <div className="my-auto text-center price-text flex place-content-center gap-2">
                        <div className="text-sm bold my-auto">Starting at</div> 
                        <div>&#x20B9; {props.rate}</div>
                    </div>
                    <div className="my-auto text-center">
                        <Link to={`/booking`}
                                    state={{id: props._id, travellerClassData: travellerClassData, departure: departure, rate: props.rate}}>
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