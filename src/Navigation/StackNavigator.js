import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../Features/StartScreen/StartScreen';
import Home from '../Features/Home/Home';
import VladimirPutin from '../Features/VladimirPutin/VladimirPutin';
import SuccessScreen from '../Features/SuccessScreen/SuccessScreen'
import FailedScreen from '../Features/FailedScreen/FailedScreen'
import Quiz1 from '../Features/Quiz1/Quiz1'
import Quiz2 from '../Features/Quiz2/Quiz2'
import Quiz3 from '../Features/Quiz3/Quiz3'

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Vladimir Putin"
          component={VladimirPutin}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Quiz1"
          component={Quiz1}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Quiz2"
          component={Quiz2}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Quiz3"
          component={Quiz3}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="FailedScreen"
          component={FailedScreen}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
