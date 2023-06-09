import React from 'react'
import './top.css'
import { IoIosCall } from 'react-icons/io';
import { AiFillClockCircle } from 'react-icons/ai';
import {MdMedication} from 'react-icons/md'


const Top = () => {
    return (
        <>

            <div className="container">
                <div className="left">
                    <div className="call" >
                        <div className="call-us"> <IoIosCall />   <span>Call us now! (718) 918-9676</span></div>
                    </div>
                    <div className="hours">
                        <AiFillClockCircle />  <span>Hours: Mon-Fri: 9am - 7pm; Sat: 9am - 5pm; Sun: Closed</span>
                    </div>
                </div>
                <div className="right">
                    <button className='btn'>Book Now ! <span><MdMedication/></span> </button>
                </div>
            </div>

        </>



    )
}

export default Top