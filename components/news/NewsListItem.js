import React from "react";
import {StyleSheet, Text, View, Linking} from "react-native";
import {createStackNavigator} from 'react-navigation';
import HTMLView from 'react-native-htmlview';
import NewsDate from "./NewsDate";

export default class NewsListItem extends React.Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.navigation = this.props.navigation;
  }

  render() {
    let html = this.props.data.excerpt.rendered;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.data.title.rendered}</Text>
        <NewsDate style={styles.date} date={this.data.date}/>
        <HTMLView
          value={html}
          stylesheet={stylesWeb}
          style={styles.content}
          onLinkPress={this.onLinkPress}
        />
      </View>)
  }

  onLinkPress = (url) => {
    if (url === this.data.link) {
      console.debug('clicked link: ', url);
      try {
        this.navigation.push('NewsItem', {data: this.data});
      } catch (e) {
        console.error(e);
      }
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
