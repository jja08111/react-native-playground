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
  readonly todoInput: string;
  computed: {
    get canAdd(): boolean;
  };
}

interface TodoListAction {
  readonly updateTodoInput: (content: string) => void;
  readonly addTodo: (todo: Todo) => void;
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
    addTodo: (todo) => {
      set((state) => ({ todoItems: [...state.todoItems, todo] }));
    },
  }),
);

export default useTodoListStore;
