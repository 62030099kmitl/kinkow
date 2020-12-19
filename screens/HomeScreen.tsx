import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import NewFeedButton from "../components/NewFeedButton";
import Feed from "../components/Feed";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Feed />
      <NewFeedButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
