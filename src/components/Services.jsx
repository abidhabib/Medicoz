import React from 'react'
import servisebg from '../img/servicebg.jpg'
import './service.css'
const Services = () => {
  return (
    <>
      <div className="service-content">
        <div style={{
          backgroundImage: `url(${servisebg})`,
          height: '250px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%'
          , display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          padding: '20px',
        }}>


          <h1>Our Services</h1>


        </div>
        <div className='hrt'>

          <hr style={{
            width: '80%',
            borderColor: '#D3D3D3',
            borderWidth: '.5px', // Set the desired width of the hr tag
          }} />
        </div>
        <div className="medical">
          <div className="med-divs">
         <div className="med-left">

         </div>
         <div className="med-right">
         </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Services