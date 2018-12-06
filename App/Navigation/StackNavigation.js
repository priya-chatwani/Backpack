import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import MyStoriesScreen from '../Screens/MyStoriesScreen';
import MyStoryDetailsScreen from '../Screens/MyStoryDetailsScreen';
import ShareStoryScreen from '../Screens/ShareStoryScreen';
import BrowseStoriesScreen from '../Screens/BrowseStoriesScreen';
import BrowseStoryDetailsScreen from '../Screens/BrowseStoryDetailsScreen';
import CreateStoryScreen from '../Screens/CreateStoryScreen';
import CreatePageScreen from '../Screens/CreatePageScreen';
import ChooseBackgroundScreen from '../Screens/ChooseBackgroundScreen';
import ChooseCharacterScreen from '../Screens/ChooseCharacterScreen';
import FinishedStoryScreen from '../Screens/FinishedStoryScreen';
import ViewCommentsScreen from '../Screens/ViewCommentsScreen';
import ReadStoryScreen from '../Screens/ReadStoryScreen';


const MyStoriesStack = createStackNavigator({
  MyStoriesScreen: { screen: MyStoriesScreen },
  MyStoryDetailsScreen: { screen: MyStoryDetailsScreen },
  ShareStoryScreen: { screen: ShareStoryScreen },
  ViewCommentsScreen: { screen: ViewCommentsScreen },
},
{
  headerMode: 'none',
});

const CreatePageStack = createStackNavigator({
  CreatePageScreen: { screen: CreatePageScreen },
  ChooseBackgroundScreen: { screen: ChooseBackgroundScreen },
  ChooseCharacterScreen: { screen: ChooseCharacterScreen },
},
{
  mode: 'modal',
  headerMode: 'none',
});

const CreateStoryStack = createStackNavigator({
  CreateStoryScreen: { screen: CreateStoryScreen },
  CreatePageScreen: { screen: CreatePageStack },
  FinishedStoryScreen: { screen: FinishedStoryScreen },
},
{
  headerMode: 'none',
});



const BrowseStack = createStackNavigator({
  BrowseStoriesScreen: { screen: BrowseStoriesScreen },
  BrowseStoryDetailsScreen: { screen: BrowseStoryDetailsScreen },
  ReadStoryScreen: { screen: ReadStoryScreen },
},
{
  headerMode: 'none',
});


const TabNavigator = createBottomTabNavigator({
   Me: { screen: MyStoriesStack },
   Create: { screen: CreateStoryStack },
   Browse: { screen: BrowseStack },
});

export default TabNavigator;
