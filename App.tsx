import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import config from "./aws-exports";
import { getUser } from "./graphql/queries";
import { createUser } from "./graphql/mutations";

Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return "https://lh3.googleusercontent.com/ogw/ADGmqu_PUs0CFa6rNG-II8uWpjRZIwncwTSaK7AH0H2nJw=s83-c-mo";
  };

  const saveUserToDB = async (user) => {
    console.log(user);
    await API.graphql(graphqlOperation(createUser, { input: user }));
  };

  useEffect(() => {
    const updateUser = async () => {
      //GET Auth User
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (userInfo) {
        //Check If user already Exists
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        console.log(userData);
        if (!userData.data.getUser) {
          const user = {
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            id: userInfo.attributes.sub,
            image: getRandomImage(),
          };
          await saveUserToDB(user);
        } else {
          console.log("user already Exists");
        }
      }
    };
    updateUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
