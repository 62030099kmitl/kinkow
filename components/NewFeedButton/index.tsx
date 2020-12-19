import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const NewFeedButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("NewFeed");
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <AntDesign name="plus" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default NewFeedButton;
