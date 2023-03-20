import React from 'react'
import './flightroute.scss'


function FlightRoute() {
    return (
        <>
            <div className='container'>
                <div className='grid grid-flow-col grid-cols-[40%_20%_40%]'>
                    <div className='px-5'>
                        <div>31 Mar Fri 2023</div>
                        <div>BLR 16:15</div>
                        <div>Bengaluru International Airport</div>
                    </div>
                    <div className='text-center'>
                        <div>1h</div>
                        <div>Flight Duration</div>
                    </div>
                    <div className='px-5'>
                        <div>31 Mar Fri 2023</div>
                        <div>MAA 17:15</div>
                        <div>Chennai International Airport</div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default FlightRoute;