import React from "react";
import {Button, View, Text, TextInput, StyleSheet} from "react-native";

export default class ContactForm extends React.Component {
  state = {};


  constructor(props) {
    super(props);
  }


  render() {
    let submitForm = () => {
      console.log(this.state);
    };

    return (
      <View style={styles.container}>
        <Text>Für Fragen stehen wir gerne zur Verfügung</Text>
        <Text> </Text>

        <View style={styles.formItemView}>
          <Text>Ihr Nachname</Text>
          <TextInput
            style={styles.inputText}
            autoFocus={true}
            multiline={false}
            underlineColorAndroid={"transparent"}
            onChangeText={text => this.setState({lastname: text})}
          />
        </View>

        <View style={styles.formItemView}>
          <Text>Ihr Vorname</Text>
          <TextInput
            style={styles.inputText}
            autoFocus={true}
            multiline={false}
            underlineColorAndroid={"transparent"}
            onChangeText={text => this.setState({forename: text})}
          />
        </View>

        <View style={styles.formItemView}>
          <Text>Ihre-E-Mail-Adresse</Text>
          <TextInput
            style={styles.inputText}
            autoFocus={true}
            multiline={false}
            underlineColorAndroid={"transparent"}
            onChangeText={text => this.setState({email: text})}
          />
        </View>

        <View style={styles.formItemView}>
          <Text>Ihre Nachricht</Text>
          <TextInput
            style={styles.inputText}
            multiline={true}
            autoFocus={true}
            underlineColorAndroid={"transparent"}
            onChangeText={text => this.setState({message: text})}
          />
        </View>

        <Button onPress={submitForm} title="Send"/>

      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputText: {
    fontSize: 16,
    textAlignVertical: 'top',
    backgroundColor: 'lightgrey'
  },
  formItemView: {
    marginBottom: 10
  }
});
