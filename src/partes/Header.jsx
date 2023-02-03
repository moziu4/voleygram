import react from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import Constants from "expo-constants";

const Header = () => {
  return (
    <View style={style.container}>
      <Text>Logo</Text>
      <Button style={style.button} title="login">
        login
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: Dimensions.get("screen").width,
    position: "absolute",
    top: 0,
    elevation: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 0,
    opacity: 0.95,
    paddingBottom: 6,
    paddingTop: Constants.statusBarHeight + 10,
  },
  button: {
    backgroundColor: "grey",
    flexGrow: 1,
  },
});

export default Header;
