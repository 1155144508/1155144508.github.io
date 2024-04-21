import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar/NavBarContainer';
import HomePageContainer from './components/HomePage/HomePageContainer';
import ProjectsContainer from './components/ProjectPage/ProjectsContainer';
import RandomQuoteMachine from './components/projects/RandomQuoteMachine/RandomQuoteMachine';
import Clock from './components/projects/Clock/Clock';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePageContainer />} />
        <Route path='/projects' element={<ProjectsContainer />} />
        <Route path='/random_quote_machine' element={<RandomQuoteMachine />} />
        <Route path='/clock' element={<Clock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
