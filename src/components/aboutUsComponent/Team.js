import React from 'react';

function Team() {
    return (
        <section class="about-section d-flex justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div class="inner-column">
                            <div class="sec-title">
                                <h2>Join our community of fun crypto brains and grow yours tool.</h2>
                            </div>
                            <div class="text">Learning an be boring. This i why we educate through simplicity and entertainment. We are co-team of actual crypto experts under roof. Having valid, trust worthy information readily available in a community is a gift we would like to contribute.</div>
                            <div class="text">
                            Join our community of fun crypto brains and grow yours tool. Work with us,
                            </div>
                            <span className='signature text'>
                            crypto guides
                            </span>

                        </div>
                    </div>

                    {/* <!-- Image Column --> */}
                    <div class="image-column col-lg-6 col-md-12 col-sm-12">
                        <div class="inner-column wow fadeInLeft">
                        <figure class="image-1">
                            <a href="#" class="lightbox-image" data-fancybox="images">
                                <img title="Rahul Kumar Yadav" src="https://cdn.pixabay.com/photo/2017/12/12/12/44/bitcoin-3014614__340.jpg" alt=""/>
                            </a>
                            </figure>
                            </div>
                        </div>
                    </div>

                </div>
        </section>
    );
}

export default Team;
