import React from 'react';
import { Caption, Card, Title } from "react-native-paper";
import { getFileUrl } from "../utils";
import { View } from "react-native";

class ItemComponent extends React.Component {
  render() {
    const {item} = this.props;

    return (
      <>
        <Card onPress={() => this.props.navigate()}>
          <Card.Cover source={{ uri: getFileUrl(item.poster_path) }} />
          <View style={{ padding: 8 }}>
            <Title style={{textAlign: 'center'}}>{'name' in item ? item.name : item.title}</Title>
            {'first_air_date' in item && <Caption style={{textAlign: 'center'}}>{item.first_air_date}</Caption>}
          </View>
        </Card>
      </>
    );
  }
}

export default ItemComponent;
