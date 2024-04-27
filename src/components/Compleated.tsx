import React from "react";
import { useAppSelector } from "../store/hooks";
import TodoItem from "./TodoItem";

import styles from "./List.module.scss";

const Compleated: React.FC = () => {
  const compleated = useAppSelector((state) =>
    state.todos.list.filter((it) => it.completed === true)
  );

  return (
    <ul className={styles.list}>
      {compleated.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default Compleated;
