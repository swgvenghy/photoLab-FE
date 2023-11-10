import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CompetitionVote from './pages/CompetitionVote';
import CompetitionImage from './components/Competition/CompetitionImage';
import ImageDetail from './pages/ImageDetail';
import Store from './redux/Store.jsx'
import { Provider } from 'react-redux'
import CompetitionList from './pages/CompetitionList.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/competitionvote' element={<CompetitionVote/>}/>
        <Route path='/test' element={<CompetitionImage/>}/>
        <Route path='/imageDetail' element={<ImageDetail/>}/>
        <Route path='/competitionList' element={<CompetitionList/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
  
);

