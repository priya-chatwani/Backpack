import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, ScrollView, ImageBackground, Keyboard} from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

export default class CreateStoryScreen extends React.Component {

  state={
    text: '',
    backImage: null,
    charImage: null,
  }

  changeBackground(image) {
    this.setState({ backImage: image });
  }

  changeCharacter(image) {
    this.setState({ charImage: image });
  }

  onNextPage() {
    const currStory = this.props.navigation.state.params.story;
    const pageNumber = this.props.navigation.state.params.pageNumber;
    currStory[pageNumber] = {
      background: this.state.backImage,
      character: this.state.charImage,
      text: this.state.text
    }
    console.log(currStory);
    this.props.navigation.push("CreatePageScreen", {
      story: currStory,
      pageNumber: pageNumber + 1,
    });
  }

  onFinishStory() {
    const currStory = this.props.navigation.state.params.story;
    this.props.navigation.push("FinishedStoryScreen", {
      story: currStory, pageNumber: pageNumber
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Keyboard.dismiss()}>
        <Text style={styles.headerText}>Page {this.props.navigation.state.params.pageNumber}</Text>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={this.state.backImage}
            style={styles.backImage}
            >
            <Image
              source={this.state.charImage}
              style={styles.charImage}
              />
          </ImageBackground>
        </View>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Write here!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ChooseBackgroundScreen", {onChangeBackground: this.changeBackground.bind(this)})}
            style={styles.button}>
            <Text style={styles.buttonText}>Background</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ChooseCharacterScreen", {onChangeCharacter: this.changeCharacter.bind(this)})}
            style={styles.button}>
            <Text style={styles.buttonText}>Character</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={this.onNextPage.bind(this)}
          style={styles.button}>
            <Text style={styles.buttonText}>New Page</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onFinishStory.bind(this)} style={styles.button}>
            <Text style={styles.buttonText}>Finish Story</Text>
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
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
  textInput: {
    borderRadius: 5,
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 2,
    height: 125,
    margin: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImage: {
    width: Metrics.screenWidth*0.8,
    height: Metrics.screenWidth*0.6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  charImage: {
    width: 100,
    height: 140,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#5CBD9B',
    borderRadius: 5,
    height: 60,
    width: Metrics.screenWidth*0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});
