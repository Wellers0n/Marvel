import React, { useEffect } from "react";
import { View, FlatList, Switch, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Fetching, Offset } from "./../action/index";
import Loading from "./Loading";
import { Header } from "react-native-elements";
import Card from "./../components/Card";
import { darkModeOFF, darkModeON } from "./../action/darkMode";
// import styled, { ThemeProvider } from "styled-components";

export function homeConfig({ navigation }) {
  return {
    header: null
  };
}

const Home = ({
  navigation,
  fetching,
  stateFetch,
  stateDarkMode,
  darkModeON
}) => {

  // fetch more dada
  useEffect(() => {
    fetching();
    console.log("useEffect");
  }, []);

  // useEffect(() => {
  //   console.log(stateDarkMode);
  // }, [stateDarkMode])

  return (
    <View>
      <Header
        backgroundColor={"#f1f1f1"}
        centerComponent={{ text: "Home", h4: true }}
        leftComponent={{ icon: "home", h4: true, style: { color: "#fff" } }}
      />
      {/* <Button title="Click" onPress={darkModeON} /> */}
      <FlatList
        data={stateFetch.data}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={fetching}
        onEndReachedThreshold={1}
      />
      {stateFetch.loading && <Loading/>}
    </View>
  );
};

const mapStateToProps = state => ({
  stateFetch: state.fetching,
  stateDarkMode: state.darkMode.darkmode
});

const mapDispatchToProps = dispatch => {
  return {
    fetching: bindActionCreators(Fetching, dispatch),
    darkModeON: bindActionCreators(darkModeON, dispatch),
    darkModeOFF: bindActionCreators(darkModeOFF, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
