import React from 'react'
import teamimg from '../img/teambg.png'
import './ourteam.css'
import ContactUs from './ContactUs'
const Ourteam = () => {
  return (
<>
    <div className='team-img' style={
        {
            backgroundImage:`url(${teamimg})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',

            
        }
    }   >
 
 <div className='team-text'>
<h1>
Our Team</h1> </div>

    </div>  
    <div className="service-content">
       
        <div className='hrt'>

          
        </div>
        <div className="medical">
          <div className="med-divs">
            <div className="med-left">
              <h1 className='ser'
             

              >
                OUR <span style={{ color: 'crimson' }}>D</span>OCTORS
AND STAFF
              </h1>
              <hr />

              <div className="left-content">
                <div className="p1" style={
                  {
                    width: '100%',
                    fontSize: '14px',
                  }
                }>
                  <h1 className='p1-h1'
                    
                  >Medical Conditions Treated</h1>
                <p>
                Our team includes 3 physicians that are Board Certified in Family Medicine with many years of experience in practicing Urgent Care medicine in the Bronx.
                </p>
                <br />
                <p>
                Bronx Park Urgent Medical Care opened in 1996 with the mission in treating patients with compassion and speed when they are the most in need of medical care. Our goal is to deliver exceptional medical care, fast, convenient, without the need for an appointment or long wait.
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
                </div>
              

              </div>

            </div>

            <div className="med-right">
                     

<ContactUs/>

            </div>
          </div>
        </div>




        </div>


</>  )
}

export default Ourteam