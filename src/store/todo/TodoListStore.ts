import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
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
  readonly todoInput: string;
  computed: {
    get canAdd(): boolean;
  };
}

interface TodoListAction {
  readonly updateTodoInput: (content: string) => void;
  readonly addTodo: () => void;
}

const useTodoListStore = create<TodoListState & TodoListAction>()(
  (set, get) => ({
    todoItems: mockTodos,
    todoInput: '',
    computed: {
      get canAdd() {
        return get().todoInput.length > 0;
      },
    },
    updateTodoInput: (content) => set(() => ({ todoInput: content })),
    addTodo: () => {
      const currentState = get();
      if (!currentState.computed.canAdd) {
        throw Error('Invalid state exception. The canAdd state is false.');
      }
      const todo: Todo = { id: uuid(), content: currentState.todoInput };
      set((state) => ({
        todoItems: [...state.todoItems, todo],
        todoInput: '',
      }));
    },
  }),
);

export default useTodoListStore;
