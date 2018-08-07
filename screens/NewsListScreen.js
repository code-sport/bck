import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import NewsList from "../components/news/NewsList";

export default class NewsListScreen extends React.Component {
  static navigationOptions = {
    title: 'News',
  };

  render() {
    return (
      <View style={styles.container}>
        <NewsList navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
