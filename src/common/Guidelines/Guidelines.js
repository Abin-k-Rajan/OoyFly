import React, { Fragment } from "react";
import './guidelines.scss'


function Guideline () {
    return (
        <Fragment>
            <div className="guideline-container mr-5 my-10 p-10 relative">
                <div className="important guideline-imp-title">IMPORTANT INFORMATION</div>
                <div>
                    <div className="heading">
                        COVID Guidelines and Vaccination Requirements
                    </div>
                <ul className="small-text">
                    <li className="circle-list">COVID test/vaccination rules: In view of the surge in number of COVID-19 cases, random on-arrival testing will be done for travellers arriving from states where there has been a spurt in number for COVID-19 cases. Travellers will be allowed to exit after sample collection. Thermal screening will be done for all travellers upon arrival.</li>
                    <li className="circle-list">Quarantine rules: Travellers who are found positive will be quarantined at home or CCC/CHC/Hospital for 10 days. Constitutional and Govt. functionaries as well as their staff members are exempted from 7 days of home quarantine.</li>
                    <li className="circle-list">Pre-registration or e-pass rules: Download and update the Aarogya Setu app.</li>
                    <li className="circle-list">Check the detailed list of travel guidelines issued by Indian States and UTs here KNOW MORE</li>
                    <li className="circle-list">If you have arrived on any international flight and are taking a connecting domestic flight, please check the 'Travelling to India' tab HERE.</li>
                </ul>
                <div className="heading mt-5">Pre-Flight Checklist</div>
                <ul className="small-text">
                    <li className="circle-list">Remember to web check-in before arriving at the airport; carry a printed or soft copy of the boarding pass.</li>
                    <li className="circle-list">Wearing masks/face covers is no longer mandatory. However, all travellers are advised to wear them, in view of the threat posed by COVID-19.</li>
                    <li className="circle-list">One hand bag up to 7 kgs and 55x35x25cm, is allowed per traveller as cabin baggage. Certain personal articles like a lady's purse, laptop bags, etc. can be carried additionally.</li>
                </ul>
                <div className="small-text mt-5"><p className="bold">DISCLAIMER:</p> <p className="italic">The information provided above is only for ready reference and convenience of customers, and may not be exhaustive. We strongly recommend that you check the full text of the guidelines issued by the State Governments and Airlines before travelling to ensure smooth travel. We accept no liability in this regard. In case you do not meet the required guidelines, the airline or state authorities can stop you from travelling.</p></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Guideline;