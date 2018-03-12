import React from 'react';
import CounterContainer from './CounterContainer/CounterContainer';
import './Home.scss';


function Home() {
  return (
    <div>
      <h1>This is home page</h1>
      <h3>Bootstrap grid system</h3>
      <div className="row">
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div className="col-6 col-sm-6">.col-6 .col-sm-6</div>
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
      </div>
      <CounterContainer />
    </div>
  );
}

export default Home;
