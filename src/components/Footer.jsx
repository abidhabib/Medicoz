import React from 'react';
import './footer.css'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import flogo from '../img/flogo.png'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <i className="fab fa-slack"></i>
                            <span className="logo_name"></span>
                        </div>
                        <img className='flogo' src={flogo} alt="" />

                        <div className="media-icons">
                            <a href="#"><i className="fab fa-facebook-f"><FaFacebookF /></i></a>
                            <a href="#"><i className="fab fa-twitter"><AiOutlineTwitter /></i></a>
                            <a href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
                        </div>
                    </div>
                    <div className="link-boxes">

                        <ul className="box">
                            <li className="link_name">Our location
                            </li>
                            <li>Bronx Park Urgent Medical Care
                            </li>
                            <li>2016 Bronxdale Ave
                            </li>
                            <li>Suite #101</li>
                            <li>Bronx, NY 10462

                            </li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Get in touch
                            </li>
                            <li>(718) 918-9676

                            </li>
                            <li>bronxparkurgentmedicalcare@gmail.com


                            </li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">Hours of Operation
                            </li>
                            <li>Monday – Friday 9:00 am to 7:00 pm
                            </li>
                            <li>JSaturday 9:00 am to 5:00 pm
                           </li>
                            <li>Closed on Sunday</li>
                        </ul>

                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">©2023 Bronx Park Urgent Medical Care. All rights reserved.
                        </span>
                        <span className="policy_terms">
                           Insurance
                            <a href="#">Our Team</a>
                            <a href="#">Services</a>

                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
