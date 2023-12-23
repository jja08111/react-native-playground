import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TodoScreen from './src/screen/TodoScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todo" component={TodoScreen} />
    </Stack.Navigator>
  );
}

export default App;
