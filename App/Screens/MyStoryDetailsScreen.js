import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

import StoryBanner from '../Components/StoryBanner';
import InfoSquare from '../Components/InfoSquare';

export default class MyStoryDetailsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.backButton}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Story Details</Text>
        </View>
        <StoryBanner
          title={this.props.navigation.state.params.title}
          color={this.props.navigation.state.params.color}
          image={this.props.navigation.state.params.image}
          />
        <View style={styles.infoContainer}>
          <InfoSquare
            title='8'
            subtitle='pages'
            color={this.props.navigation.state.params.color}/>
          <InfoSquare
            title='Oct 12'
            subtitle='created'
            color={this.props.navigation.state.params.color}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ViewCommentsScreen",this.props.navigation.state.params)} style={[styles.button, {backgroundColor: this.props.navigation.state.params.color}]}>
            <Text style={styles.buttonText}>View Comments</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ShareStoryScreen",this.props.navigation.state.params)} style={[styles.button, {backgroundColor: this.props.navigation.state.params.color}]}>
            <Text style={styles.buttonText}>Share Story</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onReadStory} style={[styles.button, {backgroundColor: this.props.navigation.state.params.color}]}>
            <Text style={styles.buttonText}>Read Story</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 25,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    borderRadius: 5,
    height: 60,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});
