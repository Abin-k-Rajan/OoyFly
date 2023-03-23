import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { api_url } from '../../common';
import ListCard from '../../common/Cards/ListCard';
import Searchform from '../../common/Forms/Searchform';
import UpdateSearchForm from '../../common/Forms/UpdateSearchForm';



function ListPage() {

    const [fromStaiton, setFromStation] = useState(0)
    const [toStation, setToStation] = useState(0)
    const [departure, setDeparture] = useState('')
    const [travellerClassData, setTravellerClassData] = useState({})

    const [flights, setFlights] = useState([])

    const updateSearchFunction = () => {
        const url = `${api_url}/flights/get-flights?from=${fromStaiton}&to=${toStation}`
        axios.get(url).then(res => setFlights(res.data)).catch(err => console.log(err))
    }
    return (
        <Fragment>
            <UpdateSearchForm fromStaiton={fromStaiton} setFromStation={setFromStation} toStation={toStation} setToStation={setToStation} departure={departure} setDeparture={setDeparture} travellerClassData={travellerClassData} setTravellerClassData={setTravellerClassData} UpdateSearchFunction={updateSearchFunction}/>
            <div className='bd-grid'>
            {
                flights.length == 0 ? <div className='my-10 text-4xl bold flex place-content-center'><div>Flights Not Available ://</div></div> : 
                flights.map((val) => (
                    <ListCard props={val} travellerClassData={travellerClassData} />
                ))
            }
            </div>
        </Fragment>
    );
}

export default ListPage;