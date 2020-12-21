/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  image: string,
  email: string,
  name: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  image?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  image?: string | null,
  email?: string | null,
  name?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateKinInput = {
  id?: string | null,
  content: string,
  userID: string,
  image: string,
};

export type ModelKinConditionInput = {
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelKinConditionInput | null > | null,
  or?: Array< ModelKinConditionInput | null > | null,
  not?: ModelKinConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateKinInput = {
  id: string,
  content?: string | null,
  userID?: string | null,
  image?: string | null,
};

export type DeleteKinInput = {
  id?: string | null,
};

export type CreateTeamInput = {
  id?: string | null,
  userID: string,
  kinID: string,
};

export type ModelTeamConditionInput = {
  userID?: ModelIDInput | null,
  kinID?: ModelIDInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  userID?: string | null,
  kinID?: string | null,
};

export type DeleteTeamInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  image?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelKinFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelKinFilterInput | null > | null,
  or?: Array< ModelKinFilterInput | null > | null,
  not?: ModelKinFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    kins:  {
      __typename: "ModelKinConnection",
      items:  Array< {
        __typename: "Kin",
        id: string,
        content: string,
        userID: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    kins:  {
      __typename: "ModelKinConnection",
      items:  Array< {
        __typename: "Kin",
        id: string,
        content: string,
        userID: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    kins:  {
      __typename: "ModelKinConnection",
      items:  Array< {
        __typename: "Kin",
        id: string,
        content: string,
        userID: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateKinMutationVariables = {
  input: CreateKinInput,
  condition?: ModelKinConditionInput | null,
};

export type CreateKinMutation = {
  createKin:  {
    __typename: "Kin",
    id: string,
    content: string,
    userID: string,
    image: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        userID: string,
        kinID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateKinMutationVariables = {
  input: UpdateKinInput,
  condition?: ModelKinConditionInput | null,
};

export type UpdateKinMutation = {
  updateKin:  {
    __typename: "Kin",
    id: string,
    content: string,
    userID: string,
    image: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        userID: string,
        kinID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteKinMutationVariables = {
  input: DeleteKinInput,
  condition?: ModelKinConditionInput | null,
};

export type DeleteKinMutation = {
  deleteKin:  {
    __typename: "Kin",
    id: string,
    content: string,
    userID: string,
    image: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        userID: string,
        kinID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam:  {
    __typename: "Team",
    id: string,
    userID: string,
    kinID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    kin:  {
      __typename: "Kin",
      id: string,
      content: string,
      userID: string,
      image: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam:  {
    __typename: "Team",
    id: string,
    userID: string,
    kinID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    kin:  {
      __typename: "Kin",
      id: string,
      content: string,
      userID: string,
      image: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam:  {
    __typename: "Team",
    id: string,
    userID: string,
    kinID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    kin:  {
      __typename: "Kin",
      id: string,
      content: string,
      userID: string,
      image: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    kins:  {
      __typename: "ModelKinConnection",
      items:  Array< {
        __typename: "Kin",
        id: string,
        content: string,
        userID: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetKinQueryVariables = {
  id: string,
};

export type GetKinQuery = {
  getKin:  {
    __typename: "Kin",
    id: string,
    content: string,
    userID: string,
    image: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        userID: string,
        kinID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListKinsQueryVariables = {
  filter?: ModelKinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListKinsQuery = {
  listKins:  {
    __typename: "ModelKinConnection",
    items:  Array< {
      __typename: "Kin",
      id: string,
      content: string,
      userID: string,
      image: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    kins:  {
      __typename: "ModelKinConnection",
      items:  Array< {
        __typename: "Kin",
        id: string,
        content: string,
        userID: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    kins:  {
      __typename: "ModelKinConnection",
      items:  Array< {
        __typename: "Kin",
        id: string,
        content: string,
        userID: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    image: string,
    email: string,
    name: string,
    kins:  {
      __typename: "ModelKinConnection",
      items:  Array< {
        __typename: "Kin",
        id: string,
        content: string,
        userID: string,
        image: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateKinSubscription = {
  onCreateKin:  {
    __typename: "Kin",
    id: string,
    content: string,
    userID: string,
    image: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        userID: string,
        kinID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateKinSubscription = {
  onUpdateKin:  {
    __typename: "Kin",
    id: string,
    content: string,
    userID: string,
    image: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        userID: string,
        kinID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteKinSubscription = {
  onDeleteKin:  {
    __typename: "Kin",
    id: string,
    content: string,
    userID: string,
    image: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    teams:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        userID: string,
        kinID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam:  {
    __typename: "Team",
    id: string,
    userID: string,
    kinID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    kin:  {
      __typename: "Kin",
      id: string,
      content: string,
      userID: string,
      image: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam:  {
    __typename: "Team",
    id: string,
    userID: string,
    kinID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    kin:  {
      __typename: "Kin",
      id: string,
      content: string,
      userID: string,
      image: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam:  {
    __typename: "Team",
    id: string,
    userID: string,
    kinID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      image: string,
      email: string,
      name: string,
      kins:  {
        __typename: "ModelKinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    kin:  {
      __typename: "Kin",
      id: string,
      content: string,
      userID: string,
      image: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        image: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      teams:  {
        __typename: "ModelTeamConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
