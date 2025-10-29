import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const valores=[ "⚀", "⚁", "⚂", "⚃", "⚄","⚅"]
  const [dado, setDado] = useState("⚀");

  const lanzarDado = () => {
   const index = Math.floor(Math.random() * valores.length);
    setDado(valores[index]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dado Virtual</Text>
      
      <TouchableOpacity onPress={lanzarDado}>
        <Text style={styles.dadoNum}>{dado}</Text>
      </TouchableOpacity>
      
      <Button title="Lanzar dado" onPress={lanzarDado} color="#5b0b54ff"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3bbf5ff"
  },

  titulo: {
    fontSize: 50,
    marginBottom: 5,
    color:"#720756d2"
  },

  dadoNum: {
    fontSize: 100,
    fontWeight: "bold",
    color:"#590b50b9",
    marginBottom:5
  },
});
