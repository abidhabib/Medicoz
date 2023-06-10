import React, { useState, useEffect } from 'react';
import './top.css';
import { IoIosCall } from 'react-icons/io';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdMedication } from 'react-icons/md';

const Top = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`container${isScrolled ? ' scrolled' : ''}`}>
                <div className="left">
                    <div className="call">
                        <div className="call-us">
                            <IoIosCall /> <span>Call us now! (718) 918-9676</span>
                        </div>
                    </div>
                    <div className="hours">
                        <AiFillClockCircle />{' '}
                        <span>
                            Hours: Mon-Fri: 9am - 7pm; Sat: 9am - 5pm; Sun: Closed
                        </span>
                    </div>
                </div>
                <div className="right">
                    <button className={`btn${isScrolled ? ' hidden' : ''}`}>
                        Book Now! <span><MdMedication /></span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Top;
