module.exports = `
    enum WorldType {
        Dungeons_Dragons
    }

    type World implements BaseType {
        _id: ID! @isUnique
        name: String!
        description: String!
        type: WorldType
        regions: [Region]
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        worlds: [World!]
        world(id: ID): World
    }

    type Mutation {
        createWorld(name: String!): World!
    }
`;
