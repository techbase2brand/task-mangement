// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Register from './Components/Register';
import LoginPage from './Components/Login';
// import TasksList from './Components/TasksList';
import RegistrationForm from './Components/RegistrationForm'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import TasksScreen from './Components/TasksScreen';
import TaskProject from './Components/TaskProject';




const Stack = createNativeStackNavigator();


export default function App() {
  return (



    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginPage} />

    <Stack.Screen name="Registration" component={RegistrationForm} />
    {/* <Stack.Screen name="TasksScreen" component={TasksScreen} /> */}
    <Stack.Screen name="TaskProject" component={TaskProject} />

    </Stack.Navigator>
  </NavigationContainer>



    // <View style={styles.container}>
    // <RegistrationForm />
    //  <LoginPage />
    //  <TasksScreen />

    //   {/* <StatusBar style="auto" /> */}
    // </View>






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
