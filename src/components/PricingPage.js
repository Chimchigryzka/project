import React from 'react';
import { Link } from 'react-router-dom'; 
import './PricingPage.css';
import workoutImg from './тренировки.jpg'; 
import trainersImg from './тренера.jpg'; 

function PricingPage() {
  return (
    <div className="offers">
      <div className="gray-block" id="basic-package">
        <h3>Базовый пакет</h3>
        <div className="button-group">
          <a href="#basic-details">Подробнее</a>
          <Link to="http://localhost:3000/register">Оформить карту</Link>
        </div>
      </div>

      <div className="gray-block" id="advanced-package">
        <h3>Продвинутый пакет</h3>
        <div className="button-group">
          <a href="#advanced-details">Подробнее</a>
          <Link to="http://localhost:3000/register">Оформить карту</Link>
        </div>
      </div>

      <div className="gray-block" id="premium-package">
        <h3>Премиум пакет</h3>
        <div className="button-group">
          <a href="#premium-details">Подробнее</a>
          <Link to="http://localhost:3000/register">Оформить карту</Link>
        </div>
      </div>

      
      <div className="details" id="basic-details">
      <h2>Базовый пакет</h2>
        <p>
      Доступ к залу: Пакет предоставляет свободный доступ к тренажерному залу и оборудованию в течение рабочего времени.
      Групповые тренировки: Включает доступ ко всем групповым тренировкам, проводимым инструкторами.
      Заморозка абонемента: Позволяет заморозить абонемент на определенный период времени при необходимости.
      Самостоятельные занятия: Возможность посещения зала для самостоятельных занятий без тренера.
      </p>
      </div>

      <div className="details" id="advanced-details">
      <h2>Продвинутый пакет</h2>
        <p>
      Все возможности базового пакета: Доступ к залу, групповым тренировкам и заморозка абонемента.
      Индивидуальные тренировки: Дополнительно включает несколько индивидуальных тренировок с опытным тренером для разработки персональной программы тренировок.
      Чекап организма: Проведение тестирования и анализа организма для определения физической формы, составления плана питания и тренировок.
        </p>
      </div>

      <div className="details" id="premium-details">
      <h2>Премиум пакет</h2>
      <p>
      Все возможности продвинутого пакета: Доступ ко всем видам тренировок, индивидуальным занятиям и чекапу организма.
      Расширенный чекап организма: Дополнительные анализы и тестирование для более глубокого понимания состояния организма, включая метаболические показатели и индивидуальные рекомендации.
      Поддержка тренера: Дополнительная поддержка тренера вне тренировок для корректировки плана и помощи в достижении целей.
      </p>
      </div>

      <div className="тренировки">
        <img src={workoutImg} />
      </div>

      <div className="тренера">
        <img src={trainersImg} />
      </div>
      
      
      
    </div>
  );
}

export default PricingPage;
