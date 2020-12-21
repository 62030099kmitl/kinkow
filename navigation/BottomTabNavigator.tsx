import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image, StyleSheet, Text } from "react-native";
import { API, Auth, graphqlOperation } from "aws-amplify";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import MessageScreen from "../screens/MessageScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProfilePicture from "../components/ProfilePicture";
import { getUser } from "../graphql/queries";

import {
  BottomTabParamList,
  HomeParamList,
  SearchParamList,
  MessageParamList,
  NotificationsParamList,
  ProfileParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabSearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={TabMessageNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={TabNotifactionsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabHomeStack = createStackNavigator<HomeParamList>();

function TabHomeNavigator() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //get current user
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!userInfo) {
        return;
      }
      try {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerRightContainerStyle: {
            marginRight: 20,
          },
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerTitle: () => (
            <Text style={{ color: Colors.light.tint }}>KIN APPLICATION</Text>
          ),
          headerLeft: () => <ProfilePicture size={30} image={user?.image} />,
        }}
      />
    </TabHomeStack.Navigator>
  );
}

const TabSearchStack = createStackNavigator<SearchParamList>();

function TabSearchNavigator() {
  return (
    <TabSearchStack.Navigator>
      <TabSearchStack.Screen
        name="Tab NEXT FEATURE"
        component={SearchScreen}
        options={{ headerTitle: "Tab NEXT FEATURE" }}
      />
    </TabSearchStack.Navigator>
  );
}

const TabMessageStack = createStackNavigator<MessageParamList>();

function TabMessageNavigator() {
  return (
    <TabMessageStack.Navigator>
      <TabMessageStack.Screen
        name="Tab NEXT FEATURE"
        component={MessageScreen}
        options={{ headerTitle: "Tab NEXT FEATURE" }}
      />
    </TabMessageStack.Navigator>
  );
}

const TabNotifactionsStack = createStackNavigator<NotificationsParamList>();

function TabNotifactionsNavigator() {
  return (
    <TabNotifactionsStack.Navigator>
      <TabNotifactionsStack.Screen
        name="Tab NEXT FEATURE"
        component={NotificationsScreen}
        options={{ headerTitle: "Tab NEXT FEATURE" }}
      />
    </TabNotifactionsStack.Navigator>
  );
}

const TabProfileStack = createStackNavigator<ProfileParamList>();

function TabProfileNavigator() {
  return (
    <TabProfileStack.Navigator>
      <TabProfileStack.Screen
        name="Tab NEXT FEATURE"
        component={ProfileScreen}
        options={{ headerTitle: "Tab NEXT FEATURE" }}
      />
    </TabProfileStack.Navigator>
  );
}
