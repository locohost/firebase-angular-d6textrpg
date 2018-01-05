module.exports = `
    enum ModuleType {
        Unknown
    }

    type Module implements BaseType {
        _id: ID! @IsUnique
        name: String!
        description: String!
        type: ModuleType
        author: String
        rating: Int
        minLevel: Int
        maxLevel: Int
        moduleGoals: [ModuleGoal]
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        modules: [Module!]
        module(id: ID): Module
    }

    type Mutation {
        createModule(name: String!): Module!
    }
`;
