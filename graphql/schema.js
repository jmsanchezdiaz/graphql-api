const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const user_mutation = require('./mutation/user_mutation');
const user_query = require('./query/user_query');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: user_query
});

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: user_mutation
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
