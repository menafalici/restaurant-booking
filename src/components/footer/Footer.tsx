import React from 'react';
import './Footer.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Footer() {
    return (
        <div className='footer-container'>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <h6><b>About Us</b></h6>
                    <p>
                        Golden Fork är Stockholms äldsta och bästa rockställe! En oas för dig som gillar god mat och bra musik, oavsett ålder eller samhällsklass.
                </p>
                </div>

                <div className="col-sm-12 col-md-4">
                    <ul className="social-icons">
                        <li>
                            <Link to="/http://www.facebook.com/" className="facebook">
                                <i className="fab fa-facebook-square" />
                            </Link>

                        </li>
                        <li>
                            <a className="twitter" href="http://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i
                            ></a>
                        </li>
                        <li>
                            <a className="linkedin" href="http://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i
                            ></a>
                        </li>
                    </ul>
                </div>

                <div className="col-sm-12 col-md-4">
                    <h6><b>Contact Us</b></h6>
                    <ul className="footer-contact">
                        <li>Phone: 010-534 28 90</li>
                        <li>E-Mail: info@goldenfork.se</li>
                    </ul>
                </div>
            </div>

            <hr />

            <div>
                <div className="col-md-12 col-sm-12">
                    <p className="copyright-text">Copyright &copy; 2020 Golden Fork</p>
                </div>
            </div>


        </div>
    )
}

export default Footer
