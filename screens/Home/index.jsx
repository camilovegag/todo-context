import React from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { styles } from "./styles";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <TodoContext.Consumer>
      {(context) => {
        const { todos, text, getInputValue, addTodo, deleteTodo } = context;
        return (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="new todo..."
              onChangeText={(value) => getInputValue(value)}
              value={text}
            />
            <TouchableOpacity style={styles["button-container"]} onPress={() => addTodo(text)}>
              <Text style={styles["button-text"]}>Add</Text>
            </TouchableOpacity>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Card title={item.title} deleteTodo={deleteTodo} item={item} />
              )}
            />
          </View>
        );
      }}
    </TodoContext.Consumer>
  );
};
