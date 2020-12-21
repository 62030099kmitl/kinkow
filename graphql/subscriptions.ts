/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateKin = /* GraphQL */ `
  subscription OnCreateKin {
    onCreateKin {
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
export const onUpdateKin = /* GraphQL */ `
  subscription OnUpdateKin {
    onUpdateKin {
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
export const onDeleteKin = /* GraphQL */ `
  subscription OnDeleteKin {
    onDeleteKin {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
