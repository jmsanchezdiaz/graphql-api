const { GraphQLList, GraphQLID } = require('graphql');
const users = require('../../mock/users');
const UserType = require('../types/user_type');

module.exports = {
  getAllUsers: {
    type: new GraphQLList(UserType),
    resolve() {
      return users;
    }
  },
  getUser: {
    type: UserType,
    args: { id: { type: GraphQLID } },
    resolve(_, args) {
      return users[args.id];
    }
  }
};
