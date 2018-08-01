import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import NewsListItem from "./NewsListItem";

export default class NewsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.getPostsFromApi();
  }

  getPostsFromApi() {

    let url = 'http://www.budoclubkarlsruhe.de/wp-json/wp/v2/posts';
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
        </View>
      );

    }
  }

  _renderItem = ({item}) => {
    return (
      <NewsListItem
        data={item}
        key={item.id.toString()}
        navigation={this.props.navigation}
      />
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#000000',
  },

});
