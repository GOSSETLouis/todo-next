import { FloatingButton } from "../../types/floating-button";
import mc from "./floating-btn.module.scss";

const FloatingButton = ({ src, color, click }: FloatingButton): JSX.Element => {
  const style = {
    backgroundImage: `url('${src}')`,
    backgroundColor: color,
  };

  return (
    <button className={mc.container} style={style} onClick={click}></button>
  );
};

export { FloatingButton };
