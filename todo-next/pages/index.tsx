import type { NextPage } from "next";
import { useState } from "react";

import { TodoAddForm } from "../components/Form/AddForm";
import { FloatingButton } from "../components/Form/FloatingButton.";
import { TodosFilter } from "../components/Todos/TodosFilter";
import { TodosList } from "../components/Todos/TodosList";
import { TODOS } from "../const/todos";
import type { TodoFilter } from "../const/todos-filter";
import { useStorage } from "../hooks/use-storage";
import type { Todo } from "../types/todo";

const Home: NextPage = () => {
  // Using Local storage hook
  const [todos, setTodos] = useStorage("MyTodo", TODOS);

  const [filter, setFilter] = useState<TodoFilter>("ALL");

  const HandleCompletedTodo = (id: number): void => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const handleAddTodo = (newTodo: Todo): void => {
    const newList = [...todos, newTodo];
    setTodos(newList);
  };

  const handleDeletedTodos = (): void => {
    const newLitst = todos.filter((todos: Todo) => !todos.isCompleted);
    setTodos(newLitst);
  };

  const updateTodos = (id: number, name: string): void => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, name: name } : t)));
  };

  return (
    // Main components that build the main page
    <>
      <TodoAddForm onAdd={handleAddTodo} />
      <TodosList
        filter={filter}
        todos={todos}
        onCompleteTodo={HandleCompletedTodo}
        onUpdateTodo={updateTodos}
      />
      <TodosFilter
        filter={filter}
        click={(filter: TodoFilter) => {
          setFilter(filter);
        }}
      />
      <FloatingButton
        src={"/trash-outline.svg"}
        color="#d40502"
        click={handleDeletedTodos}
      />
    </>
  );
};

export default Home;
