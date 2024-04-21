import React, { useState } from 'react';
import logo from '../logo.svg';
import NavbarContainer from '../NavBar/NavBarContainer';
import ContactMeContainer from '../ContactPage/ContactMeContainer';
import AboutContainer from '../AboutPage/AboutContainer';
import ProjectsContainer from '../ProjectPage/ProjectsContainer';

const HomePagePresentational: React.FC<any> = (props) => {
  const handleItemClick = () => {
    // Perform any action when an item is clicked
  };

  return (
    <div className="homepage" 
    style={{
      width: '80%',
      margin: 'auto',
    }}>
      <NavbarContainer />
      <AboutContainer />
      <ProjectsContainer />
      <ContactMeContainer />
    </div>
  );
};

export default HomePagePresentational;