import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import { API, graphqlOperation, Auth } from "aws-amplify";

import { KinType } from "../../../../types";
import styles from "./styles";
import { createTeam, deleteTeam } from "../../../../graphql/mutations";

export type FooterContainerProps = {
  kin: KinType;
};

const Footer = ({ kin }: FooterContainerProps) => {
  console.log(kin);

  const [user, setUser] = useState(null);
  const [myTeam, setMyTeam] = useState(null);
  const [teamsCount, setTeamsCount] = useState(kin.teams.items.length);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);

      const searchedTeam = kin.teams.items.find(
        (team) => team.userID === currentUser.attributes.sub
      );
      setMyTeam(searchedTeam);
    };
    fetchUser();
  }, []);

  const submitTeam = async () => {
    const like = {
      userID: user.attributes.sub,
      kinID: kin.id,
    };

    try {
      const res = await API.graphql(
        graphqlOperation(createTeam, { input: team })
      );
      setMyTeam(res.data.createTeam);
      setTeamsCount(teamsCount + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const removeTeam = async () => {
    try {
      await API.graphql(
        graphqlOperation(deleteTeam, { input: { id: myTeam.id } })
      );
      setTeamsCount(teamsCount - 1);
      setMyTeam(null);
    } catch (e) {
      console.log(e);
    }
  };

  const onTeam = async () => {
    if (!user) {
      return;
    }
    if (!myTeam) {
      await submitTeam();
    } else {
      await removeTeam();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Feather name={"message-circle"} size={20} color={"grey"} />
        </TouchableOpacity>
        <Text style={styles.number}>{kin.numberOfComments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onTeam}>
          <AntDesign
            name={!myTeam ? "smileo" : "smile-circle"}
            size={20}
            color={!myTeam ? "grey" : "red"}
          />
        </TouchableOpacity>
        <Text style={styles.number}>{kin.numberOfTeams}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name={"share-google"} size={28} color={"grey"} />
      </View>
    </View>
  );
};

export default Footer;
