import React from 'react';
import { Header, Hero, Payments, DocumentedApis, FraudDetection, TrustedBusinesses, PoweringGrowth } from './containers';

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
    </>
  );
}

export default AppWrap;