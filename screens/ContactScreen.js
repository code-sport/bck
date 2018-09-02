import React from 'react';
import {View, StyleSheet} from 'react-native';
import ContactForm from "../components/contact/ContactForm";


export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'Kontakt',
  };

  render() {
    return (
      <View
        style={styles.container}
        behavior="padding"
        enabled={true}
      >
        <ContactForm/>
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
