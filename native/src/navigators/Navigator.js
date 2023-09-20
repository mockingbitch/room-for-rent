import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/home/Home'
import Friends from '../screens/home/Friends';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends },
});

export default Navigator;
