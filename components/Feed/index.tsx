import React from "react";
import { View, FlatList, Text } from "react-native";

import kins from "../../data/kins";
import Kin from "../Kin";

const Feed = () => {
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={kins}
        renderItem={({ item }) => <Kin kin={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Feed;
