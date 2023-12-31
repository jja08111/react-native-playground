import { Text, View } from 'react-native';
import { TodoScreenParamList } from '../../types';

export default function TodoScreen({ route }: TodoScreenParamList) {
  const todo = route.params.todo;
  return (
    <View>
      <Text>{todo.content}</Text>
    </View>
  );
}
