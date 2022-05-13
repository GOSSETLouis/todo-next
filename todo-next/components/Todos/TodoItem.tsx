import type { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";

import { TodoItem } from "../../types/todo-item";
import { Input } from "../Form/Input";
import mc from "./todo-item.module.scss";

// Component TodoItem, represent every unique todo, contain the onlcick event
const TodoItem = ({
  id,
  name,
  isCompleted,
  onComplete,
  onUpdate,
}: TodoItem): JSX.Element => {
  const [mode, setMode] = useState("read");
  const [updatedValue, setUpdatedValue] = useState(name);
  const handleTodoClick = (): void => {
    onComplete(id);
  };
  const handleEditClick = (): void => {
    setMode("edit");
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLButtonElement;
    const InputUpdatedValue = target.value;
    setUpdatedValue(InputUpdatedValue);
  };
  const cancel = (): void => {
    setMode("read");
    setUpdatedValue(name);
  };
  const handleKeydown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter" && updatedValue.length > 0) {
      onUpdate(id, updatedValue);
      setMode("read");
    }
    if (event.key === "Escape") {
      cancel();
    }
  };

  return (
    <>
      <li
        className={
          isCompleted ? `${mc.container} ${mc.completed}` : `${mc.container}`
        }
      >
        {mode === "read" ? (
          <>
            <span className={mc.name} onClick={handleTodoClick}>
              {name}
            </span>
            <span
              className={`${mc.icon} ${mc.edit}`}
              onClick={handleEditClick}
            ></span>
          </>
        ) : (
          <>
            <Input
              id={"edit-todo"}
              label={"Modifier un todo"}
              value={updatedValue}
              type={"text"}
              onChange={handleInputChange}
              onKey={handleKeydown}
            />
            <span className={`${mc.icon} ${mc.cancel}`} onClick={cancel}></span>
          </>
        )}
      </li>
    </>
  );
};

export { TodoItem };
