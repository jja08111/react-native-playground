import useTodoListStore from '../../../src/store/todo/TodoListStore';
import { act, renderHook } from '@testing-library/react-hooks';

describe('TodoListStore', () => {
  test('내용 입력 값이 없으면 TODO 항목을 추가할 수 없다', () => {
    // given
    const { result } = renderHook(() => useTodoListStore());

    // when
    act(() => result.current.updateTodoInput(''));

    // then
    const store = result.current;
    const canAdd = store.computed.canAdd;
    expect(canAdd).toBe(false);
  });

  test('내용 입력 값이 있으면 TODO 항목을 추가할 수 있다', () => {
    // given
    const { result } = renderHook(() => useTodoListStore());

    // when
    act(() => result.current.updateTodoInput('a'));

    // then
    const store = result.current;
    const canAdd = store.computed.canAdd;
    expect(canAdd).toBe(true);
  });

  test('항목이 정상적으로 추가된다', () => {
    // given
    const { result } = renderHook(() => useTodoListStore());
    act(() => result.current.updateTodoInput('testing'));

    // when
    act(() => result.current.addTodo());

    // then
    const store = result.current;
    const todoItems = store.todoItems;
    const lastItem = todoItems[todoItems.length - 1];
    expect(lastItem.content).toBe('testing');
  });

  test('항목이 추가된 후에는 입력값이 초기화된다', () => {
    // given
    const { result } = renderHook(() => useTodoListStore());
    act(() => result.current.updateTodoInput('testing'));

    // when
    act(() => result.current.addTodo());

    // then
    const store = result.current;
    expect(store.todoInput).toBe('');
  });
});
