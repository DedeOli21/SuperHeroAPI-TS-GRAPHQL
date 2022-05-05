import { mergeResolvers } from '@graphql-tools/merge'
import superHero from "./superHero/resolver";

const resolvers = [
    superHero
]

export default mergeResolvers(resolvers)