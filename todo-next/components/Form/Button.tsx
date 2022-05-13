import { Button } from "../../types/button";
import mc from "./button.module.scss";

const Button = ({ text, type, onClick }: Button): JSX.Element => {
  const HandleClick = (): ((event: MouseEvent) => void) | undefined => {
    if (type === "submit") {
      return onClick;
    }
  };

  return (
    <div className={mc.container}>
      <button type={type} onClick={HandleClick}>
        {text}
      </button>
    </div>
  );
};

export { Button };
