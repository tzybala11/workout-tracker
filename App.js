import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/HomeScreen';
import NewWorkout from './screens/NewWorkout';

const Stack = createNativeStackNavigator();

export default function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts((current) => [
      ...current,
      {
        id: Date.now().toString(),
        ...newWorkout,
      },
    ]);
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} workouts={workouts} />
          )}
        </Stack.Screen>

        <Stack.Screen name="NewWorkout">
          {(props) => (
            <NewWorkout {...props} addWorkout={addWorkout} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}