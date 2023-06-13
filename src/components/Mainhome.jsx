import React from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import './mainhome.css'
import { MdFileDownloadDone } from 'react-icons/md';
import { FaStethoscope } from 'react-icons/fa'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import { BsDropletFill, BsEyeFill } from 'react-icons/bs'





const Mainhome = () => {
    return (
        <>
            <div className="main-div">
                <div className="container-main">
                    <div className="timing">
                        <h1>OPEN: Monday - Friday 9am - 7pm / Saturday 9-5 / Closed on Sunday</h1>
                    </div>
                    <div className="diriction">
                        <button className='button-17'> <a target='blank' href="https://www.google.com/maps/dir//40.8506569,-73.8655286/@40.850657,-73.865529,16z?hl=en-US">Get Directions</a><span><FaLocationArrow /></span> </button>

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
            <div className="main-content">
                <div className="content">

                    <h1 className='offer'>
                        WHAT WE OFFER
                    </h1>
                    <hr className='hr-t' />
                    <div className="cards-container">
                        <div className="cards"
                           style={{
                            boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px"
                        }}>

                            <div className="left-img">
                                <FaStethoscope />
                            </div>
                            <div className="right-content">


                                <h2>HIGHLY TRAINED STAFF</h2>
                                <p>
                                    Patient care is our #1 priority. Our highly trained staff of<br /> professionals will be here to make sure the care and <br /> service you are provided is one you can trust and count on.
                                </p>


                            </div>

                        </div>

                        <div className="cards" 
                        style={{
                            boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px"
                        }}
                        >
 
                            <div className="left-img">
                                <BsDropletFill />
                            </div>
                            <div className="right-content">


                                <h2>NO APPOINTMENT NEEDED</h2>
                                <p>
                                    At Bronx Park Urgent Medical Care you never need <br /> an appointment. Our wait times are minimal <br /> and patient care is our top priority.
                                </p>


                            </div>

                        </div>
                        <div className="cards"
                        
                        style={{
                            boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px"
                        }}
                        >

                            <div className="left-img">
                                <BsEyeFill />
                            </div>
                            <div className="right-content">


                                <h2>CONVENIENT CARE</h2>
                                <p>
                                    We offer convenient access to a range of <a className='ac' href="/services">services</a>  including Strep/Flu/Covid testing, Physicals, <br /> Vaccinations, and more.
                                </p>


                            </div>

                        </div>
                    </div>

                </div>




            </div>

        </>)
}

export default Mainhome