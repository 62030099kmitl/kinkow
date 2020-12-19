import React from "react";
import { View, Text } from "react-native";
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";

import { KinType } from "../../../../types";
import styles from "./styles";

export type FooterContainerProps = {
  kin: KinType;
};

const Footer = ({ kin }: FooterContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name={"message-circle"} size={20} color={"grey"} />
        <Text style={styles.number}>{kin.numberOfComments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name={"retweet"} size={28} color={"grey"} />
        <Text style={styles.number}>{kin.numberOfTeams}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name={"share-google"} size={28} color={"grey"} />
      </View>
    </View>
  );
};

export default Footer;
