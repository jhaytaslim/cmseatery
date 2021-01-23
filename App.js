import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AppView,Button} from './components/index';

import Main from './screens/home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackApp = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackApp} />
        <Drawer.Screen name="Main" component={Main} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const HomeScreen = ({ navigation }) => {
  return (
    <AppView>
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
    </AppView>
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
