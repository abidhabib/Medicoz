import React from 'react'
import teamimg from '../img/teambg.png'
import './contact.css'
import ContactUs from './ContactUs'
import {BsTelephoneForwardFill} from 'react-icons/bs';
import {FaEnvelope} from 'react-icons/fa';
import {MdLocationOn,MdAccessTimeFilled} from 'react-icons/md';
import careimg from '../img/careimg.png'
const Contact = () => {
    return (
        <>
            <div className='team-img' style={
                {
                    backgroundImage: `url(${teamimg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',


                }
            }   >


                <div className='team-text'>
                    <h1>
                        CONTACT   </h1>
                </div>
            </div>
            <div className="wpb_gmaps_widget wpb_content_element">
                <div className="wpb_wrapper">
                    <div className="wpb_map_wraper">
                        <iframe className='wpb' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.9666091067274!2d-73.86552859999996!3d40.85065689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4989f28d9e9%3A0xe511fd8ede85c33b!2sBronx+Park+Urgent+Medical+Care!5e0!3m2!1sen!2sus!4v1440697730622" width="800" height="450" frameBorder="0" style={{ border: '0px', pointerEvents: '' }} allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="service-content">

                <div className='hrt'>


                </div>
                <div className="medical">
                    <div className="med-divs">
                        <div className="med-left">
                            <h1 className='ser'


                            >
                                Directions to Bronx Park Urgent Medical Care

                            </h1>
                            <hr style={
                                {
                                    height:'.5px !important' ,
                                }
                            } />

                            <div className="left-content">
                                <div className="p1" style={
                                    {
                                        width: '100%',
                                        fontSize: '14px',
                                    }
                                }>
                                    <h1 className=''
                                        style={{
                                            fontSize: '16px',
                                            marginTop: '20px'
                                        }}
                                    >Public Transportation</h1>
                                    <br />
                                    <p>
                                        The closest subway stop is Bronx Park East for the 2 & 5 lines (next to White Plains Road). Walk north on White Plains Road and turn right onto Bronxdale Avenue. Walk 2 blocks and building is on the left.

                                    </p>
                                    <h1 className=''
                                        style={
                                            {
                                                fontSize: '16px',
                                                marginTop: '20px'

                                            }
                                        }

                                    >By Car</h1>
                                    <p>
                                        Located on Bronxdale Avenue just east of White Plains Road, the closest exit is the Bronx River Parkway Exit 6 “Bronx Zoo”. Travel east on Bronx Park East to Bronxdale Avenue. Street and garage parking is available.

                                    </p>

                                    <hr style={{
                                        width: '100%',
                                        borderColor: ' rgba(141, 141, 141, 0.322)'
                                        ,
                                        marginTop: '30px',
                                        borderWidth: '.5px',
                                        // Set the desired width of the hr tag
                                    }} />
                                    <h2 style={{
                                        marginTop: '30px',
                                    }}>
                                        We Are Here To Care for You!
                                    </h2>
                                    

<div className="getintouch">

                                    <h1>
                                        Get In Touch
                                    </h1>

<div className="tw-div">
<div className="tw-left">
    <div className="div1">
        <MdLocationOn className='iconx'/><br />
    Bronx Park Urgent Medical Care <br />
2016 Bronxdale Ave <br />
Suite #101 <br />
Bronx, NY 10462
</div>

   <div className="div2">
    <MdAccessTimeFilled className='iconx'/><br />
    Mon to Fri – 8:00am to 9:00pm <br />
Saturday – 9:00am to 5:00pm <br />
Sunday – Closed <br />
</div>
<div className="div1">
        <FaEnvelope className='iconx'/> <br /> bronxparkurgentmedicalcare@gmail.com
</div>

   <div className="div2">
    < BsTelephoneForwardFill className='iconx'/> <br />
    (718) 918-9676
</div>
</div>
<div className="tw-right" style={
    {
backgroundImage: `url(${careimg})`,
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
position:'top',
}}>

</div>
</div>

</div>

                                </div>


                            </div>

                        </div>

                        <div className="med-right">


                            <ContactUs />

                        </div>
                    </div>
                </div>




            </div>

        </>
    )
}

export default Contact