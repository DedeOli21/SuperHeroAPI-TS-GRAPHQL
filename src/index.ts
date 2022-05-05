
import { ApolloServer } from "apollo-server";

import schema from "./schema";

export const server = new ApolloServer({
    schema,
});

const port = 3005;

server.listen({port}).then(({ url }) => {
    console.log(`server running in port ${url}`);
});