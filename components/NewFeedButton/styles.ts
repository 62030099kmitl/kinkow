import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.light.tint,
    borderWidth: 5,
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 55,
    height: 55,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
