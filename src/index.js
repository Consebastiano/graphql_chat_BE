const { createServer, createPubSub } = require('graphql-yoga');
const typeDefs = require('./schema');
const resolvers = require('./resolver');

const pubsub = createPubSub();
const server = createServer({ typeDefs, resolvers, context: { pubsub } });

server.start(() => console.log('Server is running on localhost:4000'));