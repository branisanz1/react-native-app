import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function ViewStation({ navigation }) {
  const date = navigation.getParam("record_timestamp");
  const dateFr =
    date.getDate() + " / " + date.getMonth() + 1 + " / " + date.getFullYear();
  return (
    <>
      <MapView
        style={{ flex: 0.5 }}
        region={{
          latitude: navigation.getParam("geo")[0],
          longitude: navigation.getParam("geo")[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: navigation.getParam("geo")[0],
            longitude: navigation.getParam("geo")[1]
          }}
          title={navigation.getParam("stationName")}
        />
      </MapView>

      <View style={{ flex: 0.5 }}>
        <View style={styles.title}>
          <Text style={{ fontSize: 20 }}>
            {navigation.getParam("stationName")}
          </Text>
        </View>
        <Text>🚶‍♂️ à {navigation.getParam("dist")} metres de toi</Text>
        <Text>🚲 {navigation.getParam("nbbike")} vélos disponibles</Text>
        <Text>
          {navigation.getParam("creditCard") == "yes"
            ? "💳 Achat de ticket: ✅ "
            : "💳 Achat de ticket: ❌"}
        </Text>
        <Text>📅 Mise a jour le {dateFr}</Text>
      </View>
    </>
  );
}
ViewStation.navigationOptions = {
  title: "Détails de Station"
};

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    justifyContent: "center"
  }
});
