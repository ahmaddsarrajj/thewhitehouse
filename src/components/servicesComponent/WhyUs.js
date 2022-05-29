import React from 'react';
import Fade from 'react-reveal/Fade';

function WhyUs() {
    return (
        <div id='services' className='all-services'>
              <h2 className='black-text title '>Why choose us?</h2>
            <div className="line" ></div>
            <div  className='p-content'>
                
                <div className='des' style={{padding: '10px 0px 20px 0px'}}>Take a look at our special services</div>

                <div className='content d-flex flex-row flex-wrap'>
                    <div className='field'>
                        <i className='material-icons large'>account_circle</i>
                        <h5>Portfolio Management</h5>
                        <div>Account</div>
                        <div>Management</div>
                        <div>portfolio Taking</div>
                    </div>

                    <div className='field'>
                        <i className='material-icons large'>attach_money</i>
                        <h5>Corporate Services</h5>
                        <div>Money Transfer</div>
                        <div>USDT</div>
                        <div>Cashout / Deposite</div>
                    </div>

                    <div className='field'>
                        <i className='material-icons large'>school</i>
                        <h5>Crypto Education</h5>
                        <div>Direct contact with our experts</div>
                        <div>Technical analysis</div>
                        <div>Blogs</div>
                    </div>

                </div>
            </div>    
        </div>
    );
}

export default WhyUs;