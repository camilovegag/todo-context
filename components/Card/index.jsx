import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export const Card = ({ item, title, deleteTodo, deleted }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => deleteTodo(item.key)}>
      <Text style={deleted ? styles.deleted : styles.text}>{title}</Text>
      <MaterialIcons name="delete" size={24} color="#bbb" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 16,
  },
  text: {
    fontFamily: "open-sans",
    textTransform: "capitalize",
  },
  deleted: {
    fontFamily: "open-sans",
    textTransform: "capitalize",
    textDecorationLine: "line-through",
  },
});
