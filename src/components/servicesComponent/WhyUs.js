import React from 'react';
import Fade from 'react-reveal/Fade';

function WhyUs() {
    return (
        <div id='services' className='all-services'>
              <h2 className='col-6 d-flex align-items-center container justify-content-center blue-text text-darken-4'>Why choose us?</h2>
              <h6 className='grey-text tex-darken-3 col-6 d-flex center-align container justify-content-center' >
                  We believe everyone should be part of the financial revolution. It’s time to combine cryptocurrency with traditional currencies in our daily finances.
                </h6>
                
      <div className='content d-flex flex-row flex-wrap'>
         <Fade bottom>
               <div className='field d-flex field'> 
                   
                   <span class="justify-content-center material-icons icon valign-wrapper d-flex ">
                    security
                </span>
                <span>
                    <div className='title'>
                       <h5>Safe & Secure</h5> 
                    </div>
                    <p className='descripiton'>Be sure in your account security and your fund`s safety.</p>
                    
                </span>
                </div>
        </Fade> 
        <Fade bottom>
               <div className='field d-flex field'> 
                   
                   <span class="justify-content-center material-icons icon valign-wrapper d-flex ">
                    people_alt
                </span>
                <span>
                    <div className='title'>
                       <h5>Experts Support</h5> 
                    </div>
                    <p className='descripiton'>Highly professional support will answer all your questions regarding crypto.</p>
                    
                </span>
                </div>
        </Fade> 
        <Fade bottom>
               <div className='field d-flex field '> 
                   
                   <span class="justify-content-center material-icons icon valign-wrapper d-flex center-align">
                    security
                </span>
                <span>
                    <div className='title'>
                       <h5>Safe & Secure</h5> 
                    </div>
                    <p className='descripiton'>Be sure in your account security and your fund`s safety.</p>
                    
                </span>
                </div>
        </Fade> 

            </div>    
        </div>
    );
}

export default WhyUs;