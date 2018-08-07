import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default class NewsDate extends React.Component {

  render() {

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
