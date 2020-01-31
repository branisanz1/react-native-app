import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { VelibContext } from "../exercices/exercice-context";

export default function MapScreen() {
  const velibContext = useContext(VelibContext);
  const [coordinateStation, setCoordinateStation] = useState(false);

  useEffect(() => {
    setCoordinateStation(velibContext);
  }, []);

  return (
    <>
      <View style={styles.title}>
        <Text style={{ fontSize: 20 }}>Cartes des stations de Velib</Text>
      </View>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 48.8667,
          longitude: 2.4167,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {coordinateStation &&
          coordinateStation.map(station => (
            <Marker
              key={station.name}
              coordinate={{
                latitude: station.geo[0],
                longitude: station.geo[1]
              }}
              title={station.name}
            />
          ))}
      </MapView>
    </>
  );
}

MapScreen.navigationOptions = {
  title: "Carte"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
