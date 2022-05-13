export interface Button {
  text: string;
  type: "button" | "reset" | "submit" | undefined;
  onClick?: (event: MouseEvent) => void;
}
