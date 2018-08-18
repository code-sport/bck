import React from "react";
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from "react-native";
import {NewsCategoriesModel} from "../../module/NewsCategoriesModel";

export default class NewsCategories extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: []
    };
    this.model = new NewsCategoriesModel();
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  getCategoriesFromApi() {

    let categoriesParam = this.props.categories;
    categoriesParam.forEach((item) => {

      this.model.getItem(item).then(row => {
          if (row) {
            this.state.dataSource.push(row);
          }
        },
        error => console.error(error)
      );
    });
    console.log(this.state.dataSource);
    this.state.isLoading = false;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderItem}
            keyExtractor={item => item.id.toString()}

          />
        </View>)
    }
  }

  _renderItem = ({item}) => {
    return (
      <Text>{item.name}</Text>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
