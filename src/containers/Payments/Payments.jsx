import React from 'react';
import './Payments.scss';
import { images } from '../../constants';
import { Cta } from '../../components';


const Payments = () => {
  return (
    <section className='payments padding-top-150'>
        <div className="container">
            <div className="header__body">
                <h1 className="display-1">Simple, easy payments</h1>
                <p className="p-20">Building a business is hard. getting paid shouldn't be.</p>
            </div>

            <div className="feature">
                <div className="left">
                    <div className="media">
                        <img src={images.collectPayments} alt="" />
                    </div>
                </div>
                
                <div className="right">
                    <div className="feature__details">
                        <div className="feature__body">
                            <div className="feature__text">
                                <h2 className="display-2">Delight customers with a seamless payments experience</h2>
                                <p className="p-20">Give your customers the gift of modern, frictionless, painless 
                                    payments. Integrate Paystack once and let your customers pay you however they want.
                                </p>
                            </div>

                            <div className="feature__payment-methods">
                                <ul>
                                    <li>Card</li>
                                    <li>Bank Account</li>
                                    <li>Bank Transfer</li>
                                    <li>USSD</li>
                                </ul>
                                <ul>
                                    <li>Visa QR</li>
                                    <li>Mobile Money</li>
                                    <li>POS (Coming Soon)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="feature__details">
                        <div className="feature__body">
                            <div className="feature__text">
                                <h2 className="display-2">Enjoy phenomenal transaction success rates</h2>
                                <p className="p-20">We automatically route payments through the most optimal channels, 
                                    ensuring the highest transaction success rates in the market.
                                </p>
                            </div>
                            
                            <Cta text="Find out how we achieve high success rates" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Payments;