import React from 'react';
import Home from './src/screens/Home';
import Description from './src/screens/Description';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store/index';

let Root = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Description: {
    screen: Description,
    navigationOptions: {
      header: null
    }
  },
});

let Navigation = createAppContainer(Root);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
};