import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Platform,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";

export default function NewFeedScreen() {
  const [kin, setKin] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign name="close" size={30} color={Colors.light.tint} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>POST</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newKinContainer}>
        <ProfilePicture
          image={
            "https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/77053036_2693411444027418_6240860275935805440_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGGHMhKueFEDzy8buTkxebgvJ0H5yYWLr-8nQfnJhYuv5_5u4XyHXtRDs6rEYL5swjC6B-kDQRznjatsKw1kNem&_nc_ohc=fnCPnil3PhgAX_x1tqX&_nc_ht=scontent.fbkk22-3.fna&oh=087942461c4aa3bbeed6d7835dec72ee&oe=60029707"
          }
        />
        <View style={styles.inputsContainer}>
          <TextInput
            value={kin}
            onChangeText={(value) => setKin(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.kinInput}
            placeholder={"What's happening?"}
          />
          <TouchableOpacity>
            <Text style={styles.pickImage}>Pick a image</Text>
          </TouchableOpacity>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  newKinContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  kinInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
  },
  pickImage: {
    fontSize: 18,
    color: Colors.light.tint,
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});
