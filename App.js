import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/NavBar/Home'
import MainCakes from './components/NavBar/MainCakes';
import IceCream from './components/NavBar/IceCream';
import MilkShake from './components/NavBar/MilkShake';
import s from './App.css'
const App = ()=> {
  return (
    <BrowserRouter>
      <div className = {s.app_wrapper}>
        <NavBar/>
            <Switch>
              <Route path = "/home">{Home}</Route>
              <Route path = "/main">{MainCakes}</Route>
              <Route path = "/icecream">{IceCream}</Route>
              <Route path = "/milkshake">{MilkShake}</Route>
            </Switch>
        <Footer/>
      </div>
    </BrowserRouter>  );
    }

export default App;