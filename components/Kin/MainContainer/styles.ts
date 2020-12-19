import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  kinHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  kinHeaderNames: {
    flexDirection: "row",
  },
  name: {
    marginRight: 5,
    fontWeight: "bold",
    fontSize: 10,
  },
  username: {
    marginRight: 5,
    color: "grey",
    fontSize: 10,
  },
  createdAt: {
    marginRight: 5,
    color: "grey",
    fontSize: 10,
  },
  content: {
    marginTop: 5,
    lineHeight: 18,
    fontSize: 10,
  },
  image: {
    marginVertical: 10,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default styles;
