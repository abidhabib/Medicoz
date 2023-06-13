import React from 'react'
import servisebg from '../img/servicebg.jpg'
import servisebg2 from '../img/serviceH.png'
import { AiTwotoneLike, AiFillStar } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import './service.css'
import ContactUs from './ContactUs'
const Services = () => {
  return (
    <>
      <div className="service-content">
        <div className="service-content-x" style={{
          // backgroundImage: `url(${servisebg})`,

        }}>

          <h1 
         
          ><span 
          style={{
            color: 'crimson',

          }}
          >O</span>ur <span
          
          style={{
            color: 'crimson',

          }}
          >S</span>ervices</h1>
          <img src={servisebg} alt="" />

        </div>
        <div className='hrt'>

          <hr style={{
            width: '80%',
            borderColor: ' rgba(141, 141, 141, 0.322)'
            ,
            borderWidth: '.5px', 
            // Set the desired width of the hr tag
          }} />
        </div>
        <div className="medical">
          <div className="med-divs">
            <div className="med-left">
              <h1 className='ser'
             

              >
                <span style={{ color: 'crimson' }}>M</span>EDICAL  <span style={{ color: 'crimson' }}>S</span>ERVICES

              </h1>
              <hr />

              <div className="left-content">
                <div className="p1">
                  <h1 className='p1-h1'
                    
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
                    <li>Treatment of sexually transmitted diseases</li>
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
                    <li>Blood tests can be sent to outside labs like Quest,  and Bioreference  for patients if the need arises- results <br /> come back in 1-5 days depending  on the test ordered.</li>
                    <li>Splinting of bones</li>
                    <li>Suturing of lacerations or cuts</li>
                    <li>Asthma nebulizer treatments</li>
                    <li>Vaccinations</li>
                  </ul>

                </div>

              </div>

            </div>

            <div className="med-right">
                     

<ContactUs/>

            </div>
          </div>
        </div>


        <div className="service-img-cont">
          <div className="img-cont"
          >
            <div className="serviceh"
              style={{
                backgroundImage: `url(${servisebg2})`,

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
        <div className="hello"
      
        >
          <div className="cards-container"
            style={{
              width: '80%',
              display: 'flex',
              alignItems: 'center',


            }}

          >
            <div className="cards"
              style={{
                //  here i can ad style
              }}
            >

              <div className="left-img">
                <AiTwotoneLike />
              </div>
              <div className="right-content">


                <h2>PATIENT CARE
                </h2>
                <p>
                  Patient Care is our top priority. Our highly trained professional staff will be kind and professional. Please stop by to see the Bronx Park Urgent Medical Care difference.                                </p>


              </div>

            </div>

            <div className="cards">

              <div className="left-img">
                <FcLike />
              </div>
              <div className="right-content">


                <h2>KIND & PROFESSIONAL STAFF</h2>
                <p>
                  When the need for an urgent care visit arrives you can rest assured that our kind and professional staff will be here for you.                                </p>


              </div>

            </div>
            <div className="cards">

              <div className="left-img">
                <AiFillStar />
              </div>
              <div className="right-content">


                <h2>OPEN 6 DAYS A WEEK</h2>
                <p>
                  Mon to Fri – 8:00am to 9:00pm
                  Saturday – 9:00am to 5:00pm
                  Sunday – Closed                                </p>


              </div>

            </div>
          </div>



        </div>



      </div>
    </>
  )
}

export default Services