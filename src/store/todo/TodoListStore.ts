import { create } from 'zustand';
import Todo from '../../model/Todo';

const mockTodos: Todo[] = [
  {
    id: 'DSFJIOVWEW',
    content: 'Drink water',
  },
  { id: 'DSFJIOVW45', content: 'Running' },
];

interface TodoListState {
  readonly todoItems: Todo[];
}

interface TodoListAction {
  readonly addTodo: (todo: Todo) => void;
}

const useTodoListStore = create<TodoListState & TodoListAction>()((set) => ({
  todoItems: mockTodos,
  addTodo: (todo: Todo) => {
    set((state) => ({
      todoItems: [...state.todoItems, todo],
    }));
  },
}));

export default useTodoListStore;
