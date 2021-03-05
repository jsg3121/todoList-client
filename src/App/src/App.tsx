import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import '../../style/App.scss';
import HeaderContainer from '../../view/HeaderContainer';
import MainContainer from '../../view/MainContainer';

const App = () => {

  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <Route exact path="*">
        <Redirect to="/main"></Redirect>
      </Route>
      <Route exact path="/main">
        <MainContainer></MainContainer>
      </Route>
    </div>
  );
};


export default App;
