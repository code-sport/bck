import React from "react";
import {Button, View, Text, TextInput, StyleSheet} from "react-native";
import {MailComposer} from 'expo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


export default class ContactForm extends React.Component {
  state = {
    lastname: '',
    forename: '',
    subject: '',
    message: ''
  };


  constructor(props) {
    super(props);
  }


  render() {
    let generateBody = () => {
      return "Nachricht von " + this.state.lastname + ", " + this.state.forename
        + "\n\n" + this.state.message;
    };

    let submitForm = () => {
      MailComposer.composeAsync({
          recipients: ['info@BudoClubKarlsruhe.de'],
          subject: this.state.subject,
          body: generateBody()
        }
      );
      this.setState({
        lastname: '',
        forename: '',
        subject: '',
        message: ''
      });
    };

    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
      >
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
            <Text>Ihr Betreff</Text>
            <TextInput
              style={styles.inputText}
              autoFocus={true}
              multiline={false}
              underlineColorAndroid={"transparent"}
              onChangeText={text => this.setState({subject: text})}
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
        </View>
      </KeyboardAwareScrollView>
    )
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
