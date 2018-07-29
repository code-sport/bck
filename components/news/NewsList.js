import React from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class NewsList extends React.Component {
  render() {
    let data = [
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ];

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
