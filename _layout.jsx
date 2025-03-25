import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/screens/HomeScreen.jsx";
import SearchScreen from "../components/screens/SearchScreen.jsx";
import AccountsScreen from "../components/screens/AccountsScreen.jsx";

const Stack = createNativeStackNavigator();

export default function App(){
  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Search" component={SearchScreen}/>
        <Stack.Screen name = "Accounts" component={AccountsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


  
