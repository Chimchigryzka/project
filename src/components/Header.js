
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png'; 

function Header() {
  return ( 
    <header>
      <nav>
        <ul>
          <li>
          <li className="home">
            <div className="logo-container">
              <Link to="/">
                <img src={logo} alt="Логотип" className="logo" />
              </Link>
            </div> 
          </li>
          </li>
          <li><Link to="/workouts">Тренировки</Link></li>
          <li><Link to="/trainers">Тренеры</Link></li>
          <li><Link to="/pricing">Цены</Link></li>
          <li><Link to="/faq">Вопросы</Link></li>
          <li><Link to="/register">Оформить карту</Link></li>
        </ul> 
      </nav> 
    </header> 
  );
}

export default Header;