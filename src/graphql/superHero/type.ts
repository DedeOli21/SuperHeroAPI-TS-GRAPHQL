import { gql } from "apollo-server"

export default gql`
    input PowerstatsInput {
        intelligence: Int
        strength: Int
        speed: Int
        durability: Int
        power: Int
        combat: Int
    }

    type Powerstats {
        intelligence: Int!
        strength: Int!
        speed: Int!
        durability: Int!
        power: Int!
        combat: Int!
    }

    input AppearanceInput {
        gender: String
        race: String
        height: [String]
        weight: [String]
        eyeColor: String
        hairColor: String
    }

    type Appearance {
        gender: String!
        race: String!
        height: [String]!
        weight: [String]!
        eyeColor: String!
        hairColor: String!
    }

    input BiographyInput {
        fullName: String
        alterEgos: String
        aliases: [String]
        placeOfBirth: String
        firstAppearance: String
        publisher: String
        alignment: String
    }

    type Biography {
        fullName: String!
        alterEgos: String!
        aliases: [String]
        placeOfBirth: String!
        firstAppearance: String!
        publisher: String!
        alignment: String!
    }

    input WorkInput {
        occupation: String
        base: String
    }


    type Work {
        occupation: String!
        base: String!
    }

    input ConnectionsInput {
        groupAffiliation: String
        relatives: String
    }

    type Connections {
        groupAffiliation: String!
        relatives: String!
    }
    
    input ImagesInput {
        xs: String
        sm: String
        md: String
        lg: String
    }

    type Images {
        xs: String!
        sm: String!
        md: String!
        lg: String!
    }

    type SuperHero {
        id: Int!
        name: String!
        slug: String!
        powerstats: Powerstats!
        appearance: Appearance!
        biography: Biography!
        work: Work!
        connections: Connections!
        images: Images!
    }

    type Query {
        listHeroes(limit: Int, order: String): [SuperHero]
        searchHeroes(filter: String, query: String): SuperHero
    }

    type Mutation {
        createHero(name: String!, slug: String!, powerstats: PowerstatsInput, biography: BiographyInput, work: WorkInput, connections: ConnectionsInput, images: ImagesInput): SuperHero
        updateHero(id: Int!, name: String!, slug: String!, powerstats: PowerstatsInput, biography: BiographyInput, work: WorkInput, connections: ConnectionsInput, images: ImagesInput): SuperHero
        deleteHero(id: Int!): SuperHero
    }

    type Mutation {
        createHero(name: String!): SuperHero
        updateHero(id: Int!, name: String): SuperHero
    }
`