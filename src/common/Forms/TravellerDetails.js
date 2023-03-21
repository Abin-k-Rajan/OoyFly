import { TextField } from '@mui/material';
import React, { Fragment } from 'react'

const num_of_passengers = 3;

function TravellerDetails () {
    return (
        <Fragment>
            <div className='container mr-5'>
                <div className='p-5 pr-10'>
                    <div>
                        <div className='bold'>TRAVELLER DETAILS</div>
                        <div className='small-text ml-1'>Note: Ticket will be sent to the mail address</div>
                        <div className='small-text ml-1 italic'>DISCLAIMER: Passenger name needs to match with valid govt. ID proof</div>
                        <hr className='my-4'></hr>
                    </div>
                    <div>
                        {
                            Array.apply(0, Array(num_of_passengers)).map(function (val, index) {
                                return <div className='my-5 grid grid-cols-[30%_70%] place-content-center content-center'>
                                    <div className='h-full small-text bold text-center'><p className='my-5'>Passenger's Name</p></div>
                                    <TextField className='w-full' id={`passenger${index}`} label={`Passenger ${index + 1}`} variant='outlined'/>
                                </div>
                            })
                        }
                    </div>
                    <div>
                        <div className='my-5 grid grid-cols-[30%_70%] place-content-end'>
                            <div className='small-text bold text-center'><div className='my-5'>Email Address</div></div>
                            <TextField className='w-full' id='mail_address' label='Email Address' />
                        </div>
                        <div className='my-5 grid grid-cols-[30%_70%] place-content-end'>
                            <div className='small-text bold text-center'><div className='my-5'>Phone Number</div></div>
                            <TextField className='w-full' id='phone_number' label='Phone Number' />
                        </div>
                    </div>
                    <div className='flex place-content-end'> 
                        <button className='proceed-button'>
                            PROCEED
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default TravellerDetails;