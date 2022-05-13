import type { Todo } from "./todo";

export interface TodosList {
  filter: string;
  todos: Todo[];
  onCompleteTodo: (id: number) => void;
  onUpdateTodo: (id: number, value: string) => void;
}
