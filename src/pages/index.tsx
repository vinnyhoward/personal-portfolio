import React from 'react';
import BannerLayout from '../components/BannerLayout';
import InfoBanner from '../components/InfoBanner';
import PortfolioLayout from '../components//PortfolioLayout';

const App = () => (
  <>
    <BannerLayout>
      <InfoBanner />
    </BannerLayout>
    <PortfolioLayout>HIII</PortfolioLayout>
  </>
);

export default App;
