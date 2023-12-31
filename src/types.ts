import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Todo from './model/Todo';

export type RootStackParamList = {
  TodoList: undefined;
  Todo: {
    todo: Todo;
  };
};

type RootStackProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type TodoListScreenParamList = RootStackProps<'TodoList'>;

export type TodoScreenParamList = RootStackProps<'Todo'>;
