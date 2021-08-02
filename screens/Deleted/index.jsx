import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card } from "../../components/Card";
import { TodoContext } from "../../contexts/TodoContext";

export const Deleted = () => {
  return (
    <TodoContext.Consumer>
      {(context) => {
        const { deleted, confirmDelete } = context;
        return (
          <View style={styles.container}>
            <FlatList
              data={deleted}
              renderItem={({ item }) => (
                <Card item={item} title={item.title} deleteTodo={confirmDelete} deleted="deleted" />
              )}
            />
          </View>
        );
      }}
    </TodoContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
