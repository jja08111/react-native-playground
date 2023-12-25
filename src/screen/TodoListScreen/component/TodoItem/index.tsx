import React from 'react-native';
import { Text, View } from 'react-native';
import Todo from '../../../../model/Todo';

interface Props {
  readonly todo: Todo;
}

export default function (props: Props) {
  return (
    <View>
      <Text>{props.todo.content}</Text>
    </View>
  );
}
