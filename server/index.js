import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers.graphql';
import { typeDefs } from './schema.graphql';
import { PORT } from './db/config';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();


async function startServer() {
    let apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.get('/', (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});

app.listen({ port: PORT }, () => {
    console.log(`Server is running at http://localhost:1337${server.graphqlPath}`);
});