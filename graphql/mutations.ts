/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      image
      email
      name
      kins {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      image
      email
      name
      kins {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      image
      email
      name
      kins {
        items {
          id
          content
          userID
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createKin = /* GraphQL */ `
  mutation CreateKin(
    $input: CreateKinInput!
    $condition: ModelKinConditionInput
  ) {
    createKin(input: $input, condition: $condition) {
      id
      content
      userID
      image
      user {
        id
        username
        image
        email
        name
        kins {
          nextToken
        }
        createdAt
        updatedAt
      }
      teams {
        items {
          id
          userID
          kinID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateKin = /* GraphQL */ `
  mutation UpdateKin(
    $input: UpdateKinInput!
    $condition: ModelKinConditionInput
  ) {
    updateKin(input: $input, condition: $condition) {
      id
      content
      userID
      image
      user {
        id
        username
        image
        email
        name
        kins {
          nextToken
        }
        createdAt
        updatedAt
      }
      teams {
        items {
          id
          userID
          kinID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteKin = /* GraphQL */ `
  mutation DeleteKin(
    $input: DeleteKinInput!
    $condition: ModelKinConditionInput
  ) {
    deleteKin(input: $input, condition: $condition) {
      id
      content
      userID
      image
      user {
        id
        username
        image
        email
        name
        kins {
          nextToken
        }
        createdAt
        updatedAt
      }
      teams {
        items {
          id
          userID
          kinID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      userID
      kinID
      user {
        id
        username
        image
        email
        name
        kins {
          nextToken
        }
        createdAt
        updatedAt
      }
      kin {
        id
        content
        userID
        image
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      userID
      kinID
      user {
        id
        username
        image
        email
        name
        kins {
          nextToken
        }
        createdAt
        updatedAt
      }
      kin {
        id
        content
        userID
        image
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      userID
      kinID
      user {
        id
        username
        image
        email
        name
        kins {
          nextToken
        }
        createdAt
        updatedAt
      }
      kin {
        id
        content
        userID
        image
        user {
          id
          username
          image
          email
          name
          createdAt
          updatedAt
        }
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
