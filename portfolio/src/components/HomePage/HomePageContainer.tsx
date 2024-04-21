import React, { useState } from 'react';
import HomePagePresentational from './HomePagePresentational';

const HomePageContainer: React.FC<any> = (props) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <HomePagePresentational />
  );
};

export default HomePageContainer;