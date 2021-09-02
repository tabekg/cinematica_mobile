import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import requester from "../utils/requester";
import LoadingComponent from "../components/LoadingComponent";
import { FlatList } from "react-native";
import { Divider, List } from "react-native-paper";
import { getFirstLetterUpper } from "../utils";

const Tab = createMaterialTopTabNavigator();

class TvTab extends React.Component {
  state = {
    status: "",
    items: [],
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({ status: "loading" });
    requester.get("/genre/tv/list").then(res => {
      this.setState({
        status: "success",
        items: res.genres,
      });
    }).catch(e => {
      this.setState({ status: "error" });
    });
  };

  render() {
    if (this.state.status === "success") {
      return (
        <FlatList
          ItemSeparatorComponent={() => <Divider/>}
          data={this.state.items}
          renderItem={({ item }) => (
            <List.Item
              onPress={() => this.props.navigation.navigate('GenreViewScreen', {
                type: 'tv',
                id: item.id,
                title: item.name,
              })}
              title={getFirstLetterUpper(item.name)}
              left={props => <List.Icon {...props} icon="folder" />}
            />
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

class MovieTab extends React.Component {
  state = {
    status: "",
    items: [],
  };

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({ status: "loading" });
    requester.get("/genre/movie/list").then(res => {
      this.setState({
        status: "success",
        items: res.genres,
      });
    }).catch(e => {
      this.setState({ status: "error" });
    });
  };

  render() {
    if (this.state.status === "success") {
      return (
        <FlatList
          data={this.state.items}
          renderItem={({ item }) => (
            <List.Item
              onPress={() => this.props.navigation.navigate('GenreViewScreen', {
                type: 'movie',
                id: item.id,
                title: item.name,
              })}
              title={getFirstLetterUpper(item.name)}
              left={props => <List.Icon {...props} icon="folder" />}
            />
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

class GenresScreen extends React.Component {
  render() {
    return (
      <>
        <Tab.Navigator>
          <Tab.Screen
            name={"TvTab"}
            options={{
              tabBarLabel: "Сериалы",
            }}
            component={TvTab}
          />
          <Tab.Screen
            name={"MovieTab"}
            options={{
              tabBarLabel: "Фильмы",
            }}
            component={MovieTab}
          />
        </Tab.Navigator>
      </>
    );
  }
}

export default GenresScreen;
