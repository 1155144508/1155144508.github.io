import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ProjectsCSS from './Projects.module.css';

import HomePage from '../HomePage/HomePageContainer';

const ProjectsPresentational: React.FC<any> = (props) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <Link className={ProjectsCSS.link} to='/random_quote_machine'>Random Quote Machine</Link>
        </div>
        <div className="col">
          <Link className={ProjectsCSS.link} to='/clock'>25 + 5 Clock</Link>
        </div>
        <div className="col">
          Column
        </div>
      </div>
    </div>
  );
};

export default ProjectsPresentational;