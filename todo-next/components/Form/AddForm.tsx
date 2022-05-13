import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import type { Todo } from "../../types/todo";
import { Button } from "./Button";
import { Input } from "./Input";
import mc from "./todo-add-form.module.scss";

const TodoAddForm = ({
  onAdd,
}: {
  onAdd: (argument: Todo) => void;
}): JSX.Element => {
  const [inputValue, SetInputValue] = useState("");

  const handleImputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLButtonElement;

    SetInputValue(target.value);
  };

  const handleSubmit = (event: FormEvent): Todo | undefined => {
    event.preventDefault();
    if (inputValue.length > 0) {
      const now = Date.now();
      const newTodo = {
        id: now,
        name: inputValue,
        isCompleted: false,
      };
      onAdd(newTodo);
      SetInputValue("");
      return newTodo;
    } else {
      return;
    }
  };
  return (
    <div className={mc.container}>
      <form onSubmit={handleSubmit}>
        <Input
          id={"add-todo"}
          label={"Ajouter un todo"}
          value={inputValue}
          type={"text"}
          onChange={handleImputChange}
        />
        <Button type={"submit"} text={"New Todo"} />
      </form>
    </div>
  );
};

export { TodoAddForm };
