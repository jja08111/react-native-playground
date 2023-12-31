import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TodoListScreen from './screen/TodoListScreen';

const RootStack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Todo" component={TodoListScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
