export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type MessageParamList = {
  MessageScreen: undefined;
};

export type NotificationsParamList = {
  NotifactionsScreen: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
};

export type UserType = {
  id: string;
  name: string;
  username: string;
  image?: string;
};

export type KinType = {
  id: string;
  createdAt: string;
  user: UserType;
  content: string;
  image?: string;
  numberOfComments?: number;
  numberOfTeams?: number;
};
