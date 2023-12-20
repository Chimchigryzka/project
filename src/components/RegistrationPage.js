import React, { useState } from 'react';
import './RegistrationPage.css';
import { useNavigate } from 'react-router-dom'; 

function RegistrationPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone:', phone);

    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <div className="thanks-block">
          Спасибо за оставленную заявку. В ближайшее время с вами свяжутся наши операторы!
        </div>
      ) : (
        <div className="registration-container">
          <h2>Оставьте заявку</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Полное имя:</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Номер телефона:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <button type="submit">Отправить</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default RegistrationPage;
