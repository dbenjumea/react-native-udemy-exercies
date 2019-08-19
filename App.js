import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponenstScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ListScreenExercise20 from './src/screens/ListScreenExercise20';
// from video 27
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponenstScreen,
    List: ListScreen,
    Exercise20: ListScreenExercise20,

    Image: ImageScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
