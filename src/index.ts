
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

// export const server = new ApolloServer({
//     schema,
// });

// const port = 3005;

// server.listen({port}).then(({ url }) => {
//     console.log(`server running in port ${url}`);
// });

const startServer = async () => { 
    const app = express()
    const httpServer = createServer(app)

    const apolloServer = new ApolloServer({
        schema
    })

    app.use(
        "/graphql",
        graphqlHTTP({
          schema: schema,
          graphiql: true,
        })
      );
      app.listen(5000, () => console.log("Express is now live at localhost:5000"));
}

startServer()