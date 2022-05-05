import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

import { makeExecutableSchema } from '@graphql-tools/schema'

export default makeExecutableSchema({ typeDefs, resolvers })