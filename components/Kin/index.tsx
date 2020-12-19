import React from "react";
import { View } from "react-native";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { KinType } from "../../types";

import styles from "./styles";

export type KinProps = {
  kin: KinType;
};

const Kin = ({ kin }: KinProps) => (
  <View style={styles.container}>
    <LeftContainer user={kin.user} />
    <MainContainer kin={kin} />
  </View>
);

export default Kin;
