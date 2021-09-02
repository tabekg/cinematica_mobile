import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Colors} from 'react-native-paper';
import GenresScreen from "../screens/GenresScreen";
import GenreViewScreen from "../screens/GenreViewScreen";
import ItemViewScreen from "../screens/ItemViewScreen";

const Stack = createNativeStackNavigator();

class GenresTab extends React.Component {
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
          <Stack.Screen options={{ title: "Жанры" }} name={"GenresScreen"} component={GenresScreen} />
          <Stack.Screen options={{ title: "Подождите..." }} name={"GenreViewScreen"} component={GenreViewScreen} />
          <Stack.Screen options={{ title: "Подождите..." }} name={"ItemViewScreen"} component={ItemViewScreen} />
        </Stack.Navigator>
      </>
    );
  }
}

export default GenresTab;
