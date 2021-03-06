
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import schema from "./schema";

async function startApolloServer() {
    const app = express() as any;
    const httpServer = http.createServer(app);
    
    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    server.applyMiddleware({ app, path: '/graphql' });

    await new Promise<void>(resolve => httpServer.listen(process.env.PORT || 5000, resolve));
    console.log(`🚀 Server ready at http://localhost${server.graphqlPath}`);
}

startApolloServer();
