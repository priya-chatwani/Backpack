import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import Images from '../Themes/Images';

import StoryHeader from '../Components/StoryHeader';
import StoryCard from '../Components/StoryCard';


export default class BrowseStoriesScreen extends React.Component {

  state = {
    stories: [
      {
        title: 'A Fun Day At School',
        image: Images.school1,
        author: 'Mark',
        color: '#5CBD9B',
        id: 0,
      },
      {
        title: 'Keep My Head Up',
        image: Images.park,
        author: 'Kate',
        color: '#0984E3',
        id: 1,
      },
      {
        title: 'Feeling Lonely',
        image: Images.city,
        author: 'Mary',
        color: '#FF5252',
        id: 1,
      },
      {
        title: 'Happy Day',
        image: Images.desk,
        author: 'Dante',
        color: '#A29BFE',
        id: 1,
      },
    ]
  }

  onStoryPress(story) {
    this.props.navigation.navigate("BrowseStoryDetailsScreen", story);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Browse Stories</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={this.changeCategory} style={styles.button}>
            <Text style={styles.buttonText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeCategory} style={styles.button}>
            <Text style={styles.buttonText}>Happy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeCategory} style={styles.button}>
            <Text style={styles.buttonText}>Sad</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.stories}
            numColumns={2}
            renderItem={({item}) =>
              <View style={styles.storyView}>
                <StoryCard
                  title={item.title}
                  image={item.image}
                  color={item.color}
                  onStoryPress={this.onStoryPress.bind(this,item)}
                  />
                <Text style={styles.authorText}>by {item.author}</Text>
              </View>
            }
            keyExtractor={item => item.id}
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
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  listContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  authorText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 100,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  button: {
    marginRight: 20,
  },
  buttonText: {
    color: '#C0C0C0',
    fontSize: 18,
    fontWeight: '500',
  },
  storyView: {
    margin: 10,
  }
});
