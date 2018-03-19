import React from 'react';
import './NotFound.scss';
import errorImg from '../../assets/error.png';

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <img src={errorImg} alt="Beep! Boob!" />
    </div>
  );
}

export default NotFound;
