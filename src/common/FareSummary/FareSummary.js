import React, { Fragment } from 'react'
import {MdDiscount} from 'react-icons/md'

const fare_details = [
    {
        'Name': 'Base Fare',
        'Value': 3800,
        'Details': [
            {'Name': 'Adult', 'Value': 1900, 'Count': 1},
            {'Name': 'Child', 'Value': 1900, 'Count': 1}
        ]   
    },
    {
        'Name': 'Taxes and Sucharges',
        'Value': 923,
        'Details': []
    },
    {
        'Name': 'Add Ons',
        'Value': 899,
        'Details': [
            {'Name': 'Zero Cancellation', 'Value': 899, 'Count': 1}
        ]
    },
    {
        'Name': 'Discount',
        'Value': 255,
        'Details': [
            {
                'Name': 'GISUPER', 'Value': 255, 'Count': 1
            }
        ]
    }
]
const grand_total = 3467;

function FareSummary() {
    return (
        <Fragment>
            <div className='container p-5'>
                <div>
                    <div className="sub-heading">
                        FARE SUMMARY
                    </div>
                    <div className='small-text mb-2'>
                        1 Adult, 2 Children
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