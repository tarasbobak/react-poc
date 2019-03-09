import React from 'react';
import errorImg from '../../assets/error.png';
import { RouteComponentProps } from '@reach/router';

const NotFound: React.SFC<RouteComponentProps> = () => {
  return (
    <div>
      <h1>404</h1>
      <img src={errorImg} alt="Beep! Boob!" />
    </div>
  );
};

export default NotFound;
