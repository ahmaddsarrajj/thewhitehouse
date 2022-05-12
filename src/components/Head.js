import React from 'react';

const Head = ()=> {
      
    return (
        <div className='all-header moto-spacing-top-medium' id='home'>
            
              <div style={{ paddingTop: '50px'}} className="container">
                  {/* MOBILE HEADER */}
                <div className="mobile-header">
                  <div className="container ">
                    <div className="row">
                    <span style={{width:'100%'}} className="logo white-text col-6 d-flex justify-content-center align-items-center">
                      Logo
                    </span>
                    
                    <div  style={{width:"100%", padding:"20px 0"}} className='dropdown show white-text col-6 d-flex justify-content-center align-items-center'>
                        <a className="dropdown white-text" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <i className='small material-icons'>menu</i>
                        </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a href='#home' className='amber-text text-darken-3 dropdown-item'>Home</a>
                      <a href='#about-us' className='dropdown-item'>About us</a>
                      <a href='#services' className='dropdown-item'>Services</a>
                      <a href='#contact-us' className='dropdown-item'>contact-us</a>
                    </div>
                      </div>
                    </div>
                  </div>
                </div> 
                {/* PC HEADER */}
                <div className="pc-header">
                  
                    <div className="row">
                    <span className="white-text logo col-6 d-flex align-items-center">
                      Logo
                    </span>
                    <span className="col-6 d-flex align-items-center justify-content-end  Login-Register">
                      <a href='#home' className='amber-text text-darken-1'>Home</a>
                      <a href='#about-us'>About us</a>
                      <a href='#services'>Services</a>
                      <a href='#contact-us'>contact-us</a>
                  
                    </span>
                   
                  </div>
                </div>

                {/*white space*/}
                <div className='white-space'></div>

                {/* title */}
                <div className='white-text container title col-6 d-flex center-align justify-content-center'>
                  Start your Investing Journey with us
                </div>
                <p className='grey-text text-lighten-1 description container col-6 d-flex center-align justify-content-center'>
                Obtaining bitcoins works just like obtaining any other currency. You can sell something you already have for them. You can ask your existing employer to pay you in Bitcoin.
                </p>
              </div>
            </div>
        

)  
}


export default Head;