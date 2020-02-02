import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, FlatList, View, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { VelibContext } from "../exercices/exercice-context";

export default function ViewStation({ navigation }) {
  const [inFav, setInFav] = useState(false);
  const velibContext = useContext(VelibContext);

  const nameStation = navigation.getParam("stationName");
  const geo = navigation.getParam("geo");
  const dist = navigation.getParam("dist");
  const nbbike = navigation.getParam("nbbike");
  const nbebike = navigation.getParam("nbebike");
  const creditCard = navigation.getParam("creditCard");
  const date = navigation.getParam("record_timestamp");
  const dateFr =
    date.getDate() + " / " + date.getMonth() + 1 + " / " + date.getFullYear();

  function _handlePress(name, geo, nbbike, nbebike, creditCard, dist, date) {
    const station = {
      name: name,
      geo: geo,
      nbbike: nbbike,
      nbebike: nbebike,
      creditCard: creditCard,
      dist: dist,
      date: date
    };
    velibContext.addVelibToFav(station);
    if (inFav == false) {
      setInFav(true);
    } else {
      setInFav(false);
    }
  }
  return (
    <>
      <MapView
        style={{ flex: 0.5 }}
        region={{
          latitude: geo[0],
          longitude: geo[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: geo[0],
            longitude: geo[1]
          }}
          title={nameStation}
        />
      </MapView>

      <View style={{ flex: 0.5 }}>
        <View style={styles.title}>
          <Text style={{ fontSize: 20 }}>{nameStation}</Text>
        </View>
        <Text>🚶‍♂️ à {dist} metres de toi</Text>
        <Text>🚲 {nbbike + nbebike} vélos disponibles</Text>
        <Text>
          {creditCard == "yes"
            ? "💳 Achat de ticket: ✅ "
            : "💳 Achat de ticket: ❌"}
        </Text>
        <Text>📅 Mise a jour le {dateFr}</Text>
        <Text
          onPress={() =>
            _handlePress(
              nameStation,
              geo,
              nbbike,
              nbebike,
              creditCard,
              dist,
              dateFr
            )
          }
        >
          {inFav == false
            ? "💚 Ajouter aux favoris"
            : "❌ Supprimer aux favoris"}
        </Text>
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
