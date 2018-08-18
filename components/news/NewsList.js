import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import NewsListItem from "./NewsListItem";

export default class NewsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      page: 1,
      dataSource: [],
      refreshing: false
    };

  }

  componentDidMount(){
    this.getPostsFromApi();
  }

  getPostsFromApi = () => {

    const {page} = this.state;
    let url = `http://www.budoclubkarlsruhe.de/wp-json/wp/v2/posts?page=${page}&results=20`;
    /*console.debug("load data from: %s", url);*/
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        /*console.debug("data loaded: %o", responseJson);*/

        const arrayData = [...this.state.dataSource, ...responseJson];

        this.setState({
          isLoading: false,
          dataSource: page === 1 ? responseJson : arrayData,
          refreshing: false
        });
      }).catch((error) => {
        console.error(error);
        this.setState({loading: false});
      });
  };

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
            ListHeaderComponent={this._renderHeader}
            ListFooterComponent={this._renderFooter}
            data={this.state.dataSource}
            renderItem={this._renderItem}
            keyExtractor={item => item.id.toString()}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={50}
            onRefresh={this._handleRefresh}
            refreshing={this.state.refreshing}
            extraData={this.state}

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

  _handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => {
        this.getPostsFromApi();
      }
    );
  };

  _handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.getPostsFromApi();
      }
    );
  };

  _renderHeader = () => {
    return (<View/>);
  };

  _renderFooter = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
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
