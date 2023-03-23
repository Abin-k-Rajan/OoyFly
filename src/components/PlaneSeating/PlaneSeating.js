import React, { Fragment, useEffect } from 'react'
import './planeseating.scss'
import {GrClose} from 'react-icons/gr'


function PlaneSeating ({closeInput, plane_id,selectedSeats, setSelectedSeats, number_of_passengers, bookedSeats}) {

    const rows = 14;
    const row_start = 11;
    const row_end = 21;
    const cols = 6;
    console.log(bookedSeats)
    const types = ['A', 'B', 'C', 'D', 'E', 'F']
    const exit_loc = 14

    useEffect(() => {
        bookedSeats.map((val) => {
            // document.getElementById(`${plane_id}:${val}`).setAttribute("disabled", "")
        })
    }, [])


    const select_new_seat = (id) => {
        let selected_seats = selectedSeats
        const seat_id_split = String(id).split(':')
        let index = selected_seats.indexOf(seat_id_split[1])
        if (index != -1) {
            selected_seats.splice(index, 1)
            setSelectedSeats(selected_seats)
            return
        }
        selected_seats.push(seat_id_split[1])
        if (selected_seats.length > number_of_passengers)
        {
            document.getElementById(`${plane_id}:${selected_seats[0]}`).checked = false
            selected_seats.shift()
        }
        setSelectedSeats(selected_seats)
    }

    const close_seating_dialog = () => {
        closeInput();
    }

    return (
        <Fragment>
            <div className='plane-seating-container'>
                <button className='absolute right-3 top-3 text-4xl' onClick={() => close_seating_dialog()}>
                    <GrClose />
                </button>
                <div class="plane">
                    <div class="exit exit--front fuselage">
    
                    </div>                  
                    <ol class="cabin fuselage">
                    {
                        Array.apply(0, Array(row_end)).map(function(val, index) {
                            return <li class={`row row--${index + 1}`}>
                                <ol className='seats' type='A'>
                                    {
                                        types.map((val) => (
                                            <li className='seat'>
                                                <input type="checkbox" disabled={bookedSeats.indexOf(`${index+1}${val}`) != -1 ? true : false} id={`${plane_id}:${index+1}${val}`} onClick={(event) => select_new_seat(event.target.id)} />
                                                <label for={`${plane_id}:${index + 1}${val}`}>{`${index + 1}${val}`}</label>
                                            </li>
                                        ))
                                    }
                                </ol>
                            </li>
                        })
                    }
                    </ol>
                </div>
            </div>
        </Fragment>
    );
}

export default PlaneSeating;