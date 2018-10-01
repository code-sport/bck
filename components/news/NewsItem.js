import React from "react";
import {Linking, StyleSheet, Text, ScrollView} from "react-native";
import HTMLView from "react-native-htmlview";
import NewsDate from "./NewsDate";
import NewsCategories from "./NewsCategories";
import {AllHtmlEntities} from 'html-entities';
import Share from "./ShareButton";

export default class NewsItem extends React.Component {

  constructor(props) {
    super(props);
    this.data = this.props.navigation.state.params.data;
  }

  static navigationOptions = {
    title: 'News',
  };

  render() {
    const entities = new AllHtmlEntities();


    let contentHtml = this.data.content.rendered;
    let title = entities.decode(this.data.title.rendered);

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <NewsDate style={styles.date} date={this.data.date}/>
        <NewsCategories categories={this.data.categories}/>
        <HTMLView
          value={contentHtml}
          stylesheet={stylesWeb}
          style={styles.content}
          onLinkPress={this._onLinkPress}
        />
        <Share url={this.data.guid.rendered}/>

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
