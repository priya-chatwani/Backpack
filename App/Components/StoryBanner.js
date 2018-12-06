import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Metrics from '../Themes/Metrics';

const StoryBanner = (props) => {
  return (
    <View style={[styles.bannerView, {backgroundColor: props.color}]}>
      <View style={{width: 0, flexGrow: 1, marginLeft: 20}}>
        <Text style={styles.bannerText} numberOfLines={2}>{props.title}</Text>
      </View>
      <Image
        source={props.image}
        resizeMode={'cover'}
        style={styles.bannerImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerView: {
    backgroundColor: '#5CBD9B',
    flexDirection: 'row',
    height: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    flexWrap: 'wrap'
  },
  bannerImage: {
    width: Metrics.screenWidth * 0.45,
    height: Metrics.screenWidth * 0.3,
    marginRight: 20,
  },
});

export default StoryBanner;
