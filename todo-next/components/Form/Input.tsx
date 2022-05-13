import { Input } from "../../types/input";
import mc from "./input.module.scss";

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  onKey,
}: Input): JSX.Element => (
  <div className={mc.container}>
    <label htmlFor={id}>{label}</label>
    <input
      minLength={4}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKey}
    />
  </div>
);

export { Input };
