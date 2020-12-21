import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { API, graphqlOperation } from "aws-amplify";

import kins from "../../data/kins";
import Kin from "../Kin";
import { listKins } from "../../graphql/queries";

const Feed = () => {
  const [kins, setKins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchKins = async () => {
    setLoading(true);
    //get the tweets from backend
    try {
      const kinsData = await API.graphql(graphqlOperation(listKins));
      setKins(kinsData.data.listKins.items);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchKins();
  }, []);

  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={kins}
        renderItem={({ item }) => <Kin kin={item} />}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={fetchKins}
      />
    </View>
  );
};

export default Feed;
