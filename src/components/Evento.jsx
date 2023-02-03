import react from "react";
import { Text, View, StyleSheet } from "react-native";
import data from "../../assets/datosPrueba.json";
import Apuntados from "./Apuntados";

const Evento = (itemId) => {
  const id = itemId.route.params.itemId;

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

  const datos = data.filter((dato) => dato.id == id);
  const {
    titulo,
    dia,
    hora,
    lugar,
    modalidad,
    participantes,
    ciudad,
    limitePerson,
  } = datos[0];

  return (
    <View>
      <View style={style.container}>
        <Text style={style.titulo}>{titulo}</Text>
        <View style={style.containerTexto}>
          <Text style={style.textoNegrita}>Dia:</Text>
          <Text style={style.texto}>{dia}</Text>
        </View>
        <View style={style.containerTexto}>
          <Text style={style.textoNegrita}>Hora:</Text>
          <Text style={style.texto}>{hora}</Text>
        </View>
        <View style={style.containerTexto}>
          <Text style={style.textoNegrita}>Ciudad:</Text>
          <Text style={style.texto}>{ciudad}</Text>
        </View>
        <View style={style.containerTexto}>
          <Text style={style.textoNegrita}>Lugar:</Text>
          <Text style={style.texto}>{lugar}</Text>
        </View>
        <View style={style.containerModalidad}>
          <Text style={style.textoNegrita}>Modalidad:</Text>
          {modalidad.map((elem) => elegirModalidad(elem))}
        </View>
      </View>
      <Apuntados
        participantes={participantes}
        limitePerson={limitePerson}
        id={id}
      />
    </View>
  );
};

export default Evento;

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    marginHorizontal: 6,
    marginVertical: 8,
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  containerTexto: {
    flexDirection: "row",
  },
  containerModalidad: {
    flexDirection: "row",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  textoNegrita: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 3,
  },
  modalidad4: {
    alignSelf: "center",
    backgroundColor: "green",
    borderRadius: 8,
    color: "white",
    fontSize: 13,
    marginBottom: 10,
    marginHorizontal: 4,
    padding: 3,
    paddingHorizontal: 6,
  },
  modalidad2: {
    alignSelf: "center",
    backgroundColor: "orange",
    borderRadius: 8,
    color: "white",
    fontSize: 13,
    marginBottom: 10,
    marginHorizontal: 4,
    padding: 3,
    paddingHorizontal: 6,
  },
  modalidadPopular: {
    alignSelf: "center",
    backgroundColor: "blue",
    borderRadius: 8,
    color: "white",
    fontSize: 13,
    marginBottom: 10,
    marginHorizontal: 4,
    padding: 3,
    paddingHorizontal: 6,
  },
});
