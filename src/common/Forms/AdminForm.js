import { TextField } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { api_url } from '../../common';
import SearchStation from '../CustomInput/SearchStation';
import './forms.scss'


function AdminForm() {

    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [name, setName] = useState()
    const [photo, setPhoto] = useState()
    const [departure, setDeparture] = useState()
    const [arrival, setArrival] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()

    const formSubmit = () => {
        const departure_time = new Date(departure)
        const arrival_time = new Date(arrival)
        const duration = ((arrival_time - departure_time) / (60 * 1000))
        const data = {
            'from': from,
            'to': to,
            'airplane_name': name,
            'duration': duration,
            'departure': departure,
            'arrival': arrival,
            'rate': price,
            'description': description,
            'photo': photo
        }
        axios.post(`${api_url}/flights/add-flight`, data).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Fragment>
            <div className='p-12'>
                    <div className="text-inputs grid grid-flow-col gap-5 py-5">
                        <div className='relative'>
                            <SearchStation label='FROM' theme='light' setStation={setFrom}/>
                        </div>
                        <div className='relative'>
                            <SearchStation label='TO' theme='light' setStation={setTo}/>
                        </div>
                    </div>
                    <div className="text-inputs grid grid-flow-col gap-5 py-5">
                        <div className='relative'>
                            <TextField className='w-full' label='Airplane Name' onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='relative'>
                            <TextField className='w-full' label='Airplane Photo Link' onChange={(e) => setPhoto(e.target.value)}/>
                        </div>
                    </div>
                    <div className="text-inputs grid grid-flow-col gap-5 py-5">
                        <div className='relative'>
                            <label for="departure">Departure:</label>
                            <input type="datetime-local" id="departure" name="departure" onChange={(e) => setDeparture(e.target.value)}/>
                        </div>
                        <div className='relative'>
                            <label for="departure">Arrival:</label>
                            <input type="datetime-local" id="arrival" name="arrival" onChange={(e) => setArrival(e.target.value)}/>
                        </div>
                    </div>
                    <div className="text-inputs grid grid-flow-col gap-5 py-5">
                        <div className='relative'>
                            <TextField className='w-full' label='Price' onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <div className='relative'>
                            <TextField className='w-full' label='Airplane Description' onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <button onClick={formSubmit}>Create Flight Route</button>
                    </div>
            </div>
        </Fragment>
    );
}

export default AdminForm;