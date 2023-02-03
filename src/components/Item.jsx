import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Item = (item) => {
  const { titulo, hora, lugar, ciudad, dia, modalidad, limitePerson } =
    item.item;
  console.log(titulo);

  const elegirModalidad = (elem) => {
    if (elem === "2 x 2") {
      return <Text style={style.modalidad2}>{elem}</Text>;
    }
    if (elem === "4 x 4") {
      return <Text style={style.modalidad4}>{elem}</Text>;
    } else {
      return <Text style={style.modalidadPopular}>{elem}</Text>;
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.titulo}>{titulo}</Text>
      <View style={style.containerInfo}>
        <View style={style.containerFecha}>
          <View style={style.containerDatos}>
            <Text style={style.textoBlack}>Dia</Text>
            <Text style={style.texto}>{dia}</Text>
          </View>
          <View style={style.containerDatos}>
            <Text style={style.textoBlack}>Hora</Text>
            <Text style={style.texto}>{hora}</Text>
          </View>
        </View>

        <View style={style.containerSitio}>
          <View style={style.containerDatos}>
            <Text style={style.textoBlack}>Lugar</Text>
            <Text style={style.texto}>{ciudad}</Text>
          </View>
          <View style={style.containerDatos}>
            <Text style={style.textoBlack}>Zona</Text>
            <Text style={style.texto}>{lugar}</Text>
          </View>
        </View>
        <View style={style.containerSitio}>
          <View style={style.containerDatos}>
            <Text style={style.textoBlack}>Modalidad</Text>
            <View style={style.tabs}>
              {modalidad.map((elem) => elegirModalidad(elem))}
            </View>
          </View>
          <View style={style.containerDatos}>
            <Text style={style.textoBlack}>Participantes</Text>
            <Text style={style.texto}>3 / {limitePerson}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 6,
    marginHorizontal: 8,
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  containerSitio: {
    justifyContent: "space-around",
    marginTop: 4,
  },

  containerFecha: {
    justifyContent: "space-around",
    marginTop: 4,
  },

  containerDatos: {
    justifyContent: "center",
    marginBottom: 12,
  },
  titulo: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  texto: {
    fontSize: 15,
    textAlign: "center",
  },
  textoBlack: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalidad4: {
    alignSelf: "center",
    backgroundColor: "green",
    borderRadius: 8,
    color: "white",
    fontSize: 13,
    marginHorizontal: 1,
    padding: 3,
    paddingHorizontal: 6,
    textAlign: "center",
  },
  modalidad2: {
    alignSelf: "center",
    backgroundColor: "orange",
    borderRadius: 8,
    color: "white",
    fontSize: 13,
    marginHorizontal: 1,
    padding: 3,
    paddingHorizontal: 6,
    textAlign: "center",
  },
  modalidadPopular: {
    alignSelf: "center",
    backgroundColor: "blue",
    borderRadius: 8,
    color: "white",
    fontSize: 13,
    marginHorizontal: 1,
    padding: 3,
    paddingHorizontal: 6,
    textAlign: "center",
  },
  tabs: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Item;
