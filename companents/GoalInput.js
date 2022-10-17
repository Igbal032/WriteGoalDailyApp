import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function Goalnput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <>
      {/* <StatusBar style="light" /> */}
      <Modal visible={props.modalIsShow}>
        <View style={styles.inputArea}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal-logo.png")}
          />
          <TextInput
            style={styles.inputText}
            placeholder="  Enter Goal..."
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                onPress={props.onCancelGoal}
                title="Cancel"
                color={"#f31282"}
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={addGoalHandler}
                title="Add Goal"
                color={"#5e0acc"}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default Goalnput;

const styles = StyleSheet.create({
  inputArea: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 30,
    borderBottomWidth: 1,
    backgroundColor: "#311b6b",
    borderBottomColor: "gray",
    alignItems: "center",
  },
  inputText: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#dddddd",
    borderColor: "#dddddd",
    width: "90%",
  },
  buttonContainer: { marginTop: 16, flexDirection: "row" },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
