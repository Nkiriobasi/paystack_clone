import { Header, Hero, Payments, DocumentedApis, FraudDetection, TrustedBusinesses } from './containers';

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Payments />
      <DocumentedApis />
      <FraudDetection />
      <TrustedBusinesses />
    </div>
  );
}

export default App;
