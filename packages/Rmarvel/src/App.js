import React from "react";
import { hot } from "react-hot-loader";
import Routers from './Routers'
import store from './store/index'
import "./app.css";

const App = () => {
  return <Routers store={store}/>
};

export default hot(module)(App);
