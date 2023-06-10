import React from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import './mainhome.css'
import { MdFileDownloadDone } from 'react-icons/md';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

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
                    <button className="button-37" ><MdFileDownloadDone />
                        <a href="https://www.solvhealth.com/r/book-online/A9dka0/vFADzlcK90Vr8rdFK73Os/slots/today">Book Now</a>

                    </button>

                </div>
            </div>

            <div className="img-container">
                <div className="imgs">
                    <div className="img1 img-div">
                        <img src={img1} alt="" />
                    </div>
                    <div className="img2 img-div">
                        <img src={img2} alt="" />
                    </div> <div className="img3 img-div">
                        <img src={img3} alt="" />
                    </div> </div>

            </div>
        <h1>WHAT WE OFFER</h1>


        </>)
}

export default Mainhome