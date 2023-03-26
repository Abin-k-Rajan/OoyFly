import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { api_url } from '../../common';
import ListCard from '../../common/Cards/ListCard';
import Searchform from '../../common/Forms/Searchform';
import UpdateSearchForm from '../../common/Forms/UpdateSearchForm';



function ListPage() {
    const location = useLocation()
    const { state } = location


    const [fromStaiton, setFromStation] = useState(null)
    const [toStation, setToStation] = useState(null)
    const [departure, setDeparture] = useState(null)
    const [travellerClassData, setTravellerClassData] = useState(null)

    const [flights, setFlights] = useState([])

    useEffect(() => {
        const setStates = async () => {
            setFromStation(state.from)
            setToStation(state.to)
            setDeparture(state.departure)
            setTravellerClassData(state.travllerClassData)
            return 'check'
        }
        // updateSearchFunction()
        setStates().then(res => {
            const date = new Date(state.departure)
            const url = `${api_url}/flights/get-flights?from=${state.from}&to=${state.to}&date=${date.toISOString()}`
            axios.get(url).then(res => {
                setFlights(res.data)
                console.log(res.data)
            }).catch(err => {console.log(err);
                alert('Flight Route Not Available!! Please add a new route through Admin Page for demo!!')
            })
        })
    }, [])

    const updateSearchFunction = () => {
        if (fromStaiton === null || toStation === null || departure === null || travellerClassData === null) {
            alert('Please fill all the details to search!!')
            return
        }
        const date = new Date(departure)
        const url = `${api_url}/flights/get-flights?from=${fromStaiton}&to=${toStation}&date=${date.toISOString()}`
        axios.get(url).then(res => {
            setFlights(res.data)
            console.log(res.data)
        }).catch(err => {console.log(err);
            alert('Flight Route Not Available!! Please add a new route through Admin Page for demo!!')
        })
        console.log(new Date(departure).toISOString())
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