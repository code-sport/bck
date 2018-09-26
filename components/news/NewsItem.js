import React from "react";
import {Linking, StyleSheet, Text, ScrollView} from "react-native";
import HTMLView from "react-native-htmlview";
import NewsDate from "./NewsDate";
import NewsCategories from "./NewsCategories";

export default class NewsItem extends React.Component {

  constructor(props) {
    super(props);
    this.data = this.props.navigation.state.params.data;
  }

  static navigationOptions = {
    title: 'News',
  };

  render() {

    let html = this.data.content.rendered;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{this.data.title.rendered}</Text>
        <NewsDate style={styles.date} date={this.data.date} />
        <NewsCategories categories={this.data.categories}/>
        <HTMLView
          value={html}
          stylesheet={stylesWeb}
          style={styles.content}
          onLinkPress={this._onLinkPress}
        />

      </ScrollView>)
  }
  _onLinkPress = (url) => {
    if (url.startsWith('https://www.budoclubkarlsruhe.de/wp-content/uploads')) {
      console.debug('clicked link: ', url);
    }
    else {
      Linking.openURL(url);
    }
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFF',
  }
});

const stylesWeb = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});
