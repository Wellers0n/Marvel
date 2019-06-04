import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import Home from "./screen/Home";
import { Provider } from "react-redux";

const Routers = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default Routers;
