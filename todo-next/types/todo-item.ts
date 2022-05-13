export interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
  onComplete: (id: number) => void;
  onUpdate: (id: number, argument2: string) => void;
}
