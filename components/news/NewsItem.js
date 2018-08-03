import React from "react";
import {Linking, StyleSheet, Text, ScrollView} from "react-native";
import HTMLView from "react-native-htmlview";

export default class NewsItem extends React.Component {

  constructor(props) {
    super(props);
    this.data = this.props.navigation.state.params.data;
  }

  static navigationOptions = {
    title: 'News',
  };

  render() {

    console.debug(this.data);
    let html = this.data.content.rendered;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{this.data.title.rendered}</Text>
        <Text style={styles.date}>{this.data.date}</Text>
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
