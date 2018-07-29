import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import NewsList from "../components/news/NewsList";

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'News',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <NewsList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
