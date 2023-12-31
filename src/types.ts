import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Todo from './model/Todo';

export type RootStackParamList = {
  TodoList: undefined;
  Todo: {
    todo: Todo;
  };
};

export type TodoListScreenParamList = NativeStackScreenProps<
  RootStackParamList,
  'TodoList'
>;

export type TodoScreenParamList = NativeStackScreenProps<
  RootStackParamList,
  'Todo'
>;
