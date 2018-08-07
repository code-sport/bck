import React from "react";
import {View, Text, StyleSheet} from "react-native";
import HTMLView from "react-native-htmlview";

export default class NewsDate extends React.Component {

  render() {

    console.debug(this.data);
    let date = new Date(this.props.date);

    return (
      <View style={styles.container}>
        <Text>{date.toLocaleString("de-DE")}</Text>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
