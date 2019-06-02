import React, { Component } from "react";
import { ScrollView, Image, Dimensions, Text, StyleSheet } from "react-native";
import { Header, Icon, Button, } from "react-native-elements";
import { connect } from "react-redux";

const SCREEN_WIDTH = Dimensions.get("screen").width;

class Description extends Component {
  componentDidMount() {
    console.log(this.props.stateDarkMode);
  }

  render() {
    const { hero } = this.props.navigation.state.params;

    const MyCustomLeftComponent = () => (
      <Icon
        name={"arrow-back"}
        onPress={() => this.props.navigation.goBack()}
      />
    );

    return (
      <>
        <Header
          backgroundColor={"#f1f1f1"}
          centerComponent={{ text: "Description", h4: true }}
          leftComponent={<MyCustomLeftComponent />}
        />
        <ScrollView>
          <Image
            source={{
              uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
            }}
            style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}
          />
          <Text style={{ padding: 10, fontSize: 20 }}>{hero.name}</Text>
          <Text style={{ padding: 10 }}>{hero.description}</Text>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  
})

const mapStateToProps = state => ({
  stateDarkMode: state.darkMode.darkmode
});

export default connect(
  mapStateToProps,
  null
)(Description);
