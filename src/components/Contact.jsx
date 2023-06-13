import React from 'react'
import teamimg from '../img/teambg.png'

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
         
            



        </>
    )
}

export default Contact