import { TodosFilter } from "../../types/todos-filter";
import mc from "./todos-filter.module.scss";

const TodosFilter = ({ filter, click }: TodosFilter): JSX.Element => (
  <div className={mc.container}>
    <button
      className={filter === "ALL" ? mc.active : undefined}
      onClick={() => {
        click("ALL");
      }}
    >
      ALL
    </button>
    <button
      className={filter === "COMPLETED" ? mc.active : undefined}
      onClick={() => {
        click("COMPLETED");
      }}
    >
      COMPLETED
    </button>
    <button
      className={filter === "NOTCOMPLETED" ? mc.active : undefined}
      onClick={() => {
        click("NOTCOMPLETED");
      }}
    >
      NOT COMPLETED
    </button>
  </div>
);

export { TodosFilter };
