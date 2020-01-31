import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { fetchVelibs } from "../exercices/exercice6";

export default function ListScreen({ navigation }) {
  const [velibs, setVelibs] = useState("");

  useEffect(() => {
    fetchVelibs().then(data => {
      setVelibs(data);
    });
  }, []);

  return (
    <>
      <FlatList
        style={styles.container}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ViewStation", {
                  stationName: item.name,
                  geo: item.geo,
                  nbbike: item.nbbike,
                  nbebike: item.nbebike,
                  creditCard: item.creditcard,
                  dist: item.dist,
                  record_timestamp: new Date(item.recordTimestamp)
                })
              }
            >
              <Text> {item.name}</Text>
            </TouchableOpacity>
          );
        }}
        data={velibs}
        keyExtractor={item => item.name}
      />
    </>
  );
}

ListScreen.navigationOptions = {
  title: "Vélibs"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
