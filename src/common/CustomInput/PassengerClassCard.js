import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { Fragment, useEffect, useRef, useState } from "react";
import './custom_input.scss'


function Type_Number ({label, count, min = 0, onIncrement, onDecrement}) {
    const [cnt, setCnt] = useState(count)
    const decreaseCount = () => {
        if (cnt <= min)
            return;
        setCnt(cnt - 1)
        onDecrement(); 
    }

    const increaseCount = () => {
        setCnt(cnt + 1)
    }
    return (
        <div className="grid grid-flow-col place-content-start gap-2 px-4">
            <div className="my-auto heading-type-number mr-2">{label}</div>
            <button className="blue-sub-heading my-auto cursor-pointer" onClick={() => {decreaseCount();}}>-</button>
            <div className="blue-sub-heading my-auto">{cnt}</div>
            <button className="blue-sub-heading my-auto cursor-pointer" onClick={() => {onIncrement(); increaseCount();}}>+</button>
        </div>
    );
}


function PassengerClassCard(props) {
    const [classDialogBox, setClassDialogBox] = useState(false)
    const boxRef = useRef();

    const [adultCount, setAdultCount] = useState(1)
    const [childCount, setChildCount] = useState(0)
    const [infantCount, setInfantCount] = useState(0)
    const [travellerClass, setTravellerClass] = useState('Economy')

    const [textValue, setTextValue] = useState('')

    useEffect(() => {
        window.onclick = (event) => {
            if (event.target.contains(boxRef.current) && event.target !== boxRef.current) {
                setClassDialogBox(false)
            }
        }
    }, []);


    const close_form = () => {
        console.log(`${adultCount} ${childCount} ${infantCount} ${travellerClass}`)
        const passenger_cnt = adultCount + childCount + infantCount
        setTextValue(`${passenger_cnt} Traveller(s), ${travellerClass}`)
        setClassDialogBox(false)
    }

    return (
        <Fragment>
            <div  ref={boxRef} className="">
                <input className={`input-text-select ${props.theme === 'light' ? 'light': ''}`} type='text' placeholder="Traveller & Class" onClick={(event) => setClassDialogBox(true)} readOnly={'readonly'} value={textValue}/>
            </div>
            <div className={classDialogBox === true ? 'show' : 'hide'}>
                <div className={"passenger_class_container"}>
                    <div className="grid grid-flow-col px-10 mt-8">
                        <Type_Number label={'Adult'} count={adultCount} min={1} onDecrement={() => setAdultCount(adultCount - 1)} onIncrement={() => {setAdultCount(adultCount + 1)}}/>
                        <Type_Number label={'Child'} count={childCount} min={0} onDecrement={() => setChildCount(childCount - 1)} onIncrement={() => {setChildCount(childCount + 1)}}/>
                        <Type_Number label={'Infant'} count={infantCount} min={0} onDecrement={() => setInfantCount(infantCount - 1)} onIncrement={() => {setInfantCount(infantCount + 1)}}/>
                    </div>
                    <div className="px-10 mt-8 w-full grid grid-flow-col gap-10 grid-cols-[50%_50%]">
                        <div>
                            <label className="heading-type-number my-auto pl-4">Travel Class</label>
                            <select name="passenger_class" id="passenger_class" className="w-full px-4" onChange={(event) => {setTravellerClass(event.target.value)}}>
                                <option value="Economy">Economy</option>
                                <option value="Premium Economy">Premium Economy</option>
                                <option value="Business">Business</option>
                                <option value="First">First</option>
                            </select>
                        </div>
                        <div className="grid place-content-center">
                            <button className="select-button" onClick={close_form}>
                                DONE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default PassengerClassCard;