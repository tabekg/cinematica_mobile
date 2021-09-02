import React from 'react';
import App from "./App";
import {Provider as PaperProvider} from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';

class Root extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <PaperProvider>
          <App/>
        </PaperProvider>
      </NavigationContainer>
    );
  }
}

export default Root;
