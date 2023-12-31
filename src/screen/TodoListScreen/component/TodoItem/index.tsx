import React, { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import Todo from '../../../../model/Todo';
import style from './style';
import { useTheme } from '@react-navigation/native';

interface Props {
  readonly todo: Todo;
  readonly onPress: (todo: Todo) => void;
}

export default function TodoItem(props: Props) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[style.todoItem, { backgroundColor: theme.colors.card }]}
      onPress={() => props.onPress(props.todo)}
    >
      <Text>{props.todo.content}</Text>
    </TouchableOpacity>
  );
}
