import React from "react";
import requester from "../utils/requester";
import LoadingComponent from "../components/LoadingComponent";
import { FlatList, View } from "react-native";
import ItemComponent from "../components/ItemComponent";

class MovieScreen extends React.Component {
  state = {
    status: "",
    items: [],
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({ status: "loading" });
    requester.get("/movie/popular").then(res => {
      this.setState({
        status: "success",
        items: res.results,
      });
    }).catch(e => {
      this.setState({ status: "error" });
    });
  };

  render() {
    if (this.state.status === "success") {
      return (
        <FlatList
          numColumns={2}
          data={this.state.items}
          renderItem={({ item }) => (
            <View style={{ width: '50%', padding: 8 }}>
              <ItemComponent navigate={() => this.props.navigation.navigate('ItemViewScreen', {
                type: 'movie',
                id: item.id,
              })} item={item} />
            </View>
          )}
        />
      );
    }

    if (this.state.status === "error") {
      return <></>;
    }

    return <LoadingComponent />;
  }
}

export default MovieScreen;
