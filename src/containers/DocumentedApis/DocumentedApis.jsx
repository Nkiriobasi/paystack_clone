import React from 'react';
import { images } from '../../constants';
import './DocumentedApis.scss';
import { Cta } from '../../components';


const DocumentedApis = () => {
  return (
    <section className='documented__api padding-bottom-150'>
        <div className="container">
            
            <div className="feature">
                <div className="left order">
                    <div className="media">
                        <img src={images.RobustApis} alt="" />
                    </div>
                </div>

                <div className="right">
                    <div className="feature__details">
                        <div className="feature__body">
                            <div className="feature__text">
                                <h2 className="display-2">Build custom payments experiences with well-documented APIs</h2>
                                <p className="p-20">Developers love our thorough, well-documented APIs that let you to build 
                                    everything from simple weekend projects, to complex financial products serving hundreds of 
                                    thousands of customers. If you can imagine it, you can build it with Paystack.
                                </p>
                            </div>

                            <div className="feature__payment-methods">
                                <ul>
                                    <li>Make instant transfers</li>
                                    <li>Retrieve all your transaction and customer data</li>
                                    <li>Verify the identity of customers</li>
                                    <li>Collect one-time and recurring payments from your app or website</li>
                                </ul>
                            </div>

                            <Cta text="Paystack API Quickstart" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default DocumentedApis;