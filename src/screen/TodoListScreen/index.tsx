import React, { Button, FlatList, TextInput, View } from 'react-native';
import style from './style';
import { useTheme } from '@react-navigation/native';
import TodoItem from './component/TodoItem';
import TodoItemSeperator from './component/TodoItemSeperator';
import { useCallback } from 'react';
import Todo from '../../model/Todo';
import { TodoListScreenParamList } from '../../types';
import useTodoListViewModel from './viewModel';

export default function TodoListScreen({
  navigation,
}: TodoListScreenParamList) {
  const theme = useTheme();
  const viewModel = useTodoListViewModel();
  const uiState = viewModel.uiState;

  const navigateToTodoScreen = useCallback(
    (todo: Todo) => {
      navigation.navigate('Todo', { todo });
    },
    [navigation],
  );

  return (
    <View>
      <FlatList
        style={style.todoFlatList}
        data={uiState.todoItems}
        ItemSeparatorComponent={TodoItemSeperator}
        renderItem={(renderItem) => {
          const todo = renderItem.item;
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onPress={navigateToTodoScreen}
            />
          );
        }}
      />
      <View style={style.inputView}>
        <TextInput
          style={[style.textInput, { backgroundColor: theme.colors.card }]}
          value={uiState.input}
          onChangeText={viewModel.updateTodoInput}
          placeholder="Typing here..."
        />
        <Button
          title="Add"
          disabled={!viewModel.canAdd}
          onPress={viewModel.addTodo}
        />
      </View>
    </View>
  );
}
