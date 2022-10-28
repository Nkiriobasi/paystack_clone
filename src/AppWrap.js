import React from 'react';
import { Header, Hero, Payments, DocumentedApis, FraudDetection, TrustedBusinesses, PoweringGrowth, BackedPartners } from './containers';

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
    </>
  );
}

export default AppWrap;