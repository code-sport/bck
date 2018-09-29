import React from "react";
import {StyleSheet, Text, View, Linking, ScrollView} from "react-native";
import {createStackNavigator} from 'react-navigation';
import HTMLView from 'react-native-htmlview';
import NewsDate from "./NewsDate";
import NewsCategories from "./NewsCategories";
import {AllHtmlEntities} from "html-entities";

export default class NewsListItem extends React.Component {

  constructor(props) {
    super(props);
    this.data = this.props.data;
    this.navigation = this.props.navigation;
  }

  render() {
    const entities = new AllHtmlEntities();

    let html = this.props.data.excerpt.rendered;
    let title = entities.decode(this.data.title.rendered);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <NewsDate style={styles.date} date={this.data.date}/>
        <NewsCategories categories={this.data.categories}/>
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
