import React from 'react';


const OurServices = () => {

    return (
        <div id='services' className='all-services'>
            <h2 className='black-text title '>Buy and Sell</h2>
            <div className="line" ></div>
            <div className='p-content'>
                <div className='des' style={{ padding: '10px 0px' }}>Simple steps to Buy and Sell crypto</div>

                <div className='pp-content'>
                    <div className='p-field' style={{ backgroundImage: "url('https://media.istockphoto.com/photos/close-up-shot-of-bitcoin-and-alt-coins-cryptocurrency-picture-id1319338212?k=20&m=1319338212&s=612x612&w=0&h=eY-Uf7mW4MlIUkjJeN3_xe5dvBhTeybuvtjuR7OcEG8=')" }}>
                        <div className='layer'>
                            <h5>Buy</h5>
                            <div>Start buying and selling bitcoin through your regular bank account, check the balance and rates.</div>
                        </div>
                    </div>

                    <div className='p-field' style={{ backgroundImage: "url('https://media.istockphoto.com/photos/close-up-shot-of-dogecoin-cryptocurrency-picture-id1319337383?k=20&m=1319337383&s=612x612&w=0&h=jcnS1xPFkXO7YdDKwJVST9U_ADfPXaCHQy8DPj_2y_o=')" }}>
                        <div className='layer'>
                            <h5>Use</h5>
                            <div>Store your bitcoin securely in your Bitcoin wallet or vault and use them when you need it.</div>
                        </div>
                    </div>

                    <div className='p-field' style={{ backgroundImage: "url('https://media.istockphoto.com/photos/golden-coins-picture-id92685350?k=20&m=92685350&s=612x612&w=0&h=fJvf4Y2nAubDzkbEXXgwBTtXyzSdO-zeWI2Bykt-oyo=')" }}>
                        <div className='layer'>
                            <h5>Accept</h5>
                            <div>Accept bitcoin from your friends and customers around the world and make transfers yourself.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;