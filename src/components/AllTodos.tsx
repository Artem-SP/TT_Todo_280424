import { useState } from "react";
import { useAppDispatch } from "../store/hooks";

import { addTodo } from "../store/todoSlice";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const AllTodos: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
};

export default AllTodos;
