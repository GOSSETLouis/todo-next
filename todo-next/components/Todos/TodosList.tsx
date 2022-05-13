import { useMemo } from "react";

import { TodosList } from "../../types/todos-list";
import { TodoItem } from "./TodoItem";
import mc from "./todos-list.module.scss";

// Component TodosList, to create the main <ul> wich will regroup every todo items as <li>
const TodosList = ({
  filter,
  todos,
  onCompleteTodo,
  onUpdateTodo,
}: TodosList): JSX.Element => {
  const handleComplete = (id: number): void => {
    onCompleteTodo(id);
  };
  const handleUpdateTodos = (id: number, value: string): void => {
    onUpdateTodo(id, value);
  };

  const getList = useMemo(
    () =>
      todos.filter((todo) => {
        if (filter === "COMPLETED") {
          return todo.isCompleted;
        }
        if (filter === "NOTCOMPLETED") {
          return !todo.isCompleted;
        }
        return todos;
      }),
    [filter, todos]
  );

  const GetActualList = getList.map((todo) => (
    <TodoItem
      key={todo.id}
      name={todo.name}
      id={todo.id}
      isCompleted={todo.isCompleted}
      onComplete={handleComplete}
      onUpdate={handleUpdateTodos}
    />
  ));
  // Return Getlist Component inside the ul
  return <ul className={mc.container}>{GetActualList}</ul>;
};

export { TodosList };
