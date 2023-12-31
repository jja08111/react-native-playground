import React from 'react-native';
import { Text, View } from 'react-native';
import Todo from '../../../../model/Todo';
import style from './style';
import { useTheme } from '@react-navigation/native';

interface Props {
  readonly todo: Todo;
}

export default function (props: Props) {
  const theme = useTheme();
  return (
    <View style={[style.todoItem, { backgroundColor: theme.colors.card }]}>
      <Text>{props.todo.content}</Text>
    </View>
  );
}
