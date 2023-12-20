import React, { useState, useEffect } from 'react';
import './MainPage.css';
import workoutImg from './тренировки.jpg'; 
import trainersImg from './тренера.jpg'; 
import gym1Img from './gym1.jpg'; 
import gym2Img from './gym2.jpg'; 
import gym3Img from './gym3.jpg'; 
import gym4Img from './gym4.jpg'; 
import additionalImageRight from './map.png';
// import GoogleMaps from './GoogleMaps';

const MainPage = () => {
  const [currentAdditionalImage, setCurrentAdditionalImage] = useState(0);
  const additionalImages = [
    gym1Img,
    gym2Img,
    gym3Img,
    gym4Img
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdditionalImage((prevImage) => (prevImage === additionalImages.length - 1 ? 0 : prevImage + 1));
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentAdditionalImage, additionalImages.length]);

  return (
    <div>
      <h1 className="main-heading">Создай свое идеальное тело вместе с FITLOFT</h1>
      <section>
        <div className="images-container">
          <div className="image-with-text">
            <div className="text-above-image-bottom">Выбери удобную и идеальную для себя</div>
            <img src={workoutImg} alt="Тренировки" />
            <div className="text-over-image">
              <a href="/workouts">Тренировку</a>
            </div>
          </div>
          <div className="image-with-text">
            <div className="text-above-image-bottom">Занимайся в группе или индивидуально с комфортным для себя</div>
            <img src={trainersImg} alt="Тренеры" />
            <div className="text-over-image">
              <a href="/trainers">Тренером</a>
            </div>
          </div>
        
        </div>
      </section>

      <div className="additional-content">
        <div className="additional-text">
          <p>Почему именно мы?</p>
        </div>
        <div className="additional-image">
          <img src={additionalImages[currentAdditionalImage]} alt="Дополнительное изображение" />
        </div>
      </div>

      <div className="additional-bottom-text">
        <p>Мы новый фитнес клуб, расположенный в центре города.
          У нас вы можете увидеть новейшее оборудование, заниматься у высококвалифицированных тренеров.
          Это место не только поможет вашему телу прийти в идеальную форму, но также поможет насладиться времяпровождением.
          За счет эстетичного дизайна вы сможете создать красивый контент, который точно оценят.
        </p>
      </div>
      <div className="additional-left-content">
        <h2>Где мы находимся?</h2>
        <p>Наш зал расположен по адресу: г. Алматы, БЦ "Almaty Towers", ул. Байзакова 280, этаж 20</p>
        <p>Номер для связи: 8 (777)-723-37-62</p>
      </div>

      <div className="additional-right-content">
        <img src={additionalImageRight} alt="Фотография справа" />
      </div>
      {/* <GoogleMaps />  */}
      </div> 
   
  );
}

export default MainPage;
