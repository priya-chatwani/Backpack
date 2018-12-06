import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

import StoryBanner from '../Components/StoryBanner';

export default class ShareStoryScreen extends React.Component {

  state={
    visible: false,
    contacts: [
      {
        image: Images.dad,
        name: 'Dad',
        key: 0
      },
      {
        image: Images.mom,
        name: 'Mom',
        key: 1
      },
      {
        image: Images.uncle,
        name: 'Uncle',
        key: 2
      },
      {
        image: Images.aunt,
        name: 'Aunt',
        key: 3
      }
    ]
  }

  displayPopup() {
    Alert.alert(
      'Story Shared!',
      'You shared A Fun Day at School with Dad!',
      [
        {text: 'Great!', onPress: () => console.log('Ask me later pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.backButton}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Share Story</Text>
        </View>
        <StoryBanner
          title={this.props.navigation.state.params.title}
          color={this.props.navigation.state.params.color}
          image={this.props.navigation.state.params.image}
          />
        <View style={styles.listContainer}>
          <Text style={styles.bodyText}>Who do you want to share with?</Text>
          <FlatList
            data={this.state.contacts}
            numColumns={2}
            style={styles.contactList}
            renderItem={({item}) =>
              <TouchableOpacity onPress={this.displayPopup}>
                <View style={styles.contactView}>
                  <View style={[styles.circleView, {backgroundColor: this.props.navigation.state.params.color}]}>
                    <Image
                      source={item.image}
                      resizeMode={'cover'}
                      style={styles.image}
                    />
                  </View>
                  <Text style={styles.contactText}>{item.name}</Text>
                </View>
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
  bodyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  listContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  contactList: {
    marginTop: 10,
  },
  contactView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  contactText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5
  },
  popupView: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Metrics.screenWidth*0.9,
    borderRadius: 5,
  },
  popupTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  popupSubtitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
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
