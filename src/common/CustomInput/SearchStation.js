import React, { Fragment, useEffect, useRef, useState } from "react";
import './searchstation.scss'


const stations = [
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


function SearchStation(props) {

    const [filteredStation, setFilteredStation] = useState([])
    const [searchStationView, setSearchStationView] = useState(false)

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
            if (val.station.toLowerCase().match(event.target.value.toLowerCase()) === null)
                return;
            temp_list.push(val)
        })
        setSearchStationView(true)
        setFilteredStation(temp_list)
    }

    const change_text = (event) => {
        input_ref.current.value = event.target.value
        setSearchStationView(false)
    }

    return (
        <Fragment>
            <div className="relative">
                <label className={props.theme === 'light' ? `dark-label` : `white-label`}>{props.label}</label>
                <input className={props.theme === 'light' ? `light-input` : `dark-input`} ref={input_ref} type={'text'} onChange={filterStation} />
                <div className={searchStationView === true ? 'show' : 'hidden'}>
                    <div className="search-view">
                        {
                            filteredStation.map((val) => (
                                <button className="station_list_button" onClick={change_text} value={val.station}>
                                    <div className="grid grid-cols-[20%_80%]">
                                        <button value={val.station}>
                                            <img src="./airplane.jpg" />
                                        </button>
                                        <button value={val.station} className='text-left'>
                                            {val.station}
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