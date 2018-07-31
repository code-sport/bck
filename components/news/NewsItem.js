import React from "react";
import {StyleSheet, Text, View, Linking} from "react-native";
import HTMLView from 'react-native-htmlview';

export default class NewsItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let html = this.props.data.excerpt.rendered;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.data.title.rendered}</Text>
        <Text style={styles.date}>{this.props.data.date}</Text>
        <HTMLView
          value={html}
          stylesheet={stylesWeb}
          style={styles.content}
          onLinkPress={this.onLinkPress}
        />
      </View>)
  }

  onLinkPress = (url) => {
    console.debug('clicked link: ', url)
    Linking.openURL(url);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 18,
  },
  date: {
    fontSize: 6,
  },
  content: {
    flex: 1,
  },
});

const stylesWeb = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});
