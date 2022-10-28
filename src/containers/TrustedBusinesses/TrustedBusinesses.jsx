import React from 'react';
import './TrustedBusinesses.scss';
import { images } from '../../constants';
import { IoIosArrowDroprightCircle } from 'react-icons/io';



const TrustedBusinesses = () => {
  return (
    <section className='trusted__businesses padding-top-150 padding-bottom-150'>
        <div className="checked"></div>
        
        <div className="container">
            <div className="header__body">
                <h1 className="display-1">Trusted by 60,000+ businesses</h1>
                <p className="p-20">Thousands of organizations of all sizes trust Paystack to grow their business.</p>
            </div>

            <div className="cards">
                <div className="card">
                    <div className="card__container">
                        <div className="card__header">
                            <div className="icon">
                                <img src={images.psGlobalBrands} alt="" />
                            </div>
                        </div>
                        
                        <div className="card__body">
                            <h3 className="display-3">Paystack for <br /> Global Brands</h3>
                            <p>We help global brands accept payments from across Africa</p>
                        </div>

                        <div className="card__link">
                            <a href="/#">
                                <span>
                                    <IoIosArrowDroprightCircle className='arrow-icon' />
                                </span>
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card__container">
                        <div className="card__header">
                            <div className="icon">
                                <img src={images.psEntrepreneurs} alt="" />
                            </div>
                        </div>
                        
                        <div className="card__body">
                            <h3 className="display-3">Paystack for <br /> Entrepreneurs</h3>
                            <p>From startup to scale-up, we can support you at every stage of your businesses’ growth</p>
                        </div>

                        <div className="card__link">
                            <a href="/#">
                                <span>
                                    <IoIosArrowDroprightCircle className='arrow-icon' />
                                </span>
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card__container">
                        <div className="card__header">
                            <div className="icon">
                                <img src={images.psLargeOrganizations} alt="" />
                            </div>
                        </div>
                        
                        <div className="card__body">
                            <h3 className="display-3">Paystack for <br /> Large Organizations</h3>
                            <p>Paystack helps many of the largest corporate and government organizations in Nigeria get paid 
                                quickly and securely.
                            </p>
                        </div>

                        <div className="card__link">
                            <a href="/#">
                                <span>
                                    <IoIosArrowDroprightCircle className='arrow-icon' />
                                </span>
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default TrustedBusinesses;