const { GraphQLString, GraphQLID } = require('graphql');
const users = require('../../mock/users');
const UserType = require('../types/user_type');

module.exports = {
  createUser: {
    type: UserType,
    args: {
      username: { type: GraphQLString },
      email: { type: GraphQLString }
    },
    resolve(_, args) {
      const userCreated = { id: users.length, ...args };
      users.push(userCreated);

      return userCreated;
    }
  },
  updateUser: {
    type: UserType,
    args: {
      id: { type: GraphQLID },
      username: { type: GraphQLString },
      email: { type: GraphQLString }
    },
    resolve(_, args) {
      const userById = users[args.id];

      if (!userById) return;

      if (args.username && args.username !== userById.username) {
        userById.username = args.username;
      }

      if (args.email && args.email !== userById.email) {
        userById.email = args.email;
      }

      return userById;
    }
  },
  deleteUser: {
    type: UserType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve(_, args) {
      const userById = users[args.id];
      if (!userById) return;

      users.splice(args.id, 1);

      return userById;
    }
  }
};
