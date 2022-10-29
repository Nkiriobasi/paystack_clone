import React from 'react';
import './Footer.scss';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import { RiTwitterFill } from 'react-icons/ri';
import { FaYoutubeSquare } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="row">

                <div className="column">
                    <div className="group drop">
                        <h4 className="dropdown">Why Paystack</h4>
                        <ul className="collaspe">
                            <li>
                                <a href="/#">Why Choose Paystack</a>
                            </li>
                            <li>
                                <a href="/#">Success Rate</a>
                            </li>
                        </ul>
                    </div>
                    <div className="group close">
                        <ul className="collaspe">
                            <li>
                                <a href="/#">For Entrepreneurs</a>
                            </li>
                            <li>
                                <a href="/#">For Corporates</a>
                            </li>
                            <li>
                                <a href="/#">For International Companies</a>
                            </li>
                        </ul>
                    </div>
                    <div className="group close">
                        <ul className="collaspe">
                            <li>
                                <a href="/#">For Fintechs</a>
                            </li>
                            <li>
                                <a href="/#">For Schools</a>
                            </li>
                            <li>
                                <a href="/#">For Betting</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="column">
                    <div className="group drop">
                        <h4 className="dropdown translate">Pricing</h4>
                        <ul className="collaspe show">
                            <li>
                                <a href="/#">Nigeria</a>
                            </li>
                            <li>
                                <a href="/#">Ghana</a>
                            </li>
                            <li>
                                <a href="/#">South Africa</a>
                            </li>
                        </ul>
                    </div>
                    <div className="group drop">
                        <h4 className="dropdown">Customers</h4>
                        <ul className="collaspe">
                            <li>
                                <a href="/#">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                    <div className="group drop">
                        <h4 className="dropdown">Learn</h4>
                        <ul className="collaspe">
                            <li>
                                <a href="/#">Blog</a>
                            </li>
                            <li>
                                <a href="/#">Guides</a>
                            </li>
                            <li>
                                <a href="/#">Video Tutorials</a>
                            </li>
                            <li>
                                <a href="/#">Decode Fintech</a>
                            </li>
                            <li>
                                <a href="/#">Commerce</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="column">
                    <div className="group drop">
                        <h4 className="dropdown">Developers</h4>
                        <ul className="collaspe">
                            <li>
                                <a href="/#">OverView</a>
                            </li>
                            <li>
                                <a href="/#">Documentation</a>
                            </li>
                            <li>
                                <a href="/#">Status Page</a>
                            </li>
                        </ul>
                    </div>
                    <div className="group drop">
                        <h4 className="dropdown">Community</h4>
                        <ul className="collaspe">
                            <li>
                                <a href="/#">Nigeria Logos</a>
                            </li>
                        </ul>
                    </div>
                    <div className="group drop">
                        <h4 className="dropdown">Support</h4>
                        <ul className="collaspe">
                            <li>
                                <a href="/#">Help Desk</a>
                            </li>
                            <li>
                                <a href="/#">Contact Us</a>
                            </li>
                            <li>
                                <a href="/#">Why Was I Debited?</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="column">
                    <div className="group drop">
                        <h4 className="dropdown">About</h4>
                        <ul className="collaspe">
                            <li>
                                <a href="/#">Company</a>
                            </li>
                            <li>
                                <a href="/#">Compliance</a>
                            </li>
                            <li>
                                <a href="/#">Careers</a>
                            </li>
                            <li>
                                <a href="/#">Media Kit</a>
                            </li>
                            <li>
                                <a href="/#">Privacy & Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="column">
                    <div className="group">
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <a href="/#" className="mail">hello@paystack.com</a>
                            </li>
                            <li>
                                <ul className="social">
                                    <li>
                                        <a href="/#">
                                            <IoLogoFacebook className='social-icon' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <RiTwitterFill className='social-icon' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <IoLogoInstagram className='social-icon' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <IoLogoLinkedin className='social-icon' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <FaYoutubeSquare className='social-icon' />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="column">
                    <div className="group">
                        <h4>Lagos</h4>
                        <ul>
                            <li className="address">
                                126 Joel Ogunnaike Street,
                                <br />
                                Ikeja GRA, Ikeja,
                                <br />
                                Lagos, Nigeria.
                            </li>
                        </ul>
                    </div>
                    <div className="group country">
                        <h4>Accra</h4>
                        <ul>
                            <li className="address">
                                AfricaWork,
                                <br />
                                35 Patrice Lumumba Road,
                                <br />
                                Airport Residential Area,
                                <br />
                                Accra, Ghana.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="column">
                    <div className="group">
                        <h4>San Francisco</h4>
                        <ul>
                            <li className="address">
                                510 Townsend Street,
                                <br />
                                San Francisco,
                                <br />
                                CA 94103,
                                <br />
                                United State.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="column">
                    <div className="group">
                        <h4>South Africa</h4>
                        <ul>
                            <li className="address">
                                45 Kingfisher Dr
                                <br />
                                Fourways
                                <br />
                                Snadton, 2055
                                <br />
                                South Africa.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;