import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

const InfoSquare = (props) => {
  return (
      <View style={[styles.infoSquare, {backgroundColor: props.color}]}>
        <Text style={styles.infoTitle}>{props.title}</Text>
        <Text style={styles.infoSubtitle}>{props.subtitle}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  infoSquare: {
    backgroundColor: '#5CBD9B',
    borderRadius: 5,
    width: (Metrics.screenWidth - 40) / 2 - 5,
    height: (Metrics.screenWidth - 40)*0.3,
    justifyContent: 'flex-end',
  },
  infoTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10
  },
  infoSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
    marginBottom: 10
  },
});

export default InfoSquare;
