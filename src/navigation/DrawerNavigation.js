import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WorksPage from '../pages/WorksPage/WorksPage';
import WorksDetailPage from '../pages/WorksDetailPage/WorksDetailPage';
import FavoriteWorksPage from '../pages/FavoriteWorksPage';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const WorksStack = ()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='WorksPage' component={WorksPage}></Stack.Screen>
        <Stack.Screen name='WorksDetailPage' component={WorksDetailPage} options={{
                    title:'İş Detayı',
                    backgroundColor:'orange',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'#000063'},
                    headerStyle:{backgroundColor:'#4db6ac'},
                    headerTintColor:'#000063'
                }}></Stack.Screen>
    </Stack.Navigator>
  )
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="WorksPages">
        <Drawer.Screen name='WorksPages' component={WorksStack} options={{
                    title:'Uygun İşler',
                    backgroundColor:'orange',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'#000063'},
                    headerStyle:{backgroundColor:'#4db6ac'},
                    headerTintColor:'#000063'
                }}></Drawer.Screen>
        <Drawer.Screen name='FavoriteWorksPages' component={FavoriteWorksPage} options={{
                    title:'Favoriler',
                    backgroundColor:'orange',
                    headerTitleAlign:'center',
                    headerTitleStyle:{color:'#000063'},
                    headerStyle:{backgroundColor:'#4db6ac'},
                    headerTintColor:'#000063'
                }}></Drawer.Screen>
    </Drawer.Navigator>
    
  )
}

export default DrawerNavigation;