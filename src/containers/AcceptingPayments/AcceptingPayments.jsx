import React from 'react';
import './AcceptingPayments.scss';

const AcceptingPayments = () => {
  return (
    <section className="accepting__payments">
        <div className="curved"></div>

        <div className="container">
            <div className="signup">
                <div className="left">
                    <p className="p-20">Try Paystack Now</p>

                    <h1 className="display-1">Start accepting payments in just 30 minutes</h1>
                </div>

                <div className="right">
                    <div className="cfa__btn">
                        <a href="/#" className="create__account-bg">Create free account</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AcceptingPayments;