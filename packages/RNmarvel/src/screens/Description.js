import React, { Component } from "react";
import { ScrollView, Image, Dimensions, Text, StyleSheet } from "react-native";
import { Header, Icon, Button } from "react-native-elements";
import { connect } from "react-redux";
import { TextMode, HeaderMode, ModeTheme } from "./../../darkmode";

const SCREEN_WIDTH = Dimensions.get("screen").width;

class Description extends Component {
  render() {
    const { hero } = this.props.navigation.state.params;
    const { stateDarkMode } = this.props;

    const MyCustomLeftComponent = () => (
      <Icon
        name={"arrow-back"}
        iconStyle={{ color: TextMode(stateDarkMode) }}
        onPress={() => this.props.navigation.goBack()}
      />
    );

    return (
      <>
        <Header
          backgroundColor={HeaderMode(stateDarkMode)}
          centerComponent={{
            text: "Description",
            h4: true,
            style: { color: TextMode(stateDarkMode) }
          }}
          leftComponent={<MyCustomLeftComponent />}
        />
        <ScrollView style={{ backgroundColor: ModeTheme(stateDarkMode) }}>
          <Image
            source={{
              uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
            }}
            style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}
          />
          <Text
            style={{
              padding: 10,
              fontSize: 20,
              color: TextMode(stateDarkMode)
            }}
          >
            {hero.name}
          </Text>
          <Text style={{ padding: 10, color: TextMode(stateDarkMode) }}>
            {hero.description}
          </Text>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  stateDarkMode: state.darkMode.darkmode
});

export default connect(
  mapStateToProps,
  null
)(Description);
