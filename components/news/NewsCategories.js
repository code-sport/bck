import React from "react";
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from "react-native";
import NewsListItem from "./NewsListItem";

export default class NewsCategories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.getCategoriesFromApi();
  }

  getCategoriesFromApi() {

    let categoriesParam = this.props.categories.join();
    let url = 'http://www.budoclubkarlsruhe.de/wp-json/wp/v2/categories?include=' + categoriesParam;
    console.debug("load data from: %s", url);
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        /*console.debug("data loaded: %o", responseJson);*/

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderItem}
            keyExtractor={item => item.id.toString()}

          />
        </View>)
    }
  }

  _renderItem = ({item}) => {
    return (
      <Text>{item.name}</Text>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
