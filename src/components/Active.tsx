import React from "react";
import { useAppSelector } from "../store/hooks";
import TodoItem from "./TodoItem";

import styles from "./List.module.scss";

const Active: React.FC = () => {
  const active = useAppSelector((state) =>
    state.todos.list.filter((it) => it.completed != true)
  );

  return (
    <ul className={styles.list}>
      {active.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default Active;
