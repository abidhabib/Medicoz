import React from 'react'
import servisebg from '../img/servicebg.jpg'
import servisebg2 from '../img/serviceH.png'

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
              <h1
                style={{
                  fontSize: '30px',
                  marginBottom: '30px',
                  marginTop: '30px'
                }}

              >
                MEDICAL SERVICES

              </h1>
              <hr />

              <div className="left-content">
                <div className="p1">
                  <h1
                    style={{
                      fontSize: '30px',
                      marginBottom: '30px',
                      marginTop: '30px',
                    }}
                  >Medical Conditions Treated</h1>
                  <ul>
                    <li>Lacerations / cuts on skin</li>
                    <li>Minor burns and wound care</li>
                    <li>Drainage of abscesses / boils</li>
                    <li>Allergic reactions</li>
                    <li>Rashes</li>
                    <li>Stomach viruses, nausea, and vomiting</li>
                    <li>Cold, flu, viral illnesses</li>
                    <li>Ear infections</li>
                    <li>Pink eye</li>
                    <li>Asthma, bronchitis, uncomplicated pneumonia</li>
                    <li>Screening and treatment of sexually transmitted diseases</li>
                    <li>Urinary tract infections</li>
                    <li>Physicals for school, work, and pre-employment</li>
                    <li>Screening for diabetes and high blood pressure</li>
                    <li>Vaginal discharge or vaginitis</li>
                  </ul>
                </div>
                <div className="p2">

                  <h1
                    style={{
                      fontSize: '30px',
                      marginBottom: '30px',
                      marginTop: '30px',
                    }}
                  >Services In Clinic
                  </h1>
                  <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                    <li>EKG- electrocardiogram</li>
                    <li>Rapid Strep- results in 5 minutes</li>
                    <li>Rapid Flu- results in 15 minutes</li>
                    <li>Rapid Hemoglobin- results in 10 minutes</li>
                    <li>Urinalysis</li>
                    <li>Urine Pregnancy</li>
                    <li>STD testing</li>
                    <li>Blood tests can be sent to outside labs like Quest, and Bioreference for patients if the need arises- results come back in 1-5 days depending on the test ordered.</li>
                    <li>Splinting of bones</li>
                    <li>Suturing of lacerations or cuts</li>
                    <li>Asthma nebulizer treatments</li>
                    <li>Vaccinations</li>
                  </ul>

                </div>

              </div>

            </div>

            <div className="med-right">

            </div>
          </div>
        </div>


        <div className="service-img-cont">
          <div className="img-cont"
          >
            <div className="serviceh"
              style={{
                backgroundImage: `url(${servisebg2})`,
                height: '400px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '55%'
                , display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '20px',
                padding: '20px',
              }}
            >
              <div className="div-s-c">
              <h3>
                When You Need Us


              </h3>
              <h2>
                We are Here For You


              </h2>
              <button className='more-info-btn'>More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services