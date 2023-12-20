import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import WorkoutsPage from './components/WorkoutsPage';
import TrainersInfoPage from './components/TrainersInfoPage';
import PricingPage from './components/PricingPage';
import FAQPage from './components/FAQPage';
import RegistrationPage from './components/RegistrationPage';
import './index.css';




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/workouts" element={<WorkoutsPage />} />
          <Route path="/trainers" element={<TrainersInfoPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;
