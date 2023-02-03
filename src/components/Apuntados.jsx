import react from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Apuntados = ({ id, limitePerson, participantes }) => {
  const numeroApuntado = participantes.length;

  return (
    <View style={style.container}>
      <View style={style.containerTitulo}>
        <Text style={style.titulo}>Participantes</Text>
        <Text style={style.tituloNumero}>
          {numeroApuntado} / {limitePerson}
        </Text>
      </View>
      <View>
        {participantes.map((participante) => (
          <View style={style.containerParticipante} key={participante.nombre}>
            <Text style={style.nombre}>{participante.nombre}</Text>
            <Text style={style.item}>{participante.items}</Text>
            <Pressable style={style.btnSeguir}>
              <Text style={style.textBtnSeguir}>Seguir</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Apuntados;

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    marginHorizontal: 6,
    marginVertical: 8,
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  containerTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  containerParticipante: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tituloNumero: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nombre: {
    fontSize: 16,
  },
  item: {
    color: "gray",
    textAlign: "left",
  },
  btnSeguir: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#3165b3",
  },
  textBtnSeguir: {
    color: "white",
    fontSize: 13,
  },
});
