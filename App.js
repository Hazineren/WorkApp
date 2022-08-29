import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './src/navigation/DrawerNavigation';

import WorkProvider from './src/context/Provider';

const Stack = createStackNavigator();


const App = () => {

  return (
    <WorkProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='WorksPages' component={DrawerNavigation} options={{
                    title:'Plant Details',
                    backgroundColor:'orange',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'#000063'},
                    headerStyle:{backgroundColor:'#4db6ac'},
                    headerTintColor:'#000063'
                }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </WorkProvider>
    
    
  )
}

export default App