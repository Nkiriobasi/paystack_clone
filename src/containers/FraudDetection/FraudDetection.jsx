import React from 'react';
import './FraudDetection.scss';
import { images } from '../../constants';


const FraudDetection = () => {
  return (
    <section className='fraud__detection padding-bottom-150'>
      <div className="container">

        <div className="feature">
          <div className="left">
            <div className="media">
              <video autoPlay muted loop>
                <source src={images.AdvancedFraudProtection} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="right">
            <div className="feature__details">
              <div className="feature__body">
                <div className="feature__text">
                  <h2 className="display-2">Protect yourself and your customers with advanced fraud detection</h2>
                  <p className="p-20">Paystack’s combination of automated and manual fraud systems protect you from 
                    fraudulent transactions and associated chargeback claims.
                  </p>
                </div>

                <div className="feature__text">
                  <h2 className="display-2">Detailed reporting for accounting, reconciliation, and audits</h2>
                  <p className="p-20">Understand your customers’ purchase patterns and do easy reconciliations 
                    with a robust data Dashboard and easy exports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FraudDetection;