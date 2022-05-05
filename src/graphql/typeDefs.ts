import { mergeTypeDefs } from '@graphql-tools/merge'
import superHero from "./superHero/type";

const types = [
    superHero
]

export default mergeTypeDefs (types)