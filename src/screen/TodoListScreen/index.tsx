import React, { Button, FlatList, TextInput, View } from 'react-native';
import style from './style';
import { useNavigation, useTheme } from '@react-navigation/native';
import TodoItem from './component/TodoItem';
import useTodoListStore from './store';
import TodoItemSeperator from './component/TodoItemSeperator';
import { useCallback } from 'react';
import Todo from '../../model/Todo';

export default function () {
  const theme = useTheme();
  const store = useTodoListStore();
  const navigation = useNavigation();

  const navigateToTodoScreen = useCallback((todo: Todo) => {
    // TODO: Implement this
  }, []);

  return (
    <View>
      <FlatList
        style={style.todoFlatList}
        data={store.todoItems}
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
          value={store.todoInput}
          onChangeText={store.updateTodoInput}
          placeholder="Typing here..."
        />
        <Button
          title="Add"
          disabled={!store.computed.canAdd}
          onPress={store.addTodo}
        />
      </View>
    </View>
  );
}
