import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text,View, Image } from 'react-native'

import Home from './src/home';
import Users from './src/users';



// - HOME
//    .setting
//    .posts
// - USERS
//    .setting
//    .profile
// - POST

const Stack = createStackNavigator();
const HomeStack = () => { 
  return (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Home_settings">
      {props => <Text>Home settings</Text>}
    </Stack.Screen>
    <Stack.Screen name="Home_post">
      {props => <Text>Posts posts</Text>}
    </Stack.Screen>
  </Stack.Navigator>
  )}

  const Tab = createBottomTabNavigator();
  const UserTab = () => {
    return(
    <Tab.Navigator>
      <Tab.Screen name="Users" component={Users}/>
      <Tab.Screen name="Users_settings">
      {props => <Text>Users settings</Text>}
    </Tab.Screen>
    <Tab.Screen name="Users_profile">
      {props => <Text>Users profile</Text>}
    </Tab.Screen>
    </Tab.Navigator>
    )}

const Drawer = createDrawerNavigator();

function App() {
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack}/>
        <Drawer.Screen name="Users" component={UserTab}/>
        <Drawer.Screen name="Posts">
          {props => <Text>Posts main</Text>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;