import React from 'react';
import Hamburger from 'hamburger-react'

const Head = ()=> {
      
    return (
        <div style={{width: '100%'}} className='all-header moto-spacing-top-medium' id='home'>

              <div style={{width:'100%', padding: '50px 0 50px 0'}} className="container">

                
                  <div className='navbar' style={{width: '100%'}}>
                    
                      <a href='#' className='logo'>Logo</a>
                    
                      <input type="checkbox" id="menu-bar" />
                      <label for="menu-bar">
                      <Hamburger size={18} color="white"/>
                      </label>
                    
                      <ul>
                        <li><a href='#' className='amber-text text-darken-3'>Home</a></li>
                        <li><a href='#about-us'>About us</a></li>
                        <li><a href='#services'>Services</a></li>
                        <li><a href='#contact-us'>Contact us</a></li>
                      </ul>
                  </div>
                
                {/*white space*/}
                <div className='white-space'></div>

                {/* title */}
                <div className='white-text container title col-6 d-flex center-align justify-content-center'>
                  Start your Investing Journey with us
                </div>
                <p className='grey-text text-lighten-1 description container col-6 d-flex center-align justify-content-center'>
                We believe everyone should be part of the financial revolution. It’s time to combine cryptocurrency with traditional currencies in our daily finances.
                </p>
              </div>
            </div>
        

)  
}


export default Head;
