import React, { Fragment } from "react";
import Searchform from "../Forms/Searchform";
import './herosection.scss'

function Herosection() {
    return (
        <Fragment>
            <div className="herosection-container p-4">
                <div className="hero-text text-center">
                    Domestic and International Flights
                </div>
                <div className="hero-svg-block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="hero-svg" fill-opacity="1" d="M0,0L48,42.7C96,85,192,171,288,170.7C384,171,480,85,576,53.3C672,21,768,43,864,74.7C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="hero-svg-block-second">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="hero-svg" fill-opacity="1" d="M0,0L48,42.7C96,85,192,171,288,170.7C384,171,480,85,576,53.3C672,21,768,43,864,74.7C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="herosection-content bd-grid">
                    <Searchform />
                </div>
            </div>
        </Fragment>
    );
}

export default Herosection;