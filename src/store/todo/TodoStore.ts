import { create } from 'zustand';
import Todo from '../../model/Todo';

const mockTodos: Todo[] = [
  {
    id: 'DSFJIOVWEW',
    content: 'Drink water',
  },
  { id: 'DSFJIOVW45', content: 'Running' },
];

interface TodoState {
  readonly todoItems: Todo[];
  readonly actions: {
    readonly addTodo: (todo: Todo) => void;
  };
}

const useTodoStore = create<TodoState>((set) => ({
  todoItems: mockTodos,
  actions: {
    addTodo: (todo: Todo) => {
      set((state) => ({
        todoItems: [...state.todoItems, todo],
      }));
    },
  },
}));

export const useTodoItems = () => useTodoStore((store) => store.todoItems);
export const useTodoActions = () => useTodoStore((store) => store.actions);
