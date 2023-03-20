import React, { useRef, useState } from "react";
import './forms.scss'
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { FormLabel } from "react-bootstrap";
import SearchStation from "../CustomInput/SearchStation";
import PassengerClassCard from "../CustomInput/PassengerClassCard";

function Searchform() {
  const [toggle_options] = useState(['One-Way', 'Round-Trip', 'Multi-Way'])
  const from_text = useRef(null)
  const to_text = useRef(null)

  const [fromStation, setFromStation] = useState('')
  const [Destination, setDestination] = useState('')
  const [Departure, setDeparture] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [class_, setClass] = useState('')
  const [discount, setDiscount] = useState(0)
    
  function onValueChange(event) {
    if (event.target['id'] == 'from-station'){
      setFromStation(event.target.value)
    }
    else if (event.target['id'] == 'to-station'){
      setDestination(event.target.value)
    }
  }

  function formSubmit(event) {
    const data = {
      'FROM_STATION': fromStation,
      'DESTINATION': Destination,
      'DEPARTURE': Departure,
      'RETURN': returnDate,
      'CLASS': class_
    }
    console.log(data)
    event.preventDefault();
  }


  function DepartureChange(event) {
    setDeparture(event['$d'])
  }

  function toDateChange(event) {
    setReturnDate(event['$d'])
  }

    
  return (
    <form className="search-form" onSubmit={formSubmit}>
      <div className="text-inputs grid grid-flow-col gap-5 py-5">
          <div className="relative">
              {/* <TextField className="input-text-search" id='from-station' label='From Station' onChange={onValueChange}/> */}
              <SearchStation label='FROM' theme='light' onChangeValue={(val) => setFromStation(val)}/>
          </div>
          <div className="relative">
              {/* <TextField className="input-text-search" id="to-station" label='Destination' onChange={onValueChange}/> */}
              <SearchStation label='TO' theme='light' onChangeValue={(val) => setDestination(val)}/>
          </div>
      </div>
      <div className="grid grid-flow-col gap-5 place-content-start">
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onChange={(value) => setDeparture(value['$d'])}/>
        </LocalizationProvider>
        </div>
        <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onChange={(value) => setReturnDate(value['$d'])}/>
        </LocalizationProvider>
        </div>
        <div>
          <PassengerClassCard theme='light' />
        </div>
      </div>
      <div className="grid grid-flow-col gap-8 place-content-center my-5">
        <div className="grid place-content-center">
          <label>Fare Type</label>
        </div>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="regular" control={<Radio />} label="Regular" />
            <FormControlLabel value="armed_forces" control={<Radio />} label="Armed Forces" />
            <FormControlLabel value="senior_citizen" control={<Radio />} label="Senior Citizen" />
            <FormControlLabel value="Student" control={<Radio />} label="Student" />
            <FormControlLabel value="doctor_and_nurse" control={<Radio />} label="Doctor & Nurse" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="relative">
        <input className="submit-btn" type={'submit'} value='Search Flights' />
      </div>
    </form>
  );
}


export default Searchform;