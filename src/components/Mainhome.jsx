import React from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import './mainhome.css'
import { MdFileDownloadDone } from 'react-icons/md';
const Mainhome = () => {
    return (
        <>
<div className="main-div">
            <div className="container-main">
                <div className="timing">
                    <h1>OPEN: Monday - Friday 9am - 7pm / Saturday 9-5 / Closed on Sunday</h1>
                </div>
                <div className="diriction">
                    <button className='button-17'> <a target='blank' href="https://www.google.com/maps/dir//40.8506569,-73.8655286/@40.850657,-73.865529,16z?hl=en-US"> Book Now ! </a><span><FaLocationArrow /></span> </button>

                </div>



            </div>

            <div className="booknow">
            <button className="button-37" role="button"><MdFileDownloadDone />  
            <a href="https://www.solvhealth.com/r/book-online/A9dka0/vFADzlcK90Vr8rdFK73Os/slots/today">Book Now</a>
            
            </button>

            </div>
            </div>

        </>)
}

export default Mainhome