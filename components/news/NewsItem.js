import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class NewsItem extends React.Component {

  constructor(props) {
    super(props);
    this.data = this.props.data
  }

  render() {
    let html = this.props.data.excerpt.rendered;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Content will follow</Text>

      </View>)
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFF',
  }
});

