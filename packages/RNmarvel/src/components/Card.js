import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Card, Avatar } from "react-native-elements";
import { BackgroundInvert, TextMode } from "./../../darkmode";

const CardMain = ({ item, navigation, stateDarkMode }) => {
  const _onItemPress = item => {
    navigation.navigate("Description", { hero: item });
  };

  return (
    <TouchableOpacity onPress={() => _onItemPress(item)}>
      <Card
        title="Character"
        titleStyle={{ color: TextMode(stateDarkMode) }}
        containerStyle={{
          backgroundColor: BackgroundInvert(stateDarkMode)
        }}
      >
        <View style={styles.container}>
          {/* <Image style={styles.img}
                        source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
                    /> */}
          <Avatar
            size="medium"
            rounded
            source={{
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`
            }}
          />
          <Text style={{ color: TextMode(stateDarkMode) }}>{item.name}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    height: 50,
    width: 50
  }
});

export default CardMain;
