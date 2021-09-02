import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import {Colors} from 'react-native-paper';
import ItemViewScreen from "../screens/ItemViewScreen";

const Stack = createNativeStackNavigator();

class HomeTab extends React.Component {
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
          <Stack.Screen options={{ title: "Cinematica" }} name={"HomeScreen"} component={HomeScreen} />
          <Stack.Screen options={{ title: "Подождите..." }} name={"ItemViewScreen"} component={ItemViewScreen} />
        </Stack.Navigator>
      </>
    );
  }
}

export default HomeTab;
