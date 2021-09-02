import React from 'react';
import { View } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

class LoadingComponent extends React.Component {
  render() {
    return (
      <>
        <View flex={1} justifyContent={'center'} alignItems={'center'}>
          <ActivityIndicator color={Colors.green800}/>
        </View>
      </>
    );
  }
}

export default LoadingComponent;
