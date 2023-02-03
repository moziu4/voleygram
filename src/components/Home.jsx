import React from "react";

import { View } from "react-native";
import Eventos from "./Eventos";

const Home = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Eventos navigation={navigation} />
    </View>
  );
};

export default Home;
