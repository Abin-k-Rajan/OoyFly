import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { Fragment } from 'react'
import PassengerClassCard from '../CustomInput/PassengerClassCard';
import SearchStation from '../CustomInput/SearchStation';
import './forms.scss'

function UpdateSearchForm() {
    return (
        <Fragment>
            <div className='update-form px-10 py-5'>
                <div className='grid grid-flow-col gap-5'>
                    <div>
                        {/* <label className='white-label'>FROM</label> */}
                        {/* <input type={'text'} className='dark-input' /> */}
                        <SearchStation label='FROM'/>
                    </div>
                    <div>
                        <SearchStation label='TO'/>
                    </div>
                    <div>
                        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className='dark-date-picker'/>
                        </LocalizationProvider> */}
                        <label className='white-label'>DEPARTURE</label>
                        <input type={'date'} className='dark-input cursor-pointer' />
                    </div>
                    <div>
                        <label className='white-label'>RETURN</label>
                        <input type={'date'} className='dark-input cursor-pointer'/>
                    </div>
                    <div>
                        <label className='white-label'>TRAVELLER & CLASS</label>
                        <PassengerClassCard />
                    </div>
                </div>
                <div className='py-6 grid place-content-center'>
                    <button className='update-search-button'>
                        UPDATE SEARCH
                    </button>
                </div>
            </div>
        </Fragment>
    );
}

export default UpdateSearchForm;