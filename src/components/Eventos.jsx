import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";

import { FlatList } from "react-native";
import Item from "./Item";
import data from "../../assets/datosPrueba.json";

const Eventos = ({ navigation }) => {
  return (
    <View style={style.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Ver", { itemId: item.id })}
          >
            <Item item={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    backgroundColor: "#ecf5f7",
    flexGrow: 1,
  },
});

export default Eventos;
