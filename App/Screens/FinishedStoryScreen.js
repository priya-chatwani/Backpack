import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

import StoryBanner from '../Components/StoryBanner';
import InfoSquare from '../Components/InfoSquare';

export default class FinishedStoryScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>You did it!</Text>
        <StoryBanner />
        <View style={styles.infoContainer}>
          <InfoSquare title='4' subtitle='pages'/>
          <InfoSquare title='Dec 7' subtitle='created'/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ShareStoryScreen")} style={styles.button}>
            <Text style={styles.buttonText}>Share Story</Text>
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
    backgroundColor: '#5CBD9B',
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
