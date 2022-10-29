import React from 'react';
import { Header, Hero, Payments, DocumentedApis, FraudDetection, TrustedBusinesses, PoweringGrowth, BackedPartners, AcceptingPayments, Footer } from './containers';

const AppWrap = () => {
  return (
    <>
        <Header />
        <Hero />
        <Payments />
        <DocumentedApis />
        <FraudDetection />
        <TrustedBusinesses />
        <PoweringGrowth />
        <BackedPartners />
        <AcceptingPayments />
        <Footer />
    </>
  );
}

export default AppWrap;