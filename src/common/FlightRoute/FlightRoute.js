import React, { useState } from 'react'
import './flightroute.scss'
import {IoIosAirplane} from 'react-icons/io'
import {TbPointFilled} from 'react-icons/tb'
import PlaneSeating from '../../components/PlaneSeating/PlaneSeating'


function FlightRoute({plane_id, number_of_passengers, setNewSelectedSeats}) {

    const [selectSeats, setSelectSeats] = useState(false)

    const [selectedSeats, setSelectedSeats] = useState([])
    let pickedSeats = []


    const closeSeatingInput = () => {
        setSelectSeats(false)
    }

    const setNewSelectedSeats_main = (seats) => {
        // pickedSeats = seats
        setSelectedSeats(seats)
        setNewSelectedSeats(seats)
    }

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
                        <div className='small-text'>31 Mar Fri 2023</div>
                        <div className='large-text'>BLR <span className='bold'>16:15</span></div>
                        <div className='small-text'>Bengaluru International Airport</div>
                    </div>
                    <div className='text-center'>
                        <div className='flex'>
                            <div className='m-auto'>
                                <TbPointFilled className='logo' />
                            </div>
                            <div className='large-text bold'>1h 15m</div>
                            <div className='m-auto'>
                                <IoIosAirplane className='logo' />
                            </div>
                        </div>
                        <div className='small-text'>Flight Duration</div>
                    </div>
                    <div className='px-5'>
                        <div className='small-text'>31 Mar Fri 2023</div>
                        <div className='large-text'>MAA <span className='bold'>17:15</span></div>
                        <div className='small-text'>Chennai International Airport</div>
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
                    <PlaneSeating number_of_passengers={number_of_passengers} closeInput={closeSeatingInput} plane_id={plane_id} selectedSeats={selectedSeats} setSelectedSeats={setNewSelectedSeats_main}/>
                </div>
            </div>
        </>
    );
}


export default FlightRoute;