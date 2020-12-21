import React from "react";
import { View, Text, Image } from "react-native";
import { S3Image } from "aws-amplify-react-native";
import { KinType } from "../../../types";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";

import Footer from "./Footer";

export type MainContainerProps = {
  kin: KinType;
};

const MainContainer = ({ kin }: MainContainerProps) => (
  <View style={styles.container}>
    <View style={styles.kinHeaderContainer}>
      <View style={styles.kinHeaderNames}>
        <Text style={styles.name}>{kin.user.name}</Text>
        <Text style={styles.username}>@{kin.user.username}</Text>
        <Text style={styles.createdAt}>{moment(kin.createdAt).fromNow()}</Text>
      </View>
      <Entypo name={"chevron-down"} size={16} color={"grey"} />
    </View>
    <View>
      <Text style={styles.content}>{kin.content}</Text>
      {!!kin.image && <S3Image style={styles.image} imgKey={kin.image} />}
    </View>
    <Footer kin={kin} />
  </View>
);

export default MainContainer;
