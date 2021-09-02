import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Colors} from 'react-native-paper';
import MovieScreen from "../screens/MovieScreen";
import ItemViewScreen from "../screens/ItemViewScreen";

const Stack = createNativeStackNavigator();

class MovieTab extends React.Component {
  render() {
    return (
      <>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: Colors.green700,
            }
          }}
        >
          <Stack.Screen options={{ title: "Фильмы" }} name={"MovieScreen"} component={MovieScreen} />
          <Stack.Screen options={{ title: "Подождите..." }} name={"ItemViewScreen"} component={ItemViewScreen} />
        </Stack.Navigator>
      </>
    );
  }
}

export default MovieTab;
