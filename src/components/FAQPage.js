import React, { useState } from 'react';
import './FAQPage.css';
import gym1Img from './gym1.jpg';
import gym2Img from './gym2.jpg';
import gym3Img from './gym3.jpg';

function FAQPage() {
  const faqs = [
    { id: 1, question: 'Помогает ли частое питье похудеть?', answer: 'Сбросить вес, регулируя питьевой режим, не получится. Здесь важны другие параметры: как составлена программа тренировок, питание, насколько человек успевает восстановить силы и тд. Но если вы начали заниматься спортом, то пить воды в течение дня нужно больше.' },
    { id: 2, question: 'Какие тренировки доступны?', answer: 'На расписании групповых тренировок представлены различные виды занятий, включая: Плавание, Йога, Stretching, High heels, Сrossfit, Contemporary, Powerlifting, и HIIT (High-Intensity Interval Training).' },
    { id: 3, question: 'Как связаться с тренерами?', answer: 'Для связи с тренерами возможно уточнить у администратора, а также на личных встречах с тренерами в зале во время проведения тренировок.' },
    { id: 4, question: 'Есть ли пробные занятия?', answer: 'Да, предоставляются пробные занятия для новых участников. Это отличная возможность попробовать различные виды тренировок перед решением о постоянном участии.' },
    { id: 5, question: 'Какие программы питания предлагаются?', answer: 'В рамках тренировочной программы фокусируется на физической активности и не включает в себя специфических программ питания. Однако, рекомендации по здоровому питанию и поддержанию баланса предоставляются тренерами в индивидуальном порядке по запросу участников.' },
  ];

  const [openAnswer, setOpenAnswer] = useState(null);

  return (
    <div className="faq-container">
      <h1>Часто задаваемые вопросы</h1>

      <ul className="faq-list">
        {faqs.map((faq) => (
          <li key={faq.id}>
            <div className="faq-item">
              <button
                className="question"
                onClick={() => setOpenAnswer(faq.id === openAnswer ? null : faq.id)}
              >
                {faq.question}
              </button>
              {openAnswer === faq.id && (
                <div className="answer">{faq.answer}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="trainer-image1">
        <img src={gym1Img} />
      </div>
      <div className="trainer-image2">
        <img src={gym2Img}/>
      </div>
      <div className="trainer-image3">
        <img src={gym3Img} />
      </div>

      <div className="contact-block">
        <p>Если у вас остались какие-либо вопросы, вы можете написать нам:</p>
        <p>
          Instagram: <a href="https://www.instagram.com/">Instagram</a><br />
          WhatsApp: <a href="https://web.whatsapp.com/">WhatsApp</a>
        </p>
      </div>
    </div>
  );
}

export default FAQPage;
