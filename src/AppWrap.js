import React from 'react';
import { Header, Hero, Payments, DocumentedApis, FraudDetection, TrustedBusinesses, PoweringGrowth, BackedPartners, AcceptingPayments } from './containers';

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
    </>
  );
}

export default AppWrap;