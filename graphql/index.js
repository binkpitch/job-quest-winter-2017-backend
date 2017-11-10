const { merge } = require('lodash')
const { makeExecutableSchema } = require('graphql-tools')

const { todoTypeDefs, todoResolvers } = require('./todo')

const typeDefs = [todoTypeDefs]
const resolvers = merge(todoResolvers)

module.exports = makeExecutableSchema({ typeDefs, resolvers })
