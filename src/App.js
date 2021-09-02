import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeTab from "./tabs/HomeTab";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from "react-native-paper";
import { StatusBar } from "react-native";
import MovieTab from "./tabs/MovieTab";
import TvTab from "./tabs/TvTab";
import GenresTab from "./tabs/GenresTab";

const Tab = createMaterialBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={Colors.green800} />
        <Tab.Navigator
          initialRouteName="HomeTab"
          barStyle={{ backgroundColor: Colors.green700 }}
        >
          <Tab.Screen
            options={{
              tabBarLabel: "Главная",
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
            name={"HomeTab"}
            component={HomeTab}
          />
          <Tab.Screen
            options={{
              tabBarLabel: "Фильмы",
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="movie" color={color} size={26} />
              ),
            }}
            name={"MovieTab"}
            component={MovieTab}
          />
          <Tab.Screen
            options={{
              tabBarLabel: "Сериалы",
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="television-play" color={color} size={26} />
              ),
            }}
            name={"TvTab"}
            component={TvTab}
          />
          <Tab.Screen
            options={{
              tabBarLabel: "Жанры",
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="format-list-bulleted-type" color={color} size={26} />
              ),
            }}
            name={"GenresTab"}
            component={GenresTab}
          />
        </Tab.Navigator>
      </>
    );
  }
}

export default App;
