import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

export default class CreateStoryScreen extends React.Component {

  state = {
    text: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.headerText}>Create Story</Text>
          <Text style={styles.subheaderText}>What's your story's title?</Text>
          <TextInput
           onChangeText={(text) => this.setState({ text: text})}
           value={this.state.text}
           style={styles.textbox}
           />
          <Text style={styles.subheaderText}>Choose a picture:</Text>
          <View style={styles.imageRow}>
            <Image
              source={Images.school1}
              style={styles.image}
              />
            <Image
              source={Images.park}
              style={styles.image}
              />
          </View>
          <View style={styles.imageRow}>
            <Image
              source={Images.city}
              style={styles.image}
              />
            <Image
              source={Images.desk}
              style={styles.image}
              />
          </View>
          <Text style={styles.subheaderText}>Choose a color:</Text>
          <View style={styles.colorRow}>
            <TouchableOpacity style={[styles.colorSquare, {backgroundColor: '#5CBD9B'}]}/>
            <TouchableOpacity style={[styles.colorSquare, {backgroundColor: '#0984E3'}]}/>
            <TouchableOpacity style={[styles.colorSquare, {backgroundColor: '#FF5252'}]}/>
            <TouchableOpacity style={[styles.colorSquare, {backgroundColor: '#A29BFE'}]}/>
          </View>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate("CreatePageScreen", {
              story: {},
              pageNumber: 1,
            });
          }}
          style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
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
  subheaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20
  },
  textbox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 20,
    width: Metrics.screenWidth*0.9,
    borderRadius: 5
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: Metrics.screenWidth*0.35,
    height: Metrics.screenWidth*0.25,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  colorSquare: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#5CBD9B',
    borderRadius: 5,
    height: 60,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});
