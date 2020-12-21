/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getKin = /* GraphQL */ `
  query GetKin($id: ID!) {
    getKin(id: $id) {
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
export const listKins = /* GraphQL */ `
  query ListKins(
    $filter: ModelKinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
