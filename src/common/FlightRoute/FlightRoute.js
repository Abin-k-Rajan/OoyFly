import React, { useEffect, useState } from 'react'
import './flightroute.scss'
import {IoIosAirplane} from 'react-icons/io'
import {TbPointFilled} from 'react-icons/tb'
import PlaneSeating from '../../components/PlaneSeating/PlaneSeating'
import { api_url } from '../../common'
import axios from 'axios'


function FlightRoute({plane_id, number_of_passengers, setNewSelectedSeats}) {

    const [selectSeats, setSelectSeats] = useState(false)

    const [selectedSeats, setSelectedSeats] = useState([])
    const [reservedSeats, setReservedSeats] = useState([])

    const [planeDetails, setPlaneDetails] = useState('')
    let pickedSeats = []

    const [fromStation, setFromStation] = useState('')
    const [toStaiton, setToStation] = useState('')
    const [departure, setDeparture] = useState(0)
    const [departureMins, setDepartureMins] = useState(0)
    const [arrival, setArrival] = useState(0)
    const [arrivalMins, setArrivalMins] = useState(0)

    const [departueDate, setDepartureDate] = useState()
    const [arrivalDate, setArrivalDate] = useState()

    const [hrs, setHrs] = useState()
    const [mins, setMins] = useState()


    const closeSeatingInput = () => {
        setSelectSeats(false)
    }

    const setNewSelectedSeats_main = (seats) => {
        // pickedSeats = seats
        setSelectedSeats(seats)
        setNewSelectedSeats(seats)
    }

    useEffect(() => {
        axios.get(`${api_url}/flights/get-flight-detail?id=${plane_id}`).then(res => {
        setReservedSeats(res.data[0].booked_seats)
        const from_url=`${api_url}/airport/get-airport-details?id=${res.data[0].from}`
        const to_url=`${api_url}/airport/get-airport-details?id=${res.data[0].to}`

        axios.get(from_url).then(res => setFromStation(res.data[0]))
        axios.get(to_url).then(res => setToStation(res.data[0]))

        const departure_date = new Date(res.data[0].departure)
        const arrival_date = new Date(res.data[0].arrival)

        setDepartureDate(departure_date.toDateString())
        setArrivalDate(arrival_date.toDateString())

        setDeparture(departure_date.getHours())
        setDepartureMins(departure_date.getMinutes())
        setArrival(arrival_date.getHours())
        setArrivalMins(arrival_date.getMinutes())

        setMins(res.data[0].duration % 60)
        setHrs(parseInt(res.data[0].duration / 60))
        console.log(planeDetails)
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className='flightroute-container'>
                <div className='grid grid-flow-col grid-cols-[10%_35%_20%_35%]'>
                    <div className='m-auto'>
                        <div className='grid place-content-center'>
                            <div className='m-auto'>
                                <img width={30} src="./indigo.jpg" />
                            </div>
                            <div className='small-text bold'>IndiGo</div>
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='small-text'>{departueDate}</div>
                        <div className='large-text'>{fromStation.iata_code} <span className='bold'>{departure}:{`${departureMins/10 < 1 ? '0' : ''}`}<span>{departureMins}</span></span></div>
                        <div className='small-text'>{fromStation.name}</div>
                    </div>
                    <div className='text-center'>
                        <div className='flex'>
                            <div className='m-auto'>
                                <TbPointFilled className='logo' />
                            </div>
                            <div className='large-text bold'>{hrs}h {mins}m</div>
                            <div className='m-auto'>
                                <IoIosAirplane className='logo' />
                            </div>
                        </div>
                        <div className='small-text'>Flight Duration</div>
                    </div>
                    <div className='px-5'>
                        <div className='small-text'>{arrivalDate}</div>
                        <div className='large-text'>{toStaiton.iata_code} <span className='bold'>{arrival}:{`${arrivalMins/10 < 1 ? '0' : ''}`}<span>{departureMins}</span></span></div>
                        <div className='small-text'>{toStaiton.name}</div>
                    </div>
                </div>
                <div className='small-text px-5 flex place-content-between'>
                    <div>
                    15 Kgs (1 piece only) Check-In, 7 Kgs (1 piece only) Cabin
                    </div>
                    <div>
                        <button className='select-seats-button' onClick={() => setSelectSeats(true)}>
                            SELECT SEATS
                        </button>
                    </div>
                </div>
                <div className={selectSeats === true ? 'show' : 'hidden'}>
                    <PlaneSeating number_of_passengers={number_of_passengers} closeInput={closeSeatingInput} plane_id={plane_id} selectedSeats={selectedSeats} setSelectedSeats={setNewSelectedSeats_main} bookedSeats={reservedSeats}/>
                </div>
            </div>
        </>
    );
}


export default FlightRoute;