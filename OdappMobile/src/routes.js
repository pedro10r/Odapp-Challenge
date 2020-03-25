import { createStackNavigator } from 'react-navigation';

import Main from './pages/main/main';

export default createStackNavigator({
  Main
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#292e35"
    },
    headerTintColor: "#FFF",
  },
});