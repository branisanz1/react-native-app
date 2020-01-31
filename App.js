import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import AppNavigator from "./navigation/AppNavigator";
import { VelibProvider } from "./exercices/exercice-context";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <VelibProvider>
          <AppNavigator />
        </VelibProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
