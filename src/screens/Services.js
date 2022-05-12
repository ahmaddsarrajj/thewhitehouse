import React from 'react';
import WhyUs from '../components/servicesComponent/WhyUs.js';
import Advice from '../components/servicesComponent/Advice.js';
import OurServices from '../components/servicesComponent/OurServices.js';

function Services(props) {
    return (
        <div>
            <WhyUs/>
            <OurServices></OurServices>
            <Advice/>
        </div>
    );
}

export default Services;