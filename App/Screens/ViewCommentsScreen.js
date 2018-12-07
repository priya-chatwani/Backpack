import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Images from '../Themes/Images';
import Metrics from '../Themes/Metrics';

import StoryBanner from '../Components/StoryBanner';
import InfoSquare from '../Components/InfoSquare';

export default class ViewCommentsScreen extends React.Component {

  state = {
    comments: [
      {
        name: 'Uncle',
        comment: 'So proud of you! Can\'t wait to hear about this in person over the holidays.',
        image: Images.uncle,
      },
      {
        name: 'Dad',
        comment: 'Great work and cute character! Love your enthusiasm.',
        image: Images.dad,
      },
      {
        name: 'Teacher',
        comment: 'You did a wonderful job on this story. I hope you share it with the class!',
        image: Images.aunt,
      },
      {
        name: 'Mom',
        comment: 'Nice story! I like this app - we can all use this to share stories.',
        image: Images.mom,
      },
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.backButton}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>View Comments</Text>
        </View>
        <View style={styles.commentContainer}>
          <FlatList
            data={this.state.comments}
            renderItem={({item}) =>
            <View>
              <View style={styles.contactRow}>
                <View style={[styles.circleView, {backgroundColor: this.props.navigation.state.params.color}]}>
                  <Image
                    source={item.image}
                    resizeMode={'cover'}
                    style={styles.image}
                  />
                </View>
                <Text style={styles.contactText}>{item.name} said</Text>
              </View>
              <View style={styles.commentView}>
                <Text style={styles.commentText}>{item.comment}</Text>
              </View>
            </View>
          }
          keyExtractor={item => item.name}
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
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 20
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  },
  circleView: {
    width: Metrics.screenWidth*0.15,
    height: Metrics.screenWidth*0.15,
    borderRadius: (Metrics.screenWidth*0.15) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  image: {
    width: (Metrics.screenWidth / 2)*0.25,
    height: (Metrics.screenWidth / 2)*0.25,
  },
  commentContainer: {
    alignItems: 'stretch',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contactText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  commentView: {
    borderRadius: 5,
    backgroundColor: 'lightgray',
    height: Metrics.screenWidth*0.2,
    margin: 10,
  },
  commentText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10,
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 25,
  }
});
