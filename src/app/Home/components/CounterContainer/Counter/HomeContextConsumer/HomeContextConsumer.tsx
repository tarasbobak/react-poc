import React from 'react';
import Home from '../../../../Home';

class HomeContextConsumer extends React.Component {
  public render() {
    return (
      <Home.Consumer>
        {({ dumbValue, handleDumbValueChange }: any) => (
          <>
            <h3>{dumbValue}</h3>
            <button onClick={handleDumbValueChange}>Click me to change text</button>
          </>
        )}
      </Home.Consumer>
    );
  }
}

export default HomeContextConsumer;
