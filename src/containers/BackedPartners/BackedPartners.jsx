import React from 'react';
import './BackedPartners.scss';
import { images } from '../../constants';


const BackedPartners = () => {
  return (
    <section className="backed__partners padding-top-150 padding-bottom-150">
        <div className="circular"></div>

        <div className="container">
            <div className="header__body">
                <h1 className="display-1">Backed by strong global partners</h1>
                <p className="p-20">Paystack is backed by notable investors as well 
                    as some of the best payments companies on the planet.</p>
            </div>

            <div className="cards">


                <div className="card">
                    <div className="card__container">
                        <div className="card__header">
                            <div className="testimonial__icon">
                                <img src={images.StripeLogo} alt="" />
                            </div>
                        </div>

                        <div className="card__body">
                            <p className="testimonial__text">Paystack is highly technical and 
                                fanatically customer oriented. We’re excited to back such people 
                                in one of the world’s fastest-growing regions.
                            </p>
                        </div>

                        <div className="card__testimonial">
                            <div className="img">
                                <img src={images.PatrickCollison} alt="" />
                            </div>
                            <div className="author">
                                <div className="author__name">Patrick Collison</div>
                                <div className="role">
                                    <span>CEO, Stripe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card">
                    <div className="card__container">
                        <div className="card__header">
                            <div className="testimonial__icon">
                                <img src={images.VisaLogo} alt="" />
                            </div>
                        </div>

                        <div className="card__body">
                            <p className="testimonial__text">Our investment in Paystack aligns with 
                                the kind of investments we look for - those that will help extend our 
                                reach into the global commerce ecosystem
                            </p>
                        </div>

                        <div className="card__testimonial">
                            <div className="img">
                                <img src={images.OttoWilliams} alt="" />
                            </div>
                            <div className="author">
                                <div className="author__name">Otto Williams</div>
                                <div className="role">
                                    <span>Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card">
                    <div className="card__container">
                        <div className="card__header">
                            <div className="testimonial__icon">
                                <img src={images.ycombinatorLogo} alt="" />
                            </div>
                        </div>

                        <div className="card__body">
                            <p className="testimonial__text">As YC's first Nigerian startup Paystack 
                                leads the charge of great companies coming out of Africa, powering 
                                modern payments for an entire continent.
                            </p>
                        </div>

                        <div className="card__testimonial">
                            <div className="img">
                                <img src={images.MichaelSiebel} alt="" />
                            </div>
                            <div className="author">
                                <div className="author__name">Michael Seibel</div>
                                <div className="role">
                                    <span>CEO, Partner, Y Combinator</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default BackedPartners;