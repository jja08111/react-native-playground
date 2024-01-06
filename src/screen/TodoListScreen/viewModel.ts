import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useTodoListStore from '../../store/todo/TodoListStore';
import Todo from '../../model/Todo';

interface TodoListUiState {
  readonly todoItems: Todo[];
  readonly input: string;
}

interface TodoListViewModel {
  readonly uiState: TodoListUiState;
  readonly updateTodoInput: (content: string) => void;
  get canAdd(): boolean;
  readonly addTodo: () => void;
}

export default function useTodoListViewModel(): TodoListViewModel {
  const store = useTodoListStore();
  const [uiState, setUiState] = useState<TodoListUiState>(() => ({
    todoItems: store.todoItems,
    input: '',
  }));

  const reduce = (params: Partial<TodoListUiState>) => {
    setUiState({ ...uiState, ...params });
  };

  const viewModel: TodoListViewModel = {
    uiState,
    updateTodoInput: (content: string) => {
      reduce({ input: content });
    },
    get canAdd() {
      return uiState.input.length > 0;
    },
    addTodo: () => {
      if (!viewModel.canAdd) {
        throw Error('Invalid state exception. The canAdd state is false.');
      }
      const todo: Todo = { id: uuid(), content: uiState.input };
      store.addTodo(todo);
      reduce({
        input: '',
        todoItems: [...uiState.todoItems, todo],
      });
    },
  };
  return viewModel;
}
