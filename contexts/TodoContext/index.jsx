import React, { useState, createContext } from "react";
import { Alert } from "react-native";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [deleted, setdDeleted] = useState([]);

  const getInputValue = (value) => {
    setText(value);
  };

  const addTodo = (text) => {
    text.length > 3
      ? setTodos((prevTodos) => {
          return [{ key: todos.length.toString(), title: text }, ...prevTodos];
        }, setText(""))
      : Alert.alert("Hold up!", "Todos must be over three characters long", [{ text: "Got it" }]);
  };

  const addToDeleted = () => {
    setdDeleted((prevTodos) => {
      return [{ key: deleted.length.toString(), title: todos[0].title }, ...prevTodos];
    });
  };

  const deleteTodo = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
    addToDeleted();
  };

  const confirmDelete = (key) => {
    setdDeleted((prevDeleted) => {
      return prevDeleted.filter((deleted) => deleted.key !== key);
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        text,
        deleted,
        getInputValue: getInputValue,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        confirmDelete: confirmDelete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
