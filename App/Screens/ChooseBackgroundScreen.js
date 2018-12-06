import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

export default class ChooseBackgroundScreen extends React.Component {


  onBackground(image) {
    this.props.navigation.state.params.onChangeBackground(image);
    this.props.navigation.goBack();
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Choose Background</Text>
        <View style={{alignItems: 'center'}}>
          <FlatList
            data={[{image: Images.school1, key: 0}, {image: Images.park, key: 1}, {image: Images.desk, key: 2}, {image: Images.city, key: 3} ]}
            numColumns={2}
            renderItem={({item}) =>
              <TouchableOpacity onPress={this.onBackground.bind(this, item.image)}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.image}
                  />
              </TouchableOpacity>
            }
          />
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
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20
  },
  image: {
    width: Metrics.screenWidth*0.45,
    height: Metrics.screenWidth*0.4
  }
});
