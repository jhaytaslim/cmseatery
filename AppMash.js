import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* Rest of your app code */}
//       <ScreenA/>
//     </NavigationContainer>
//   );
// };

export default App;

function ScreenA() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your ScreenA!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <View>
      <Button
        title="Back Home"
        onPress={() =>
          navigation.navigate('Home', { name: 'Jane' })
        }
        />
        <Text>This is {route.params.name}'s profile</Text>
   
  </View>
 
};

function ScreenB() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your ScreenB</Text>
      <StatusBar style="auto" />
    </View>
  );
}


function ScreenC() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your ScreenC</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
