import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { VelibContext } from "../exercices/exercice-context";

export default function ListScreen({ navigation }) {
  const velibContext = useContext(VelibContext);

  const velibs = velibContext.velibs;
  const velibFav = velibContext.velibsFavorites;
  return (
    <>
      <Text style={styles.title}>Listes Stations Favorites</Text>

      <FlatList
        style={styles.stationsListFav}
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
              <Text>
                {item.name} ({item.dist}m)
              </Text>
            </TouchableOpacity>
          );
        }}
        data={velibFav}
        keyExtractor={item => item.name}
      />
      <Text style={styles.title}>Listes</Text>
      <FlatList
        style={styles.stationsList}
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
              <Text>
                {item.name} ({item.dist}m)
              </Text>
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
  stationsList: {
    flex: 0.8,
    backgroundColor: "#fff"
  },
  stationsListFav: {
    flex: 0.2
  },
  title: {
    fontSize: 20
  }
});
