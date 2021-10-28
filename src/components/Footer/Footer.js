import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div className="container my-5">
            <div className="row">
                <div className="footer-widget d-flex justify-content-md-around justify-content-sm-center flex-wrap">
                    <div className="widget p-4">
                        <h2 className="fs-1 mb-4">Traveller BD.</h2>
                        <small className="text-muted">Book your trip in minute, get full <br/>
                            Control for much longer.
                        </small>
                    </div>
                    <div className="widget p-4">
                        <h5 className="mb-4">Company</h5>
                        <p className="text-muted">About</p>
                        <p className="text-muted">Careers</p>
                        <p className="text-muted">Mobile</p>
                    </div>
                    <div className="widget p-4">
                        <h5 className="mb-4">Contact</h5>
                        <p className="text-muted">Help/FAQ</p>
                        <p className="text-muted">Press</p>
                        <p className="text-muted">Affilates</p>
                    </div>
                    <div className="widget p-4">
                        <h5 className="mb-4">More</h5>
                        <p className="text-muted">Airlinefees</p>
                        <p className="text-muted">Airline</p>
                        <p className="text-muted">Low fare tips</p>
                    </div>
                    <div className="widget p-4">
                        <img src="images/Outboundfoot.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <p className="mt-5 p-4 text-white text-center bg-warning">All rights reserved@Traveller.bd</p>
    </footer>
    );
};

export default Footer;