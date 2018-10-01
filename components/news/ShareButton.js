import React from "react";
import {Button, Share, Platform} from "react-native";

export default class ShareButton extends React.Component {

  constructor(props) {
    super(props);
    this.url = this.props.url
  }

  onPressShare = () => {
    let message = {
      ...Platform.select({
        ios: {
          message: 'Have a look on : ',
          url: this.props.url,
        },
        android: {
          message: 'Have a look on : \n' + this.props.url
        }
      }),
      title: 'Wow, did you see that?'
    };
    Share.share(message);
  };


  render() {
    return (<Button
      onPress={this.onPressShare}
      title={"share"}
    />);
  }

}
