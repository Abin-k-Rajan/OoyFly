import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { api_url } from "../../common";
import './searchstation.scss'


const stations_1 = [
    {id: 1, station: 'Bangalore BLR'},
    {id: 2, station: 'Bangalore SBC'},
    {id: 3, station: 'Chenna CNB'},
    {id: 4, station: 'Delhi DLR'},
    {id: 5, station: 'Chandigarh CGH'},
    {id: 6, station: 'Trivandrum TVC'},
    {id: 7, station: 'Kochi KCV'},
    {id: 8, station: 'Guhati GHL'},
    {id: 9, station: 'Lucknow LKN'},
    {id: 1, station: 'Bangalore BLR'},
    {id: 2, station: 'Bangalore SBC'},
    {id: 3, station: 'Chenna CNB'},
    {id: 4, station: 'Delhi DLR'},
    {id: 5, station: 'Chandigarh CGH'},
    {id: 6, station: 'Trivandrum TVC'},
    {id: 7, station: 'Kochi KCV'},
    {id: 8, station: 'Guhati GHL'},
    {id: 9, station: 'Lucknow LKN'}    
]


function SearchStation({label, theme, onChangeValue, setStation}) {

    const [stations, setStations] = useState([])

    const [filteredStation, setFilteredStation] = useState([])
    const [searchStationView, setSearchStationView] = useState(false)

    useEffect(() => {
        axios.get(`${api_url}/airport/get-aiports`)
        .then(res => {
            console.log(res)
            setStations(res.data)
        }).catch(err => {
            console.log(err)
        }) 
    }, [])

    const input_ref = useRef()

    useEffect(() => {
        window.onclick = (event) => {
            if (event.target !== input_ref.current) {
                setSearchStationView(false)
            }
        }
    }, []);

    const filterStation = (event) => {
        const temp_list = []
        stations.forEach((val) => {
            if (val.name.toLowerCase().match(event.target.value.toLowerCase()) === null)
                return;
            temp_list.push(val)
        })
        setSearchStationView(true)
        setFilteredStation(temp_list)
        onChangeValue(event.target.value)
    }

    const change_text = (event) => {
        input_ref.current.value = event.target.value
        setStation(event.target.id)
        setSearchStationView(false)
        onChangeValue(event.target.value)
        event.preventDefault()
    }

    return (
        <Fragment>
            <div className="relative">
                <label className={theme === 'light' ? `dark-label` : `white-label`}>{label}</label>
                <input className={theme === 'light' ? `light-input` : `dark-input`} ref={input_ref} type={'text'} onChange={filterStation} />
                <div className={searchStationView === true ? 'show' : 'hidden'}>
                    <div className="search-view">
                        {
                            filteredStation.map((val) => (
                                <button className="station_list_button" onClick={change_text} value={val.name} id={val.id}>
                                    <div className="grid grid-cols-[20%_80%]">
                                        <button value={val.name} id={val.id}>
                                            <img src="./airplane.jpg" />
                                        </button>
                                        <button value={val.name} className='text-left' id={val.id}>
                                            {val.name}
                                        </button>
                                    </div>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SearchStation;