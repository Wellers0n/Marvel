import React from "react";
import Home, {homeConfig} from "./src/screens/Home";
import Description from "./src/screens/Description";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import store from "./src/store/index";
import { ROUTES } from "./roots";

const Root = createStackNavigator({
  [ROUTES.HOME]: {
    screen: Home,
    navigationOptions: homeConfig
  },
  [ROUTES.DESCRIPTION]: {
    screen: Description,
    navigationOptions: homeConfig
  }
});

const Navigation = createAppContainer(Root);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
