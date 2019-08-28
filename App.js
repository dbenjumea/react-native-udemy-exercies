import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponenstScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ListScreenExercise20 from './src/screens/ListScreenExercise20';
// from video 27
import ImageScreen from './src/screens/ImageScreen';
// from video 37
import CounterScreen from './src/screens/CounterScreen';
// from video 40
import ColorScreen from './src/screens/ColorScreen';
//from video 45
import SquareScreen from './src/screens/SquareScreen';
//from video 58
import CounterScreenExercise58 from './src/screens/CounterScreenExercise58';
// from video 59
import TextScreen from './src/screens/TextScreen';
//from video 66
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponenstScreen,
    List: ListScreen,
    Exercise20: ListScreenExercise20,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    CounterExercise58: CounterScreenExercise58,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
