import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Exercice1() {
  return (
    <>
      <View style={styles.container}>
        <Text>Descend Moi</Text>
      </View>
      <View style={styles2.container2}>
        <Text>Cache moi</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    color: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});

const styles2 = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
