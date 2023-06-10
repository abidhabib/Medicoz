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
                            <li><a href="#">Bronx Park Urgent Medical Care
                            </a></li>
                            <li><a href="#">2016 Bronxdale Ave
                            </a></li>
                            <li><a href="#">Suite #101</a></li>
                            <li><a href="#">Bronx, NY 10462

                            </a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Get in touch
                            </li>
                            <li><a href="#">(718) 918-9676

                            </a></li>
                            <li><a href="#">
                            </a></li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">Hours of Operation
                            </li>
                            <li><a href="#">Monday – Friday 9:00 am to 7:00 pm
                            </a></li>
                            <li><a href="#">JSaturday 9:00 am to 5:00 pm
                            </a></li>
                            <li><a href="#">Closed on Sunday</a></li>
                        </ul>

                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">©2023 Bronx Park Urgent Medical Care. All rights reserved.
                        </span>
                        <span className="policy_terms">
                            <a href="#">Insurance</a>
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
