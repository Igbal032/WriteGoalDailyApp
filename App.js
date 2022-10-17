import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Goalnput from "./companents/GoalInput";
import GoalItem from "./companents/GoalItem";

export default function App() {
  const [enteredGoals, setEnteredGoals] = useState([]);
  const [isModalShow, setIsModalShow] = useState(false);
  function addGoalHandler(enteredGoalText) {
    setEnteredGoals((allGoals) => [
      ...allGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setEnteredGoals((enteredGoals) => {
      return enteredGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setIsModalShow(true);
  }
  function endAddGoalHandler() {
    setIsModalShow(false);
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color={"#5e0acc"}
        />
        <Goalnput
          modalIsShow={isModalShow}
          onAddGoal={addGoalHandler}
          onCancelGoal={endAddGoalHandler}
        />
        <View style={styles.list}>
          <Text style={{ padding: 8, fontWeight: "bold", color: "white" }}>
            List of goals.....
          </Text>
          <FlatList
            data={enteredGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  list: {
    marginTop: 20,
    marginBottom: 100,
  },
});
