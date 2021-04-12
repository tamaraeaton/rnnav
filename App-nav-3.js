import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text,View } from 'react-native'

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utils/logoTitle';
import MyCustomeDrawer from './src/utils/customDrawer'

const Drawer = createDrawerNavigator();


const App = () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={(props)=> <MyCustomeDrawer {...props}/>}
        initialRouteName="Home"
      //   drawerContentOptions={{
      //   activeTintColor:"red",
      //   itemStyle:{marginTop:20}, // item wrapper
      //   labelStyle:{fontSize:30}, // style of text
      //   style:{backgroundColor: 'green'} // sidedrawer content
      // }}
      >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen 
        name="Users" 
        component={Users}
        initialParams={{ id:1, codeName:"Iron horse"}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;