import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Kontakt',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hier entsteht ein Kontaktformular</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
