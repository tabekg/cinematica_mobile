import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Colors} from 'react-native-paper';
import TvScreen from "../screens/TvScreen";
import ItemViewScreen from "../screens/ItemViewScreen";

const Stack = createNativeStackNavigator();

class TvTab extends React.Component {
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
          <Stack.Screen options={{ title: "Сериалы и TV шоу" }} name={"TvScreen"} component={TvScreen} />
          <Stack.Screen options={{ title: "Подождите..." }} name={"ItemViewScreen"} component={ItemViewScreen} />
        </Stack.Navigator>
      </>
    );
  }
}

export default TvTab;
