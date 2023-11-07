import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CompetitionVote from './pages/CompetitionVote';
import MainCompetition from './components/Home/MainCompetition';
import CompetitionImage from './components/Competition/CompetitionImage';
import ImageDetail from './pages/ImageDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/competitionvote' element={<CompetitionVote/>}/>
      <Route path='/test' element={<CompetitionImage/>}/>
      <Route path='/imageDetail' element={<ImageDetail/>}/>
    </Routes>
  </BrowserRouter>
);

