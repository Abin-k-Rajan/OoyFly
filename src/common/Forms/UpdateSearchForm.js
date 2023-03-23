import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { Fragment, useState } from 'react'
import PassengerClassCard from '../CustomInput/PassengerClassCard';
import SearchStation from '../CustomInput/SearchStation';
import './forms.scss'

function UpdateSearchForm() {

    const [fromStaiton, setFromStation] = useState(0)
    const [toStation, setToStation] = useState(0)
    const [departure, setDeparture] = useState('')
    const [travellerClassData, setTravellerClassData] = useState({})

    const updateSearch = (event) => {
        console.log(`${fromStaiton} ${toStation} ${departure} ${travellerClassData}`)
        // event.preventDefault();
    }

    return (
        <Fragment>
            <div className='update-form px-10 py-5'>
                    <div className='grid grid-flow-col gap-5'>
                        <div>
                            <SearchStation label='FROM' setStation={setFromStation}/>
                        </div>
                        <div>
                            <SearchStation label='TO' setStation={setToStation}/>
                        </div>
                        <div>
                            <label className='white-label'>DEPARTURE</label>
                            <input type={'date'} className='dark-input cursor-pointer' onChange={(e) => setDeparture(e.target.value)} />
                        </div>
                        <div>
                            <label className='white-label'>TRAVELLER & CLASS</label>
                            <PassengerClassCard onValueChange={setTravellerClassData}/>
                        </div>
                    </div>
                    <div className='py-6 grid place-content-center'>
                        <button className='update-search-button' onClick={updateSearch}>
                            UPDATE SEARCH
                        </button>
                    </div>
            </div>
        </Fragment>
    );
}

export default UpdateSearchForm;