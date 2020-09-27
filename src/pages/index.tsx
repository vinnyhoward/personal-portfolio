import React from 'react';
import BannerLayout from '../shared/components/BannerLayout';
import InfoBanner from '../shared/components/InfoBanner';

const avatar = 'https://avatars1.githubusercontent.com/u/31226035?s=460&u=651a3f3cfd0f899be47765dd849c470db13d8fb4&v=4';

const App = () => (
  <BannerLayout>
    <InfoBanner image={avatar} />
  </BannerLayout>
);

export default App;
