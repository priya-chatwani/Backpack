import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Images from '../Themes/Images';

import StoryHeader from '../Components/StoryHeader';
import StoryCard from '../Components/StoryCard';


export default class MyStoriesScreen extends React.Component {

  state = {
    stories: [
      {
        title: 'A Good School Day',
        image: Images.school1,
        date: 'Oct 12',
        color: '#5CBD9B',
        id: 0,
      },
      {
        title: 'At the Park',
        image: Images.park,
        date: 'Oct 11',
        color: '#0984E3',
        id: 1,
      },
      {
        title: 'A Sad Day',
        image: Images.city,
        date: 'Oct 10',
        color: '#FF5252',
        id: 1,
      },
      {
        title: 'Feeling Down',
        image: Images.desk,
        date: 'Oct 9',
        color: '#A29BFE',
        id: 1,
      },
    ]
  }

  onStoryPress(story) {
    this.props.navigation.navigate("MyStoryDetailsScreen", story);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Stories</Text>
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
                  onStoryPress={this.onStoryPress.bind(this,item)}
                  image={item.image}
                  color={item.color}/>
                <Text style={styles.dateText}>{item.date}</Text>
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
  dateText: {
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
