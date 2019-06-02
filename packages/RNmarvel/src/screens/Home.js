import React, { useEffect } from "react";
import { View, Switch, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Fetching, Offset } from "./../action/index";
import Loading from "./Loading";
import { Header, Icon } from "react-native-elements";
import Card from "./../components/Card";
import { darkModeOFF, darkModeON } from "./../action/darkMode";
import styled, { ThemeProvider } from "styled-components";
import Theme, { TextMode, HeaderMode } from "./../../darkmode";

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
  darkModeON,
  darkModeOFF
}) => {
  // fetch more dada
  useEffect(() => {
    fetching();
  }, []);

  const FlatList = styled.FlatList`
    backgroundColor: ${props => props.theme.main};
  `;

  const MyCustomLeftComponent = () => {
    return (
      <Icon name={"home"} iconStyle={{ color: TextMode(stateDarkMode) }} />
    );
  };

  const MyCustomRightComponent = () => {
    return (
      <Switch
        value={stateDarkMode}
        onValueChange={value => {
          if (value) {
            darkModeON();
          } else {
            darkModeOFF();
          }
        }}
      />
    );
  };

  return (
    <View>
      <Header
        backgroundColor={HeaderMode(stateDarkMode)}
        centerComponent={{
          text: "Home",
          h4: true,
          style: { color: TextMode(stateDarkMode) }
        }}
        leftComponent={<MyCustomLeftComponent />}
        rightComponent={<MyCustomRightComponent />}
      />
      <ThemeProvider theme={Theme(stateDarkMode)}>
        <FlatList
          data={stateFetch.data}
          renderItem={({ item }) => (
            <Card
              item={item}
              navigation={navigation}
              stateDarkMode={stateDarkMode}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={fetching}
          onEndReachedThreshold={1}
        />
      </ThemeProvider>

      {stateFetch.loading && <Loading />}
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
