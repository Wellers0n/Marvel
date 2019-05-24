import React from 'react'
import Home from './src/screens/Home'
import Description from './src/screens/Description'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './src/store/index'

let Root = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Description: {
    screen: Description,
    navigationOptions: {
      title: 'Description'
    }
  },
})

let Navigation = createAppContainer(Root);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

