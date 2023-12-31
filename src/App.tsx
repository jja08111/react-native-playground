import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TodoListScreen from './screen/TodoListScreen';
import TodoScreen from './screen/TodoScreen';
import { RootStackParamList } from './types';

const RootStack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="TodoList" component={TodoListScreen} />
        <RootStack.Screen name="Todo" component={TodoScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
