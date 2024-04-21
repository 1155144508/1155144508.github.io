import React, { useState } from 'react';
import ProjectsPresentational from './ProjectsPresentational';

const ProjectsContainer: React.FC<any> = (props) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <ProjectsPresentational />
  );
};

export default ProjectsContainer;