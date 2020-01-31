import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ListScreen from "../screens/ListScreen";
import MapScreen from "../screens/MapScreen";
import ViewStation from "../exercices/exercice4";

const ListStack = createStackNavigator({
  Home: ListScreen,
  ViewStation: ViewStation
});

ListStack.navigationOptions = {
  tabBarLabel: "Liste des Stations"
};

const MapStack = createStackNavigator({
  Links: MapScreen
});

MapStack.navigationOptions = {
  tabBarLabel: "Carte"
};

export default createBottomTabNavigator({
  ListStack,
  MapStack
});
