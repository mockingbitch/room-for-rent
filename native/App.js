import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Top from './screens/Top/Top';
import Dashboard from './screens/Dashboard/Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text>
//           Tasdnjkasndn
//         </Text>
//       </View>
//       <Text>Test</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Top"
          component={ Top }
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Dashboard" component={ Dashboard } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
