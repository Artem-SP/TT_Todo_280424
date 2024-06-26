import { useAppSelector } from "../store/hooks";
import TodoItem from "./TodoItem";

import styles from "./List.module.scss";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
