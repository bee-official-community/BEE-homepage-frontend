import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router 임포트
import './App.css';
import { Header } from './components/common/Header';
import { AboutUsPage } from './pages/AboutUsPage';
import { AdminPage } from './pages/AdminPage';
import { CommunityPage } from './pages/CommunityPage';
import { MainPage } from './pages/MainPage';
import { ProjectPage } from './pages/ProjectPage';
import { GenerationPage } from './pages/GenerationPage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* 모든 페이지에 공통으로 보이는 헤더 */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/generation" element={<GenerationPage/>}></Route>
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
