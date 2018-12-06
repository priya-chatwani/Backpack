import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

export default class StoryCard extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.props.onStoryPress.bind(this)}>
          <View style={styles.topView}>
            <Image
              source={this.props.image}
              resizeMode="contain"
              style={styles.image}
              />
          </View>
          <View style={[styles.bottomView, {backgroundColor: this.props.color}]}>
            <Text style={styles.titleText}>{this.props.title}</Text>
          </View>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    width: Metrics.screenWidth*0.42,
    height: Metrics.screenWidth*0.45,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  topView: {
    flex: 2,
    alignItems: 'center'
  },
  image: {
    width: Metrics.screenWidth*0.35,
    height: Metrics.screenWidth*0.3,
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
  },
  bottomView: {
    flex: 1,
    width: Metrics.screenWidth*0.42,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  }
});
