import React, { Fragment } from 'react'
import {MdDiscount} from 'react-icons/md'



function FareSummary({travellerClassData, fare_details, grand_total}) {
    return (
        <Fragment>
            <div className='container p-5'>
                <div>
                    <div className="sub-heading">
                        FARE SUMMARY
                    </div>
                    <div className='small-text mb-2'>
                        {`${travellerClassData[0] != 0 ? `${travellerClassData[0]} Adult,` : ''} ${travellerClassData[1] != 0 ? `${travellerClassData[1]} Child,` : ''} ${travellerClassData[2] != 0 ? `${travellerClassData[2]} Infant` : ''}`}
                    </div>
                    <hr></hr>
                </div>
                <div>
                    {
                        fare_details.map((val) => (
                            <div className='my-5'><div className='medium-text bold'>{val.Name}<span className='float-right bold'>{val.Name == 'Discount' ? '-':''} &#x20B9; {`${val.Value}`}</span></div>
                                {
                                    val.Details.map((detail_vals) => (
                                        <div className='small-text'>{`${detail_vals.Name} (${detail_vals.Count} x ${detail_vals.Value})`}</div>
                                    ))
                                }
                                <hr className='mt-5'></hr>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className='heading blue'>
                        Grand Total
                        <span className='float-right'>
                        &#x20B9; {grand_total}
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default FareSummary;