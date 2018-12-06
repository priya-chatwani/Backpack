import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Metrics from '../Themes/Metrics';

const CircleImageView = (props) => {
  return(
    <View style={styles.circleView}>
      <Image
        source={props.source}
        resizeMode={'cover'}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  circleView: {
    width: (Metrics.screenWidth / 2)*0.8,
    height: (Metrics.screenWidth / 2)*0.8,
    borderRadius: ((Metrics.screenWidth / 2)*0.8) / 2,
    backgroundColor: '#5CBD9B',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: (Metrics.screenWidth / 2)*0.5,
    height: (Metrics.screenWidth / 2)*0.5,
  }
});

export default CircleImageView;
