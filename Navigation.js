import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer,useNavigationContainerRef } from "@react-navigation/native";
import { useFlipper } from '@react-navigation/devtools'; 

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import StackScreen from "./screens/StackScreen";

import { MaterialIcons } from '@expo/vector-icons'; 

const HomeStackNavigator = createNativeStackNavigator();


function MyStack(){
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
           >
           <HomeStackNavigator.Screen 
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown:false
              }}
           />
           <HomeStackNavigator.Screen 
              name="Stack"
              component={StackScreen}
              options={{
                headerBackTitleVisible : false
              }}
           />  
        </HomeStackNavigator.Navigator>
    )
}


const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator 
          initialRouteName="Home"
          screenOptions={{
              tabBarActiveTintColor:'purple'
          }}
        >
          <Tab.Screen 
            name="Home" 
            component={MyStack} 
            options={{
                tabBarLabel:'Feed',
                tabBarIcon:({color,size}) => (
                  <MaterialIcons name="home" color={color} size={30} />
                ),
                tabBarBadge: 10,
                headerShown:false 
            }}
           />
          <Tab.Screen 
             name="Settings" 
             component={SettingScreen} 
             options={{
                tabBarLabel:'Settings',
                tabBarIcon:({color,size}) => (
                  <MaterialIcons name="brightness-5" color={color} size={30} />
                ),
                headerShown:false
            }}
          />
        </Tab.Navigator>
    )
}

export default function Navigation(){
    const navigationRef = useNavigationContainerRef();
     
    useFlipper(navigationRef);

    return(
        <NavigationContainer ref={navigationRef}>
           <MyTabs/>
        </NavigationContainer>
    )
}
