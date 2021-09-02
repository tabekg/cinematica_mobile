import React from 'react';
import LoadingComponent from "../components/LoadingComponent";
import requester from "../utils/requester";
import { Image, ScrollView } from "react-native";
import { getFileUrl } from "../utils";
import { Headline, Text } from "react-native-paper";

class ItemViewScreen extends React.Component {
  state = {
    status: '',
    item: null,
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({status: 'loading'});
    requester.get(`/${this.props.route.params.type}/${this.props.route.params.id}`).then((res) => {
      this.setState({
        item: res,
        status: 'success',
      });
      this.props.navigation.setOptions({
        title: 'title' in res ? res.title : res.name,
      });
    }).catch((e) => {
      this.setState({status: 'error'});
    });
  };

  render() {
    if (this.state.status === 'error') {
      return <></>;
    }

    const {item} = this.state;

    if (this.state.status === 'success') {
      return (
        <ScrollView>
          <Image resizeMode={'contain'} style={{width: '100%', height: 300}} source={{uri: getFileUrl(item.poster_path)}} />
          <Headline style={{textAlign: 'center', margin: 5, marginTop: 8}}>{'title' in item ? item.title : item.name}</Headline>
          {item.overview ? <Text style={{margin: 8}}>{item.overview}</Text> : null}
        </ScrollView>
      );
    }

    return <LoadingComponent />;
  }
}

export default ItemViewScreen;
